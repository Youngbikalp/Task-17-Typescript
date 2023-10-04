// type is used to define a custom type in TS
// AddFunction is a custom type definition
// AddFunction takes in 2 parameters, a and b
// the arrow => represents the function return value type of 'number'
type AddFunction = (a: number, b: number) => number;

// add should be a type annotated variable of type 'AddFunction' which is a
// type function
const add: AddFunction = (a, b) => {
  return a + b;
};

export const sum = add(13, 19);
