// Function executes when Start Game button is clicked
function startGame() {

    let playerName: string | undefined = getInputVal('playerName');

    // Calling function 2 times to check the use of function type with logger
    displayScore(10, playerName);
    displayScore(-10, playerName);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

/**
 * Fetch input data
 * @param elementID 
 * @returns input element
 */
function getInputVal(elementID: string): string | undefined {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    // If user enters a value, return the input value, else return undefined
    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

/**
 * Display score of the player
 * @param score 
 * @param playerName - Default parameter, which is optional by default
 * @returns void
 */
function displayScore(score: number, playerName: string = "Math Player"): void {

    // Varible declared as function type, takes one string parameter, returns void
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    // Using the variable(of function type) to call the appropriate function, depending on score
    logger(`Score -> ${score}`);

    const scoreElement: HTMLElement | null = document.getElementById('playerScore');
    scoreElement!.innerText = `${playerName}, your score -> ${score}`;
}

// two functions of same type
// takes one string parameter and returns void
let logMessage = (message: string) => console.log(message);
let logError = (message: string) => console.error(message);
