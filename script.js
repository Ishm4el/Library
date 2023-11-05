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
        div.innerHTML = `${element.info()}`;
        display.appendChild(div);
    });
}

updateLibraryDisplay(myLibrary);


