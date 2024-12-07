'use strict';

const allElementSpan = [...document.querySelectorAll('span')];
const numbersFromSpan = [];

for (const ch of allElementSpan) {
  if (parseInt(ch.innerText)) {
    const stringWithoutComma = ch.innerText.replaceAll(',', '');
    const parseToInt = parseInt(stringWithoutComma);

    numbersFromSpan.push(parseToInt);
  }
}

let totalNum = 0;

for (const num of numbersFromSpan) {
  totalNum += num;
}

let averageNum = Math.round(totalNum / numbersFromSpan.length);

averageNum = numberToDigit(averageNum);
totalNum = numberToDigit(totalNum);

const totalNumSpanElement = document.querySelector('.total-population');
const averageNumSpanElement = document.querySelector('.average-population');

function numberToDigit(num) {
  const stringOfNum = String(num);
  const arrayNumber = [];
  let digit = '';

  for (let i = stringOfNum.length - 1; i >= 0; i--) {
    digit = stringOfNum[i] + digit;

    if (digit.length === 3) {
      arrayNumber.unshift(digit);
      digit = '';
    } else if (i === 0) {
      arrayNumber.unshift(digit);
    }
  }

  return arrayNumber.join(',');
}

totalNumSpanElement.outerHTML = totalNum;
averageNumSpanElement.outerHTML = averageNum;
