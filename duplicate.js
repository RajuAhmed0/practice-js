const friendsName = ['sajib', 'raju', 'mehedi', 'asif', 'sajib', 'shovo', 'mehedi', 'raju', 'sakib'];
let removeDuplicate = [];

for (let i = 0; i < friendsName.length; i++) {
    const duplicateName = friendsName[i];
    if (removeDuplicate.includes(duplicateName) === false) {
        removeDuplicate.push(duplicateName);
    }
}
console.log(removeDuplicate);