//getElementById
var get = document.getElementById("he1");
get.innerHTML = "Hello";
var para = document.getElementById("para");
para.innerHTML = "How are you?"//innerHtml used for  changing the text in a element.

//getElementsByTagName

//It is used for select something by its tag name.It is plural because it can select multiple tag name.When we select a tag, we must give the index number of the tag and index number start from 0.
var getByTag = document.getElementsByTagName("h2")[0];
getByTag.innerHTML = "Hi from index 0";

var getByTag = document.getElementsByTagName("h2")[1];
getByTag.innerHTML = "Hi from index 1";

// getElementsByClassName
//It is same as getElementByTagName.
var getByClass = document.getElementsByClassName("five")[0];
getByClass.innerHTML = "Hi from index 0";

var getByClass = document.getElementsByClassName("six")[0];
getByClass.innerHTML = "Hi from index 1";


