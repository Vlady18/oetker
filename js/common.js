$(function(){
$('.videos-item-visible').click(function (e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY ) + 'px';
  // $('.videos-item-hidden-fir').css('top', '70px');
	$('.videos-item-hidden-fir').addClass('dis_vis');
	$('body').css('overflow', 'hidden');
	$('#overlay').css('display', 'block');
	// $('.videos-item-hidden-fir').css('overflow-y', 'scroll');
});
$('.videos-item-visible').click(function (e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY) + 'px';
  // $('.videos-item-hidden-sec').css('top', relativeY);
	$('.videos-item-hidden-sec').addClass('dis_vis');
	$('#overlay').css('display', 'block');
	$('body').css('overflow', 'hidden');
});
$('.videos-item-visible').click(function (e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY) + 'px';
  // $('.videos-item-hidden-thi').css('top', relativeY);
	$('.videos-item-hidden-thi').addClass('dis_vis');
	$('#overlay').css('display', 'block');
	$('body').css('overflow', 'hidden');
});
$('.videos-item-visible').click(function (e){
	// var offset = $(this).offset();
	  // var relativeX = (e.pageX - offset.left);
	  // var relativeY = (e.pageY) + 'px';
  // $('.videos-item-hidden-fou').css('top', relativeY);
	$('.videos-item-hidden-fou').addClass('dis_vis');
	$('#overlay').css('display', 'block');
	$('body').css('overflow', 'hidden');
});
$('.videos-item-visible').click(function (e){
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
})
