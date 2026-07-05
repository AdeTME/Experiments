const myLibrary = [];
const newBook = document.querySelector(#newBook);


function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus){

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function bookCards(Library){
    const bookList=[];
    for(const book of Library){
       bookList.push(`${book.title},by ${book.author}, ${book.pages}, ${book.readStatus}, ${book.id}`);
    }
    return bookList;
}

addBookToLibrary("Percy jackson", "rick",366,read);

const bookList = bookCards(myLibrary);


