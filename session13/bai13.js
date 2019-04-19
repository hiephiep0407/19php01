var myText1 ="0123456789";
var myText2 ="zxc";
var a = 5;

console.log(typeof myText1);
console.log(typeof a);
console.log(typeof myText2);

//kiem tra chieu dai
var myTextlength = myText1.length;
document.write(+myTextlength)

//kiem tra ky tu co trong chuoi string khong
var aCharInMyText1 = myText1.indexOf('b');
console.log(aCharInMyText1);

var aCharLastInMyText1 = myText1.lastIndexOf('3');
console.log(aCharLastInMyText1);

//thay the mot ky tu hoac chuoi ky tu trong chuoi string
var replaceCity = myText1.replace('123', '321');
document.write('<br>');
document.write(replaceCity);

//cat ky tu hoac chuoi ky tu trong chuoi string
var cutStringMyText1 = myText1.substring(1, 4);
document.write('<br>');
document.write(cutStringMyText1);

//cat tu 1->4
var cutStringLengthMyText1 = myText1.substr(1, 4);
document.write('<br>');
document.write(cutStringLengthMyText1);

//viet hoa
var upperCaseText2 = myText2.toUpperCase();
document.write('<br>');
document.write(upperCaseText2);

//viet thuong
var myText3 = 'CO TIEN XANH';
var lowerCaseText3 = myText3.toLowerCase();
document.write('<br>');
document.write(lowerCaseText3);

//dat mot bien la ten du bat ky duoc truyen vao tu ham
//vi du: function myName (name)

//ex: myName('sadasd');

//1 tach ho, ten dem, ten cua nguoi do ra
//ex ho, ten dem, ten
//kiem tra tring ten day du do co chu n kho
//dem n
//ex luong hoa cnah
//thay the ten dem thanh 19php


