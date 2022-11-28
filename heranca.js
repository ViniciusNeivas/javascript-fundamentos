class Book {
    constructor(title, author,pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}

class ITBook extends Book {
    constructor(title, author,pages, technology) {
        super(title, author,pages);
        this.technology = technology;
    }
}

let itBook = new ITBook('Algoritmos para viver', 'Brian', 500,'Algoritmos');
console.log(itBook.read());
