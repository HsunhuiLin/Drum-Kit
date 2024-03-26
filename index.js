// detecting button click
function handleClick() {
    var buttonText = this.innerHTML;
    playSound(buttonText);
    addAnimation(buttonText);
}

var n = document.querySelectorAll(".drum").length;
for (var i = 0; i<n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

// detecting keyboard press
document.addEventListener("keydown", function(event){
    playSound(event.key);
    addAnimation(event.key);
})


function playSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');  // Construction Function
            crash.play();
         break;
        case "a":
            var kickBass = new Audio('./sounds/kick-bass.mp3');
            kickBass.play();
         break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
         break;
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
         break;
         case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
         break;
        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
         break;
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
         break;
    }
}

function addAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // for the pressed animation to come back: setting timeout function!
    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
}
// Exercise
    // function HouseKeeper(age, name, areaOfDuty){
    //     this.age = age;
    //     this.name = name;
    //     this.areaOfDuty = areaOfDuty;
    //     this.clean = function(){
    //         alert("Cleaning in progress!");
    //     }
    // }

    // var houseKeeper1 = new HouseKeeper(19, "Jane", ["bathroom", "kitchen", "room1"]);
    // houseKeeper1.clean();