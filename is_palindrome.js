const is_palindrome = function(s) {
    

    const splitString = s.split('');

    for (let i = 0; i < splitString.length / 2; i++) {
        let first = splitString[i];
        let last = splitString[splitString.length - 1 - i];

        if (first !== last) {
            return false
        } 
    }
    return true
}
