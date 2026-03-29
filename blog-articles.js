
// Blog Articles Data
const blogArticles = [
    {  
    id: "6735f99b-38d8-4396-9213-194b32258e53",  
    title: "Human-Centric Recruitment in an AI-Driven 2026",  
    excerpt: "Explore how BOSSS balances high-tech efficiency with human intuition for elite staffing in the year 2026.",  
    image: "https://cdn.marblism.com/TAGN1J77STm.webp",  
    imageAlt: "Successful professional placement in a modern office",  
    date: "March 29, 2026",  
    readTime: "6 min",  
    category: "Insight",  
    slug: "human-centric-recruitment-ai-2026"  
  },  
  {  
    id: "718f9d85-fe41-4527-98cc-290369bdc3b1",  
    title: "Agility Over Stability: The Temp-to-Hire Secret",  
    excerpt: "Discover why the temp-to-hire model is the strategic choice for businesses looking to minimize risk in 2026.",  
    image: "https://cdn.marblism.com/XZv9YOfsJ3P.webp",  
    imageAlt: "Modern workforce agility and strategy",  
    date: "March 29, 2026",  
    readTime: "8 min",  
    category: "Strategy",  
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
