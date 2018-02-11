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

UI.prototype.clearFields = function() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
}

// Event listener
document.querySelector('#book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBook(book);

  // Clear fields
  ui.clearFields();

  e.preventDefault();
})