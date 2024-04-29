console.log("Hello there!")

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.getElementById("close");
const submit = document.getElementById("submit");
const read = document.getElementById("read");
const unread = document.getElementById("unread");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

/*var title = document.getElementById("title").value;
var author = document.getElementById("author").value;
var pages = document.getElementById("pages").value;
var ready = document.getElementById("ready").value;
var notes = document.getElementById("notes").value;*/

function info(title, author, pages, ready,notes){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ready = ready;
  this.notes = notes;
  /*this.tellMe = function(){
      return(`${author}'s book, ${title}, has ${pages} pages and is ${ready} by me.`)
};*/
}

function submitInfo() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var ready = document.getElementById("ready").checked;
  var notes = document.getElementById("notes").value;

  var book = new info(title,author,pages,ready,notes)
  dialog.close();
  console.log("Submit function ran.")
  console.log(book);

  card = document.createElement("div")
  card.classList.add("card");
  console.log(book.ready)


  if(book.ready === true){
    read.appendChild(card);
  }
  else{
    unread.appendChild(card)
  }

document.getElementById("title").value = "";
document.getElementById("author").value = "";
document.getElementById("pages").value = "";
document.getElementById("ready").checked = false;
//ready.checked = false;
document.getElementById("notes").value = "";

book = {}
}

submit.addEventListener("click",submitInfo)