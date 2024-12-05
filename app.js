document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // Hide the loader
        document.querySelector(".loader").classList.add("d-none");

        document.body.classList.remove("d-flex")
        // Show the main navigation
        document.querySelector(".nav").classList.remove("d-none");
    }, 4000); // Wait for 3 seconds
});