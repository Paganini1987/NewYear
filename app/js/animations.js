import { gsap } from "gsap"

//Анимация появления элементов на первом экране
let slide0 = gsap.timeline({paused:true});
let slide1 = gsap.timeline({paused:true, onComplete: ()=>{slide1.kill()}});
let slide2 = gsap.timeline({paused:true, onComplete: ()=>{slide2.kill()}});
let slide3 = gsap.timeline({paused:true, onComplete: ()=>{slide3.kill()}});
let slide4 = gsap.timeline({paused:true, onComplete: ()=>{slide4.kill()}});
let fallingGlasses = gsap.timeline({paused:true,repeat:-1});

function init () {
	//Ждём загрузку изображений
	let arrImgs = [];
	let selectors = ['.cube--1', '.cube--2'];
	let loaded = false;

	selectors.forEach(selector=>{
		let img = new Image();

		
		if (document.querySelector(selector) && document.querySelector(selector).getAttribute('src')) {
			img.src = document.querySelector(selector).getAttribute('src')

			arrImgs.push(img)
		}
		
		img.onload = function () {
			img._loaded = true;

			if (arrImgs.every(img=>img._loaded) && !loaded) {
				loaded = true
				document.querySelector('body').classList.add('loaded')
				slide0.play()
			}
		}
	})

	//Fallback
	setTimeout(()=>{
		if (!loaded) {
			loaded = true
			document.querySelector('body').classList.add('loaded')
			slide0.play()
		}
	}, 5000)

	slide0
		.from('[data-slide="0"] .title svg, [data-slide="0"] .text span', 0.6, {
			y: '100%',
			opacity: 0,
			ease: 'power2.out'
		})
		.from('[data-slide="0"] .cube', 0.3, {
			y: 80,
			opacity: 0,
			ease: 'power2.out'
		})
		.from('[data-slide="0"] .ellips', 0.3, {
			y: 80,
			opacity: 0,
			ease: 'power2.out'
		})
		.from('[data-slide="0"] .star', {
			duration: 1.5,
			scale: 0.5, 
			opacity: 0, 
			delay: 0.5, 
			stagger: 0.2,
			ease: "elastic", 
			force3D: true,
			onComplete: function () {
				let stars = document.querySelectorAll('[data-slide="0"] .star');

				[].forEach.call(stars, (item)=>{
					item.classList.add('animation')
				})
			}
		})
		.from('[data-slide="0"] .top-line', 0.3, {
			y: -150,
			opacity: 0,
			ease: 'power2.out'
		},'-=1')
		.from('[data-slide="0"] .button', 1, {
			scale: 0.5, 
			opacity: 0, 
			ease: "elastic", 
			force3D: true
		}, '-=0.5')
		.from('[data-slide="0"] .slide__logo', 0.3, {
			x: -50,
			opacity: 0,
			ease: 'power2.out'
		})
		


	//Gradient только на десктопе
	// if (window.innerWidth > 1024) {
	// 	var grad = gsap.timeline({
	// 		repeatDelay:1, 
	// 		repeat:-1, 
	// 		yoyo:true
	// 	});
			
	// 	grad
	// 		.to('#gradient-stop-1', 5, {
	// 			stopColor:'#2A17A0'
	// 		})
	// 		.to('#gradient-stop-2', 5, {
	// 			stopColor:'#780BBC'
	// 		})
	// 		.to('#gradient-stop-3', 5, {
	// 			stopColor:'#07145B'
	// 		})

	// 	var grad1 = gsap.timeline({
	// 		repeatDelay:1, 
	// 		repeat:-1, 
	// 		yoyo:true
	// 	});
			
	// 	grad1
	// 		.to('#paint0_linear > stop', 5, {
	// 			stopColor:'#06D1EE'
	// 		})
	// 		.to('#paint1_linear > stop', 5, {
	// 			stopColor:'#06D1EE'
	// 		})
	// }
}

slide1
	.from('[data-slide="1"] .top-line, [data-slide="1"] .time', 0.3, {
		y: -150,
		opacity: 0,
		ease: 'power2.out'
	})
	.from('[data-slide="1"] .button', 1, {
		scale: 0.5, 
		opacity: 0, 
		ease: "elastic", 
		force3D: true
	}, 0)
	.from('[data-slide="1"] .slide__logo', 0.3, {
		x: -50,
		opacity: 0,
		ease: 'power2.out'
	}, 0)


slide2
	.from('[data-slide="2"] .title svg, [data-slide="2"] .text span', 0.6, {
		y: '100%',
		opacity: 0,
		ease: 'power2.out'
	})
	.from('[data-slide="2"] .cube', 0.3, {
		y: 80,
		opacity: 0,
		ease: 'power2.out'
	})
	.from('[data-slide="2"] .ellips', 0.3, {
		y: 80,
		opacity: 0,
		ease: 'power2.out'
	})
	.from('[data-slide="2"] .top-line', 0.3, {
		y: -150,
		opacity: 0,
		ease: 'power2.out'
	})
	.from('[data-slide="2"] .share', 1, {
		scale: 0.5, 
		opacity: 0, 
		ease: "elastic", 
		force3D: true
	}, '-=0.5')
	.from('[data-slide="2"] .slide__logo', 0.3, {
		x: -50,
		opacity: 0,
		ease: 'power2.out'
	})
	.from('[data-slide="2"] .star', {
		duration: 2,
		scale: 0.5, 
		opacity: 0, 
		delay: 0.5, 
		stagger: 0.2,
		ease: "elastic", 
		force3D: true,
		onComplete: function () {
			let stars = document.querySelectorAll('[data-slide="2"] .star');

			[].forEach.call(stars, (item)=>{
				item.classList.add('animation')
			})
		}
	}, '-=1')

fallingGlasses
	.to('[data-slide="2"] .glasses', 1, {
		scale: 1.5, 
		yoyo: true, 
		repeat: -1, 
		ease: "power1.inOut",
		delay:1,
		stagger: {
			amount: 1, 
			grid: "auto",
			from: "center"
		}
	});

slide3
	.from('[data-slide="3"] .rules', 0.6, {
		y: 50,
		opacity: 0,
		ease: 'power2.out'
	})
	.from('[data-slide="3"] .number', 1, {
		scale: 0.5, 
		ease: "elastic",
		stagger: {
			amount: 2, 
			grid: "auto",
			from: "center"
		}
	},0)
	.from('[data-slide="3"] .button', 1, {
		scale: 0.5, 
		opacity: 0, 
		ease: "elastic", 
		force3D: true
	})
	.from('[data-slide="3"] .slide__logo', 0.3, {
		x: -50,
		opacity: 0,
		ease: 'power2.out'
	}, 0)

slide4
	.from('[data-slide="4"] .standart', 0.6, {
		y: 50,
		opacity: 0,
		ease: 'power2.out'
	})
	.from('[data-slide="4"] .star', 1, {
		scale: 0.5, 
		ease: "elastic",
		stagger: 0.2,
		onComplete: function () {
			let stars = document.querySelectorAll('[data-slide="4"] .star');

			[].forEach.call(stars, (item)=>{
				item.classList.add('animation')
			})
		}
	},0)
	.from('[data-slide="4"] .slide__logo', 0.3, {
		x: -50,
		opacity: 0,
		ease: 'power2.out'
	}, 0)
	
function slide1Play() {
	slide1.play()
}

function slide2Play() {
	slide2.play()
	fallingGlasses.play()
}

function slide3Play() {
	slide3.play()
	fallingGlasses.play()
}

function slide4Play() {
	slide4.play()
}

export default {
	init,
	slide1Play,
	slide2Play,
	slide3Play,
	slide4Play
}
	
			
	
		
