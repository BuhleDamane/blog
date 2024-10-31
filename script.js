// Sample article data
const articles = [
    {
        category: 'politics',
        date: 'October 30, 2024',
        title: 'Political Dynamics in 2024',
        image: 'path/to/image1.jpg',
    },
    {
        category: 'law',
        date: 'October 25, 2024',
        title: 'The Future of Law in a Digital Age',
        image: 'path/to/image2.jpg',
    },
    {
        category: 'technology',
        date: 'October 20, 2024',
        title: 'Emerging Tech Trends for 2024',
        image: 'path/to/image3.jpg',
    },
    {
        category: 'lifestyle',
        date: 'October 15, 2024',
        title: 'Balancing Life and Work in Modern Times',
        image: 'path/to/image4.jpg',
    },
    // More articles...
];

function filterArticles(category) {
    const articlesContainer = document.querySelector('.recent-articles');
    articlesContainer.innerHTML = '';

    const filteredArticles = articles.filter(article => category === 'all' || article.category === category);

    filteredArticles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'recent-article-card';
        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-thumbnail" />
            <h3>${article.title}</h3>
            <p>${article.date}</p>
        `;
        articlesContainer.appendChild(articleCard);
    });
}

// Initialize with all articles
filterArticles('all');
