var numberOfButtons=document.querySelectorAll(".drum").length

for(var i=0;i<numberOfButtons;i++)
{

    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        // var audio=new Audio('sounds/crash.mp3')//creating an audio object
        // audio.play();//calling the object using play method
      // this.style.color="white"
          // this statement refers to the object if called inside the method of an object but if inside the function then it refers to
          //the window object globallly 
      var buttonInnerHtml=this.innerHTML;
      // console.log(buttonInnerHtml)
      makeSound(buttonInnerHtml)

      addAnimation(buttonInnerHtml)
      
    });
}

document.addEventListener("keydown",function(r)
{
    // alert("key was pressed")
    makeSound(r.key)
    addAnimation(r.key)
})

function makeSound(keys)
{
  switch (keys) {
    case "w":
      var audio1=new Audio("sounds/tom-1.mp3")
      audio1.play()
    break;

    case "a":
      var audio2=new Audio("sounds/tom-2.mp3")
      audio2.play()
    break;

    case "s":
      var audio3=new Audio("sounds/tom-3.mp3")
      audio3.play()
    break;

    case "d":
      var audio4=new Audio("sounds/tom-4.mp3")
      audio4.play()
    break;

    case"j":
       var audio5=new Audio("sounds/snare.mp3")
       audio5.play()
    break;
    
    case"k":
       var audio6=new Audio("sounds/crash.mp3")
       audio6.play()
    break;
    
    case"l":
      var audio7=new Audio("sounds/kick-bass.mp3")
      audio7.play() 
    break;

    default:
      break;
  }

}

function addAnimation(keyactive)
{
  var activeButton=document.querySelector("."+keyactive);
 activeButton.classList.add('pressed-button')

 setTimeout(function(){
   activeButton.classList.remove("pressed-button")
 },100)


}