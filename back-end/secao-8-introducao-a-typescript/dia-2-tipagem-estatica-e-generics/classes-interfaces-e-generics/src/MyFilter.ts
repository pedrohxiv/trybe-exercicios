export default function myFilter<T>(
  array: Array<T>,
  callback: (value: T, index?: number, array?: Array<T>) => boolean,
): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
