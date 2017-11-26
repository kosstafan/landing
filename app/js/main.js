var burger = document.querySelector('#burger-menu');//отобрали кнопку

var menu = document.querySelector('#fulscreen-menu-list');//полноэкранное меню

var body = document.querySelector('body');

var currentWidth = screen.width

var otherSections = $(body).find('.main').find('.top').siblings()

burger.addEventListener('click', function() {//вешаем обработчик по клику
	menu.style.display = 'flex';//меняем отображение у меню
	body.classList.add('disabled-onepage-scroll');
	
});

var closeMenu = document.querySelector('#close-menu');//кнопка закрытия меню

closeMenu.addEventListener('click', function() {//вешаем обработчик по клику
	menu.style.display = 'none';//меняем отображение у меню
	body.classList.remove('disabled-onepage-scroll');
	 });


//аккордеон команда
$('.team-list__line').on('click', (e) => {
	let currentLine = $(e.currentTarget)
	currentLine.toggleClass('team-list__line_active')
	currentLine.siblings().removeClass('team-list__line_active')
})


//аккордеон меню
$('.menu__line').on('click', (e) => {
	let currentLine = $(e.currentTarget)
	currentLine.toggleClass('menu__line_active')
	currentLine.siblings().removeClass('menu__line_active')
})



//отзывы в телефоне
$(document).ready(function() {
	if (currentWidth <= 480) {
		$('.reviews__item').on('click', (e) => {
		let currentReview = $(e.currentTarget)
		let reviewContent = $(currentReview.find('.reviews__content'))
				$.fancybox.open([reviewContent],{

				});
})
	}

});

//клик по картинке отзыва
$(document).ready(function() {
	if (currentWidth > 480) {
		$('.reviews__item').on('click', (e) => {
		let currentItem = $(e.currentTarget)
		let currentReview = currentItem.find('.reviews__content')
		currentReview.removeAttr('style')
		currentReview.toggleClass('reviews__content_active')
		currentItem.siblings().find('.reviews__content').removeClass('reviews__content_active')
})

	}
})

//отзывы в планшете
$(document).ready(function() {
		$('.reviews__link').on('click', (e) => {
			e.preventDefault()
			let currentLink = $(e.currentTarget)
			let currentReview = currentLink.closest('.reviews__content')
				$.fancybox.open([currentReview],{

				});
})
});

//закрываем попап
$(document).ready(function() {
	let slide = $('.close-review')
	$(slide).on('click', (e) =>{
		e.preventDefault()
		$.fancybox.close();
	})
});

//слайдер
$(document).ready(function() {
	let moveSlide = function (container, slideNum) {
		
		let items = $(container).find('.slider-item')
		let activeSlide = $(items).filter('.slider-item_active')
		let reqItem = $(items).eq(slideNum)
		let reqIndex = $(reqItem).index()
		let duration = 500

		if (reqItem.length) {
			container.animate({
			'left' : -reqIndex * 100 + '%'
		}, duration, function() {
			activeSlide.removeClass('slider-item_active')
			reqItem.addClass('slider-item_active')
		})
		}
	}


//Slider
	$('.slider-link').on('click', (e) => {
		e.preventDefault()
		let $this = $(e.currentTarget)
		let container = $($this).closest('.slider-btn').siblings('.slider-window').find('.slider-blocks')
		let items = $(container).find('.slider-item')
		let activeItem = $(items).filter('.slider-item_active')
		let existedItem
		let edgeItem
		let reqItem

		if ($this.hasClass("slider-link_right")) {//вперёд
			existedItem = activeItem.next()
			edgeItem = items.first()
			
			
		} 
		if ($this.hasClass("slider-link_left")) {//назад
			existedItem = activeItem.prev()
			edgeItem = items.last()
			
		}

		reqItem = existedItem.length ? existedItem.index() : edgeItem.index()
		moveSlide(container, reqItem)
	})

});

//скролл
$(document).ready(function() {
	let moveScroll = function (container, sectionNum) {
		
		let items = $(container).find('.section')
		let activeSection = $(items).filter('.section_active')
		let reqItem = $(items).eq(sectionNum)
		let reqIndex = $(reqItem).index()
		let duration = 500

		if (reqItem.length) {
			container.animate({
			'top' : -reqIndex * 100 + '%'
		}, duration, function() {
			activeSection.removeClass('section_active')
			reqItem.addClass('section_active')
		})
		}
	}


//OPS
$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});
})

//карта



	function initMap() {
        var uluru = {lat: 59.979043, lng: 30.314047};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: uluru,
          scrollwheel: false
        });
				var locations = [
					{
						title: 'Mr. Burger',
						position: {lat: 59.979043, lng: 30.314047},
						icon: {
							url: "../img/map-marker.svg",
							scaledSize: new google.maps.Size(46, 57)
						}

					},
					{
						title: 'Mr. Burger',
						position: {lat: 59.979043, lng: 30.414047},
						icon: {
							url: "../img/map-marker.svg",
							scaledSize: new google.maps.Size(46, 57)
						}

					},
					{
						title: 'Mr. Burger',
						position: {lat: 60.019043, lng: 30.496060},
						icon: {
							url: "../img/map-marker.svg",
							scaledSize: new google.maps.Size(46, 57)
						}
					}			
				];

        locations.forEach( function( element ) {
	var marker = new google.maps.Marker({
			position: element.position,
			map: map,
			title: element.title,
			icon: element.icon,
		});
	});	
}

$('.nav__link').on('click', (e) => {
	e.preventDefault()
	let currentNavLine = $(e.currentTarget).closest('.nav__line')
	let linkIndex = currentNavLine.index()
	
	if ($(e.currentTarget).hasClass('contacts_link')) {
		$.fn.moveTo(linkIndex + 3)
	} else {
		$.fn.moveTo(linkIndex + 2)
	}
	
})

$('.order-btn').on('click', (e) => {
	e.preventDefault()
	let orderIndex = $('.order').index()
	$.fn.moveTo(orderIndex + 1)
})


//фулскрин-меню
$('.fulscreen-menu-list__link').on('click', (e) => {
	e.preventDefault()
	let fullLinkIndex = $(e.currentTarget).closest('.fulscreen-menu-list__line').index()
	menu.style.display = 'none';//меняем отображение у меню
	body.classList.remove('disabled-onepage-scroll')
	if ($(e.currentTarget).hasClass('contacts_link')) {
		$.fn.moveTo(fullLinkIndex + 3)
	} else {
		$.fn.moveTo(fullLinkIndex + 2)
	}
})

//заказ в фулскрин меню
$('.fulscreen-order-btn').on('click', (e) => {
	e.preventDefault()
	let orderIndex = $('.fulscreen__btn').index()
	menu.style.display = 'none';//меняем отображение у меню
	body.classList.remove('disabled-onepage-scroll')
	$.fn.moveTo(orderIndex + 1)
})


//форма
var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target);

    var formMessage = $('.ansver-message')
        
    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            formMessage.append('<p class="success">' + mes + '</p>');
        } else{
            formMessage.append('<p class="error">' + mes + '</p>');
        }

        $('.form-ansver').addClass('form-ansver_active')
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });


}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

/*$('#order-form').on('submit', (e) => {
	submitForm(form)
	$('.form-ansver').addClass('form-ansver_active')
});*/

$('#order-form').on('submit', (submitForm))

$('.close-ansver').on('click', (e) => {
	e.preventDefault()
	$('.form-ansver').removeClass('form-ansver_active')
})