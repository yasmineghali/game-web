let y = Math.floor(Math.random()*10+1);
let guess = 1;

const guessbtn = document.getElementById("submitguess");

guessbtn.addEventListener('click',function(e){
    e.preventDefault();
    let x = document.getElementById("guessField").value;

    if(x == y){
        document.getElementById("lastResult").innerHTML = "Congratulations! You got it right! in "+guess+"guesses";
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