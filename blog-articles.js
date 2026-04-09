
// BOSSS Journal Articles Data
const articles = [
    {  
    "id": "19f23297-fd5b-4401-b2f9-5a9d4cea3d70",  
    "title": "The Definitive Guide to Green Port Talent",  
    "excerpt": "A practical guide to Green Port Talent and the Port of Stockton’s $110.5M zero-emission transition for logistics leaders.",  
    "image": "https://cdn.marblism.com/l6kCBoCnJux.webp",  
    "imageAlt": "Zero-emission port operations at Port of Stockton",  
    "date": "April 6, 2026",  
    "readTime": "8 min",  
    "category": "Workforce",  
    "slug": "the-definitive-guide-to-green-port-talent"  
  },  
  {  
    "id": "7fff9a82-3ea5-4aaa-bc33-c65d6e354fa2",  
    "title": "RTX: The Future is Resilient",  
    "excerpt": "See why logistics growth from 2026-2046 depends on resilient talent, the Grit Scorecard, and automation backed by human judgment.",  
    "image": "https://cdn.marblism.com/JdXCV96HZYB.webp",  
    "imageAlt": "Futuristic Port of Stockton warehouse with human talent and advanced automation",  
    "date": "March 30, 2026",  
    "readTime": "7 min",  
    "category": "Trends",  
    "slug": "rtx-future-logistics-resilient"  
  },  
  {  
    "id": "47b071ef-554d-49af-8403-44f84723c3ac",  
    "title": "Innovative Hiring Solutions",  
    "excerpt": "BOSSS delivers workforce architecture and RTX recruitment solutions for Port of Stockton employers navigating zero-emission logistics change.",  
    "image": "https://cdn.marblism.com/OrSDe3slnHe.webp",  
    "imageAlt": "Innovative Hiring Solutions for Zero-Emission Logistics",  
    "date": "April 7, 2026",  
    "readTime": "12 min",  
    "category": "Recruitment",  
    "slug": "innovative-hiring-solutions-zero-emission-logistics"  
  },  
  {  
    "id": "04c64a7f-aa1a-4339-a933-00108259e6ac",  
    "title": "Temp-to-Hire vs Direct Hire",  
    "excerpt": "Compare temp-to-hire and direct hire for zero-emission logistics with a clinical ROI lens on staffing, retention, and workforce architecture.",  
    "image": "https://cdn.marblism.com/gcPGR0OY72R.webp",  
    "imageAlt": "Leadership team evaluating staffing models",  
    "date": "April 7, 2026",  
    "readTime": "8 min",  
    "category": "Recruitment",  
    "slug": "temp-to-hire-vs-direct-hire-green-port"  
  },  
  {  
    "id": "1d7c7e55-a8b9-4005-9d1a-99b76899688b",  
    "title": "5 Steps to a Safe Transition",  
    "excerpt": "A 5-step guide for warehouse managers moving to electric equipment with safer operations, stronger staffing, and practical employment solutions.",  
    "image": "https://cdn.marblism.com/j1vkh7CoTEn.webp",  
    "imageAlt": "Electric warehouse equipment and specialized workforce management",  
    "date": "April 5, 2026",  
    "readTime": "8 min",  
    "category": "Workforce",  
    "slug": "5-steps-safely-transition-electric-equipment-guide"  
  },  
  {  
    "id": "7589935d-68e0-4070-9b3d-9d08c863eede",  
    "title": "5 Steps to Validate Logistics Skills & Reliability",  
    "excerpt": "Learn how to validate skills and reliability in high-pressure logistics hubs like the Port of Stockton with our 5-step guide.",  
    "image": "https://cdn.marblism.com/ThI9Hjlzmt5.webp",  
    "imageAlt": "Professional Recruitment Solutions for High-Pressure Logistics",  
    "date": "April 8, 2026",  
    "readTime": "6 min",  
    "category": "Recruitment",  
    "slug": "professional-recruitment-solutions-logistics-validation"  
  },  
  {  
    "id": "75f26489-c97f-4528-a41d-aa798710f69f",  
    "title": "Temp-to-Hire vs Direct Hire: The Truth for Growth Hubs",  
    "excerpt": "Discover why temp-to-hire staffing offers superior risk mitigation and ROI for high-growth logistics hubs compared to direct hire.",  
    "image": "https://cdn.marblism.com/sZBwsniLB5h.webp",  
    "imageAlt": "A high-growth logistics hub reflecting workforce management solutions",  
    "date": "April 7, 2026",  
    "readTime": "6 min",  
    "category": "Recruitment",  
    "slug": "do-you-really-need-direct-hire-temp-to-hire-vs-direct-hire"  
  },  
  {  
    "id": "e53b70cf-3e5b-4293-8031-f968d191065a",  
    "title": "Grit Matters: Resilience in Talent Acquisition",  
    "excerpt": "Discover why 'Grit' is the essential metric for the Port of Stockton’s zero-emission transition and how the BOSSS Grit Scorecard identifies elite talent.",  
    "image": "https://cdn.marblism.com/V2ljPcL-6Di.webp",  
    "imageAlt": "Industrial professional looking out over a shipping terminal, representing vision and resilience.",  
    "date": "April 9, 2026",  
    "readTime": "7 min",  
    "category": "Strategy",  
    "slug": "grit-matters-resilience-talent-acquisition"  
  }
];

// Function to create article HTML with thumbnail
function createArticleHTML(article) {
    return `
        <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-orchid">
            <img src="${article.thumbnail}" alt="${article.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <div class="flex items-center gap-2 text-sm text-orchid mb-3">
                    <span class="font-semibold">${article.category}</span>
                    <span>•</span>
                    <span class="text-gray-600 dark:text-gray-400">${article.readTime}</span>
                </div>
                <h3 class="text-xl font-bold mb-3 text-deep-black dark:text-white hover:text-orchid transition-colors">
                    ${article.title}
                </h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    ${article.excerpt}
                </p>
                <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex flex-col">
                        <span class="text-sm font-semibold text-deep-black dark:text-white">${article.author}</span>
                        <span class="text-sm text-gray-600 dark:text-gray-400">${article.date}</span>
                    </div>
                    <a href="#" class="text-orchid font-bold hover:underline flex items-center gap-2">
                        Read More
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `;
}

// Function to load articles on page
function loadArticles(limit = null) {
    const container = document.getElementById('blog-articles');
    if (!container) return;

    // Check if there's a filter active
    const currentFilter = window.currentFilter || 'all';
    
    // Filter articles if needed
    let filteredArticles = articles;
    if (currentFilter !== 'all') {
        filteredArticles = articles.filter(article => article.category === currentFilter);
    }

    const articlesToShow = limit ? filteredArticles.slice(0, limit) : filteredArticles;
    container.innerHTML = articlesToShow.map(article => createArticleHTML(article)).join('');
}

// Load articles when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Check if we're on index.html (show only 3) or blog.html (show all)
        const isIndexPage = document.querySelector('#home') !== null;
        loadArticles(isIndexPage ? 3 : null);
    });
} else {
    const isIndexPage = document.querySelector('#home') !== null;
    loadArticles(isIndexPage ? 3 : null);
}
