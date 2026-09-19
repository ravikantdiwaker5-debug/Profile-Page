/*
  ADD A NEW BLOG POST:
  1. Put the post photo inside the images folder.
  2. Copy one object below and place the new copy at the top of this list.
  3. Change the title, date, image, excerpt and content.
  4. Save script.js and upload the updated files to GitHub.
*/
const blogPosts = [
  {
    id: 1,
    category: "Business websites",
    date: "19 Sep 2026",
    title: "Why a local business needs a clear website",
    image: "images/ravi-profile.webp",
    imageAlt: "Ravi working in a professional studio",
    excerpt: "A website should make your business easier to understand, trust and contact.",
    content: [
      "A good business website is not only an online poster. It gives customers one clear place to understand what you offer, see your work and contact you.",
      "The strongest small-business websites keep the message simple: who the service is for, what problem it solves and what the visitor should do next.",
      "Start with a clear headline, useful information and one main call to action. A simple website that works well is more valuable than a complicated website that confuses people."
    ]
  },
  {
    id: 2,
    category: "Web development",
    date: "18 Sep 2026",
    title: "What I learned while building a gym website",
    image: "images/ravi-profile.webp",
    imageAlt: "Ravi Digital web development workspace",
    excerpt: "The best project pages focus on the actions a real customer wants to take.",
    content: [
      "While building a gym website, I learned that visitors usually want quick answers: available facilities, membership fees, timings and how to register.",
      "That means the design should not hide important information behind too many effects. Clear sections and visible buttons make the experience better.",
      "This same lesson works for almost every business website: design around the customer journey first, then add visual polish."
    ]
  },
  {
    id: 3,
    category: "SEO",
    date: "17 Sep 2026",
    title: "A simple SEO checklist for a new website",
    image: "images/ravi-profile.webp",
    imageAlt: "Ravi Digital studio and laptop",
    excerpt: "Use clear page titles, helpful content and a fast mobile layout before chasing tricks.",
    content: [
      "Basic SEO starts with clarity. Give every page a useful title, write a short description and use headings that explain the content naturally.",
      "Keep images compressed, make the mobile version easy to use and include the business name, service and location where they are genuinely helpful.",
      "Search visibility grows over time. Publish useful information consistently and make sure every page answers a real question from your audience."
    ]
  }
];

const blogGrid = document.querySelector("#blog-grid");
const dialog = document.querySelector("#blog-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogMeta = document.querySelector("#dialog-meta");
const dialogBody = document.querySelector("#dialog-body");
const dialogImage = document.querySelector("#dialog-image");

function renderPosts() {
  if (!blogGrid) return;

  blogGrid.innerHTML = blogPosts.map((post) => `
    <article class="blog-card">
      <img src="${post.image}" alt="${post.imageAlt}" loading="lazy" />
      <div class="blog-card-content">
        <p class="blog-meta"><span>${post.category}</span>${post.date}</p>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <button class="read-button" type="button" data-post-id="${post.id}">Read blog ↗</button>
      </div>
    </article>
  `).join("");

  blogGrid.querySelectorAll("[data-post-id]").forEach((button) => {
    button.addEventListener("click", () => openPost(Number(button.dataset.postId)));
  });
}

function openPost(postId) {
  const post = blogPosts.find((item) => item.id === postId);
  if (!post || !dialog) return;

  dialogTitle.textContent = post.title;
  dialogMeta.textContent = `${post.category} · ${post.date}`;
  dialogImage.src = post.image;
  dialogImage.alt = post.imageAlt;
  dialogBody.innerHTML = post.content.map((paragraph) => `<p>${paragraph}</p>`).join("");
  dialog.showModal();
}

document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector("#nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navigationLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55%" });

sections.forEach((section) => observer.observe(section));
document.querySelector("#year").textContent = new Date().getFullYear();
renderPosts();
