//Event: Go to next clue

const currentClue = () => {
    return querySelector('#banner').value;
}

const onSubmit = () => {
    const password = 'this';
    const enteredPassword = document.querySelector('#password').value;
    if (enteredPassword === password) {
        window.location.href="/Users/kevintulloch/Projects/ScavengerHunt/Clue2.html";
    } else {
        alert ('That is not right!');
    }
};



