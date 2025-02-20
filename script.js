document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");

    // Toggle Sidebar
    navToggle.addEventListener("click", function() {
        sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
    });

    sidebar.addEventListener("click", function() {
        sidebar.style.left = "-250px";
    });
});
