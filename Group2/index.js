function calculateDiscount(totalPurchase, isMember){
    let discount = 0;

    if (totalPurchase > 100 && isMember) {
        discount = 0.2;
    } else if (totalPurchase > 50) {
        discount = 0.10; 
    }  
    
    return totalPurchase - (totalPurchase * discount);
   
}

console.log(calculateDiscount(120, true));
console.log(calculateDiscount(60, false));