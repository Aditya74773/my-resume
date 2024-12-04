// Toggle the "Professional Summary" section
document.getElementById("toggle-summary").addEventListener("click", function () {
    const summaryContent = document.getElementById("summary-content");
    summaryContent.style.display = summaryContent.style.display === "none" ? "block" : "none";
});

// Update the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Scroll to Top functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

