/**
 * ������������ ��������� (endsWith)
 *
 * ������ ������ ���� �������� �� ���������� ��������
 *  ����� link �������� /. ���� �, ����� �� ����
 *  �������� link ��� ������.
 * ������������ ����������� if...else.
 */

// let link = "https://my-site.com/about/";

// function checkUrl(link) {
//   if (!link.endsWith("/")) {
//     link += "/";
//   }

//   return link;
// }

// const res1 = checkUrl(link);
// console.log(res1);

// function checkPhoneNumber(phoneNumber) {
//   if (!phoneNumber.startsWith("+")) {
//     phoneNumber = "+" + phoneNumber;
//   }
//   return phoneNumber;
// }

// const updatedPhone = checkPhoneNumber("+380923412");

// console.log(updatedPhone);
/**
 * ������������ ��������� (includes �� ������ ���)
 * ������ ������ ���� �������� �� ���������� ��������
 * ����� link �������� /. ���� �, ����� �� ����
 * �������� link ��� ������, ��� ����� � ���� �������,
 * ���� � link � ������� "my-site".
 * ������������ ����������� if...else ��� ��������� ��������.
 */

// let url = "https://my-site.com/about";
// function checkLink(link) {
//   if (link.includes("my-site") && !link.endsWith("/")) {
//     link += "/";
//   }
//   console.log(link);
// }
// checkLink(url);

/*
 * ����� � ����� ������� includes()
 */

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

// const string1 =
//   "Hello, I'm Prince Abdul, this is not spam, I'm offering you a SALE million!";
// const string2 = "Biggest SALE this week, don't miss out!";
// const string3 = "#fatlivesmatter advertising campaign";

// function checkSpam(str) {
//   const hasSpam1 = str.toLowerCase().includes(blacklistedWord1);
//   const hasSpam2 = str.toLowerCase().includes(blacklistedWord2);
//   const result = hasSpam1 || hasSpam2;

//   // true && false;
//   console.log(result);
// }

// checkSpam(string2);

// function sum(t){
//   console.log(t);
// }

// const x = 10;
// sum(x)