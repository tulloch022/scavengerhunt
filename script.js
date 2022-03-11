//Event: Go to next clue

document.querySelector('#password-form').addEventListener('submit', e => {
    const password = 'this';
    const enteredPassword = document.querySelector('#password').value;
    if (enteredPassword != password) {
        alert ('That is not right!') 
    } else {
        alert ('Yes!')
    }
});


