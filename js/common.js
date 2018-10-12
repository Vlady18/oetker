$(function(){
$('#open-1').click(function(e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY ) + 'px';
  // $('.videos-item-hidden-fir').css('top', '70px');
	$('.videos-item-hidden-fir').addClass('dis_vis');
	$('body').css('overflow', 'hidden');
	$('#overlay').css('display', 'block');
	// $('.videos-item-hidden-fir').css('overflow-y', 'scroll');
});
$('#open-2').click(function (e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY) + 'px';
  // $('.videos-item-hidden-sec').css('top', relativeY);
	$('.videos-item-hidden-sec').addClass('dis_vis');
	$('#overlay').css('display', 'block');
	$('body').css('overflow', 'hidden');
});
$('#open-3').click(function (e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY) + 'px';
  // $('.videos-item-hidden-thi').css('top', relativeY);
	$('.videos-item-hidden-thi').addClass('dis_vis');
	$('#overlay').css('display', 'block');
	$('body').css('overflow', 'hidden');
});
$('#open-4').click(function (e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY) + 'px';
  // $('.videos-item-hidden-fou').css('top', relativeY);
	$('.videos-item-hidden-fou').addClass('dis_vis');
	$('#overlay').css('display', 'block');
	$('body').css('overflow', 'hidden');
});
$('#open-5').click(function (e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY) + 'px';
		// $('.videos-item-hidden-fiv').css('top', relativeY);
	$('.videos-item-hidden-fiv').addClass('dis_vis');
	$('#overlay').css('display', 'block');
	$('body').css('overflow', 'hidden');
});
$('#overlay').click(function(){
	$(this).css('display', 'none');
	$('.videos-item-hidden').removeClass('dis_vis');
	$('body').css('overflow', 'auto');
});
$('.exit-popup').click(function(){
	$('#overlay').css('display', 'none');
	$('.videos-item-hidden').removeClass('dis_vis');
	$('body').css('overflow', 'auto');
});
$('.changes label').click(function(e){
	document.location.href="http://oetker.vitalievich.ru";
});
$('.videos-item-hidden').addClass('dis_vis');
let vid_width = $('.video').width();
console.log(vid_width);
let vid_height = vid_width*9/16;
console.log(vid_height);
$('.video').css('height', vid_height);
$('.videos-item-hidden').removeClass('dis_vis');
})
