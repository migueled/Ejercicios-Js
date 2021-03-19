const myArr=['a','*','l','*','o','H'];

const Filter=myArr.filter( elemento => elemento != '*' ).reverse().join('');

console.log(Filter);