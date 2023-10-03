interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 23,
};

const logPersonDetails = (log: Person) => {
  console.log(`Name: ${log.name}, Age: ${log.age}`);
};

// logPersonDetails(person);

export { person, logPersonDetails };
