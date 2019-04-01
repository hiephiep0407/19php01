//cho truoc 1 so, kem tra so do co phai la
//thang trong nam khong, neu phai. cho biet so ngay trong thang do
//vd 2-> day la thang trong na, thang 2 co 28 hoac 29 ngay
//su dung swtich case de la 10 m
//cho biet thang 1 3  7 8 10 12 co 31 ngay
//thang 46911 co 30 ngay
//thang 2 co 28 hoac 29 ngay

var x = 2;
switch (x) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	case 12: 
		document.write(+ x +' la thang trong nam');
		break;
	default:
		document.write('thang' + x + 'khong phai la thang trong nam');
		break;	
}
document.write('<br>');
switch (x) {
	case 1:
	case 3:
	case 7: 
	case 8:
	case 10:
	case 12:
		document.write(+ x +' co 31 ngay trong nam');
		break;
}
document.write('<br>');
switch (x) {
	case 4:
	case 6:
	case 9: 
	case 11:
		document.write(+ x +' co 30 ngay trong nam');
		break;
}
document.write('<br>');
switch (x) {
	case 2:
		document.write('thang' + x +' co 28 hoac 29 ngay');
		break;
}