function greeating() {
    let userName = 'Johan';

    function displayUserName() {
        return 'Hello : Johan';
    }

    return displayUserName();
}

const g = greeating();
console.log(g);
//console.log(g());

