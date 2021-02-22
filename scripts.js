/* Rockeseat Discover Curso - Desafio: Sistema familiar. Criar 1 objeto com 2 propriedades do tipo array e uma função 
que irá calcular o total de ganhos menos despesas indicando valor e se o saldo é positivo ou negativo*/ 
/* Rockeseat Discover Course - Challenge:Family system. Create 1 object with 2 properties and a function
which will calculate the total earnings minus expenses indicating the amount and whether the balance is positive or negative */ 

let  familyRevenue = {
incomeFamily: [5000.74, 4002.65],
expenseFamily: [2000, 1500.89, 2000, 600, 1000, 1500.45]
}
function sum (calculation) {
    let total = 0;
    for (let value of calculation) {
        total += value
    }
    return total
}
function sumTotal(){
    const incomeFamily =  sum(familyRevenue.incomeFamily);
    const expenseFamily = sum(familyRevenue.expenseFamily); 
    const total = incomeFamily - expenseFamily;
    const positive = total >= 0
    let message = "negative"

    if (positive) {
        message = "positive"
    }
    console.log(`Your balance is ${message}: R$ ${total.toFixed(2)}!`)
}

sumTotal ()