var quotes = [
    "Bonjour",
    "Au revoir",
    "Bonsoir",
    "Bonne nuit"
]

var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("random_quote").innerHTML = randomQuote;