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
