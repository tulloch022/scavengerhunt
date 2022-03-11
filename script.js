//Determine which clue currently showing

const getCurrentClue = () => {
    const currentClue = (document.querySelector('#banner').innerText);
    return currentClue;
}




//Event: Go to next clue

const onSubmit = () => {
    const currentClue = getCurrentClue();
    console.log(currentClue)
    const password = 'this';
    const enteredPassword = document.querySelector('#password').value;
    if (enteredPassword === password) {
        window.location.href="/Users/kevintulloch/Projects/ScavengerHunt/Clue2.html";
    } else {
        alert ('That is not right!');
    }
};



