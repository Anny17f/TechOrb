function removeDuplicates(arr) {
  const uniqueSet = new Set(arr);
  const uniqueArray = [...uniqueSet];
  return uniqueArray;
}

const inputArray = [1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8];
const outputArray = removeDuplicates(inputArray);

console.log(outputArray);
