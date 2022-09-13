/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    // we first to for have to create an object of key values pairs for all primary conversion parameters

    const conversion = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    let converted= []; //this is a container for our conversion
    
    // we have to iterate through each integer in roman
    for (let i=0; i < roman.length; i++) {

        // here we check if the first digit of roman is greater or less than the subsequent one
        if (conversion[roman[i]] < conversion[roman[i+1]] ) {

            // if lesser, we will just push the result when the second int is substracted from the first
            converted.push(conversion[roman[i+1]] - conversion[roman[i]]);
            i++

            // continue;

        }

        else {
            //if greater
            converted.push(conversion[roman[i]]);
        }
    }

    return(converted.reduce((total, current) => total + current));
}

module.exports = romanToDecimal;
