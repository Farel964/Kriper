document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", function () {
        sidebar.style.left = "0";
    });

    closeBtn.addEventListener("click", function () {
        sidebar.style.left = "-250px";
    });

    // Scroll Animation
    const infoSection = document.querySelector(".info-section");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            infoSection.classList.add("visible");
        } else {
            infoSection.classList.remove("visible");
        }
    });
});
