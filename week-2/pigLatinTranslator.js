function pigLatinTranslator(text) {
    if (text.length <= 1) {
        return "Input can't be translated.";
    }

    let words = text.split(' ');
    let translatedWords = words.map(word => {
        let firstLetter = word[0];
        let restOfWord = word.slice(1);
        let firstTwoLetters = word.slice(0, 2);
        let restOfWordTwo = word.slice(2);

        if ('aeiou'.includes(firstLetter.toLowerCase())) {
            return word + 'way';
        } else if (!'aeiou'.includes(firstTwoLetters[1].toLowerCase())) {
            return restOfWordTwo + firstTwoLetters + 'ay';
        } else {
            return restOfWord + firstLetter + 'ay';
        }
    });

    return translatedWords.join(' ');
}

console.log(pigLatinTranslator("apple")); // appleway
console.log(pigLatinTranslator("pig latin")); // igpay atinlay
console.log(pigLatinTranslator("grade")); // adegray
console.log(pigLatinTranslator("apple makes phones")); // appleway akesmay honespay
console.log(pigLatinTranslator("")); // Input can't be translated.
console.log(pigLatinTranslator("a")); // Input can't be translated.