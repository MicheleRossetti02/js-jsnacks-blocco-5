
const zucchine = [

    {
        'varietà': "trombetta",
        'peso': 10,
        'lunghezza': 7
    },
    {
        //2
        'varietà': "trombetta",
        'peso': 12,
        'lunghezza': 10
    },
    {
        //3
        'varietà': "trombetta",
        'peso': 7,
        'lunghezza': 5
    },
    {
        //4
        'varietà': "trombetta",
        'peso': 10,
        'lunghezza': 5
    },
    {
        //5
        'varietà': "trombetta",
        'peso': 14,
        'lunghezza': 7
    },
    {
        //6
        'varietà': "trombetta",
        'peso': 10,
        'lunghezza': 7
    },
    {
        //7
        'varietà': "trombetta",
        'peso': 12,
        'lunghezza': 6
    },
    {
        //8
        'varietà': "trombetta",
        'peso': 9,
        'lunghezza': 8
    },
    {
        //9
        'varietà': "trombetta",
        'peso': 4,
        'lunghezza': 3
    },
    {
        //10
        'varietà': "trombetta",
        'peso': 16,
        'lunghezza': 11
    },
]

//sommiamo i vari elemnti
let somma_peso = 0;

zucchine.forEach((zucchina) => {
    somma_peso += zucchina.peso 
});
console.log(somma_peso);
