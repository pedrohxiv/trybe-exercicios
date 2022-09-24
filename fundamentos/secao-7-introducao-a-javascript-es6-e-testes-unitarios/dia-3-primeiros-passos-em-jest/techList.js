function techList(arr, str) {
  const newArr = [];
  if (arr.length === 0) {
    return "Vazio!";
  }
  arr.sort();
  for (let index = 0; index < arr.length; index += 1) {
    newArr.push({ tech: arr[index], name: str });
  }
  return newArr;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

module.exports = techList;
