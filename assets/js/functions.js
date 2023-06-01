var winWidth = $(window).width(),
winHeight = $(window).height(),
animationStartoffset = winHeight / 4;

$(function () {
	// Do after Page ready
	doOnReady();
});

$(window).on('load', function () {
	// Do after Page ready
	doOnLoad();
});

$(window).on('resize orientationchange', function () {
	// Do on resize
	doOnResize();
});

$(window).on('scroll', function () {
	// Do on scroll
	doOnScroll();
});

$(document).keyup(function (e) {
	if (e.keyCode == 27) {
		// Do on ESC press
	}
});

function doOnReady() {
	// OnReady Functions
	adjustCounter();
	browserDetect();
	initCarousel('.js-carousel', 3, 1, false, false);
	initCarousalNavFor('.js-faculty-slider', 1, '.js-facultytxt-slider', 1, false);
	headerFixed();
	parallaxeffect('.js-parallax');
	targetScroll();
	initTimer('.js-timer');
	onmousetoggleclass();
	ChangeToSvg();
	getCopyYear();
	checkviewport('.js-viewport');
	$('body').on('click', '.js-menubtn:not(.is--active)', function () {
		sideMenuOpen();
	}).on('click', '.js-menubtn.is--active', function () {
		sideMenuClose();
	}).on('click', '.js-menuclose', function () {
		sideMenuClose();
	}).on('click touchstart', '.js-defaultOverlay', function () {
		sideMenuClose();
	});
}

function doOnLoad() {
	// OnLoad Functions
	adjustCounter();
	headerFixed();
	ChangeToSvg();
	//addOnLoadAnimation();
	//pageLoaded();
	activeLink();
	initIntlInput('.js-byphone');
	checkviewport('.js-viewport');
	$('.js-loaderscreen').fadeOut();
}

function doOnResize() {
	// OnResize Functions
	winWidth = $(window).width(), winHeight = $(window).height();
	adjustCounter();
	ChangeToSvg();
}

function doOnScroll() {
	// OnScroll Functions
	headerFixed();
	parallaxeffect('.js-parallax');
	checkviewport('.js-viewport');
}

function browserDetect() {
	navigator.sayswho = function () {
		var ua = navigator.userAgent,
		tem,
		M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			return 'IE ' + (tem[1] || '');
		}
		if (M[1] === 'Chrome') {
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			if (tem != null) return tem.slice(1).join('').replace('OPR', 'Opera');
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
		if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
		return M.join(' ');
	}();
	$('body').addClass(navigator.sayswho);
}

function ChangeToSvg() {
	jQuery('img.js-tosvg').each(function () {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function (data) {
			var $svg = jQuery(data).find('svg');
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
			}
			$img.replaceWith($svg);
		}, 'xml');
	});
}

function sideMenuOpen() {
	$('.js-menubtn').addClass('is--active');
	$('.navigation').not('.is--open').addClass('is--open');
	$('body').addClass('is--menu');
}

function sideMenuClose() {
	$('.js-menubtn').removeClass('is--active');
	$('.navigation.is--open').removeClass('is--open');
	$('body').removeClass('is--menu');
}

function initCarousel(target, stshow, stscroll, centerstatus, dotstatus) {
	var $target = $(target).not('.slick-initialized');
	$target.each(function (i, e) {
		var $e = $(e);
		var itemDesktop = $e.data('item-desktop');
		var itemIpadPro = $e.data('item-ipad-pro');
		var itemTablet = $e.data('item-tablet');
		var itemMobile = $e.data('item-mobile');
		var sliderArrows = $e.parents('.carousel-sec').find('.js-sliderArrows');
		var sliderDots = $e.parents('.carousel-sec').find('.js-sliderDots');
		var sliderArrowLeft = $e.parents('.carousel-sec').find('.js-sliderArrows').data('arrow-left');
		var sliderArrowsRight = $e.parents('.carousel-sec').find('.js-sliderArrows').data('arrow-right');
		var bannerPrev = '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="'+sliderArrowLeft+'"></i></button>';
		var bannerNext = '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="'+sliderArrowsRight+'"></i></button>';
		$e.slick({
			infinite: true,
			slidesToShow: stshow,
			slidesToScroll: stscroll,
			appendArrows: sliderArrows,
			appendDots: sliderDots,
			prevArrow: bannerPrev,
            nextArrow: bannerNext,
			centerMode: centerstatus,
			centerPadding: '60px',
			dots: dotstatus,
			autoplay: true,
			autoplaySpeed: 1000,
			responsive: [{
				breakpoint: 1600,
				settings: {
					slidesToShow: itemDesktop
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: itemIpadPro
				}
			}, {
				breakpoint: 768,
				settings: {
					slidesToShow: itemTablet
				}
			}, {
				breakpoint: 375,
				settings: {
					slidesToShow: itemMobile
					// arrows: false,
					// dots: true
				}
			}]
		});
	});
}

function initCarousalNavFor(target, slideShowFor, targetNavFor, slideShowNav, centerStatus) {
    var $target = $(target).not('.slick-initialized');
    var $targetNav = $(targetNavFor).not('.slick-initialized');
    $target.on('init', function (event, slick, direction) {
        console.log(slick.currentSlide + 1, slick.$slides.length);
    });
    $target.each(function (i,e) {
		var $e = $(e);
		var sliderArrows = $e.parents('.carousel-navfor').find('.js-sliderArrows');
		var sliderArrowLeft = sliderArrows.data('arrow-left');
		var sliderArrowsRight = sliderArrows.data('arrow-right');
		var bannerPrev = '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="' + sliderArrowLeft + '"></i></button>';
		var bannerNext = '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="' + sliderArrowsRight + '"></i></button>';
        $e.slick({
            slidesToShow: slideShowFor,
            slidesToScroll: 1,
            appendArrows: sliderArrows,
            prevArrow: bannerPrev,
            nextArrow: bannerNext,
            dots: false,
            fade: true,
            asNavFor: targetNavFor,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
    $targetNav.each(function (i,e) {
		var $e = $(e);
        $e.slick({
            slidesToShow: slideShowNav,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            asNavFor: target,
            centerMode: centerStatus,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });
    $target.on('afterChange', function (event, slick, direction) {
        console.log(slick.currentSlide + 1, slick.$slides.length);
        var slickCurrentSlide = slick.currentSlide + 1;
        var slickTotal = slick.$slides.length;
        $('.js-count-text').text('Video ' + slickCurrentSlide + ' of ' + slickTotal);
    });
}

function headerFixed() {
    var scroll = $(window).scrollTop();
	if (scroll > 190) {
		$('.js-fixed').addClass("sticky-header");
	} else {
		$('.js-fixed').removeClass("sticky-header");
	}
}

function parallaxeffect(target){
	$(target).css('background-position', "-" + (1920 - $(window).width()) / 2 + "px " + -(Math.max(document.body.scrollTop, document.documentElement.scrollTop) / 4) + "px");
}

function targetScroll() {
    $('[data-scrolltarget]').click(function () {
        var t = $(this).data('scrolltarget');
        $('html,body').animate({
            scrollTop: $('.' + t).offset().top
        }, 'slow');
    });
}

function adjustCounter(){
	var $container = $('.container');
	var cleft = $container[0].offsetLeft + 15;
	if(winWidth > 991){
		$('.js-adjustCounter').css({
			width: winWidth-cleft,
		});
	} else {
		$('.js-adjustCounter').css({
			width: '100%',
		});
	}
}

function initTimer(target){
	var self = $(target);
	if(self.length){
		if (self.isInViewport()) {
			if(ccount == 0){
				self.countTo();
			}
			ccount = 1;
		}
	}
}

function pageLoaded() {
    $('body').addClass('page-loaded');
    setTimeout(function () {
        AOS.init({
            duration: 800,
            once: true,
            offset: animationStartoffset,
            easing: 'ease',
        });
    }, 200);
}

function addOnLoadAnimation() {
    $('.aos-anim, .banner-content, .light-content, .ico-post, .adbox, .counter-bg ul>li, .parallax-sec, .imgov-post, .bigThumbnil, .smallThumbnil, .cont-sec').attr('data-aos', 'fade-up');
    $('').attr('data-aos', 'no');
    $('').each(function (i) {
        $(this).attr('data-aos-delay', 50 + (50 * i));
    });
    if (winWidth < 992) {
        $('.sec-about-sec3').attr('data-aos', 'fade-up');
    } else {
        $('.sec-about-sec3 .about-box').attr('data-aos', 'fade-up');
        $('.sec-about-sec3 .about-box').each(function (i) {
            $(this).attr('data-aos-delay', 50 + (100 * i));
        });
    }
}

function activeLink(){
	var currentUrl = window.location.pathname;
	$('[href="'+currentUrl+'"]').parent('li').siblings().removeClass('is--active');
	$('[href="'+currentUrl+'"]').parent('li').addClass('is--active');
}

function onmousetoggleclass(){
	$('body').on('mouseenter', '.service-box', function(){
		$(this).parents('.service-carousel').find('.service-box').removeClass('is--active');
		$(this).addClass('is--active');
	});
}

function initIntlInput(target) {
	if ($(target).length > 0) {
		var input = document.getElementsByClassName("js-byphone");
		//var countryData = window.intlTelInputGlobals.getCountryData();
		for (var i = 0; i < input.length; i++) {
			var dcountry = $(input[i]).data('defaultcountry');
			var iti = window.intlTelInput(input[i], {
				utilsScript: 'assets/js/utils.js?22',
				initialCountry: dcountry,
				separateDialCode: true,
				autoPlaceholder: 'polite',
				rtl: true
			});
			var ccode = document.querySelector('.dialCode');
			if (ccode) {
				//var cclas = input[0].offsetParent.previousElementSibling.className;
				//ccode = document.querySelector('.' + cclas);
				//input[i].offsetParent.previousElementSibling.value = iti.s.dialCode;
				input[i].offsetParent.previousElementSibling.value = iti.getSelectedCountryData().dialCode;
				input[i].addEventListener('countrychange', function (e) {
					var x = e.path[1].innerText;
					var y = x.replace(/\+/g, '');
					// e.target.offsetParent.previousElementSibling.value = iti.s.dialCode;
					e.target.offsetParent.previousElementSibling.value = y;
				});
			}
			//ccode.addEventListener('change', function () {
			//	iti.setCountry(this.value);
			//});
		}
		$(target).keypress(validateNumber);
	}
}

function validateNumber(event) {
	var key = window.event ? event.keyCode : event.which;
	if (event.keyCode === 8 || event.keyCode === 46) {
		return true;
	} else if (key < 48 || key > 57) {
		return false;
	} else {
		return true;
	}
};

function getFormValues(target){
	var formdata = '';
	var self = $(target);
	var gtform = self.parents('form');
	var gttoemail = gtform.attr('data-toemail');
	var gtcc = gtform.attr('data-cc');
	var gtformname = gtform.attr('data-formname');
	var isFormValid = true;
	gtform.find('.js-valGet').each(function(i,e){
		$e = $(e);
		formdata = formdata + '\n' + $e.val();
		if ($.trim($e.val()).length == 0){
			$e.addClass("error-field");
			isFormValid = false;
			$e.focus();
		} else {
			$e.removeClass("error-field");
		}
	});
	if (isEmail(gtform.find(".js-emailvalid").val())) {
		gtform.find(".js-emailvalid").removeClass("error-field");
	} else {
		gtform.find(".js-emailvalid").addClass("error-field");
		isFormValid = false;
		$e.focus();
	}
	if (isPhone(gtform.find(".js-numbervalid").val())) {
		gtform.find(".js-numbervalid").removeClass("error-field");
	} else {
		gtform.find(".js-numbervalid").addClass("error-field");
		isFormValid = false;
		$e.focus();
	}
	if(isFormValid == true){
		// SendEmail('info@<?php echo "$brandName";?>solutions.com','' ,'Contact Us' ,formdata);
		SendEmail(gttoemail,gtcc,gtformname,formdata);
	}
}

function SendEmail(To,CC,Subject,Body){
	var postData = {To: To,CC: CC,Subject: Subject,Body: Body}
	$.ajax({
		url: 'https://crmalert.gocrmlive.com/api/Projects/ContactUs',
		type: 'POST',
		data: postData,
		dataType: 'json',
		aync: false,
		success: function (data) {
			thankyounote();
		},
		error: function (err) {
			thankyounote();
		},
		beforeSend: function (xhr) {
		},
		complete: function (data) {
		}
	}); 
}

function isEmail(email) { 
	return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
}

function isPhone(phone){
	return /[0-9 -()+]+$/i.test(phone);
	// if((phone.length < 6) || (!intRegex.test(phone))){
	// 	alert('Please enter a valid phone number.');
	// 	return false;
	// }
}

function thankyounote(){
	$('.form_message').show().delay(7000).fadeOut();
	$('html,body').animate({
        scrollTop: $('.form_message').offset().top - 100
    }, 'slow');
    $('.js-valGet').each(function(i, e) {
        $(e).val("");
    });
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function checkviewport(target){
	var $target = $(target);
	$target.each(function (i, ele) {
		var $ele = $(ele);
		if ($ele.isInViewport()){
			$ele.addClass('isOnScreen');
		} else {
			$ele.removeClass('isOnScreen');
		}
	});
}

function getCopyYear() {
    var copyright = new Date().getFullYear();
    $(".copyrightyear").text(copyright);
}