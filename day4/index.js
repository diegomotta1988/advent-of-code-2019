const input = `153517-630395`;
const [firstNumber, lastNumber] = input.split('-');
const repeatedDigitRegExp = /([\d])\1{1}/;

const moreThan2RepeatedRegExp = /([\d])\1{2,3}/;

let count = 0;
for (let i = firstNumber; i < lastNumber; i++) {
  if (passesCondition(i.toString())) {
    count++;
  }
}
console.log(count);

function passesCondition(number) {
  const match = number.match(moreThan2RepeatedRegExp);

  const stringToCheck = match ? number.replace(match[0], '') : number;
  if (!repeatedDigitRegExp.test(stringToCheck)) {
    return false;
  }
  for (let j = 0; j < number.length; j++) {
    if (number[j] < number[j - 1]) {
      return false;
    }
  }
  return true;
}
