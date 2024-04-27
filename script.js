// Replace 'YOUR_API_KEY' with your actual NewsAPI key
const apiKey = '5beabdc0e19043f7a4c043f79479b046';
const apiUrl = 'https://newsapi.org/v2/top-headlines';

// Fetch news articles based on category (e.g., 'business', 'technology', etc.)
async function fetchNews(category) {
    try {
        const response = await fetch(`${apiUrl}?category=${category}&country=in&apiKey=${apiKey}`);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

// Display news articles in the container
async function displayNews(category) {
    const articles = await fetchNews(category);
    const newsContainer = document.querySelector('.news-container');

    // Clear existing articles
    newsContainer.innerHTML = '';

    // Create news cards and append them to the container
    articles.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('news-card');
        card.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(card);
    });
}

// Call displayNews with the desired category (e.g., 'business', 'technology', etc.)
displayNews('technology');
