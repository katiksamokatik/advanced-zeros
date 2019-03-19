module.exports = function getZerosCount(number, base) {
  // your implementation
  let arr = [];
  let counter = 0;

    if (base > 0 && base != 1) {
      for (let i = 2; i <= base; i++) {
        while (base % i == 0 && base > 1) {
          arr.push(i);
          base = base / i;
        }
          if(base / i == 1){
           arr.push(base);
          }
      }
    } else if(base == 1){
      return 1;
    }
  
  
let max = Math.max(...arr);
  
let countOfMax = 0;
for(let k = 0; k < arr.length; ++k){
    if(arr[k] === max)
        countOfMax++;
}
  
  for(let j = max; number/j >= 1; j *= max) {
    counter += Math.floor(number / j);
  }    
  return Math.floor(counter / countOfMax);
}
