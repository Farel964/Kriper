document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("close-sidebar");
    const scrollInfo = document.querySelector(".scroll-info");

    // Toggle Sidebar
    navToggle.addEventListener("click", function() {
        sidebar.style.left = "0";
    });

    closeSidebar.addEventListener("click", function() {
        sidebar.style.left = "-250px";
    });

    // Scroll Animation
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 200) {
            scrollInfo.style.opacity = "1";
        } else {
            scrollInfo.style.opacity = "0";
        }
    });
});
