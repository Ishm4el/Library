function Book(title, author, pages, haveRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;
	this.info = function() {
		if (haveRead) {
			return title + ' by ' + author + ', ' + pages + ', has read';
		}
		return title + ' by ' + author + ', ' + pages + ', not read yet';
	};
}

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
console.log(myLibrary.length);

function addBookToLibrary() {
    
}

function updateLibraryDisplay(myLibrary) {
    const display = document.querySelector('#display');
    myLibrary.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('card');
        console.log(element.haveRead === true ? "Read" : "Haven't Read");
        div.innerHTML =
            `<div class="book-title">${element.title}</div>
                <div class="book-info">
                    <div class="book-author">${element.author}</div>
                    <div class="book-pages">${element.pages} pages</div>
                    <div class="book-read">${element.haveRead === true ? "Read" : "Haven't Read"}</div>
                </div>
            </div>`;
        display.appendChild(div);
    });
}

const showButton = document.getElementById("showDialog");
const addBookDialog = document.getElementById("addDialog");
showButton.addEventListener("click", () => {
    addBookDialog.showModal();
})

updateLibraryDisplay(myLibrary);


