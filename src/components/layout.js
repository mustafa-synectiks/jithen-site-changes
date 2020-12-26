import React, { useEffect } from 'react';
import Header from './Header';
// import $ from 'jquery';
// import * as jquery from 'jquery';
import Footer from './Footer';
import './layout.css';
const Layout = ({ children }) => {
	useEffect(() => {
		// typeof window !== 'undefined' && window;
		var $ = window.$;
		// var on = window.on;
		$(function($) {
			let url = window.location.href;
			$('.dropdown-item').each(function() {
				if (this.href === url) {
					$(this).parents('.nav-item').find('.nav-link').addClass('active');
				}
			});
		});
		$(function($) {
			let url = window.location.href;
			$('ul li a').each(function() {
				if (this.href === url) {
					$(this).addClass('active');
					// $(this).parents('.nav-item').find('a.fnt-nav.nav-link').addClass('active');
				}
			});
		});

		// changes url on tab click
		$('.nav').click(function(e) {
			e.preventDefault();
			let rel = $(this).parents('.nav-item').find('.active').attr('rel', 'tabOne');
			if (e.target.classList.contains('active')) {
				e.target.href = e.target.rel;
				console.log(e.target.href);
			}
		});
		// Cookie Strip
		$(document).ready(function() {
			// $('#hide').click(function() {
			// 	$('.prvtpolicy').hide();
			// });
			const showMsg = sessionStorage.getItem('showMsg');
			if (showMsg !== 'false') {
				$('.prvtpolicy').show();
			}
			$('#hide').on('click', function() {
				$('.prvtpolicy').hide();
				// $('.prvtpolicy').fadeOut('slow');
				sessionStorage.setItem('showMsg', 'false');
			});
			// $(window).unload(function(){
			// 	localStorage.clear(showMsg);
			// })
		});

		$(document).ready(function() {
			$('#otherservice').hide();
		});

		// $("#otherservice").style.display = "none";
		$('#service').change(function() {
			var val = $(this).val();
			$('#otherservice').hide();
			if (val == 'Others') {
				$('#otherservice').show();
				// $("#otherservice").style.display = "block";
			} else {
				$('#otherservice').hide();
			}
		});

		$(document).ready(function() {
			$('#othersource').hide();
		});

		$('#source').change(function() {
			var val = $(this).val();
			$('#othersource').hide();
			if (val == 'Othersource') {
				$('#othersource').show();
			} else {
				$('#othersource').hide();
			}
		});
		// /Case Study Starts
		// jQuery(function($) {
		$(document).ready(function() {
			var $slider = $('.slider');
			var $progressBar = $('.progress');
			var $progressBarLabel = $('.slider__label');

			$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				var calc = nextSlide / (slick.slideCount - 1) * 100;

				$progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc);

				$progressBarLabel.text(calc + '% completed');
			});

			$slider.slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				speed: 400,
				nextArrow: $('.prevbtn'),
				prevArrow: $('.nextbtn'),
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							centerMode: true
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							centerMode: false,
							infinite: true,
							mobileFirst: true
						}
					},
					{
						breakpoint: 480,
						settings: {
							centerMode: false,
							slidesToShow: 1,
							mobileFirst: true,
							slidesToScroll: 1,
							infinite: true,
							autoplay: false,
							autoplaySpeed: 2000
						}
					}
				]
			});
		});

		// Logo Slider
		$(document).ready(function() {
			$('.customer-logos').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 1000,
				arrows: false,
				dots: false,
				pauseOnHover: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 520,
						settings: {
							slidesToShow: 2
						}
					}
				]
			});
		});

		// OWL V1.3

		$(document).ready(function() {
			var time = 8; // time in seconds

			var $progressBar, $bar, $elem, isPause, tick, percentTime, mobileNone;
			// var $elem = $('#owl-demo');
			//Init the carousel
			var timerId = -1;
			$(window).resize(function() {
				onResize();
			});

			function onResize() {
				if (timerId !== -1) {
					clearTimeout(timerId);
				}
				// debugger;

				if ($(window).width() < 567) {
					timerId = setTimeout(() => {
						showHideCarousel(false);
					}, 500);
				} else {
					timerId = setTimeout(() => {
						showHideCarousel(true);
					}, 500);
				}
			}

			function showHideCarousel(bShow) {
				if (bShow) {
					createCarousel();
				} else {
					// owl.destroy();
					// $('#owl-demo').owlCarousel('destroy');
					if ($('#owl-demo').data('owlCarousel')) {
						$('#owl-demo').data('owlCarousel').destroy();
					}
				}
			}
			var owl;
			function createCarousel() {
				$('#owl-demo').owlCarousel({
					// $elem.owlCarousel({
					slideSpeed: 400,
					paginationSpeed: 400,
					singleItem: true,
					afterInit: progressBar,
					afterMove: moved,
					startDragging: pauseOnDragging,
					afterAction: function() {
						if (owl) {
							var item = owl.currentItem;
							$('h3').removeClass('animated fadeInRight');
							$('.owl-item')
								.not('.cloned')
								.eq(item)
								.find('h3')
								.addClass('animated delay-1s slow fadeInRight');
							$('p').removeClass('animated fadeInRight');
							$('.owl-item')
								.not('.cloned')
								.eq(item)
								.find('p')
								.addClass('animated delay-2s slow fadeInRight');
							$('a').removeClass('animated fadeInRight');
							$('.owl-item')
								.not('.cloned')
								.eq(item)
								.find('a')
								.addClass('animated delay-3s slow fadeInRight');
						}
					}
				});
				owl = $('#owl-demo').data('owlCarousel');
			}

			createCarousel();
			onResize();
			//Init progressBar where elem is $("#owl-demo")
			function progressBar(elem) {
				$elem = elem;
				//build progress bar elements
				buildProgressBar();
				//start counting
				start();
			}

			function buildProgressBar() {
				// if ($('#progressBar').length === 0) {
				$progressBar = $('<div>', {
					id: 'progressBar'
				});
				$bar = $('<div>', {
					id: 'bar'
				});

				$progressBar.append($bar).appendTo($elem);
			}

			function start() {
				//reset timer
				percentTime = 0;
				isPause = false;
				//run interval every 0.01 second
				tick = setInterval(interval, 10);
			}

			function interval() {
				if (isPause === false) {
					percentTime += 1 / time;
					$bar.css({
						width: percentTime + '%'
					});
					//if percentTime is equal or greater than 100
					if (percentTime >= 100) {
						//slide to next item
						$elem.trigger('owl.next');
					}
				}
			}

			//pause while dragging
			function pauseOnDragging() {
				isPause = true;
			}

			//moved callback
			function moved() {
				//clear interval
				clearTimeout(tick);
				//start again
				start();
			}

			// 	// uncomment this to make pause on mouseover
			// $elem.on('mouseover', function() {
			// 	isPause = true;
			// });
			// $elem.on('mouseout', function() {
			// 	isPause = false;
			// });
		});
		// OWL V1.3
		$('.navbar-collapse a').click(function() {
			$('.navbar-collapse').collapse('hide');
		});
	});
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
