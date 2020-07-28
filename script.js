var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var arr=document.getElementsByTagName("li");
var delBtns=document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function listLength(){
	return document.getElementsByTagName("li").length;
}
ul.onclick=function(event){
    event.target.classList.toggle("done");
}

function removeParent(event){
	console.log(1);
	event.target.removeEventListener("click",removeParent);
	event.target.parentNode.remove();

}

function addDeleteButton(li){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("delete"));
	btn.addEventListener("click", removeParent);
	li.appendChild(btn);
}



function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}






button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


//to add delete buttons to existing list!
var i;
for (i=0;i<listLength();i++)
{
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("delete"));
	btn.classList.add("delete");
	var arr=document.getElementsByTagName("li");
	document.getElementsByTagName("li")[i].appendChild(btn);

}
for(var i = 0; i < delBtns.length; i++){
	delBtns[i].addEventListener("click", removeParent);
}






