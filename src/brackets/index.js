const { validateLocaleAndSetLanguage } = require("typescript");

/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid (str)  {

    if(str.length % 2 !== 0) { //the first task of the challenge is to check if the string has an odd length
        return 'invalid';
    }

    let stack = []; //a balanced bracket has for every opening brace, a corresponding closing closing brace
                    //hence there is a need to collect all opening in a stack

    for (let i =0; i < str.length; i++) { // this line of code gives acces to every brace in the input string

        let el = str[i];

        if(el==='{' || el==='[' || el === '(') { // this block check for opening braces, and push them to our stack
            stack.push(el);
        }
        if (el === '}') {
            let retrn = stack.pop(); // all we do here is check if for any opening , there is a corresponding closing

            if(retrn !== '{') {
                return 'invalid';
            }
        }

        if (el === ')') {
            let retrn = stack.pop(); // all we do here is check if for any opening , there is a corresponding closing


            if(retrn !== '(') {
                return 'invalid';
            }
        }

        if (el === ']') {
            let retrn = stack.pop();  // all we do here is check if for any opening , there is a corresponding closing


            if(retrn !== '[') {
                return 'invalid';
            }
        }
    }

    if(stack.length === 0) { // since for any corresponding opening and clsoing brace, we always pop them out
        return 'valid';      // our stack has to be empty for the brackets to be balanced.
    }
    else {
        return 'invalid';
    }
}

module.exports = isValid;
