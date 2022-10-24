

//array zucchine
const zucchine = [

    {
        'varietà': "trombetta",
        'peso': 10,
        'lunghezza': 17
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
        'lunghezza': 17
    },
    {
        //7
        'varietà': "trombetta",
        'peso': 12,
        'lunghezza': 16
    },
    {
        //8
        'varietà': "trombetta",
        'peso': 9,
        'lunghezza': 18
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

const zucchine_corte =[]
const zucchine_lunghe = []

zucchine.forEach((zucchina) => {
    
    if (zucchina.lunghezza > 15) {
        zucchine_lunghe.push(zucchina)
    } else{
        zucchine_corte.push(zucchina)

    }
 

});
console.log(zucchine_lunghe);
console.log(zucchine_corte);
