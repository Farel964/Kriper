document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const sidebarLinks = sidebar.querySelectorAll("a");

    // Toggle Sidebar
    navToggle.addEventListener("click", function() {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px";
        } else {
            sidebar.style.left = "0px";
        }
    });

    // Close Sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function() {
            sidebar.style.left = "-250px";
        });
    });

    // Close Sidebar when clicking outside
    sidebar.addEventListener("click", function() {
        sidebar.style.left = "-250px";
    });
});
