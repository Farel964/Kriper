document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const sidebarLinks = sidebar.querySelectorAll("a");

    // Toggle Sidebar
    navToggle.addEventListener("click", function(event) {
        event.stopPropagation(); // Mencegah klik pada tombol menutup sidebar langsung
        sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
    });

    // Close Sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function() {
            sidebar.style.left = "-250px";
        });
    });

    // Close Sidebar when clicking outside of it
    document.addEventListener("click", function(event) {
        if (sidebar.style.left === "0px" && !sidebar.contains(event.target) && event.target !== navToggle) {
            sidebar.style.left = "-250px";
        }
    });
});
