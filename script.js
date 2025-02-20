document.addEventListener("DOMContentLoaded", function() {
    // Sidebar Navigation
    const navToggle = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("close-sidebar");
    const scrollInfo = document.querySelector(".scroll-info");

    if (navToggle && sidebar && closeSidebar) {
        navToggle.addEventListener("click", function() {
            sidebar.style.left = "0";
        });

        closeSidebar.addEventListener("click", function() {
            sidebar.style.left = "-250px";
        });
    }

    // Scroll Animation
    if (scrollInfo) {
        window.addEventListener("scroll", function() {
            let scrollPosition = window.scrollY;
            scrollInfo.style.opacity = scrollPosition > 200 ? "1" : "0";
        });
    }

    // Feedback Form Handling
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackMessage = document.getElementById("feedback-message");
    const feedbackList = document.getElementById("feedback-list");

    if (feedbackForm && feedbackMessage && feedbackList) {
        feedbackForm.addEventListener("submit", function(e) {
            e.preventDefault();

            if (localStorage.getItem("lastFeedbackDate")) {
                let lastDate = new Date(localStorage.getItem("lastFeedbackDate"));
                let currentDate = new Date();
                let timeDiff = currentDate - lastDate;
                let daysDiff = timeDiff / (1000 * 3600 * 24);

                if (daysDiff < 7) {
                    alert("You can only send feedback once a week!");
                    return;
                }
            }

            let feedbackText = feedbackMessage.value;
            let date = new Date().toISOString().split('T')[0];

            let newFeedback = document.createElement("li");
            newFeedback.innerHTML = `<strong>You:</strong> ${feedbackText} (${date})`;
            feedbackList.appendChild(newFeedback);

            localStorage.setItem("lastFeedbackDate", new Date().toISOString());
            feedbackMessage.value = "";
        });
    }
});
