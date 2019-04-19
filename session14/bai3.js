var hiep = 2000;
var soKeo = 0;
var soVoKeo = 0;
white (hiep >= 200){
	hiep-=200;
	soKeo ++;
	soVoKeo ++;
		white (soVoKeo >=2){
		soVoKeo-=2;
		soKeo++;
		soVoKeo++;
		}
}
document.write("so keo la" + soKeo);
