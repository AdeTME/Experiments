let myLibrary = [];
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
  while (bookDisplayArea.hasChildNodes()) {
    bookDisplayArea.removeChild(bookDisplayArea.firstChild);
  }
  for (const book of library) {
    const bookDiv = document.createElement("div");
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const toggleRead = document.createElement("button");

    deleteBtn.setAttribute("class", "besideBook delete-btn");
    toggleRead.setAttribute("class", "besideBook toggle-btn");
    bookDiv.setAttribute("class", "book-card");
    bookDiv.setAttribute("id", `${book.id}`);  // give each book an id based class based on the unique id's generated 



    if (book.readStatus === true) {
      toggleRead.textContent = "Read";
      toggleRead.value = true;
    } else {
      toggleRead.value = false;
      toggleRead.textContent = "Not Read";
    }

    deleteBtn.textContent = "Delete";

    p.append(`Book: ${book.title}, by ${book.author}, has ${book.pages} pages. Have I read it? ${book.readStatus}`);

    bookDiv.append(p, deleteBtn, toggleRead);


    bookDisplayArea.append(bookDiv);
  }
}

addBookToLibrary("book1", "author1", 900, true);
addBookToLibrary("book2", "author2", 800, false);
addBookToLibrary("book3", "author3", 700, true);



function openForm() {
  document.getElementById("myForm").style.display = "block";
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


bookDisplay(myLibrary);

const form = document.getElementById("myForm");
form.addEventListener("submit", e => e.preventDefault())

function deleteBtn() {
  const deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      const bookToDelete = btn.parentElement;


      myLibrary = myLibrary.filter(book => book.id != bookToDelete.id);

      bookToDelete.remove();

    }

    );
  });
}

deleteBtn();

function toggleRead() {
  const toggleBtn = document.querySelectorAll(".toggle-btn");
  toggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      const toggledObjectId = btn.parentElement.id;
      myLibrary = myLibrary.map(book => {
        if ((toggledObjectId === book.id) && (btn.value === true)) {
          btn.value = false;
          btn.textContent = "Not Read";
          book.readStatus = false;
        } else if((toggledObjectId === book.id) && (btn.value === false)) {
          btn.value = true;
          btn.textContent = "Read";
          book.readStatus=true;
        }
        return book;

      });
    });
  });
}

toggleRead()