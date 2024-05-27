//=============Question 05 ================//
// for(let i=1;i<=50;i++){
//     if(i%5==0 || i%3==0){
//         console.log(i);
//     }
// }
//==============Question 07 ==================//
//var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// let uniqueArr = [...new Set(numbers)];
// console.log(uniqueArr);

//============== Question 08 ==================//

// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// let largeNumber = 1;
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>largeNumber){
//         largeNumber = numbers[i];
//     }
// }
// console.log(largeNumber);


//==================Question 09 ============//

const payment = [1000,2000,2500]
const cost = 5000;
let totalPayment = 0;
for(let i=0;i<payment.length;i++){
    if(payment[i]>=3000){
       totalPayment += payment[i]-(20/100*payment[i]);
    }else if(payment[i]<3000){
        totalPayment += payment[i];
    }
}
if(totalPayment>=cost){
    console.log(totalPayment-cost);
}else{
    console.log("Earn More");
}
