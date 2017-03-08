
//
$(function () {
  this.gMyBook1 = new NewBook("Programmig", "50", 50, "01/20/2016");
  this.gMyBook2 = new NewBook("HTML/CSS", "TravisDoe", 150, "l/30/2015")
  this.gMyBook3 = new NewBook("The Chrib", "TravisDoe", 150, "4/12/2012")
  this.glib = new Lib();
});

//Digital Library using JavaScript
//Use objects, functions, primitives loops and console debugging.
//Must have a "books" array property.
//constructer greater than 0, prototype, Create (Wireframe)
//
function NewBook(title, author, pages, date) {

  //properties
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.date = date;
}

Lib.prototype.myBookArray = new Array();

var Lib = function () {
  this.myBookArray.push(window.gMyBook1);
  this.myBookArray.push(window.gMyBook2);
  this.myBookArray.push(window.gMyBook3);
};

//working within the console
lib.prototype.addbook = function (book) {
  var addabook = new NewBook(book.title, book.author, book.pages, book.date);
  for (var i = 0; i < this.myBookArray.length; i++) {
    if (addabook.title === this.myBookArray[i].title) {
      return false;
    }
  }
  this.myBookArray.push(addabook);
  return true;
};

lib.prototype.removeBookByTitle = function (title) {
  for (var r = 0; r < this.myBookArray.lenght; i++) {
    if (title == this.myBookArray[i].title) {
      this.myBookArray.splice(i, 1);
      return true;
    }
  }
  return false;
};

lib.prototype.remBookByAuthor = function (authorName) {
  var rem_Author = false;
  for (var r = 0; r < this.myBookArray.lenght; i++) {
    if (authorName == this.myBookArray[i].author) {
      this.myBookArray.splice(i, 1);
      rem_Author = true;
    }
  }
  return rem_Author;
};

lib.prototype.getRandomBook = function (randombk) {
  var temp = Math.random() * this.myBookArray.lenght;
  return this.myBookArray[temp];
}


lib.prototype.getBookByTitle = function (BookbyTitle) {

  for (var i = 0; i < this.myBookArray.length; i++) {
    if (BookbyTitle == this.myBookArray[i].title) {
      return this.myBookArray[i];
    }
  }
  return false;
};

Lib.prototype.getRandomAuthorName = function () {
  var temp = Math.random() * this.myBookArray.lenght;
  return this.myBookArray[temp].author;
}

Lib.prototype.addBooks = function (addbooksArray) {
  var num = 0;
  for (var i = 0; i < addbooksArray.length; i++) {
    if (this.addBook(addbooksArray[i])) {
      num++;
    }
  }
  return num;
}



Lib.prototype.getAuthors = function (){
  
}


Lib.prototype.getRandomAuthorName = function ()


