const quotes = [
    {
        quote: "Life is a journey to be experienced, not a problem to be solved.",
        title: "Winnie the Pooh"
    },
    {
        quote: "Remember you’re the one who can fill the world with sunshine.",
        title: "Snow White"
    },
    {
        quote: "A true hero isn’t measured by the size of his strength, but by the strength of his heart.",
        title: "Hercules"
    },
    {
        quote: "Only I can determine my own mood. And today, perhaps, I will choose happiness.",
        title: "Alice in Wonderland"
    },
    {
        quote: "Every day, every minute, every second, you have a chance to change your life.",
        title: "Dumbo"
    },
    {
        quote: "There is no one who can’t fall. However, only those who get up again will learn how to move forward.",
        title: "Bambi"
    },
    {
        quote: "Magic can happen only when you have an earnest desire.",
        title: "Cinderella"
    },
    {
        quote: "Years of dreams just can’t be wrong!",
        title: "Anastasia"
    },
    {
        quote: "You still have enough time to make your dreams come true!",
        title: "Peter Pan"
    },
    {
        quote: "If you really want to have something, you can get it but you have to try, try and try again. Then you can finally get it.",
        title: "The Little Mermaid"
    }
]

const quote = document.querySelector("#quotes span:first-child");
const title = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
title.innerText = todaysQuote.title;