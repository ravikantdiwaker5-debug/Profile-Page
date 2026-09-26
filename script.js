const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  if(glow){ glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; }
});

const form = document.getElementById("contactForm");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById("name").value);
  const email = encodeURIComponent(document.getElementById("email").value);
  const message = encodeURIComponent(document.getElementById("message").value);
  window.location.href = `mailto:ravikantdiwaker386@gmail.com?subject=Project%20Inquiry%20from%20${name}&body=Name%3A%20${name}%0AEmail%3A%20${email}%0A%0AMessage%3A%0A${message}`;
  document.getElementById("formNote").textContent = "Opening your email app...";
});
