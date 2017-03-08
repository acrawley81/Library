//Digital Library using JavaScript
//Use objects, functions, primitives loops and console debugging.
//Must have a "books" array property.
//constructer greater than 0, prototype, Create (Wireframe)
//
function NewBook (title, author, downloadable,soldout ){

	//properties
	this.title = title;
	this.author = author;

//local storage
	// Store
	localStorage.lastname = "Life of a Tank";
	// Retrieve
	document.getElementById("result").innerHTML = localStorage.lastname;


//JSON Stringify
var library = {"books"};
var myJSON = JSON.stringify(library);
document.getElementById("demo").innerHTML = myJSON;

	//events
	this.downloadable = downloadable ;
	this.soldout = soldout;

	//methods
	this.opens=function(){
		//opens to table of contents
		alert("page1");
	}

}

//declaring variables and assigning new instances of our newBook class
var book1 = new newBook("The Giver","Erik R.", true, false);
var book2 = new newBook("Harry Potter","J.K R.", false, false);

console.log(book1,book2);

// uses open method
book1.opens()

//
$(function() {
  this.gMyBook1 = new Book("Programmig",50, "01/20/2016");
  this.gMyBook2 = new Book("HTML/CSS":, "TravisDoe", 150, "l")
  this.glib = new Lib();
});

var Lib = function()(newBook){
};
//working within the console
lib.prototype.addbook = function(book) {
	//logging information
  consle.log('myBookArray');
	this.mybookarray.push('book');
};

lib.prototype.removeBookByTitle = function(title) {
//loging information (f12)df
  console.log('this.removeBookByTitle');
this.mybookarray.push('book');
};

lib.prototype.remBookByAuthor = function(authorName) {
  console.log('this.remBookByAuthor');
};

lib.prototype.getRandomBook = function(randombk) {
  console.log('getRandomBook');
};

lib.prototype.getBookByTitle = function(BookbyTitle) {
  console.log('getBookByTitle');
};

Lib.prototype.getRandomAuthorName = function() {
  consol.log('getRandomAuthoraName');
};

function BookInfo(title, author, page, date) {
           this.title = title;
           this.author = author;
           this.page = page;
           this.date = date;
           console.log(this);
 }
// singleton
 class Book {
 public:
      static
      Book&
      GetInstance() {
          static Book singleton;
          return singleton;
      }
		}


//singleton
var Ticker = function(){
	var instance;
	function creat(){
		//props and Methods private
		function add(interval,times,callback,name){
			}
		return {add:add};
	} //singleton hint
	return {getInstance:function(){
		if(instance) instance = create();
	}
})();

Ticker.getInstance();




 private:
      explicit
      Book() {}

      virtual
      ~Book() {}
 };
 private:
      explicit
      Book() {}

      virtual
      ~Book() {}
