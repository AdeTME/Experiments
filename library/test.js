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

    p.append(`Book: ${book.title}, by ${book.author}, has ${book.pages} pages. Been read? ${book.readStatus}`);

    bookDiv.append(p, deleteBtn, toggleRead);


    bookDisplayArea.append(bookDiv);
  }
  deleteBtn();
  toggleRead()
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


function toggleRead() {
  const toggleBtn = document.querySelectorAll(".toggle-btn");
  toggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      const toggledObjectId = btn.parentElement.id;

      const book = myLibrary.find(b => b.id === toggledObjectId);
      if (book) {
        book.readStatus = !book.readStatus;

        if (book.readStatus) {
          btn.textContent = "Read";
        }
        else { btn.textContent = "Not Read" };

        const paragraph = btn.parentElement.querySelector("p");
        paragraph.textContent = `Book: ${book.title}, by ${book.author}, has ${book.pages} pages. Been read ? ${book.readStatus}`;
      }
    });
  });
}



//get the book data from the archive button           <button type="submit" class="btn" id="archiveButton">Archive</button>

//take the content in the other fields, upon the click of archive, make a new object, using the addToLibrary function;
function archiveNewBook() {
  const archiveBook = document.querySelector("#archiveButton");
  const bookTitle = document.querySelector("#bookTitle");
  const authorName = document.querySelector("#authorName");
  const numberOfPages = document.querySelector("#numberOfPages");
  const readStatus = document.querySelector("#readStatus");
  archiveBook.addEventListener("click", () => {
    if (bookTitle.value) {
      addBookToLibrary(bookTitle.value, authorName.value, Number(numberOfPages.value), readStatus.checked);
    };
    bookDisplay(myLibrary);
  });
}


archiveNewBook();
