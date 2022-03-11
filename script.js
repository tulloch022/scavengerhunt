//Determine which clue currently showing

const getCurrentClue = () => {
    const currentClue = (document.querySelector('#banner').innerText);
    return currentClue;
}




//Event: Go to next clue

const onSubmit = () => {
    let password = '';
    let nextPage = '';
    const currentClue = getCurrentClue();
    console.log(currentClue)
    if (currentClue === 'Your First Clue') {
        password = 'this'
        nextPage = 'Clue2.html';
    } else if (currentClue === 'Your Second Clue') {
        password = 'that'
        nextPage = 'Clue3.html';
    }
    const enteredPassword = document.querySelector('#password').value;
    if (enteredPassword === password) {
        window.location.href=nextPage;
    } else {
        alert ('That is not right!');
    }
};



