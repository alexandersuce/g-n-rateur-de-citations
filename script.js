const quotes = [
    {
        quote: "J'ai un énorme zizi",
        author: "Lucca Baduel (il a raison)"
    },
    {
        quote: "Le football il à changer",
        author: "K.Mbappé"
    },
    {
        quote: "j'éspère que la roue tourne va tourner",
        author: "Frank Ribéry"
    },
    {
        quote: "Mais c'était sur en fait, c'était suuuuur!!!",
        author: "Sardoche"
    }
];

document.getElementById('new-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote.quote;
    document.getElementById('author').textContent = randomQuote.author;
});
