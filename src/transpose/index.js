/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

    let result = []; //since we are return an array of our transposed items, we need to declare a container for them

    let array_len = array.length; // to avoid continous repeatation of array.length method
    let content_len = array[0].length; //this line of code helps us to store the length of each items in our 2D array 

    for (let m =0; m<content_len; m++)  {
        result.push([]); // this is to say create append an empty list content_len times
    }

    for ( let i=0; i<array_len; i++){ // we iterate through the contents of our array array_len times

        for (let j=0; j<content_len; j++) { 
            
            result[j].push(array[i][j])
        }
        
    }

    return result;

}

module.exports = transpose;
