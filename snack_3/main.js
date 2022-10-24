
const stringa = 'ciao';
const ordinata = [];
const reverse = [];

function word_reverse(word, ordinata) {
    for (let i = 0; i < word.length; i++) {
        const carattere = word[i];
        ordinata.push(carattere)
        
    }

}

word_reverse(stringa,ordinata);
console.log(ordinata);