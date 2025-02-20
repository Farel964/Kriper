document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const sidebarLinks = sidebar.querySelectorAll("a");

    // Toggle Sidebar
    navToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    // Close Sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function() {
            sidebar.classList.remove("active");
        });
    });
});
