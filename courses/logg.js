document.addEventListener("DOMContentLoaded", () => {
    const courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`You clicked on ${card.textContent} course!`);
        });
    });
});
