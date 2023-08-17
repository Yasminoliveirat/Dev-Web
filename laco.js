//utilizando  if 

function se(num){
    if (num < 10){
        console.log('Você é uma criança')
    }
}

//utilizando o if..else
function senao(ano){
    if(ano < 1900){
        console.log('Época de guerras internas no pais')
    } else if (ano >= 1900 && ano < 2000){
        console.log('Primeira e Segunda Guerra Mundial')
    } else {
        console.log('Guerra da Russia vs Ucrânia')
    }
}

// laço for (para)

function para(){
    for(let i=0;i<=10;i++){
        console.log('Contagem ' + i )
    }
}

function para(n){
    for(let i=0;i<10;i++){
        if (n == i){
            console.log('Você escolheu o número  ' + i )
        }
    }
}

//Laço while (enquanto)

function enquanto(n){
    let i=0
    while(i < 10){
        if (n == i) {
            console.log('Você escolheu o número no while  ' + i )
            
        }
    i++
    }
}

function enquanto(n){
    let i=0
    while(i < 10){
        console.log('Você escolheu o número no while  ' + i )
        i++
    }
}

// laço do..while (faça enquanto)
function facaenquanto(n){
    let i = 0
    do {
        if (n== i){
            console.log ('Você escolheu o número ' + i)
        }
        i++
    } while (i <10);
}

//Laço switch case (repetidor)
function caso(n){
    switch(n){
        case 1: console.log ('Este é o caso 1 ')
        break
        case 2: console.log ('Este é o caso 2 ')
        break
        case 3: console.log ('Este é o caso 3 ')
        break
        default:
        console.log ('Fora do vetor')
    }
}

