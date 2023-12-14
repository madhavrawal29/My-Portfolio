// Create a "close" button and append it to each list item
let mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  let span = document.createElement("Button");
  let txt = document.createTextNode("Del");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}

// Click on delete button to hide the current list item
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (e) {           // we can use function(e) or function(ev)
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please write something!");
  }
  else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let newspan = document.createElement("Button");
  let newtxt = document.createTextNode("Del");
  newspan.className = "close";
  newspan.appendChild(newtxt);
  li.appendChild(newspan);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}