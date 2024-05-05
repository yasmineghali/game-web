// let name = prompt("Enter your name");
// document.getElementById("greet").innerHTML = "HELLO "+name+"!";

// Your game logic

// Display the name modal when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("nameModal");
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Submit the name when the submit button is clicked
    const nameSubmitButton = document.getElementById("nameSubmit");
    nameSubmitButton.addEventListener("click", function() {
        const nameInput = document.getElementById("nameInput").value;
        document.getElementById("greet").innerHTML = "HELLO " + nameInput + "!";
        modal.style.display = "none";
    });
});

// The rest of your game logic goes here

let y = Math.floor(Math.random()*10+1);
let guess = 1;

const guessbtn = document.getElementById("submitguess");

guessbtn.addEventListener('click',function(e){
    e.preventDefault();
    let x = document.getElementById("guessField").value;

    if(x == y){
        document.getElementById("lastResult").innerHTML = "Congratulations! You got it right! in "+guess+" guesses";
        document.getElementById("lowOrHi").innerHTML = "";
        document.getElementById("Restart").style.display = "block";
    }
    else if (x > y){
        guess++;
        document.getElementById("lowOrHi").innerHTML = "Try a smaller number!";

    }
    else{
        guess++;
        document.getElementById("lowOrHi").innerHTML = "Try a greater number!";
    }
})

const restartbtn = document.getElementById("Restart");

restartbtn.addEventListener('click',function(){
    y = Math.floor(Math.random()*10+1);
    guess = 1;
    document.getElementById("lastResult").innerHTML = "";
    document.getElementById("lowOrHi").innerHTML = "";
    document.getElementById("Restart").style.display = "none";
    document.getElementById("guessField").value = "your number";
});