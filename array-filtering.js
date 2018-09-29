var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
function evenNumbers(num){
  return num % 2 == 0;
};

function oddNumbers(num){
  return num %2 != 0;
}
var filtered = numbers.filter(evenNumbers);
var filtered2 = numbers.filter(oddNumbers);

console.log(filtered);
// console.log(filtered2);
