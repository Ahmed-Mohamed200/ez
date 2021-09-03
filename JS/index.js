

function generateCode() {
    var Generatror = [
        {
            author: 'Oscar Wilde',
            quote: 'Be yourself; everyone else is already taken.'
        },
        {
            author: 'Albert Einstein',
            quote: 'Two things are infinite: the universe and human stupidity and Im not sure about the universe.'
        },
        {
            author: 'Frank Zappa',
            quote: 'So many books, so little time..'
        },
        {
            author: 'Albert Marcus Tullius Cicero',
            quote: 'A room without books is like a body without a soul.'
        },
        {
            author: 'Mae West',
            quote: 'you only live once, but if you do it right, once is enough.'
        },

    ]
    var x = Math.random() * 5;
    x = Math.floor(x)
    document.getElementById("quo").innerHTML = Generatror[x].quote;
    document.getElementById("auth").innerHTML = Generatror[x].author;
}
