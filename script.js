
// Mobile navigation
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    // Change menu icon
    menuBtn.textContent = isOpen ? "✕" : "☰";
});


// Close mobile menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";
    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

contactForm.addEventListener("submit", (event) => {

    // Prevent the page from refreshing
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    responseMessage.textContent =
        `Thanks, ${name}! Your message has been received. We'll get back to you soon.`;

    // Clear the form
    contactForm.reset();

});


// ================================
// CURRENT YEAR
// ================================

document.getElementById("year").textContent =
    new Date().getFullYear();