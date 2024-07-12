/* const country = 'Bangladesh';
const age = 20;
const inIndependent = true;
const friends = ['sajib', 'mehedi', 'asif','mafuz', 'shovo'];
const phone = {brand: 'honor', price: 45000, ram: '8gb'};

console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(inIndependent));

// not use this array check 
// console.log(typeof(friends));

// right way check value in array 
console.log(Array.isArray(friends));
console.log(typeof(phone));
 */


// const num = [13, 12, 23, 45, 48, 30, 33, 56, 90];

// old system chack value in arrary 
// if (num.indexOf(30) !== -1)  {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// update system chack in array 
// console.log(num.includes(83));

// for array add the other array only 
// const num1 = [22, 23, 43, 65, 12, 9, 19, 48];
// const num2 = [223, 122, 456, 116];
// const num3 = [3000, 4500];

// console.log(num1.concat(num2, num3));


// trim the array item in first item values 
const num = [13, 12, 23, 45, 48, 30, 33, 56, 90];
// const numslice = num.slice(0, 3);
// console.log(numslice);
// console.log(num);

// trim select in array line 
// const numRemove = num.splice(5, 1);
// console.log(numRemove);

// number added in array 
const addnum = num.splice(4, 1, 2000,222,2223,866);
console.log(num);





