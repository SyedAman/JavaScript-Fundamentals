const stringOfLetters = 'BCABA';

function getFirstRecurringCharacter(string) {
	const arrayOfCharacters = string.split('');
	const uniqueCharacters = [];

	for (let index = 0; index < arrayOfCharacters.length; index++) {
		const character = arrayOfCharacters[index];
		if (uniqueCharacters.includes(character)) return character;

		uniqueCharacters.push(character);
	}
}

console.log(getFirstRecurringCharacter(stringOfLetters)); // 'B'
