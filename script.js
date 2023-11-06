function Book(title, author, pages, haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;
}

Book.prototype = { 
    info : function() {
        if (haveRead) {
            return title + ' by ' + author + ', ' + pages + ', has read';
        }
        return title + ' by ' + author + ', ' + pages + ', not read yet';
    },
    toggleHaveRead : function() {
        if (this.haveRead === true)
            this.haveRead = false;
        else
            this.haveRead = true;
        return this.haveRead;
        // updateLibraryDisplay();
    }
};

const myLibrary = [new Book('The Hobbit', 'J.R.R. Tolkien', 295, false), 
                    new Book('Anna Karenina', 'Leo Tolstoy', 895, true),
                    new Book('Moby Dick', 'Herman Melville', 426, true),new Book('Anna Karenina', 'Leo Tolstoy', 895, true),
                    new Book('Moby Dick', 'Herman Melville', 426, true),new Book('Anna Karenina', 'Leo Tolstoy', 895, true),
                    new Book('Moby Dick', 'Herman Melville', 426, true),new Book('Anna Karenina', 'Leo Tolstoy', 895, true),
                    new Book('Moby Dick', 'Herman Melville', 426, true),new Book('Anna Karenina', 'Leo Tolstoy', 895, true),
                    new Book('Moby Dick', 'Herman Melville', 426, true),new Book('Anna Karenina', 'Leo Tolstoy', 895, true),
                    new Book('Moby Dick', 'Herman Melville', 426, true),
                    new Book('Anna Karenina', 'Leo Tolstoy', 895, true),
                    new Book('Moby Dick', 'Herman Melville', 426, true),];

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    updateLibraryDisplay(myLibrary);
}

const display = document.querySelector('#display');
function appendBookToDisplay(title, author, pages, haveRead, i) {
    const readStatus = haveRead;
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =
        `<div class="book-title">${title}</div><button class="remove-button">X</button>
            <div class="book-info">
                <div class="book-author">${author}</div>
                <div class="book-pages">${pages} pages</div>
                <div class="book-read">
                    <span>${readStatus ? "Read" : "Haven't Read"}</span>
                    <button class="toggle-read" value="${i}">◄</button>
                </div>
            </div>
        </div>`;
    div.querySelector("button").addEventListener("click", () => {removeBookFromLibrary(i)});
    div.querySelector(".toggle-read").addEventListener("click", (e) => {
        div.querySelector("span").textContent = myLibrary[i].toggleHaveRead() ? "Read" : "Haven't Read";
    });
    display.appendChild(div);    
}

function updateLibraryDisplay() {
    display.innerHTML = '';
    myLibrary.forEach((element, i) => {
        appendBookToDisplay(element.title, element.author, element.pages, element.haveRead, i);
    }); 
}

const showButton = document.getElementById("showDialog");
const addBookDialog = document.getElementById("addDialog");
showButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

const confirmButton = document.getElementById("confirmButton");
const theForm = document.querySelector("form");
confirmButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (theForm.checkValidity()) {
        addBookToLibrary(theForm.elements["bookTitle"].value,
            theForm.elements["bookAuthor"].value,
            theForm.elements["bookPages"].value,
            theForm.elements["book-read"].value);
            addBookDialog.close();
            theForm.reset();
    }
    else
        alert("Please fill all the inputs");
});

const cancelButton = document.getElementById("cancelButton");
const allInputs = document.querySelectorAll("input");
cancelButton.addEventListener("click", () => {
    addBookDialog.close();
    theForm.reset();
        // allInputs.forEach((anInput) => {
        //     anInput.innerText = '';
        // });
});

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    updateLibraryDisplay(myLibrary);
}

updateLibraryDisplay(myLibrary);
