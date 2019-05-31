// alert("Masha");
//addEventListener() - it would call the method right a way, without waiting to querySelector 
// the idea of passing a funtioin as an input so that it cam be called at a later time.

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("i got clicked!")
// }

//document.querySelector("button").addEventListener("click", function() { alert("i got clicked !"); }); // for first one 

//Higher order function is a functions wich takes other functions like a parametars
//callback function is a fuction which passed like parameter

for(var i = 0 ;i < 7; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function() { 
        // this.style.color = "white";
         this.classList.toggle("cwhite");
          makeSound(this.innerHTML);
        });
}

document.addEventListener("keydown",function(event){
       makeSound(event.key);
})

function makeSound(key){
        buttonAnimation(key);
        switch(key)
        {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();   
            break;
            case "a":
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play(); 
            break;
            case "s":
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();   
            break;
            case "d":
                    var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();   
            break;
            case "j":
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();  
            break;
            case "k":
                    var audio = new Audio('sounds/crash.mp3');
                    audio.play();  
            break;
            default:
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
            break;                
        }
}

function buttonAnimation(currentKey){
        var activebtn = document.querySelector("." + currentKey); 
        activebtn.classList.add("pressed");
        setTimeout(function(){
                activebtn.classList.remove("pressed");
        },200);


}