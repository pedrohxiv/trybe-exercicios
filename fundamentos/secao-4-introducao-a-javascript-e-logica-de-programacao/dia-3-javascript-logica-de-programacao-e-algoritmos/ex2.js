let word = 'tryber';
let newWord = '';
for (let index = word.length - 1;index >= 0; index-=1){
    newWord += word[index];  
}
console.log(newWord);