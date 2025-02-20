document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const sidebarLinks = sidebar.querySelectorAll("a");

    // Pastikan sidebar dalam keadaan tertutup saat halaman dimuat
    sidebar.style.left = "-250px";

    // Toggle Sidebar
    navToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah klik dari menutup sidebar segera setelah dibuka
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px";
        } else {
            sidebar.style.left = "0px";
        }
    });

    // Close Sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.style.left = "-250px";
        });
    });

    // Close Sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !navToggle.contains(event.target)) {
            sidebar.style.left = "-250px";
        }
    });
});
