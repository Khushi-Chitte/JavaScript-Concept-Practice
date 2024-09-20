// const colorCode = document.getElementById('color-code');
// const options = document.getElementById('options-container')
// const scoreContainer = document.getElementById('score');
// let randomColor;
// let score = 0;

// function generateRandomNumber(min,max){
//     return min+Math.floor(Math.random()*(max-min+1));
// }
// function generateRandomColor(){
//     const red = generateRandomNumber(0,255);
//     const green = generateRandomNumber(0,255);
//     const blue = generateRandomNumber(0,255);

//     return `rgb(${red},${green},${blue})`
// }

// function incrementScore() {
//     score+=1;
//     scoreContainer.innerText = score;
// }

// function checkResult(el){
//     const selectedColor = el.target.style.backgroundColor;
//     if(selectedColor === randomColor){
//         incrementScore();
//     }else{
//         score = 0;
//     }
//     window.localStorage.setItem("score",score);
//     startGame();
// }

// function startGame(){
//     score = Number(window.localStorage.getItem('score'))?? 0;
//     scoreContainer.innerText=score;
//     options.innerHTML = null;
//     randomColor = generateRandomColor();
//     colorCode.innerText = randomColor

//     const ansIndex = generateRandomNumber(0,5);
//     for(let i=0;i<6;i++){
//         const div = document.createElement('div');
//         div.addEventListener('click',checkResult);
//         div.style.backgroundColor = i===ansIndex?randomColor: generateRandomColor();
//         options.append(div);
//     }
// }

// window.addEventListener('load',()=>startGame());


const colorCode = document.getElementById('color-code');
const options = document.getElementById('options-container');
const scoreContainer = document.getElementById('score');
let randomColor;
let score = 0;

// Generate a random number between min and max
function generateRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

// Generate a random RGB color
function generateRandomColor() {
    const red = generateRandomNumber(0, 255);
    const green = generateRandomNumber(0, 255);
    const blue = generateRandomNumber(0, 255);

    return `rgb(${red},${green},${blue})`;
}

// Increment the score, store it in localStorage and update the DOM
function incrementScore() {
    score += 1;
    window.localStorage.setItem('score', score); // Store the updated score in localStorage
    scoreContainer.innerText = score; // Update the displayed score
}

// Reset the score, store it in localStorage and update the DOM
function resetScore() {
    score = 0;
    window.localStorage.setItem('score', score); // Store the reset score in localStorage
    scoreContainer.innerText = score; // Update the displayed score
}

// Check if the selected color matches the correct one
function checkResult(el) {
    const selectedColor = el.target.style.backgroundColor;
    if (selectedColor === randomColor) {
        incrementScore(); // Increment score if the correct answer is chosen
    } else {
        resetScore(); // Reset the score if the wrong answer is chosen
    }
    startGame(); // Start a new round
}

// Start the game by generating new colors and options
function startGame() {
    // Retrieve the score from localStorage, or set it to 0 if not found
    score = Number(window.localStorage.getItem('score')) || 0;
    scoreContainer.innerText = score; // Display the retrieved score

    options.innerHTML = ''; // Clear previous options
    randomColor = generateRandomColor(); // Generate a new color to guess
    colorCode.innerText = randomColor; // Display the RGB code to guess

    // Randomly choose one of the 6 divs to hold the correct color
    const ansIndex = generateRandomNumber(0, 5);
    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.addEventListener('click', checkResult); // Add click event
        div.style.backgroundColor = i === ansIndex ? randomColor : generateRandomColor(); // Set correct or random color
        options.append(div); // Append the div to the options container
    }
}

// Start the game when the page loads
window.addEventListener('load', () => startGame());
