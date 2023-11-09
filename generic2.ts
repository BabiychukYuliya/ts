interface Lengyhwise {
  length: number;
}

function printLength<T extends Lengyhwise>(arg: T): number {
  return arg.length;
}
