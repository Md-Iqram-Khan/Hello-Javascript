//var len = document.querySelectorAll

for (var i=0; i<3; i++){

    document.querySelectorAll(".myBtn")[i].addEventListener("click",function(){
            var text = this.innerHTML;
           // document.write(text);
           audioPlay(text);

    })
}

function audioPlay(text){

    switch(text){

        case "A":
            var audio = new Audio("audio/a.mp3");
            audio.play();
            break;

        case "B":
            var audio = new Audio("audio/b.wav");
            audio.play();
            break;

        case "C":
            var audio = new Audio("audio/c.wav");
            audio.play();
             break;



    }

}