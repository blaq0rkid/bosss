
// Blog Articles Data
const blogArticles = [
    {
        id: "human-centric-recruitment-2026",
        title: "Human-Centric Recruitment in an AI-Driven 2026",
        excerpt: "Explore how BOSSS balances cutting-edge AI efficiency with the irreplaceable value of human intuition to deliver elite staffing solutions.",
        image: "https://cdn.marblism.com/TAGN1J77STm.webp",
        imageAlt: "Professional partnership in 2026",
        date: "March 29, 2026",
        readTime: "6 min read",
        category: "Leadership",
        slug: "human-centric-recruitment-2026"
    },
    {
        id: "agility-over-stability-2026",
        title: "Agility Over Stability: 2026 Temp-to-Hire Guide",
        excerpt: "Discover why the temp-to-hire model is the strategic secret weapon for businesses looking to minimize risk and maximize growth in 2026.",
        image: "https://cdn.marblism.com/TAGN1J77STm.webp",
        imageAlt: "Successful placement agreement in a modern office",
        date: "March 29, 2026",
        readTime: "8 min read",
        category: "Workforce",
        slug: "agility-over-stability-temp-to-hire-2026"
    }
    // Add more articles here following the same format
];

// Function to render article cards
function renderArticleCards(articles, containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const articlesToRender = limit ? articles.slice(0, limit) : articles;
    
    container.innerHTML = articlesToRender.map(article => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
            <div class="relative h-48 overflow-hidden">
                <img src="${article.image}" alt="${article.imageAlt}" class="w-full h-full object-cover">
                <div class="absolute top-4 left-4 bg-orchid text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    ${article.category}
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>${article.date}</span>
                    <span>•</span>
                    <span>${article.readTime}</span>
                </div>
                <h3 class="text-xl font-bold text-deep-black mb-3 leading-tight">${article.title}</h3>
                <p class="text-gray-600 text-sm mb-6 line-clamp-3">
                    ${article.excerpt}
                </p>
                <a href="articles/${article.slug}.html" class="inline-flex items-center text-orchid font-semibold hover:gap-2 transition-all">
                    Read Full Article  
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // For homepage - show latest 3 articles
    if (document.getElementById('blog-articles')) {
        renderArticleCards(blogArticles, 'blog-articles', 3);
    }
    
    // For blog archive page - show all articles
    if (document.getElementById('all-blog-articles')) {
        renderArticleCards(blogArticles, 'all-blog-articles');
    }
});
