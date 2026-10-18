let cachedQuotes = null;

async function loadQuotesOnce() {
    if (cachedQuotes !== null) return cachedQuotes;
    try {
        const response = await fetch('https://raw.githubusercontent.com/eaglePB2/quotes/main/csv/quotes.csv');
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const data = await response.text();
        cachedQuotes = data.split('\n').map(q => q.trim()).filter(Boolean);
    } catch (error) {
        console.error('Error reading CSV file:', error);
        cachedQuotes = [];
    }
    return cachedQuotes;
}

async function displayQuote() {
    const thoughtEl = document.getElementById('thought');
    if (!thoughtEl) return;

    const quotes = await loadQuotesOnce();
    if (quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        thoughtEl.textContent = quotes[randomIndex];
    } else {
        thoughtEl.textContent = '當你看到這句話的時候，他大概率是壞掉了……';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuote();
    setInterval(displayQuote, 10000);
});