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


function addToList() {
	console.log("add to list is Called");
	var userInput = document.getElementById('input').value;
	console.log('it is ==============')
	//uInput = userInput[0];
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

//
