function Register() {
  const isLogin = title.innerText === 'Login';
  title.innerText = isLogin ? 'Register' : 'Login';
  but1.innerText = isLogin ? 'Register' : 'Login';
  register.innerText = isLogin ? 'Login' : 'Register';
  Que.style.visibility = isLogin ? "hidden" : "visible";
}

function Login_sub(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (title.innerText === 'Register') {
    if (users[username]) {
      alert('User already exists!');
      return;
    }
    users[username] = password;
    alert('Registration successful! Please login.');
    Register();
  } else {
    if (users[username] === password) {
      currentUser = username;
      alert('Login successful!');
      showLibrary();
    } else {
      alert('Invalid username or password!');
    }
  }
  login_form.reset();
}

function toggleSearch() {
    A.display = 'block';
    B.display = 'none';
    D.display = 'none';
    C.classList.add('hidden');
}
  
function toggleAdd() {
    A.display = 'none';
    B.display = 'block';
    D.display = 'block';
    C.classList.add('hidden');
}
  
// Toggle book status
function toggleStatus(index) {
    library[index].status = library[index].status === 'Unread' ? 'Read' : 'Unread';
    displayBooks();
  }

function Borrowed() {
    if (C.classList.contains('hidden')) {
        A.display = 'none';
        B.display = 'none';
        D.display = 'none';
        C.classList.remove('hidden');
        displayBorrowedBooks();
    }
}
  
function Hide() {
    A.display = 'none';
    B.display = 'none';
    D.display = 'block';
    C.classList.add('hidden');
}

function showLibrary() {
  login.classList.add('hidden');
  lib.classList.remove('hidden');
  displayBooks();
}

function logout() {
  currentUser = null;
  login.classList.remove('hidden');
  lib.classList.add('hidden');
}

// Add new book
function addBook(event) {
  event.preventDefault();

  const title = document.getElementById('title1').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const category = document.getElementById('category').value;

  const newBook = { title, author, year, category, status: 'Unread', borrower: null };
  library.push(newBook);

  document.querySelector('form').reset();
  displayBooks();
}

// Display Borrowed Books
function displayBorrowedBooks() {
    borrowedBooksList.innerHTML = '';  // Clear previous content
    
    const borrowedBooks = library.filter(book => book.borrower);  // Filter books with a borrower
    
    if (borrowedBooks.length === 0) {
      borrowedBooksList.innerHTML = '<p>No books have been borrowed.</p>';
      return;
    }
    borrowedBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'borrowed-book';
        bookElement.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Year:</strong> ${book.year}</p>
          <p class="borrower"><strong>Borrowed by:</strong> ${book.borrower}</p>
        `;
        borrowedBooksList.appendChild(bookElement);  // Append book to the borrowed books list
      });
}

// Display books
function displayBooks() {
    bookList.innerHTML = '';  // Clear the existing list
  
    // Group books by category
    const groupedBooks = library.reduce((groups, book, index) => {
      if (!groups[book.category]) {
        groups[book.category] = [];
      }
      groups[book.category].push({ ...book, originalIndex: index }); // Add original index
      return groups;
    }, {});
  
    // Iterate over each category
    Object.keys(groupedBooks).forEach(category => {
      // Create a section for each category
      const categorySection = document.createElement('div');
      categorySection.className = 'category-section';
      categorySection.innerHTML = `<h2>${category}</h2>`;  // Category header
  
      // Iterate over books in this category
      groupedBooks[category].forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Year:</strong> ${book.year}</p>
          <p><strong>Status:</strong> ${book.status}</p>
          <button onclick="toggleStatus(${book.originalIndex})">Mark as ${book.status === 'Unread' ? 'Read' : 'Unread'}</button>
          <button onclick="deleteBook(${book.originalIndex})">Delete</button> <!-- Use original index -->
          <button onclick="borrowBook(${book.originalIndex})">Borrow</button>
        `;
        categorySection.appendChild(bookElement);  // Append book to the category section
      });
  
      bookList.appendChild(categorySection);  // Append the category section to the book list
    });
  }
  
  // Delete book
  function deleteBook(index) {
    if (confirm('Are you sure you want to delete this book?')) {
      library.splice(index, 1);  // Remove the book at the given index from the library array
      displayBooks();  // Re-display the updated list of books
    }
}
  

// Borrow book
function borrowBook(index) {
  const borrower = prompt('Enter Borrower Name:');
  if (borrower) {
    library[index].borrower = borrower;
    alert(`${library[index].title} borrowed by ${borrower}`);
    displayBooks();
  }
}

// Delete book
function deleteBook(index) {
  library.splice(index, 1);
  displayBooks();
}

// Search books
function searchBooks(event) {
  event.preventDefault();
  const query = document.getElementById('searchQuery').value.toLowerCase();
  const filteredBooks = library.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = filteredBooks.map((book) => `
    <div class="book">
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Category:</strong> ${book.category}</p>
    </div>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  login.classList.remove('hidden');
});
