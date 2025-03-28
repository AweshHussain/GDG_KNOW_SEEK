// Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Search Functionality
const searchBar = document.getElementById("search-bar");
const subjectCards = document.querySelectorAll(".subject-card");

searchBar.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();

    subjectCards.forEach(card => {
        const subject = card.getAttribute("data-subject").toLowerCase();
        if (subject.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
