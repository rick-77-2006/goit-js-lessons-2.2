// function xmtree(len) {
//   let str = "";
//   for (let i = 1; i <= len; i++) {
//     const left = " ".repeat(len - i) + "*".repeat(i);
//     const right = "*".repeat(i);
//     str += left + right + "\n";
//   }
//   console.log(str);
// }

// awdawd.

// function getFileName(file) {
//   const dotIndex = file.indexof(".");
//   if (dotIndex !== -1) {
//     return file.slice(0, dotIndex);
//   } else {
//     return file;
//   }
// }

/* 

*
**
***
****


*/

// xmtree(10);

/**
 * ������ ���� for, ���� �������� � ������� ��������
 * ����� �� ���������� �� a �� b, ��� ����� ���� ����� ������ 5.
 */

const a = 100;
const b = 20;

/*
 * ������ ������, ���� �������� ���� ��� ������ �����,
 * �� ������� � ������� ����� � ������ �� min �� max.
 * ���������, ���� min=0 � max=5, �� ������� 0-5, � � ����� ��� ������ ����� - 2 � 4, �� ���� 6.
 */

const min = 0;
const max = 5;
// let total = 0;

//

// const currentNumber = 5;
// let total = 0;
// for (let i = 0; i < currentNumber; i++) {
//   console.log(`${total} + ${i} = ${total + i}`);
//   total += i;
// }

// console.log("Result", total);

// �� ��������� � ���� for ��������� ������� �����������, ������� ��������? � ���� �������� �����������, ����� �� �������� � ������"��������, �� �� �� ��������� ���������?

// for (let i = 0; i < 10 && k > 20; i++, k++) {
//   i++;
// }

// console.log(j);

/* �� �������� �� �������� ? ������� ��� ����� �����, ��� � ����� number ������������ ����� ����� � ������� �� start �� end, ��� ������� �� 5 ��� ������. � �� ������ �� �� �������� ? */

const start = 123;
const end = 344;
let number;

for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(number);