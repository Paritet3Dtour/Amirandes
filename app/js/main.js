
$(function() {
// For progress-bar
  const progressHeight = document.querySelector('.progressBar-height');
  window.addEventListener('scroll', progressBarHeight);
  function progressBarHeight(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;
    progressHeight.style.height = per + '%'; 
  } 

// Animations on scroll
  var $animation_elements = $('.animation-element');
  var $window = $(window);
  var check_if_in_view = function() {  
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position - 100 <= window_bottom_position)) {
            $element.addClass('in-view');
      } else {
        // $element.removeClass('in-view');
      }
    });
  }
  check_if_in_view();
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll'); 

// For services list 
$('.services__item__heading').click(function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active').parent().find('.services__item__content').slideUp();
  }else{
    $(this).addClass('active').parent().find('.services__item__content').slideDown();
  }
});

// For review-card modal
$('.reviews__item').click(function(){
  $('.reviewModal__heading').text($(this).find('.reviews__item__name').text());
  $('.reviewModal__date').text($(this).find('.reviews__item__date').text());
  $('.reviewModal__text').text($(this).find('.reviews__item__text').text());
});

// For galley hotel - numbers
var gitem1 = [
  {"src": 'img/gallery/Superior_Room/1.jpg','thumb': 'img/gallery/Superior_Room/mini/1.jpg'},
  {"src": 'img/gallery/Superior_Room/2.jpg','thumb': 'img/gallery/Superior_Room/mini/2.jpg'},
  {"src": 'img/gallery/Superior_Room/3.jpg','thumb': 'img/gallery/Superior_Room/mini/3.jpg'}
];
var gitem2 = [
  {"src": 'img/gallery/Superior_Family_Guestroom/1.jpg','thumb': 'img/gallery/Superior_Family_Guestroom/mini/1.jpg'},
  {"src": 'img/gallery/Superior_Family_Guestroom/2.jpg','thumb': 'img/gallery/Superior_Family_Guestroom/mini/2.jpg'}
];
var gitem3 = [
  {"src": 'img/gallery/Luxury_Room/1.jpg','thumb': 'img/gallery/Luxury_Room/1.jpg'},
  {"src": 'img/gallery/Luxury_Room/2.jpg','thumb': 'img/gallery/Luxury_Room/2.jpg'},
  {"src": 'img/gallery/Luxury_Room/3.jpg','thumb': 'img/gallery/Luxury_Room/3.jpg'},
  {"src": 'img/gallery/Luxury_Room/4.jpg','thumb': 'img/gallery/Luxury_Room/4.jpg'}
];
var gitem4 = [
  {"src": 'img/gallery/Family_Suite/1.jpg','thumb': 'img/gallery/Family_Suite/mini/1.jpg'},  
  {"src": 'img/gallery/Family_Suite/2.jpg','thumb': 'img/gallery/Family_Suite/mini/2.jpg'},  
  {"src": 'img/gallery/Family_Suite/3.jpg','thumb': 'img/gallery/Family_Suite/mini/3.jpg'}
]; 
var gitem5 = [
  {"src": 'img/gallery/Amirandes_Family_Suite_Garden_View_with_Private_Pool/1.jpg','thumb': 'img/gallery/Amirandes_Family_Suite_Garden_View_with_Private_Pool/mini/1.jpg'},  
  {"src": 'img/gallery/Amirandes_Family_Suite_Garden_View_with_Private_Pool/2.jpg','thumb': 'img/gallery/Amirandes_Family_Suite_Garden_View_with_Private_Pool/mini/2.jpg'}, 
  {"src": 'img/gallery/Amirandes_Family_Suite_Garden_View_with_Private_Pool/3.jpg','thumb': 'img/gallery/Amirandes_Family_Suite_Garden_View_with_Private_Pool/mini/3.jpg'}, 
  {"src": 'img/gallery/Amirandes_Family_Suite_Garden_View_with_Private_Pool/4.jpg','thumb': 'img/gallery/Amirandes_Family_Suite_Garden_View_with_Private_Pool/mini/4.jpg'}
];
var gitem6 = [  
  {"src": 'img/gallery/Premium_Bungalow_with_Garden/1.jpg','thumb': 'img/gallery/Premium_Bungalow_with_Garden/mini/1.jpg'},  
  {"src": 'img/gallery/Premium_Bungalow_with_Garden/2.jpg','thumb': 'img/gallery/Premium_Bungalow_with_Garden/mini/2.jpg'}   
];
var gitem7 = [
  {"src": 'img/gallery/Luxury_Bungalow_with_Garden_Front_Row/1.jpg','thumb': 'img/gallery/Luxury_Bungalow_with_Garden_Front_Row/1.jpg'},  
  {"src": 'img/gallery/Luxury_Bungalow_with_Garden_Front_Row/2.jpg','thumb': 'img/gallery/Luxury_Bungalow_with_Garden_Front_Row/2.jpg'}  
];
var gitem8 = [
  {"src": 'img/gallery/Amirandes_Creta_Villa_with_Private_Heated_Pool/1.jpg','thumb': 'img/gallery/Amirandes_Creta_Villa_with_Private_Heated_Pool/mini/1.jpg'},  
  {"src": 'img/gallery/Amirandes_Creta_Villa_with_Private_Heated_Pool/2.jpg','thumb': 'img/gallery/Amirandes_Creta_Villa_with_Private_Heated_Pool/mini/2.jpg'},
  {"src": 'img/gallery/Amirandes_Creta_Villa_with_Private_Heated_Pool/3.jpg','thumb': 'img/gallery/Amirandes_Creta_Villa_with_Private_Heated_Pool/mini/3.jpg'}
];
var gitem9 = [ 
  {"src": 'img/gallery/Creta_Beach_Villa_Seafront_&_Private_Heated_Pool/1.jpg','thumb': 'img/gallery/Creta_Beach_Villa_Seafront_&_Private_Heated_Pool/mini/1.jpg'},  
  {"src": 'img/gallery/Creta_Beach_Villa_Seafront_&_Private_Heated_Pool/2.jpg','thumb': 'img/gallery/Creta_Beach_Villa_Seafront_&_Private_Heated_Pool/mini/2.jpg'},
  {"src": 'img/gallery/Creta_Beach_Villa_Seafront_&_Private_Heated_Pool/3.jpg','thumb': 'img/gallery/Creta_Beach_Villa_Seafront_&_Private_Heated_Pool/mini/3.jpg'}
];
var gitem10 = [   
  {"src": 'img/gallery/Presidential_Villa_Seafront_with_Private_Heated_Pool/1.jpg','thumb': 'img/gallery/Presidential_Villa_Seafront_with_Private_Heated_Pool/mini/1.jpg'},  
  {"src": 'img/gallery/Presidential_Villa_Seafront_with_Private_Heated_Pool/2.jpg','thumb': 'img/gallery/Presidential_Villa_Seafront_with_Private_Heated_Pool/mini/2.jpg'},
  {"src": 'img/gallery/Presidential_Villa_Seafront_with_Private_Heated_Pool/3.jpg','thumb': 'img/gallery/Presidential_Villa_Seafront_with_Private_Heated_Pool/mini/3.jpg'}
];

$('.rooms__item__media').on('click', function() {
    let gall_ind = String($(this).attr('gallery-index'));  
  //console.log(gitem1);
    $(this).lightGallery({
        mode: 'lg-fade',
        speed: 100,
        pager: false,
        share: false,
        download: false,
        thumbMargin: 10,
        thumbWidth: 130,  
        thumbHeight: '80px',
        dynamic: true,
        dynamicEl: eval(gall_ind)
    })
});



// For mobile reviews-slider
if ( $(window).width() < 1024 ){ 
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    }); 
}

// Disable sound after closing modal 
$(document).on('closing', '.videoModal', function (e) {
  $('.videoModal iframe').each(function(index) {                
  $(this).attr('src', $(this).attr('src'));       
  return false;
  });    
});

// For forms
$('.banner__content__btn-order').click(function(){
  formBanner = $(this).val();
  gevent('button_pressed', 'Форма в Баннере', formBanner); 
});
$('.rooms__item__content__info__btn').click(function(){
  formRooms = $(this).val();  
  gevent('button_pressed', 'Форма с номерами', formRooms); 
});

$('.rooms__item__content__info__btn').bind('click', function(){
  var parent = $(this).parent().parent();
  var text = "";
  text += parent.children('.rooms__item__content__heading').text()+"\r\n"; 
  text += parent.find('.rooms__item__content__price p').text()+"\r\n"; 
  $('textarea[name=comment]').html(text);    
});
$('.banner__content__btn-order').bind('click', function(){
  $('textarea[name=comment]').html('Форма в баннере - Забронировать');   
});   

$("#mainModalForm").validate({ 
    rules: {
    'sender_phone': {               
        minlength: 4 
    }   
    }  
});
$("#mainForm").validate({ 
    rules: {
    'sender_phone': {               
        minlength: 4 
    }
    }  
});
$("#footer-form").validate({ 
    rules: {
    'sender_phone': {               
        minlength: 4 
    }
    }  
});

$("#mainForm button").bind('click', function () {   
  if ($("#mainForm").valid()) {
    gevent('request', 'Форма над номерами','none'); //отправка формы    
    sended($(this).attr('formid'));
    $('.mainForm__content-ty').slideDown();         
    $('.mainForm__content-slOne').slideUp(); 
    }else{
       $("#mainForm input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#mainForm input[name=sender_phone]").focus();   
    }   
});
$("#mainModalForm button").bind('click', function () {   
  if ($("#mainModalForm").valid()) {
    valueMainform = $('input[name="mainModalForm-typeNumber"]').val();  
    gevent('request', 'Основная форма', valueMainform); //отправка формы   
    sended($(this).attr('formid'));
    $('.mainModalForm__sl-ty').slideDown();         
    $('.mainModalForm__sl-one').slideUp(); 
    }else{
       $("#mainModalForm input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#mainModalForm input[name=sender_phone]").focus();  
    }   
});
$("#footer-form button").bind('click', function () {  
  if ($("#footer-form").valid()) {  
    gevent('request', 'Форма в футере','none'); //отправка формы    
    sended($(this).attr('formid'));
    $('.footer-form__ty').slideDown();         
    $('.footer-form__tops').slideUp(); 
    }else{
       $("#footer-form input[name=sender_phone]").attr("placeholder", "Введите корректный номер");
      $("#footer-form input[name=sender_phone]").focus();     
    }   
});

function sended(idform) {
      AjaxFormRequest(/*'messegeResult',*/ idform, 'sendmessage.php'); 
  }
    function AjaxFormRequest(/*result_id,*/idform, url) {
       jQuery.ajax({
          url:     url,
          type:     "POST",
          dataType: "html",
          data: jQuery("#"+idform).serialize(),
          success: function(response) {
        //document.getElementById('envelope').style.display='block';
        //document.getElementById('fade').style.display='block'
            //document.getElementById(result_id).innerHTML = response;
        //envelope_h1_change('Спасибо за обращение');
        //document.getElementById('env_form').style.backgroundColor='rgba(40,32,16,0.8)';
        //window.location.href = "/thanks";
          }/*,
          error: function(response) { 
            document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
        document.getElementById('envelope').style.display='block';
        document.getElementById('fade').style.display='block'
          }*/
       });} 
    function gevent(action, category='', label='', value=''){
        var params = {};
        if (category !=='') { params.event_category = category; }
        if (label !=='') { params.event_label = label; }
        if (value !=='') { params.value = value; }
        gtag('event', action, params);
    }  


// For mobile card-gallery
if ( $(window).width() < 767 ){ 
  var numSlick = 0;
  $('.rooms__item__media__slider').each( function() {
  numSlick++; 
  $(this).addClass( 'slider-' + numSlick ).slick({
    arrows: true,
    prevArrow: $(this).parent().find('.rooms__item__slider__btnsPrev'),    
    nextArrow: $(this).parent().find('.rooms__item__slider__btnsNext'),  
    fade: true,
    dots: true,  
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [{
          breakpoint: 500,
          settings: {
          arrows: false,
          dots: true,  
      }
  }] 
  });
}); 
}

}); 
