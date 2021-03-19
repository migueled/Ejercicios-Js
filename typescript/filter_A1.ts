let myArray = new Array ('1', '2', '3')
myArray.reverse()
// transpone el arreglo para que myArray = ["3", "2", "1"]
let myArray2 = new Array('a', 'b', 'c', 'd', 'e')
myArray2 = myArray2.slice(1, 4) 
// comienza en el índice 1 y extrae todos los elementos
// hasta e
let a1 = ['a', 10, 'b', 20, 'c', 30]
let a2 = a1.filter(function(item) { return typeof item === 'number'; })
console.log(a2)  // registra [10, 20, 30]