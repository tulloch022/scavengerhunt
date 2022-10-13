//Determine which clue currently showing

const getCurrentClue = () => {
    const currentClue = (document.querySelector('#banner').innerText);
    return currentClue;
}



//Event: Display Hint


//Event: Go to next clue

const onSubmit = () => {
    let password = '';
    let nextPage = '';
    const currentClue = getCurrentClue();
    console.log(currentClue)
    if (currentClue === 'Your First Clue') {
        password = 'Router'
        nextPage = 'Clue2.html';
    } else if (currentClue === 'Your Second Clue') {
        password = 'that'
        nextPage = 'Clue3.html';
    } else if (currentClue === 'Your Third Clue') {
        password = 'that'
        nextPage = 'Clue4.html';
    } else if (currentClue === 'Your Fourth Clue') {
        password = 'that'
        nextPage = 'Clue5.html';
    } else if (currentClue === 'Your Fifth Clue') {
        password = 'that'
        nextPage = 'Clue6.html';
    } else if (currentClue === 'Your Sixth Clue') {
        password = 'that'
        nextPage = 'Clue7.html';
    } else if (currentClue === 'Your Seventh Clue') {
        password = 'that'
        nextPage = 'Clue8.html';
    } else if (currentClue === 'Your Eighth Clue') {
        password = 'that'
        nextPage = 'Clue9.html';
    } else if (currentClue === 'Your Ninth Clue') {
        password = 'that'
        nextPage = 'Clue10.html';
    } else if (currentClue === 'You did it') {
        password = 'that'
        nextPage = 'Congrats.html';
    }
    const enteredPassword = document.querySelector('#password').value;
    if (enteredPassword === password) {
        window.location.href=nextPage;
    } else {
        alert ('That is not right!');
    }
};



