
// Blog Articles Data
const blogArticles = [
    {
"id": "innovative-hiring-solutions-zero-emission-logistics",
"title": "Innovative Hiring Solutions",
"excerpt": "BOSSS delivers workforce architecture and RTX recruitment solutions for Port of Stockton employers navigating zero-emission logistics change.",
"image": "https://cdn.marblism.com/OrSDe3slnHe.webp",
"imageAlt": "Innovative Hiring Solutions for Zero-Emission Logistics",
"date": "Tuesday, April 7, 2026",
"readTime": "12 min",
"category": "Recruitment",
"slug": "innovative-hiring-solutions-zero-emission-logistics"
},
    {
id: "green-port-talent-stockton-110m-revolution",
title: "The Definitive Guide to Green Port Talent",
excerpt: "A practical guide to Green Port Talent and the Port of Stockton’s $110.5M zero-emission transition for logistics leaders.",
image: "https://cdn.marblism.com/l6kCBoCnJux.webp",
imageAlt: "Zero-emission port operations at Port of Stockton",
date: "Monday, April 6, 2026",
readTime: "8 min read",
category: "Workforce",
slug: "green-port-talent-stockton-zero-emission-revolution"
},
    {    
    id: "rtx-future-logistics-resilient",    
    title: "RTX: Why the Future of Logistics isn't Just Automated—It's Resilient",    
    excerpt: "Automation is a tool; resilience is the goal. Introducing the Resilient Talent Xchange (RTX) for the Logistics & Supply Chain sectors.",    
    image: "https://cdn.marblism.com/JdXCV96HZYB.webp",     
    imageAlt: "A high-tech logistics hub showcasing the RTX Resilient Talent Xchange model in action.",    
    date: "2026-03-30",    
    readTime: "7 min",    
    category: "Trends",    
    slug: "rtx-future-logistics-resilient"    
  },
    {    
    id: "skills-based-talent-acquisition-2026",    
    title: "Why Skills-Based Talent Acquisition Strategies Will Change the Way You Build Your Team",    
    excerpt: "The resume is dead. Long live the Grit Scorecard. Discover why skills-based hiring is the only way to build a high-performance workforce in 2026.",    
    image: "https://cdn.marblism.com/euy_Ya8VF_G.webp",     
    imageAlt: "A high-contrast, professional image of a diverse team collaborating in a sleek, minimalist 2026 office environment.",    
    date: "2026-03-31",    
    readTime: "6 min",    
    category: "Leadership",    
    slug: "skills-based-talent-acquisition-2026"    
  },
    { 
  id: "bcf53a6a-364b-49da-b33d-4d358cdcb968",  
  title: "7 Deadly AI Recruiting Mistakes | BOSSS",  
  excerpt: "Discover why over-reliance on AI is costing you top talent and how BOSSS provides elite, human-centric hiring solutions in 2026.",  
  image: "https://cdn.marblism.com/1nTW3bE1YKd.webp",  
  imageAlt: "The 7 Deadly AI Recruiting Mistakes Hero",  
  date: "March 29, 2026",  
  readTime: "8 min",  
  category: "Technology",  
  slug: "7-deadly-ai-mistakes"  
},  
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
  },
    {
id: "04c64a7f-aa1a-4339-a933-00108259e6ac",
title: "Temp-to-Hire vs Direct Hire",
excerpt: "Compare temp-to-hire and direct hire for zero-emission logistics with a clinical ROI lens on staffing, retention, and workforce architecture.",
image: "https://cdn.marblism.com/gcPGR0OY72R.webp",
imageAlt: "Leadership team evaluating staffing models",
date: "2026-04-07",
readTime: "8 min read",
category: "Recruitment",
slug: "temp-to-hire-vs-direct-hire-green-port"
},
    {
"id": "5-steps-safely-transition-electric-equipment-guide",
"title": "5 Steps to a Safe Transition",
"excerpt": "A 5-step guide for warehouse managers moving to electric equipment with safer operations, stronger staffing, and practical employment solutions.",
"image": "https://cdn.marblism.com/j1vkh7CoTEn.webp",
"imageAlt": "Electric warehouse equipment and specialized workforce management",
"date": "Sunday, April 5, 2026",
"readTime": "8 min",
"category": "Workforce",
"slug": "5-steps-safely-transition-electric-equipment-guide"
},
    {
"id": "validate-skills-logistics-stockton",
"title": "5 Steps to Validate Logistics Skills & Reliability",
"excerpt": "Learn how to validate skills and reliability in high-pressure logistics hubs like the Port of Stockton with our 5-step guide.",
"image": "https://cdn.marblism.com/ThI9Hjlzmt5.webp",
"imageAlt": "Professional Recruitment Solutions for High-Pressure Logistics",
"date": "2026-04-08",
"readTime": "6 min",
"category": "Recruitment",
"slug": "professional-recruitment-solutions-logistics-validation"
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
