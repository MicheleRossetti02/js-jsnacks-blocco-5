
const stringa = 'ciao';
const ordinata = [];
const reverse = [];

function word_reverse(word, ordinata, reverse) {
    for (let i = 0; i < word.length; i++) {
        const carattere = word[i];
        ordinata.push(carattere)
        
    }

    for (let i = word.length; i !== -1; i--) {
        const carattere = word[i];
        reverse.push(carattere)
    }
}

word_reverse(stringa,ordinata,reverse);
console.log(ordinata);
console.log(reverse);