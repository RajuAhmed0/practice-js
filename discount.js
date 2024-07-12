/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets price will be 100 ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/

function calculate(ticketQuantity) {
    const first100 = 100;
    const Second100 = 90;
    const third100 = 70;
    if (ticketQuantity <= 100) {
        const ticketPrice = ticketQuantity * first100;
        return ticketPrice;
    }
else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100;
    const morethan100  = ticketQuantity - 100;
    const Second100Price = morethan100 * Second100;
    const totalprice = first100Price + Second100Price;
    return totalprice;
}
else{
    const first100Price = 100 * first100;
    const Second100Price = 100 * Second100;
    const morethan100  = ticketQuantity - 200;
    const third100Price = morethan100 * third100;
    const totalprice = first100Price + Second100Price + third100Price;
    return totalprice;
}

}
const totalprice = calculate(201);
console.log(totalprice);