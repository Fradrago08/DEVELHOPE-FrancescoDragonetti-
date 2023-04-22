// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// };

// const person2 = person1;

// // Modify the property `firstName` of the `person2` in "Simon".

// console.log(person1);
// console.log(person2);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".
//person2 si riferisce ai vari valori di person1 e non è un oggetto a parte, quindi quando viene cambiato un valore di conseguenza cambieranno entrambi gli oggetti.
console.log(person1);
console.log(person2);
