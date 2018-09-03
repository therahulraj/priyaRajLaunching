$(function(){
    $('.button1').click(function () {
      $(".heading1").show(0).addClass('heading_animation');
    });
    $(".cross").click(function(){
      $(".heading1").removeClass('heading_animation').hide(0);
    });
      // this is for the heading1 of my works
    $('.button2').click(function () {
      $(".heading2").show(0).addClass('heading_animation1');
    });
    $(".cross3").click(function(){
      $(".heading2").removeClass('heading_animation1').hide(0);
    });
    // this is for the heading2 that is testimaonials
    $('.button3').click(function () {
      $(".heading3").show(0).addClass('heading_animation2');
    });
    $(".cross4").click(function(){
      $(".heading3").removeClass('heading_animation2').hide(0);
    });
      // this is for the heading3 that is coming SOON
      $('.button4').click(function(){
        $('html,body').animate({scrollTop: $("html,body").offset().top},500);
        $('.w1').show(1000).animate({left: '0vw'},100).addClass('svg2_transition');
      });
      $('.cross2').click(function(){
        $('.w1').removeClass('svg2_transition').animate({
          left: '100vw'
        },100).hide(1000);
      });
      // this is for the w1 that is my works
// all above scripts are for the transition effect of the headings like myWorks, testimonials, cominng soon,

$(".d2 input,.d3 input").focusout(function(){
    var text_value = $(this).val();
    if(text_value === "")
    {
            $(this).removeClass('has-value');
    }
    else
    {
     $(this).addClass('has-value');
    }
});
var $win = $(window);
$win.on('scroll', function(){
  var top1 = $win.scrollTop();
  if(window.innerWidth > 600){
  if(top1 > $(".b1").offset().top-200){
      $(".b1 .b2").css('opacity',1).addClass("animated bounceInDown");
      $(".b1 .b3").css('opacity',1).addClass("animated bounceInDown");
      $(".c1 .b2").css('opacity',1).addClass("animated bounceInUp");
      $(".c1 .b3").css('opacity',1).addClass("animated bounceInUp");
  }
  else{
    $(".b1 .b2").css('opacity',0).removeClass("animated bounceInDown");
    $(".b1 .b3").css('opacity',0).removeClass("animated bounceInDown");
    $(".c1 .b2").css('opacity',0).removeClass("animated bounceInUp");
    $(".c1 .b3").css('opacity',0).removeClass("animated bounceInUp");
  }
}
});
$('.articlesb').on('click', function() {
  event.preventDefault();
 $('.poems').css("display", "none");
 $('.quotes').css("display", "none");
 $('.articles').css("display", "block");
 $(this).addClass('articlesborder');
 $('.poemsb').removeClass('poemsborder');
 $('.quotesb').removeClass('quotesborder')
});
$('.poemsb').on('click', function() {
  event.preventDefault();
   $('.articles').css("display", "none");
   $('.quotes').css("display", "none");
   $('.poems').css("display", "block");
   $(this).addClass('poemsborder');
   $('.articlesb').removeClass('articlesborder');
   $('.quotesb').removeClass('quotesborder');
});
$('.quotesb').on('click', function() {
  event.preventDefault();
   $('.articles').css("display", "none");
   $('.poems').css("display", "none");
   $('.quotes').css("display", "block")
   $(this).addClass('quotesborder');
   $('.articlesb').removeClass('articlesborder');
   $('.poemsb').removeClass('poemsborder');
});
$('.poemsb').trigger('focus');
  });


// about me



var typed = new Typed('.element', {
    stringsElement: '#typed-strings',
    /**
 * @property {number} typeSpeed type speed in milliseconds
 */
typeSpeed: 40,

/**
 * @property {number} startDelay time before typing starts in milliseconds
 */
startDelay: 3500,

/**
 * @property {number} backSpeed backspacing speed in milliseconds
 */
backSpeed: 60,

/**
 * @property {boolean} smartBackspace only backspace what doesn't match the previous string
 */
smartBackspace: true,

/**
 * @property {boolean} shuffle shuffle the strings
 */
shuffle: false,

/**
 * @property {number} backDelay time before backspacing in milliseconds
 */
backDelay: 700,

/**
 * @property {boolean} fadeOut Fade out instead of backspace
 * @property {string} fadeOutClass css class for fade animation
 * @property {boolean} fadeOutDelay Fade out delay in milliseconds
 */
fadeOut: false,
fadeOutClass: 'typed-fade-out',
fadeOutDelay: 500,

/**
 * @property {boolean} loop loop strings
 * @property {number} loopCount amount of loops
 */
loop: true,
loopCount: Infinity,

/**
 * @property {boolean} showCursor show cursor
 * @property {string} cursorChar character for cursor
 * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
 */
showCursor: false,
cursorChar: '|',
autoInsertCss: true,

/**
 * @property {string} attr attribute for typing
 * Ex: input placeholder, value, or just HTML text
 */
attr: null,

/**
 * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
 */
bindInputFocusEvents: false,

/**
 * @property {string} contentType 'html' or 'null' for plaintext
 */
contentType: 'html',

/**
 * All typing is complete
 * @param {Typed} self
 */
onComplete: (self) => {},

/**
 * Before each string is typed
 * @param {number} arrayPos
 * @param {Typed} self
 */
preStringTyped: (arrayPos, self) => {},

/**
 * After each string is typed
 * @param {number} arrayPos
 * @param {Typed} self
 */
onStringTyped: (arrayPos, self) => {},

/**
 * During looping, after last string is typed
 * @param {Typed} self
 */
onLastStringBackspaced: (self) => {},

/**
 * Typing has been stopped
 * @param {number} arrayPos
 * @param {Typed} self
 */
onTypingPaused: (arrayPos, self) => {},

/**
 * Typing has been started after being stopped
 * @param {number} arrayPos
 * @param {Typed} self
 */
onTypingResumed: (arrayPos, self) => {},

/**
 * After reset
 * @param {Typed} self
 */
onReset: (self) => {},

/**
 * After stop
 * @param {number} arrayPos
 * @param {Typed} self
 */
onStop: (arrayPos, self) => {},

/**
 * After start
 * @param {number} arrayPos
 * @param {Typed} self
 */
onStart: (arrayPos, self) => {},

/**
 * After destroy
 * @param {Typed} self
 */
onDestroy: (self) => {}
  });
// this is for the typing effect


var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// this is for the page loading effect at the opening of the page the svg transition one




$(function(){
  $(".a1").twentytwenty();
});
// this is for the image slider



$('.a').jstars({
	image_path: 'image', // folder with stars assets
	style: 'white',          // optional, star color, default = white
	frequency: 19          // optional, from 1 to 19
});
// this is for the pointer star effects







var ajax = {
		isSubmiting: false,
		send: function() {

			if(ajax.isSubmiting == false) {
				ajax.isSubmiting = true;

				var userName = $("input[name=name]").val();
				var userEmail = $("input[name=email]").val();
				var userComments = $("textarea").val();

				if(userName == "" || userEmail == "" || userComments == "")
					alert("Form not complete");
				else {

					ajax.SetText("Sending...");
					$.post("../mail/php1.php", {
						name: userName, email: userEmail, comments: userComments
					}, function(data) {
						if(data == "true") {
							ajax.SetText("Sent!");
						} else {
							ajax.SetText("Send mail");
							alert(data);
						}

						ajax.isSubmiting = false;
					});
				}
			}
			else alert("You can only send 1 email at a time");
		},
		SetText: function(text) {
			$("input[type=button]").val(text);
		}
	}
  // this is for the sending the mail




$("#loader").starfield({
    starDensity: 2.0,
    mouseScale: 1.0,
    seedMovement: true
});
// this is for the stars at the background effect at the starting of the page
