// for, while, do while
for (var i = 0; i < 10; i++) {
	document.write(i);
	document.write('<br>');
}

document.write('-----------------<br>')
var x=5;
var y=6;
x++;
y--;
document.write(x);
document.write('<br>');
document.write(y);

var a = 5; b = 7;
var c;
var d;
c = ++a + ++b;//14
c = a++ + b++;//12
document.write('<br>');
document.write(c);
document.write('<br>');

document.write('-----------------<br>')
var i = 15;
while (i < 10) {
	document.write(i);
	document.write('<br>');
	i++;
}

document.write('-----------------<br>')
var i = 15;
do {
	document.write(i);
	document.write('<br>');
	i++;
} while (i < 10)

//cho 1 day so chay tu 1 den 20
//kiem tra xem so do co phai la ngay trong tuan khong
//neu co thi in ra: hom nay la thu x
//neu khong thi in ra: hom nay khong thuoc ngay trong tuan
// 2,3,4,5,6,7,8

document.write('<br>');
document.write('-----------------<br>');
for (var i = 2; i <= 15; i++) {
	switch (i) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			document.write('hom nay la thu' +  i);
			document.write('<br>');
			break;
		case 8:
			document.write('hom nay la chu nhat');
			document.write('<br>');
			break;
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
			document.write('khong trong tuan' + i);
			document.write('<br>');
			break;
	}
}


//ham trong javascript

function myFunction () {
	var a = 5, b = 6;
	document.write(a + b);
}
document.write('<br>');
myFunction();

function sub(x, y) {
	document.write(x + y);
}
document.write('<br>');
sub(6, 7);
document.write('<br>');
sub(9, 6);

//cho mot day so n chay tu 0 den 10
//voi n la so nam kinh nghiem
//tinh luong thuc nhan voi
//luong co ban la 2.300.000
//so nam kinh nghiem <3 thi he so luong la 2
//so nam kinh nhgiem <5 thi he so luong la 3
//so nam knh nghiem > 5 thi he so luong la 5

//ex: luong thuc nhan = luong co ban x he so luong

//su dung function, if else, for hoac while

document.write('<br>');
document.write('-----------------<br>');
var lcb = 2300;
for (var n = 0; n <= 10; n++) {
	if (n < 3) {
		luong(lcb, 2);
		document.write('<br>');
	} else if (n < 5) {
		luong(lcb, 3);
		document.write('<br>');
	} else if (n == 5) {
		luong(lcb, 4);
		document.write('<br>');
	} else {
		luong(lcb, 5);
		document.write('<br>');
	}
}
function luong (lcb, heso) {
	document.write(lcb * heso);
}