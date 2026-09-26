const TEMPLATES = [
  {
    title: "Modern Café Website",
    category: "HTML / CSS / JS",
    description: "Premium responsive café template with menu, story, gallery and contact sections.",
    price: "₹1,499",
    link: "https://wa.me/91XXXXXXXXXX?text=Hi%20Ravi%2C%20I%20want%20the%20Modern%20Cafe%20Website%20template."
  },
  {
    title: "Business Landing Page",
    category: "HTML / CSS / JS",
    description: "Conversion-focused landing page for local businesses, freelancers and startups.",
    price: "₹999",
    link: "https://wa.me/91XXXXXXXXXX?text=Hi%20Ravi%2C%20I%20want%20the%20Business%20Landing%20Page%20template."
  },
  {
    title: "Creator Portfolio",
    category: "HTML / CSS / JS",
    description: "Bold personal portfolio template for developers, creators and digital professionals.",
    price: "₹1,299",
    link: "https://wa.me/91XXXXXXXXXX?text=Hi%20Ravi%2C%20I%20want%20the%20Creator%20Portfolio%20template."
  }
];

function renderTemplates(){
  const grid = document.getElementById("templateGrid");
  if(!grid) return;
  grid.innerHTML = TEMPLATES.map((item, i) => `
    <article class="template-card">
      <div class="template-cover"><div class="mock"><small>RAVI TEMPLATE / ${String(i+1).padStart(2,"0")}</small><h4>${item.title}</h4></div></div>
      <div class="template-info">
        <span class="tag">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="template-bottom"><span class="price">${item.price}</span><a class="buy-btn" href="${item.link}" target="_blank" rel="noopener">BUY / ASK ↗</a></div>
      </div>
    </article>
  `).join("");
}
renderTemplates();
