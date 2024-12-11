var quotes = [
    "Hello bienvenue",
    "Bonjour",
    "Bonne nuit du matin"
]

var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("random_quote").innerHTML = randomQuote;