const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // Add your MySQL password here if set
    database: "detailsdb/employee"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL Database");
});

// ** User Registration API **
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Hash password before storing
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: "Error hashing password" });

        const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        db.query(sql, [name, email, hash], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Email already exists or database error" });
            }
            res.status(201).json({ message: "User registered successfully!" });
        });
    });
});

// ** User Login API **
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (results.length === 0) return res.status(401).json({ error: "User not found" });

        // Compare hashed password
        bcrypt.compare(password, results[0].password, (err, isMatch) => {
            if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

            // Generate JWT Token
            const token = jwt.sign({ id: results[0].id }, "secretkey", { expiresIn: "1h" });
            res.status(200).json({ message: "Login successful", token });
        });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
