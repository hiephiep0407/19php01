$('.runMyBox').click(function() {
	$('#myBox').animate({'font-size' : '20px'});
	$('#myBox').animate({'left' : '100px'});
	$('#myBox').animate({'top' : '300px'});
	$('#myBox').css({'color' : 'blue', 'background' : 'yellow'});
	$('#myBox').animate({'height' : '500px'});
	$('#myBox').animate({'margin-left' : '900px'});

});
$('.showHide').click(function() {
	$('#myBox').hide(4000).css('color' , 'red').show(5000);
});

$('.right').click(function() {
	$('#myBox').animate({'margin-left' : '450px'});
});

$('.left').click(function() {
	$('#myBox2').animate({'margin-right' : '300px'});
});