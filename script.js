const input = document.getElementById('inputNumber');
const answer = document.getElementById('ans');
var select = document.getElementById('typeFunction');

input.addEventListener('input', updateValue);

// console.log(input)

function updateValue (e) {
  let num = e.target.value;
  if (num.split('')[0] === '-' && num.length === 1) {
    return
  }
  if (num < 0) {
    input.value = '1'
    updateTypeFunction()
  } else {
    let integer = num % 1 != 0 ? Math.round(num) : num
    input.value = integer;
    updateTypeFunction()
  }

}

function isPrime (num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function isPerfectSquare (x) {
  let s = parseInt(Math.sqrt(x));
  return (s * s == x);
}

function isFibonacci (n) {
  return isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4);
}


function updateTypeFunction () {
  var option = select.options[select.selectedIndex];
  let ans = option.value === 'isPrime' ? isPrime(input.value) : isFibonacci(input.value)
  answer.textContent = ans ? 'TRUE' : 'FALSE'
}

updateTypeFunction();