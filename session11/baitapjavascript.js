var a;
/*
quy tac dat ten bien:
-co y nghia
-bang chu cai hoa hoac thuong, so va dau gach duoi
-khong bat dau bang so
-ko bat dau bang so
-nen dat bang tieng anh
-theo quy tac Camel
ex: userName, myAge, getInfo, getElementById
bt: dat ten bien cho: ten nguoi dung. email. so dien thoai. ngay sinh
*/
var Name;
var Email;
var Phone;
var Birthday;

/*cac phep toan trong javascript + - * / */
var x = 6, y = 8;
document.write('tong 2 so x+y la');
document.write(x + y);
document.write('<br>')
document.write('tong 2 so x-y la');
document.write(x - y);
document.write('<br>')
document.write('tong 2 so x*y la');
document.write(x * y);
document.write('<br>')
document.write('tong 2 so x/y la');
document.write(x / y);
/*cac phep so sanh trong javascript > < >= <= == !=*/
/*cau dieu kien trong js*/
//if (dieukien) {
	//thuc hien dieu kien neu dung
	//}
document.write('<br>');
if (3 > 2) {
	document.write('so 3 lon hon so 2');
	}

document.write('<br>');
var x=5, y=7;
if(x>y) {
	document.write('so 5 lon hon so 7') ;
} else {
	document.write('so 7 lon hon so 5');
}

document.write('<br>');
var x=5, y=5;
if(x>y) {
	document.write('so x lon hon so y') ;
} else if (x<y){
	document.write('so x lon hon so y');
}else {
	document.write('so x bang so y');
}

//cau lenh switch case
document.write('<br>');
var x = 1;
switch (x) {
	case 2: 
	document.write('hom nay la thu 2');
	break;
	case 3: 
	document.write('hom nay la thu 6');
	break;
	case 9: 
	document.write('hom nay la thu 9');
	break;
	default:
	document.write('abc');
	break;
}

document.write('<br>');
var x = 3;
switch (x) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7: 
	document.write('hom nay la thu  ' + x);
	break;
	case 8: 
	document.write('hom nay la thu 9');
	break;
	default:
	document.write('abc');
	break;
}

