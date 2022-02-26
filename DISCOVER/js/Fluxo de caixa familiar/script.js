
//receitas e depesas da familia

let family = {
    incomes: [1000,2000, 250.43, 360,67, 30 ],
    expenses: [320, 34, 128, 45, 176, 87, 30000]
}

//function para calculo 

function sum(array){

    let total  = 0;

    for (let value of array){
        total += value

    }    
    
    return total 
}



function calculateBalance () {
    const calculateIncomes = sum(family.incomes)
    const calculateExpense = sum(family.expenses)
    
    const total= calculateIncomes - calculateExpense
    
    const itsok = total >= 0 

    let balanceText = "negativo"
    
    if(itsok) {
        balanceText= "positivo"

    }

    console.log(`Seu saldo é  ${balanceText}: R${total.toFixed(2)}R$`)

}

calculateBalance()
