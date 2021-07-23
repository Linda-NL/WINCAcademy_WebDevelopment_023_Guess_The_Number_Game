// 1. USER INTERACTION - algemene begroeting en naam vragen
const username = prompt(`Welkom! Wat is je naam?`)

//internal check
console.log(`Dit is de opgegeven naam: ${username}`);

// 2. USER INTERACTION - begroeting met naam
const greetUser = alert(`Hallo ${username}!`)

// 3. BACK-END OF THE GAME - het te raden nummer bepalen
/*
// willekeurig getal van 0 tot 25
let lowestNumber = 0;         
let highestNumber = 25;
*/
// bonus replacement: userdefined numbers
let lowestNumberString = prompt(`Je gaat een nummer raden. Wat is het laagste nummer dat je wilt kunnen raden?`);
let highestNumberString = prompt(`Wat is het hoogste nummer tot waar je wilt kunnen kunnen raden?`);

let lowestNumber = parseInt(lowestNumberString);
let highestNumber = parseInt(highestNumberString);

console.log(`${username} raadt een nummer van ${lowestNumber} (type: ${typeof lowestNumber}) tot ${highestNumber} (type: ${typeof highestNumber})`);

//defining the function
const getRandomNumber = function (lowestNumber, highestNumber) {
    const randomNumber = Math.floor(Math.random() * highestNumber) + lowestNumber;
    return randomNumber;
};

// calling the function
const randomNumber = getRandomNumber(lowestNumber, highestNumber);

//internal check
console.log(`Dit is het gegenereerde nummer: ${randomNumber} (type: ${typeof randomNumber})`);

// 4. USER INTERACTION - begin het spel door een input
let userNumber = prompt(`Het spel begint! ${username}, je kunt beginnen met raden. Voer een nummer in van ${lowestNumber} tot ${highestNumber} en druk op enter.`)

//internal check
console.log(`Dit is het eerste geraden nummer: ${userNumber}`);

// 5. BACK-END OF THE GAME - stap 5: checken of het nummer goed is
const checkGuess = function (userNumber, randomNumber) {
    if (userNumber == randomNumber) {                               // met === wordt de output altijd false. Ik heb geen idee waarom... Beiden zijn van type 'number'
        return true;
    } else {
        return false;
    };
};

// 6. USER INTERACTION - geef een reactie terug en herhaal game indien nodig
for (i = 4; i > 0; i--) {
    let guess = checkGuess(userNumber, randomNumber);
    console.log(`Het geraden nummer is: ${guess}`);
    if (guess === true) {
        alert(`Gefeliciteerd ${username}! Je hebt het juiste nummer geraden.`);
        i = 0;
    } else if (guess === false) {
        alert(`Helaas ${username}, dat is niet juist.`);
        userNumber = prompt(`Je kunt nog ${i} keer raden. Voer opnieuw een nummer in van ${lowestNumber} tot ${highestNumber} en druk op enter.`);
        console.log(`Dit is het nieuwe geraden nummer: ${userNumber}`);
    };
    if (guess === false && i === 1) {
        alert(`Jammer, verloren! Het juiste nummer was ${randomNumber}. Volgende keer beter ${username} :)`);
    };
};

// 7. USER INTERACTION - einde spel
const endMessage = alert(`Het spel is nu afgelopen. Tot ziens ${username} & tot de volgende keer :)`);