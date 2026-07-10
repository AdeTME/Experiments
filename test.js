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
    const bookDiv = document.createElement("div");
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const read = document.createElement("button");

    deleteBtn.setAttribute("class", "besideBook delete-btn");
    read.setAttribute("class", "besideBook toggle-btn");
    bookDiv.setAttribute("class", "book-card");
    



    deleteBtn.textContent = "Delete";
    read.textContent = "toggle read";

    p.append(`Book: ${book.title}, by ${book.author}, has ${book.pages} pages. Have I read it? ${book.readStatus}`);

    bookDiv.append(p,deleteBtn,read);


    bookDisplayArea.append(bookDiv);
  }
}

addBookToLibrary("book1", "author1", 900, "read");
addBookToLibrary("book2", "author2", 800, "notread");
addBookToLibrary("book3", "author3", 700, "read");



function openForm() {
  document.getElementById("myForm").style.display = "block";
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


bookDisplay(myLibrary);
form.addEventListener("submit", e => e.preventDefault())

