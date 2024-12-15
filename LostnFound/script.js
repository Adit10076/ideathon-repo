document.addEventListener("DOMContentLoaded", () => {
    const reportBtn = document.getElementById("reportBtn");
    const searchBtn = document.getElementById("searchBtn");
    const formSection = document.getElementById("formSection");
    const searchSection = document.getElementById("searchSection");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const lostItemForm = document.getElementById("lostItemForm");

    // Show Report Section
    reportBtn.addEventListener("click", () => {
        formSection.classList.remove("hidden");
        searchSection.classList.add("hidden");
        confirmationMessage.classList.add("hidden");
    });

    // Show Search Section
    searchBtn.addEventListener("click", () => {
        searchSection.classList.remove("hidden");
        formSection.classList.add("hidden");
        confirmationMessage.classList.add("hidden");
    });

    // Handle Form Submission
    lostItemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        formSection.classList.add("hidden");
        confirmationMessage.classList.remove("hidden");
        lostItemForm.reset();
    });
});
