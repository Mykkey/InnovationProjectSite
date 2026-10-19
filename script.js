// Fade sections in as they scroll into view
document.documentElement.classList.add("js");
const revealTargets = document.querySelectorAll(".hero > *, .section-body");
revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("visible"));
}

// Sign-up form (demo only: nothing is sent or stored)
const form = document.getElementById("signup-form");
const message = document.getElementById("signup-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.email.value.trim();
  if (!email || !email.includes("@")) {
    message.textContent = "Please enter a valid email address.";
    return;
  }
  message.textContent = "Thanks, you're on the list.";
  form.reset();
});
