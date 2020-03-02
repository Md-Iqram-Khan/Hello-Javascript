document.querySelector("button").addEventListener("click",myFunction);

function myFunction() {
    alert ("Hello");
}

document.querySelector("#clk").addEventListener("click",function(){
    alert("Anonymas function")
})//Here I use anonymas function.

var myVar = document.querySelector("p")

myVar.addEventListener("mouseover",function(){
    myVar.classList.add("my-style");
})

myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("my-style");
})

//eventListener with multiple elements

var len = document.querySelectorAll(".myButton").length;//for count the length of myButton.which is 3.

for( var i = 0; i<len; i++){

    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){

        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked.";
    })
}

