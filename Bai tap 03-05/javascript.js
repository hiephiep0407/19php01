function checkRegister() {
	var name = document.getElementById('form1').value;
	var diachi = document.getElementById('form2').value;
	var sdt = document.getElementById('form3').value;
	var ngaydauky = document.getElementById('form4').value;
	var ngaycuoiky = document.getElementById('form5').value;
	var sodauky = document.getElementById('form6').value;
	var socuoiky = document.getElementById('form7').value;
	var checkRegisterSuccess = true;
	sodauky= parseInt(sodauky);
	socuoiky= parseInt(socuoiky);

	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Nhập tên';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if (diachi == '') {
		document.getElementById('errorDiaChi').innerHTML = 'Nhập địa chỉ';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorDiaChi').innerHTML = '';
	}
	if (sdt == '') {
		document.getElementById('errorSdt').innerHTML = 'Nhập SĐT';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorSdt').innerHTML = '';
	}
	if (ngaydauky == '') {
		document.getElementById('errorNgayDauKy').innerHTML = 'Nhập ngày đầu kỳ';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorNgayDauKy').innerHTML = '';
	}
	if (ngaycuoiky == '') {
		document.getElementById('errorNgayCuoiKy').innerHTML = 'Nhập ngày cuối kỳ';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorNgayCuoiKy').innerHTML = '';
	}
	if (sodauky == '') {
		document.getElementById('errorSoDauKy').innerHTML = 'Nhập số đầu kỳ';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorSoDauKy').innerHTML = '';
	}
	if (socuoiky == '') {
		document.getElementById('errorSoCuoiKy').innerHTML = 'Nhập số cuối kỳ';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorSoCuoiKy').innerHTML = '';
	}
	if (ngaydauky > ngaycuoiky) {
		document.getElementById('errorNgayDauKy1').innerHTML = 'Ngày cuối kỳ > Ngày cuối kỳ';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorNgayDauKy1').innerHTML = '';
	}
	if (sodauky > socuoiky) {
		document.getElementById('errorSoDauKy1').innerHTML = 'Số cuối kỳ > Số đầu kỳ';
		checkRegisterSuccess = false;
	} else {
		document.getElementById('errorSoDauKy1').innerHTML = '';
	}
	if (checkRegisterSuccess) {
		document.getElementById('registerSuccess').innerHTML = 'Thành công';
	} else {
		document.getElementById('registerSuccess').innerHTML = '';
	}
	var sum;
	sum = parseInt(socuoiky) - parseInt(sodauky);
	document.getElementById('sum').innerHTML = socuoiky - sodauky;

	if (sum <= 0) {
		document.getElementById('abc').innerHTML = "Không đúng";
	}
	else if (sum <= 100){
		var sum1 = sum * 1500;
	}
	else if (sum > 100 && sum <= 300) {
		var sum1 = 100 * 1500 + (sum - 100) * 2000;
	}
	else if(sum > 300) {
		var sum1 = 100 * 1500 + 200 * 2000 + (sum - 200) * 3000;
	}
	document.getElementById('abc').innerHTML = "Tiền Là " + sum1;
}

function print(){
	var name = document.getElementById('form1').value;
	var diachi = document.getElementById('form2').value;
	var sdt = document.getElementById('form3').value;
	var ngaydauky = document.getElementById('form4').value;
	var ngaycuoiky = document.getElementById('form5').value;
	var sodauky = document.getElementById('form6').value;
	var socuoiky = document.getElementById('form7').value;

	document.getElementById('dislayTen').innerHTML = "Name: " +name;
	document.getElementById('dislayDiaChi').innerHTML = "Địa chỉ: " +diachi;
	document.getElementById('displaySdt').innerHTML = "SĐT: " +sdt;
	document.getElementById('displayNgayDau').innerHTML = "Ngày đầu: " +ngaydauky;
	document.getElementById('displayNgayCuoi').innerHTML = "Ngày cuối: " +ngaycuoiky;
	document.getElementById('displaySoDau').innerHTML = "Số cuối: " +sodauky;
	document.getElementById('displaySoCuoi').innerHTML = "Số đầu: " +socuoiky;
}