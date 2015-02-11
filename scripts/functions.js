/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    var largest = null;

    if(arguments.length === 0){
        throw 'There were no arguments.';
    } else if(arguments.length === 1){
        throw 'You need to put two numbers.';
    } else if(arguments.length > 2){
        throw 'You can only put two numbers.';
    }

    if(!_.isNumber(a)){
    	throw 'The first argument is not a number.';
    } 
    if(!_.isNumber(b)){
    	throw 'The second argument is not a number.';
    }

    if(a === b){
    	largest = a;
    } else if (a>b){
    	largest = a;
    } else {
    	largest = b;
    }

    return largest;
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    var largest = null;

    if(arguments.length < 3){
    	throw 'You need to put three numbers.';
    } else if (arguments.length > 3){
    	throw 'You can only put three numbers.';
    }

    if(!_.isNumber(a)){
    	throw 'The first argument is not a number.';
    } else if(!_.isNumber(b)){
    	throw 'The second argument is not a number.';
    } else if(!_.isNumber(c)){
    	throw 'The third argument is not a number.'
    }

    if(a === b && a === c){
    	largest = a;
    } else if (a > b && a > c){
    	largest = a;
    } else if (b > a && b > c){
    	largest = b;
    } else {
    	largest = c;
    }

    return largest;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(letter){
    "use strict";
    var isAVowel = null;

    if( arguments.length < 1){
    	throw 'You must enter a letter.';
    } else if ( arguments.length > 1){
    	throw 'You can only enter one letter.';
    }

    if(!_.isString(letter)){
    	throw 'You must enter a string.';
    }

    if(letter.length > 1){
    	throw 'You can only put one letter';
    }

    switch(letter){
    	case 'a':
    	case 'e':
    	case 'i':
    	case 'o':
    	case 'u':
    	case 'A':
    	case 'E':
    	case 'I':
    	case 'O':
    	case 'U':
    		isAVowel = true;
    		break;
    	default:
    	isAVowel = false
    }

    return isAVowel;
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var rovarSpraket = "";

    if(arguments.length < 1){
    	throw 'You must enter an argument.';
    } else if(arguments.length > 1){
    	throw 'You can only enter one argument.'
    }

    if(!_.isString(phrase)){
    	throw 'You can only enter a string.';
    }

    for (var i = 0; i < phrase.length; i++) {
    	if(isVowel(phrase[i])){
    		rovarSpraket += phrase[i];
    	} else if (phrase[i] === " "){
    		rovarSpraket += " ";
    	} else {
    		rovarSpraket += phrase[i] + 'o' + phrase[i];
    	}
    };

    return rovarSpraket;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(a){
    "use strict";

    var sumOfA = null;
    
    if(arguments.length < 1){
    	throw 'You must enter an argument.';
    } else if (arguments.length > 1) {
    	throw 'You can only enter one argument.';
    }

    if(!_.isArray(a)){
    	throw 'You can only enter an array.';
    }

    for (var nums in a){
    	if (!_.isNumber(a[nums])){
    		throw 'Array can only hold numbers.';
    	} else {
    		sumOfA += a[nums];
    	}
    }

    return sumOfA;
}

function multiply(a){
    "use strict";
    var total = null;

    if(arguments.length < 1){
        throw 'You must enter an argument.';
    } else if (arguments.length > 1){
        throw 'You can only enter one argument.';
    }

    if(!_.isArray(a)){
        throw 'You can only enter an array.';
    }

    for(var i = 0; i<a.length; i++){
        if(!_.isNumber(a[i])){
            throw 'Array can only hold numbers.';
        } else if (i === 0){
            total = a[i];
        } else {
            total *= a[i];
        }
    }

    return total;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    var revString = "";

    if(arguments.length < 1){
        throw 'You must enter an argument.';
    } else if(arguments.length > 1){
        throw 'You can only enter one argument.';
    }

    if(!_.isString(string)){
        throw 'You must enter a string.';
    }

    for(var i = (string.length - 1); i>=0; i--){
        revString +=string[i];
    }

    return revString;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var longestWord = null;


    if(arguments.length < 1){
        throw 'You must enter an argument.';
    } else if(arguments.length > 1){
        throw 'You must only enter one array.';
    }

    if(!_.isArray(words)){
        throw 'You can only enter an array';
    }

    for(var key = 0; key < words.length ; key++){
        if(!_.isString(words[key])){
            throw 'You must only have strings inside the array.';
        } else if (words[key].length > longestWord){
            longestWord = words[key].length;
        }
    }

    return longestWord;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var longWords = [];

    if(arguments.length < 2){
        throw 'You must enter two arguments.';
    } else if(arguments.length > 2){
        throw 'You must only have two arguments.';
    }

    if(!_.isArray(words)){
    	throw 'The first argument must be an array.';
    }

    if (!_.isNumber(i)) {
    	throw 'There must only be a number for the second argument.';
    };

    for(var key in words) {
    	if(!_.isString(words[key])){
    		throw 'There must only be a string in the array.';
    	} else if(words[key].length > i){
    		longWords.push(words[key]);
    	}
    }
    return longWords;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
