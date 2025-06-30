document.addEventListener("DOMContentLoaded", () => {
    // botones de nav
    const buttons = document.querySelectorAll(".nav-links button");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#bcd8bc";
        });

        button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#eaf5e9";
        });
    });
    // botones de redes sociales
    const socialButtons = document.querySelectorAll(".social-links button");
    socialButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = "#bcd8bc";
        });

        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = "#eaf5e9";
        });
    });
});
