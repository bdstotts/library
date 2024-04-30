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


function info(title, author, pages, ready,notes){
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.ready = ready;
 this.notes = notes;
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
   ready = "Yes"
 }
 else{
   unread.appendChild(card)
   ready = "No"
 }


titleDiv = document.createElement("div");
titleDiv.classList.add("cardData");
card.appendChild(titleDiv);
titleDiv.innerHTML += `Title: ${title}`;


authDiv = document.createElement("div");
authDiv.classList.add("cardData");
card.appendChild(authDiv);
authDiv.innerHTML += `Author: ${author}`;


pagesDiv = document.createElement("div");
pagesDiv.classList.add("cardData");
card.appendChild(pagesDiv);
pagesDiv.innerHTML += `pages: ${pages}`;


readDiv = document.createElement("div");
readDiv.classList.add("cardData");
card.appendChild(readDiv);
readDiv.innerHTML += `Read?: ${ready}`;


notesDiv = document.createElement("div");
notesDiv.classList.add("cardData");
card.appendChild(notesDiv);
notesDiv.innerHTML += `Notes: ${notes}`;










document.getElementById("title").value = "";
document.getElementById("author").value = "";
document.getElementById("pages").value = "";
document.getElementById("ready").checked = false;
//ready.checked = false;
document.getElementById("notes").value = "";


book = {}
}


submit.addEventListener("click",submitInfo)

