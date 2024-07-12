// const mySelf = 'I am a contain creator';
// const selfOfArray = mySelf.split('') 

// let number = selfOfArray.length-1;
// let newArray = [];
// while (number <= selfOfArray.length && number >= 0) {
//     const characters = selfOfArray[number];
//     newArray.push(characters)
//     number--;
// }

// const newString = newArray.join('')
// console.log(newString);


// let newArray = [];
// for (let i = selfOfArray.length - 1; i <= selfOfArray.length && i >= 0;  i--) {
//     const characters = selfOfArray[i];
//         newArray.push(characters)
// }
// const newString = newArray.join('')
// console.log(newString); 



function reverseWord(other) {
    const selfOfArray = other.split('') 
    
    let newArray = [];

for (let i = selfOfArray.length - 1; i <= selfOfArray.length && i >= 0;  i--) {
    const characters = selfOfArray[i];
        newArray.push(characters)
}
const newString = newArray.join('');
return newString;
}
const mySelf = 'I am a youtuber';
const reverse = reverseWord(mySelf);
console.log(reverse);




