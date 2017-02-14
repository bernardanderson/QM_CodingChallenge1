
// The requirements stated it needed to be a function...
var parseThePreamble = () => {
    // The preamble as taken from: https://constitutioncenter.org/interactive-constitution/preamble
    const usPreamble="We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";

    // Initialize the word "counters"
    let letterCount = {
        numberOfT: 0,
        numberOfE: 0,
        numberOfTE: 0
    };

    // Displays the Preamble on the DOM, so you aren't writing it in both the .html and .js files
    $('.preamble').text(usPreamble);

    // Removes the punctuation, gets rid of casing and splits the string into an array of the actual words
    let punctuationLessPreamble = usPreamble.replace(new RegExp(',|\\.', 'g'),"").toLowerCase().split(" ");

    // Cycles through the array, looks for first letter of 't', if found, checks to see if last letter is 'e'
    //  If neither are true, just checks the word for the last letter being 'e'   
    punctuationLessPreamble.forEach((element) => {
    if (element[0] === "t") {
        letterCount.numberOfT++;
        if (element[element.length-1] === "e") {
            letterCount.numberOfE++;
            letterCount.numberOfTE++;
        }
    } else if (element[element.length-1] === "e") {
        letterCount.numberOfE++;
    }
    });

    // Displays the results on the DOM
    $('.word-t').text(letterCount.numberOfT);
    $('.word-e').text(letterCount.numberOfE);
    $('.word-te').text(letterCount.numberOfTE);

    // In case you just want to look at the console instead of the DOM.
    console.log(`Words starting with 'T': ${letterCount.numberOfT}`);
    console.log(`Words ending with 'E': ${letterCount.numberOfE}`);
    console.log(`Words starting with 'T' & ending with 'E': ${letterCount.numberOfTE}`);
}

parseThePreamble();
