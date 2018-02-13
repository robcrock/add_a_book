// Book constructor
function Book(title, author, ISBN) {
  this.title = title;
  this.author = author;
  this.isbn = ISBN;
}

// UI constructor
function UI() {}

// Add book to list
UI.prototype.addBook = function(book) {
  // Where we'll want to insert our HTML.
  const list = document.querySelector('#book-list');

  // Create row for book entry
  const row = document.createElement('tr');
  // Insert columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `
  list.appendChild(row);
}

// Validate new entries
UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className =  `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert
  container.insertBefore(div, form)
  // Dissapear after 3 seconds
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete book
UI.prototype.deleteBook = (target) => {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove(); 
  }
}

UI.prototype.clearFields = function() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
}

// Event listener for adding books
document.querySelector('#book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields.', 'error');
  } else {
    ui.showAlert('Book added!', 'success');
    // Add book to list
    ui.addBook(book);

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
})

// Event listener to delete books
document.querySelector('#book-list').addEventListener('click', (e) => {

  // Instatiate UI
  const ui = new UI();
  // Delete book
  ui.deleteBook(e.target);
  // Show message
  ui.showAlert('Book removed!', 'success');

  e.preventDefault();
})