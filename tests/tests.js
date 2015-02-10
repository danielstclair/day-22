var expect = chai.expect;

describe('max', function(){
	it('Should take 2 arguments', function(){
		expect(function(){max()}).to.throw('There were no arguments.');
		expect(function(){max(1)}).to.throw('You need to put two numbers.');
		expect(function(){max(1,2,3)}).throw('You can only put two numbers.');
	});

	it('Both arguments should be numbers', function(){
		expect(function(){max('hey', 1)}).to.throw('The first argument is not a number.');
		expect(function(){max(2, 'hey')}).to.throw('The second argument is not a number.');
		expect(function(){max(2, true)}).to.throw('The second argument is not a number.');
		expect(function(){max(true, 2)}).to.throw('The first argument is not a number.');
		expect(function(){max({obj='hey'}, 3)}).to.throw('The first argument is not a number.');
		expect(function(){max([2, [2,4]])}).to.throw('The second argument is not a number.');
	});

	it('Should return the largest number', function(){
		expect(function(){max(1,2)}).to.equal(2);
		expect(function(){max(-2,-5)}).to.equal(-2);
		expect(function(){max(2.3, 2.4)}).to.equal(2.4);
	});
});

describe('maxOfThree', function(){
	it('Should take 3 arguments', function(){
		expect(function(){maxOfThree()}).to.throw('There were no arguments.');
		expect(function(){maxOfThree(1)}).to.throw('You need to put three numbers.');
		expect(function(){maxOfThree(1,2)}).to.throw('You need to put three numbers.');
		expect(function(){maxOfThree(1,2,3,4)}).to.throw('You can only put three numbers.');
	});

	it('All arguments should be numbers', function(){
		expect(function(){maxOfThree('hey', 1, 2)}).to.throw('The first argument is not a number.');
		expect(function(){maxOfThree(2, 'hey', 2)}).to.throw('The second argument is not a number.');
		expect(function(){maxOfThree(2, 2, 'hey')}).to.throw('The third argument is not a number.');
		expect(function(){maxOfThree(2, true, 3)}).to.throw('The second argument is not a number.');
		expect(function(){maxOfThree(true, 2, 3)}).to.throw('The first argument is not a number.');
		expect(function(){maxOfThree(1, 2, true)}).to.throw('The third argument is not a number.');
		expect(function(){maxOfThree({obj='hey'}, 3, 2)}).to.throw('The first argument is not a number.');
		expect(function(){maxOfThree([2, [2,4]], 3)}).to.throw('The second argument is not a number.');
	});

	it('Should return the largest number', function(){
		expect(function(){maxOfThree(1,2,3)}).to.equal(3);
		expect(function(){maxOfThree(-2,-5, -3)}).to.equal(-2);
		expect(function(){maxOfThree(2.3, 2.4, 2.2)}).to.equal(2.4);
		expect(function(){maxOfThree(1,3,3)}).to.equal(3);
	});
});

describe('isVowel', function(){
	it('Should take 1 argument', function(){
		expect(function(){isVowel()}).to.throw('You must enter a vowel.');
		expect(function(){isVowel('a', 'b')}).to.throw('You can only enter one letter.');
	});

	it('Should only take a string', function(){
		expect(function(){isVowel(1)}).to.throw('You must enter a string.');
		expect(function(){isVowel([1,2])}).to.throw('You must enter a string.');
		expect(function(){isVowel({obj='hey'})}).to.throw('You must enter a string.');
		expect(function({isVowel(true)})).to.throw('You must enter a string.');
	});

	it('Should only take one letter', function(){
		expect(function(){isVowel('ab')}).to.throw('You can only put one letter');
		expect(function(){isVowel('cats')}).to.throw('You can only put one letter');
	});

	it('Should be true only if letter is a vowel', function(){
		expect(function(){isVowel('a')}).to.equal(true);
		expect(function(){isVowel('b')}).to.equal(false);
		expect(function(){isVowel('A')}).to.equal(true);
		expect(function(){isVowel('B')}).to.equal(false);
	});
});

describe('rovarspraket', function(){
	it('Should only take 1 argument', function(){
		expect(function(){rovarspraket()}).to.throw('You must enter an argument.');
		expect(function(){rovarspraket('hey', 'there')}).to.throw('You can only enter one argument.');
	});

	it('Should only take a string', function(){
		expect(function(){rovarspraket(1)}).to.throw('You can only enter a string.');
		expect(function(){rovarspraket(false)}).to.throw('You can only enter a string.');
		expect(function(){rovarspraket([1])}).to.throw('You can only enter a string.');
		expect(function(){rovarspraket({obj=1})}).to.throw('You can only enter a string.');
	});

	it('Should double every consonant and place "o" between them', function(){
		expect(function(){rovarspraket('to')}).to.equal('toto');
		expect(function(){rovarspraket('cat man')}).to.equal('cocatot momanon');
	});
});

describe('sum', function(){
	it('Should only take one array', function(){
		expect(function(){sum()}).to.throw('You must enter an argument.');
		expect(function(){sum([1,2], [1,2])}).to.throw('You can only enter one argument.');
	});

	it('Should only take an array', function(){
		expect(function(){sum(1)}).to.throw('You can only enter an array.');
		expect(function(){sum(true)}).to.throw('You can only enter an array.');
		expect(function(){sum('1')}).to.throw('You can only enter an array.');
		expect(function(){sum({obj= 1})}).to.throw('You can only enter an array.');
	})

	it('Should only have numbers inside of array', function(){
		expect(function(){sum([true])}).to.throw('Array can only hold numbers.');
		expect(function(){sum(['1'])}).to.throw('Array can only hold numbers.');
		expect(function(){sum([{obj=1}])}).to.throw('Array can only hold numbers.');
	});

	it('Should return all numbers added together', function(){
		expect(function(){sum([1,2,3])}).to.equal(6);
		expect(function(){sum([1])}).to.equal(1);
	});
});

describe('multiply', function(){
	it('Should only take one array', function(){
		expect(function(){multiply()}).to.throw('You must enter an argument.');
		expect(function(){multiply([1,2], [1,2])}).to.throw('You can only enter one argument.');
	});

	it('Should only take an array', function(){
		expect(function(){multiply(1)}).to.throw('You can only enter an array.');
		expect(function(){multiply(true)}).to.throw('You can only enter an array.');
		expect(function(){multiply('1')}).to.throw('You can only enter an array.');
		expect(function(){multiply({obj= 1})}).to.throw('You can only enter an array.');
	})

	it('Should only have numbers inside of array', function(){
		expect(function(){multiply([true])}).to.throw('Array can only hold numbers.');
		expect(function(){multiply(['1'])}).to.throw('Array can only hold numbers.');
		expect(function(){multiply([{obj=1}])}).to.throw('Array can only hold numbers.');
	});

	it('Should return all numbers added together', function(){
		expect(function(){multiply([5,5])}).to.equal(25);
		expect(function(){multiply([1])}).to.equal(1);
	});
});

describe('reverse', function(){
	it('Should only take one argument', function(){
		expect(function(){reverse()}).to.throw('You must enter an argument.');
		expect(function(){reverse('hola', 'amigo')}).to.throw('You can only enter one argument.');
	});

	it('Should only take a string', function(){
		expect(function(){reverse(1)}).to.throw('You must enter a string.');
		expect(function(){reverse(true)}).to.throw('You must enter a string.');
		expect(function(){reverse(['hola'])}).to.throw('You must enter a string.');
		expect(function(){reverse({obj='yeah writing tests!'})}).to.throw('You must enter a string.');
	});

	it('Should reverse the string', function(){
		expect(function(){reverse('hola')}).to.equal('aloh');
		expect(function(){reverse('hola amigo')}).to.equal('ogima aloh');
	});
});

describe('findLongestWord', function(){
	it('Should take only one array', function(){
		expect(function(){findLongestWord()})to.throw('You must enter an argument.');
		expect(function(){findLongestWord(['eloquent'], ['testing'])})to.throw('You must only enter one array.');
	});

	it('Should only have an array in the argument', function(){
		expect(function(){findLongestWord(1)}).to.throw('You can only enter an array');
		expect(function(){findLongestWord(true)}).to.throw('You can only enter an array');
		expect(function(){findLongestWord('uno')}).to.throw('You can only enter an array');
		expect(function(){findLongestWord({obj='this aint gonna work'})}).to.throw('You can only enter an array');
	});

	it('Should only have strings inside of the array', function(){
		expect(function(){findLongestWord([1, 'hola'])}).to.throw('You must only have strings inside the array.');
		expect(function(){findLongestWord([true, 'hola'])}).to.throw('You must only have strings inside the array.');
		expect(function(){findLongestWord([['hey there'], 'hola'])}).to.throw('You must only have strings inside the array.');
		expect(function(){findLongestWord([{obj='yeah yeah yeah honey boo'}, 'hola'])}).to.throw('You must only have strings inside the array.');
	}),

	it('Should return the longest word', function(){
		expect(function(){findLongestWord(['hook', 'terrific'])}).to.equal('terrific');
	});
});

describe('filterLongWords', function(){
	it('Should only take two arguments', function(){
		expect(function(){filterLongWords()}).to.throw('You must enter an argument.');
		expect(function(){filterLongWords(['hey', 'buddy'], 2, 'hey again')}).to.throw('You must only have two arguments.');
	});

	it('The first argument must be an array', function(){
		expect(function(){filterLongWords(2, 3)}).to.throw('The first argument must be an array.');
		expect(function(){filterLongWords(true, 3)}).to.throw('The first argument must be an array.');
		expect(function(){filterLongWords('hey', 3)}).to.throw('The first argument must be an array.');
		expect(function(){filterLongWords({obj='hey'}, 3)}).to.throw('The first argument must be an array.');
	})

	it('There must only be strings inside the array', function(){
		expect(function(){filterLongWords([true], 3)}).to.throw('There must only be a string in the array.');
		expect(function(){filterLongWords([1], 3)}).to.throw('There must only be a string in the array.');
		expect(function(){filterLongWords([{obj='true'}], 3)}).to.throw('There must only be a string in the array.');
		expect(function(){filterLongWords([true, 'hey'], 3)}).to.throw('There must only be a string in the array.');
	});

	it('The second argument must only me a number', function(){
		expect(function(){filterLongWords(['hey'], true)}).to.throw('There must only be a number for the second argument.');
		expect(function(){filterLongWords(['hey'], 'true')}).to.throw('There must only be a number for the second argument.');
		expect(function(){filterLongWords(['hey'], [2])}).to.throw('There must only be a number for the second argument.');
		expect(function(){filterLongWords(['hey'], {obj=2})}).to.throw('There must only be a number for the second argument.');
	});

	it('Should return words longer than interger', function(){
		expect(function(){filterLongWords(['hey', 'amigos', 'test'], 5)}).to.equal('amigos');
	});
});

describe('charFreq', function(){
	it('Should only take one argument', function(){
		expect(function(){charFreq()}).to.throw('You must enter an argument.');
		expect(function(){charFreq('ayayay', 'ay caramba')}).to.throw('You must enter only one argument.');
	})

	it('Should only accept strings as argument', function(){
		expect(function({charFreq(true)})).to.throw('You can only enter a string.');
		expect(function({charFreq(1)})).to.throw('You can only enter a string.');
		expect(function({charFreq({obj=true})})).to.throw('You can only enter a string.');
		expect(function({charFreq(['true'])})).to.throw('You can only enter a string.');
	})

	it('Should return character frequency of string', function(){
		expect(function(){charFreq('Ayayay')}).to.equal({a: 2, y: 3, A: 1});
	});
});






























