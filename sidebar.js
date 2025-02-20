function openSidebar() {
    document.getElementById("sidebar").classList.add("active");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
}

// Close sidebar if user clicks outside of it
document.addEventListener("click", function (event) {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.querySelector(".menu-btn");

    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        closeSidebar();
    }
});
