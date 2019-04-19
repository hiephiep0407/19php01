var binh = 27;
var minh;
minh = binh/3;
solanchuyen = 0;
while (binh != minh*2){
	binh--;
	minh++;
	solanchuyen++; 
}
document.write('<br>');
document.write('so sach cua binh can chuyen cho minh de so sach cua binh gap doi minh la' +solanchuyen);
