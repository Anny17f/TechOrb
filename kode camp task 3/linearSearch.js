function linearSearch(arr, target){
  for(const str of arr){
    if(str === target){
      return "Yes, the string exists in the array"
    }
  }
  return "No, the string does not exist in the array"
}

const stringArray = ["grape","mango","watermelon","apple"];
const searchString = "mango";
console.log(linearSearch(stringArray, searchString));