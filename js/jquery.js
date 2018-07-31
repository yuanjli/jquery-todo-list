// 1. add items to a 'todo' list from a form input using an input field and submit button
// 2. The form should clear when the user submits a task and focus back on the todo item field.


// 3. On every item appended to the 'todo' list, have a way to delete the item. This could be in the form of a 'delete' link, 
//a checkbox to mark it as active or inactive, or a plain button with an X on it.


var myList = [];

//select submit, when the user click on the submit, the item gets added to the to do list.
// the input box clears. 
$(document).ready(function(){
	//$('#input').html()
	document.getElementById('submit').addEventListener('click', addToList);
	
})

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function addToList() {
	console.log("add to list is Called");
	var userInput = document.getElementById('input').value;
	console.log(typeof(userInput), userInput);
	myList.push(userInput);
	var li = document.createElement("li");
	var newInput = document.createTextNode(userInput);
	li.appendChild(newInput);
	document.getElementById('myList').appendChild(li);
	document.getElementById('input').value = '';
	console.log(myList);
}

//make a check box for each to do list item.
function addCheckBox() {
	var li = document.createElement('li');

    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";

    li.appendChild(checkbox);
}



// Cross the line of the todo list.
