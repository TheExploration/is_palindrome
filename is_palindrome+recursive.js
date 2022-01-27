const is_palindrome = (s) => {
    

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

//recursive
const is_palindrome = (LOL) => {
    if (LOL.length === 0 || LOL.length === 1) {
        //for LOL = "a" or ""
        return true     
    }
    if (LOL[0] === LOL[LOL.length - 1]) {
        const gg = LOL.slice(1,-1);
        return is_palindrome(gg)
        //remove the outer 2 characters and put it in the function again
    }
    return false
}