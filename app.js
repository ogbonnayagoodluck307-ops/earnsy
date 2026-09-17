// Earnsy demo JavaScript


// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("mobile-open");
});


// Close mobile menu after clicking a link
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("mobile-open");
  });
});


// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");


function showModal(type) {

  if (type === "Login") {

    modalTitle.textContent = "Login coming soon";

    modalText.textContent =
      "The authentication system will be connected in the next version of this Earnsy demo.";

  }

  else if (type === "Withdrawal") {

    modalTitle.textContent = "Withdrawal unavailable";

    modalText.textContent =
      "You need an approved balance before a withdrawal can be requested. This demo does not process real payments.";

  }

  else {

    modalTitle.textContent = "Earnsy";

    modalText.textContent =
      "This feature is available in the full platform.";

  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}


// Close modal
function closeModal() {

  modal.classList.remove("active");
  document.body.style.overflow = "";

}


// Close modal when clicking outside it
modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    closeModal();
  }

});


// Close modal with Escape
document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});


// Start task
function startTask(taskName) {

  modalTitle.textContent = "Task selected";

  modalText.textContent =
    `"${taskName}" has been selected. In the full platform, the task instructions and submission form would appear here.`;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}