function show(){
	
	var ten = document.getElementById('ten').value;
    var ngaysinh = document.getElementById('ngaysinh').value;
    var female= document.getElementById('female').checked;
    var male= document.getElementById('male').checked;
    var date = new Date(ngaysinh);
    	year = date.getFullYear();
    
    var tel = document.getElementById('tel').value;
    
			
    if(ten==''){
    	alert('Bạn Chưa Nhập Tên');
    }
    else if(ngaysinh==''){
    	alert('Bạn Chưa Nhập Ngày Sinh');
    }
    else if(tel==''){
    	alert('Bạn Chưa Nhập Số Điện Thoại');
    }
    
    else{
    	document.getElementById('show').style.display = ('block');
    	document.getElementById('name').innerHTML=ten;
    	document.getElementById('date').innerHTML=year;
    	document.getElementById('sdt').innerHTML=tel;
    	if (male) {
		document.getElementById('show').style.background = ('yellow');
		document.getElementById('gioitinh').innerHTML='Nam';
		}
		else if (female) {
		document.getElementById('show').style.background = ('pink');
		document.getElementById('gioitinh').innerHTML='Nữ';
		}
    	if (year < 1998) {
		document.getElementById('show').style.color = ('green');
		
		}
		else if (year > 1998) {
		document.getElementById('show').style.color= ('red');
				}
    }
    
}