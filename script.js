// =========================================
// Mohamed Nader Yadem - Website Script
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // Update footer year automatically
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // Smooth navigation
    const navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
