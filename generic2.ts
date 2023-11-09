// interface Lengyhwise {
//   length: number;
// }

// function printLength<T extends Lengyhwise>(arg: T): number {
//   return arg.length;
// }

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

getProperty(myObject, "b");
// K === 'a' | 'b' | 'c'
