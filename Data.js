let library = [
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      year: 1988,
      category: "Science",
      status: "Unread",
      borrower: null
    },
    {
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      year: 1976,
      category: "Science",
      status: "Unread",
      borrower: null
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      year: 1980,
      category: "Science",
      status: "Unread",
      borrower: "Mariam"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      category: "Stories",
      status: "Unread",
      borrower: null
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      category: "Stories",
      status: "Unread",
      borrower: null
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      category: "Stories",
      status: "Unread",
      borrower: "Ali"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      year: 2005,
      category: "Mystery",
      status: "Unread",
      borrower: null
    },
    {
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      year: 1887,
      category: "Mystery",
      status: "Unread",
      borrower: "Mohamed"
    },
    {
      title: "Gone Girl",
      author: "Gillian Flynn",
      year: 2012,
      category: "Mystery",
      status: "Unread",
      borrower: "Ahmed"
    },
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      year: 2009,
      category: "Collage Books",
      status: "Unread",
      borrower: "Noor"
    },
    {
      title: "Physics",
      author: "Raymond A. Serway",
      year: 2014,
      category: "Collage Books",
      status: "Unread",
      borrower: null
    },
    {
      title: "The Elements of Style",
      author: "William Strunk Jr. and E.B. White",
      year: 1918,
      category: "Collage Books",
      status: "Unread",
      borrower: null
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      category: "Fantasy",
      status: "Unread",
      borrower: null
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      year: 1997,
      category: "Fantasy",
      status: "Unread",
      borrower: "Malak"
    },
    {
      title: "A Game of Thrones",
      author: "George R.R. Martin",
      year: 1996,
      category: "Fantasy",
      status: "Unread",
      borrower: null
    }
];
  
const login = document.getElementById('login');
const lib = document.getElementById('lib');
const login_form = document.getElementById('login_form');
const bookList = document.getElementById('bookList');
const borrowedBooksList = document.getElementById('borrowedBooksList');
const register = document.getElementById('Register');
const Que = document.getElementById('Que');

const A= document.querySelector('.search-book').style;
const B= document.querySelector('.add-book').style;
const C= document.getElementById('borrowedSection');
const D= document.querySelector('.library').style;


const users = {}; // Example users

let currentUser = null;
A.display='none';
B.display='none';
