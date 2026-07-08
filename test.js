const myLibrary = [];

function Book(title,author,pages,readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
}

addBookToLibrary("Calculus","James Stewart", 956, "yes");


for(const book of myLibrary){
  console.log(book.title);
}