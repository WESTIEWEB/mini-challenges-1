const { validateLocaleAndSetLanguage } = require("typescript");

/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid (str) {
    
    let stack = [];
    
    // since balance bracket means for every opening brace, there must be a closing brace
    if (str.length % 2 !==0) {
        return "invalid";
    }
    
    //iterating through every item in str
    for (let c of str) {
        
        // this line of code creates an array of only opening braces
        if ('({['.includes(c)) {
            stack.push(c);
        
        
            // this line of code check if their is an equivalent closing brace for every opneing brace in the stack array.
            if (']})'.includes(c)) {
            
                let check = stack.pop(); //  that is to say for every closing tag ')' , pop out the equivalent opening tag '('.
        
                if (!(c === ')' && check === '(' || c === '}' && check === '{' || c === ']' && check === '[')) {
                     // let check = stack.pop();
                    stack.push(c);

                     // return "invalid";
                
            
             
                    if (stack[stack.length-1] === '') {
                        return "valid";
                     }
                     if (stack.length !==0) {
                        return "invalid";
                    }   
                if( c === '{' && stack.pop() == '{') {
                    return 'invalid';
                }
                if( c === '[' && stack.pop() == '[') {
                    return 'invalid';
                }
                if( c === '(' && stack.pop() == '(') {
                    return 'invalid';
                }
                }
                
                
                else {
                    return "valid";
                }
            }
            
            
                
            
            
        }  

        if (!('[({'.includes(c))){
            return "valid";
        }  
        
    }

       
      

   if(stack.length == 0) {
    return "valid";
   }
    
}

module.exports = isValid;
