// the starting array
const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

// here the array is copied, without the first element
const copyWithoutFirstElement = arrayOfLetters.slice(arrayOfLetters.length - 1, arrayOfLetters.length);

// arrayOfLetters is unchanged
console.log(arrayOfLetters) // ['a', 'b', 'c', 'd', 'e', 'f']

// and copyWithoutFirstElement contains the letters from b to f
console.log(copyWithoutFirstElement) // ['b', 'c', 'd', 'e', 'f']