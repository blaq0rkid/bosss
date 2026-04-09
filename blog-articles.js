
// BOSSS Journal Articles Data
const articles = [
    {
        id: 1,
        title: "The Future of Logistics: How AI and Human Grit Coexist",
        excerpt: "Exploring the symbiotic relationship between artificial intelligence and high-grit professionals in modern supply chain management.",
        author: "Kelley Crowell",
        date: "March 15, 2026",
        category: "Industry Insights",
        readTime: "8 min read"
    },
    {
        id: 2,
        title: "RTX Methodology: Beyond Traditional Staffing",
        excerpt: "A deep dive into the Resilient Talent Xchange framework and why it's revolutionizing workforce architecture in automated environments.",
        author: "BOSSS Strategy Team",
        date: "March 10, 2026",
        category: "RTX Strategy",
        readTime: "12 min read"
    },
    {
        id: 3,
        title: "Green Port Certification: What It Means for Workers",
        excerpt: "Understanding the skills and certifications needed for zero-emission logistics careers at the Port of Stockton and beyond.",
        author: "Kelley Crowell",
        date: "March 5, 2026",
        category: "Career Development",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Measuring Grit: The Science Behind Our Assessment",
        excerpt: "How BOSSS developed a proprietary framework for evaluating resilience, adaptability, and tenacity in logistics professionals.",
        author: "Dr. Sarah Martinez",
        date: "February 28, 2026",
        category: "RTX Strategy",
        readTime: "10 min read"
    },
    {
        id: 5,
        title: "California SB 446: What Staffing Agencies Won't Tell You",
        excerpt: "A transparent breakdown of temporary worker rights under California's new legislation and how BOSSS exceeds compliance standards.",
        author: "Compliance Team",
        date: "February 20, 2026",
        category: "Worker Rights",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "The Automation Paradox: Why Humans Are More Valuable Than Ever",
        excerpt: "As warehouses automate, the demand for adaptable, problem-solving humans skyrockets. Here's why.",
        author: "Kelley Crowell",
        date: "February 15, 2026",
        category: "Industry Insights",
        readTime: "9 min read"
    },
    {
        id: 7,
        title: "From Temp Worker to Workforce Architect: Career Pathways",
        excerpt: "Real stories of professionals who transformed their logistics careers through RTX placements and strategic skill development.",
        author: "BOSSS Success Stories",
        date: "February 10, 2026",
        category: "Career Development",
        readTime: "11 min read"
    },
    {
        id: 8,
        title: "AI Transparency in Hiring: Our Commitment to Fairness",
        excerpt: "How BOSSS uses AI-assisted screening while maintaining human oversight and bias mitigation protocols.",
        author: "Technology Ethics Team",
        date: "February 5, 2026",
        category: "AI & Technology",
        readTime: "8 min read"
    },
    {
        id: 9,
        title: "Q4 Surge Survival Guide for Supply Chain Professionals",
        excerpt: "Expert strategies for maintaining performance during peak logistics seasons when automation alone isn't enough.",
        author: "Operations Team",
        date: "January 30, 2026",
        category: "Industry Insights",
        readTime: "6 min read"
    },
    {
        id: 10,
        title: "The Port of Stockton Transformation: A Case Study",
        excerpt: "How RTX methodology helped one of California's fastest-growing ports build a resilient, future-ready workforce.",
        author: "Kelley Crowell",
        date: "January 25, 2026",
        category: "Case Studies",
        readTime: "13 min read"
    },
    {
        id: 11,
        title: "Mental Resilience in High-Pressure Logistics Roles",
        excerpt: "Understanding the psychological components of grit and how to develop composure under supply chain disruptions.",
        author: "Dr. Sarah Martinez",
        date: "January 20, 2026",
        category: "Career Development",
        readTime: "10 min read"
    },
    {
        id: 12,
        title: "Data Privacy Rights: What Every Worker Should Know",
        excerpt: "A comprehensive guide to CCPA protections and how BOSSS empowers candidates to control their personal information.",
        author: "Privacy Team",
        date: "January 15, 2026",
        category: "Worker Rights",
        readTime: "7 min read"
    },
    {
        id: 13,
        title: "Warehouse Management Systems: The Human-AI Interface",
        excerpt: "How modern WMS platforms are evolving to support human decision-making rather than replace it.",
        author: "Technology Team",
        date: "January 10, 2026",
        category: "AI & Technology",
        readTime: "9 min read"
    },
    {
        id: 14,
        title: "Equal Employment Opportunity: More Than Compliance",
        excerpt: "Why BOSSS views EEO as a competitive advantage, not just a legal requirement, in building diverse talent pools.",
        author: "HR Leadership",
        date: "January 5, 2026",
        category: "Workplace Culture",
        readTime: "8 min read"
    },
    {
        id: 15,
        title: "The Sim-to-Ship™ Protocol: Virtual Training for Real Impact",
        excerpt: "Inside BOSSS's proprietary training methodology that prepares RTX talent for Port of Stockton operations.",
        author: "Training & Development",
        date: "December 28, 2025",
        category: "RTX Strategy",
        readTime: "11 min read"
    },
    {
        id: 16,
        title: "Breaking the Transactional Staffing Model",
        excerpt: "Why BOSSS refuses to treat workers as commodities and what workforce architecture really means.",
        author: "Kelley Crowell",
        date: "December 20, 2025",
        category: "Industry Insights",
        readTime: "10 min read"
    },
    {
        id: 17,
        title: "Career Pivots in Your 40s and 50s: It's Not Too Late",
        excerpt: "How experienced professionals are finding new opportunities in automated logistics through RTX placements.",
        author: "Career Counseling Team",
        date: "December 15, 2025",
        category: "Career Development",
        readTime: "9 min read"
    },
    {
        id: 18,
        title: "Zero-Emission Logistics: Skills for the Green Economy",
        excerpt: "What certifications and competencies will define logistics careers as ports transition to sustainable operations.",
        author: "Sustainability Team",
        date: "December 10, 2025",
        category: "Industry Insights",
        readTime: "12 min read"
    },
    {
        id: 19,
        title: "Reasonable Accommodations: A Guide for Workers with Disabilities",
        excerpt: "Understanding your rights and how BOSSS supports full inclusion in logistics placements.",
        author: "Accessibility Team",
        date: "December 5, 2025",
        category: "Worker Rights",
        readTime: "8 min read"
    },
    {
        id: 20,
        title: "The Economics of High-Grit Talent: Why RTX Saves Money",
        excerpt: "Data-driven analysis showing how resilient workers reduce turnover costs and improve operational efficiency.",
        author: "Research Team",
        date: "November 30, 2025",
        category: "Case Studies",
        readTime: "14 min read"
    }
];

// Function to create article HTML
function createArticleHTML(article) {
    return `
        <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-orchid">
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

    const articlesToShow = limit ? articles.slice(0, limit) : articles;
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
