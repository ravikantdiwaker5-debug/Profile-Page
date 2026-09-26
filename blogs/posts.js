const POSTS = [
  {
    date: "26 SEP 2026",
    tag: "AI & TECH",
    title: "How to Choose AI Tools Without Paying for Everything",
    excerpt: "A practical framework for choosing useful AI tools for work, study and content creation.",
    url: "blog/how-to-choose-ai-tools.html"
  },
  {
    date: "25 SEP 2026",
    tag: "WEB",
    title: "How to Connect a Custom Domain to GitHub Pages",
    excerpt: "A simple guide to pointing a Hostinger domain to a GitHub Pages website without transferring the domain.",
    url: "blog/github-pages-custom-domain.html"
  },
  {
    date: "24 SEP 2026",
    tag: "BUSINESS",
    title: "Why Small Businesses Still Need a Fast Website",
    excerpt: "What a clean business website should do before you spend money on advanced marketing.",
    url: "blog/small-business-website.html"
  }
];

function renderPosts(){
  const grid = document.getElementById("blogGrid");
  if(!grid) return;
  grid.innerHTML = POSTS.slice(0,3).map(post => `
    <article class="blog-card">
      <span class="tag">${post.tag}</span>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <footer><span>${post.date}</span><a href="${post.url}">Read article ↗</a></footer>
    </article>
  `).join("");
}
renderPosts();
