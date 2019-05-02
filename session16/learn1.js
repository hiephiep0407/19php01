//giai bai tap validate form bang jquery
function result() {
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
    else if(phone==''){
    	alert('Bạn Chưa Nhập Số Điện Thoại');
    }
    else{
    	
}