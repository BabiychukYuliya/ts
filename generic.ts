type MixedType = {
  [key: string]: string | number; //індексований тип
};

const userInfo: MixedType = {
  name: "Bob",
  age: 28,
  country: "United States",
};

const bookDescription: MixedType = {
  title: "Alhimic",
  pages: 89,
};

//створити функцію, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку
function reverseValues<K>(items: K[]): K[] {
  return items.reverse();
}

let numbers = reverseValues<number>([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
let strings = reverseValues<string>(["a", "b", "c"]); // ["c", "b", "a]

// Створити функцію, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об'єкта

const student = {
  name: "Jon",
  age: 25,
};
function getProperty<ObjectType, KeyType extends keyof ObjectType>(
  obj: ObjectType,
  key: KeyType
): ObjectType[KeyType] {
  return obj[key];
}
let studentName = getProperty(student, "name");
