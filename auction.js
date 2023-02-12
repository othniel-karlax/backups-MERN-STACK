// first installment

let Chitvalue=100000
let totalmonth=20
let compercent= 5/100

let installment = Chitvalue/totalmonth
let commission = Chitvalue * (parseInt(compercent)/100)

console.log("installment",installment, "commission", commission)


// second installment

let Amount=Chitvalue*(30/100)
let Amtvalue=Chitvalue-Amount
let Installment=Amtvalue/totalmonth
let commissions=Amtvalue*(parseInt(compercent)*100)/100

console.log("installment",Installment, "commission", commissions)

// remaining installments

let oldvalue=Chitvalue-Amount
let Amountvalue=(oldvalue*100)/100
let installmentss=((Amountvalue/totalmonth)*100)/100
let intrest=((100-Amountvalue/Chitvalue)*100)/100

console.log("installment",installmentss,"intrest",intrest)

