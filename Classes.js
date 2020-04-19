// Define your Book class here:

class Book {
    constructor (title, author, copyright, ISBN, pages, checkedOut, discarded = 'no') {
        this.title = title;
        this.author = author;
        this.copyright= copyright;
        this.ISBN = ISBN;
        this.pages = pages;
        this.checkedOut = checkedOut;
        this.discarded = discarded;    
    } 
    //checked out more than 100 times, discarded(novel). over 5 years old, discarded(manual)
        discard () {
            let years = this.copyright;
            if (years <= 2015) {
                this.discarded = "yes";
            }
            return years;
        }
        checkOutNumber() {
            let cONumber = this.checkedOut+5;
            this.checkedOut = cONumber;
            return cONumber;
          }
}
class Manual extends Book {
    constructor (title, author, copyright, ISBN, pages, checkedOut, discarded = 'no') {
        super(title, author, copyright, ISBN, pages, checkedOut, discarded = 'no');
    } 
}
class Novel extends Book {
    constructor (title, author, copyright, ISBN, pages, checkedOut, discarded = 'no') {
        super(title, author, copyright, ISBN, pages, checkedOut, discarded = 'no');
        // this.checkedOut = 37;
    } 
}

let pride = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32);
// console.log(pride);

let top = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1);
// console.log(top);

// pride.discard()
// console.log(top);
// console.log(top);

top.discard();
console.log(top);
pride.checkOutNumber();
console.log(pride);


// Define your Manual and Novel classes here:





// Declare the objects for part 2 here:





// Code part 3 here:
