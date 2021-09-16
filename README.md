# MyReads Project
this is MyReads project with the final update that project is show multiple books and the user can save it to read or want to read or currently reading it 
and user can search for multiple books and save it directly in main page . 

* this project is consists of 3 components to show different status of Books in main page status['currentlyReading,WantToRead,Read'] and cosists of 2 components [FindBook.js , ShowFindBook] to search in the api ['BookApi'] and show the books in search page .
and consist of compoenent that change the shelf of Book ['ShelfControl'] and the image below  is more details about components in this project 
![Capture2](https://user-images.githubusercontent.com/68845990/133677870-5c7606e5-f3c3-4827-919c-2ddf07af551b.PNG)
![Capture](https://user-images.githubusercontent.com/68845990/133677696-97d79b50-22e5-49f2-b0a1-a2ad47ff1753.PNG)


## Run Project 

to run project 
#first download files of project 
#second run "npm install" in command line  to install all dependencies pakages.
#finally run "npm start" in command line to lunch this project 

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
    ├──Components
    |    ├──HomeComponents
    |    |   ├──Read.js #this component show all Books that user is Read.
    |    |   ├──CurrentlyReading.js #this component show all Books that user is CurrentlyReading.
    |    |   └──WantToRead.js    #this component show all Books that user is WantToRead.
    |    ├──SearchComponents
    |    |    ├──FindBook.js  #this component search for book in api and send result to ShowFindBook component.
    |    |    └──ShowFindBook.js # this component show all matched Books from FindBook component.
    |    └──ShelfControl.js   # this component is controll of shelf and change it for each Book would you want  
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
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

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
