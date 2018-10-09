$(function(){
$('.playbtn_fir').click(function (e){
	var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  var relativeY = (e.pageY) + 'px';
	  $('.videos-item-hidden-fir').css('top', relativeY);
	$('.videos-item-hidden-fir').addClass('dis_vis');
	$('#overlay').css('display', 'block');
});
$('.playbtn_sec').click(function (e){
	var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  var relativeY = (e.pageY) + 'px';
	  $('.videos-item-hidden-sec').css('top', relativeY);
	$('.videos-item-hidden-sec').addClass('dis_vis');
	$('#overlay').css('display', 'block');
});
$('.playbtn_thi').click(function (e){
	var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  var relativeY = (e.pageY) + 'px';
	  $('.videos-item-hidden-thi').css('top', relativeY);
	$('.videos-item-hidden-thi').addClass('dis_vis');
	$('#overlay').css('display', 'block');
});
$('.playbtn_fou').click(function (e){
	var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  var relativeY = (e.pageY) + 'px';
	  $('.videos-item-hidden-fou').css('top', relativeY);
	$('.videos-item-hidden-fou').addClass('dis_vis');
	$('#overlay').css('display', 'block');
});
$('.playbtn_fiv').click(function (e){
	var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  var relativeY = (e.pageY) + 'px';
	  $('.videos-item-hidden-fiv').css('top', relativeY);
	$('.videos-item-hidden-fiv').addClass('dis_vis');
	$('#overlay').css('display', 'block');
});
$('#overlay').click(function(){
	$(this).css('display', 'none');
	$('.videos-item-hidden').removeClass('dis_vis');
});
})