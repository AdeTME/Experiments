const myLibrary = [];
const bookDisplayArea = document.getElementById("bookDisplay");


function Book(title, author, pages, readStatus) {
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


function bookDisplay(library) {
  for (const book of library) {
    const p = document.createElement("p");
    const deleteBtn= document.createElement("button");
    const read = document.createElement("button");
    p.append(`Book: ${book.title}, by ${book.author}, has ${book.pages} pages. Have I read it? ${book.readStatus}`);
    p.append(deleteBtn);
    p.append(read);

    bookDisplayArea.append(p);
  }
}

addBookToLibrary("book1","author1",900,"read");
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
bookDisplay(myLibrary);


