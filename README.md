# MyReads Project
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:
    - Currently Reading
    - Want to Read
    - Read
Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.the default value for the control is the current shelf the book is in.

The main page also has a link to `/search`, a search page that allows you to find books to add to your library.

The search page has a `text input` that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.
The search page also has a link to `/` (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.


## How to use the app 

   - In the `Home` page books are sorted into three categories: Currently Reading, Want to Read and Read
   - To change a book's category or remove a book from the list, click on the green button on the book cover
   - To search for new books to add:       *it returns Up to 20 book items.*
        - Navigate to `Search` page. 
        - Enter an author's name or subject. 
  
   - Navigation: you can navigate to the `Search` page using + icon at the right bottom of the `Home` page, and navigate to `Home` page back using arrow at the top left of the `Search` page.

Note: The backend API is limited to a fixed set of search terms -- see below for valid search options
## TL;DR

To get started developing right away:

* git clone https://github.com/Esraa-Mamdouh/MyReads.git
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── Components
    │   ├── Home.js  # hompe page 
    │   ├── Search.js # search page 
    │   ├── BookShelf.js # 3 bookshelves (currently reading, want to read, read) 
    │   ├── BookItem.js # for each book in the shelf or search page
    │   └──BookMenu.js # dropdown Menu to choose where to locate a book and display which shelf this book inside(if exiss)
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── images # alternative images for books
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important 
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Copyright and Authoruty

***Esraa Mamdouh*** with a ***Udacity*** starter code in the Frontend web development nano-degree with Udacity.
