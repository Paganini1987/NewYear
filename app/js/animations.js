import { gsap } from "gsap"

export default function () {
	//Анимация появления элементов на первом экране
	let tl = gsap.timeline({paused:true});
	let loaded = false;

	//Ждём загрузку изображений
	let arrImgs = [];
	let selectors = ['.cube--1', '.cube--2'];

	selectors.forEach(selector=>{
		let img = new Image();

		arrImgs.push(img)

		img.src = document.querySelector(selector).getAttribute('src')

		img.onload = function () {
			img._loaded = true;

			if (arrImgs.every(img=>img._loaded) && !loaded) {
				loaded = true
				document.querySelector('body').classList.add('loaded')
				tl.play()
			}
		}
	})

	//Fallback
	setTimeout(()=>{
		if (!loaded) {
			loaded = true
			document.querySelector('body').classList.add('loaded')
			tl.play()
		}
	}, 5000)

	tl
		.from('.top-line, .title, .cube, .ellips, .text', 1.5, {
			y: 50,
			opacity: 0
		})
		.from('.button', 1, {
			scale: 0.5, 
			opacity: 0, 
			ease: "elastic", 
			force3D: true
		}, '-=0.5')
		.from('.slide__logo', 0.3, {
			x: -50,
			opacity: 0
		})
		.from(".star", {
			duration: 2,
			scale: 0.5, 
			opacity: 0, 
			delay: 0.5, 
			stagger: 0.2,
			ease: "elastic", 
			force3D: true,
			onComplete: function () {
				let stars = document.querySelectorAll('.star');

				[].forEach.call(stars, (item)=>{
					item.classList.add('animation')
				})
			}
		}, '-=1')


	//Gradient
	var grad = gsap.timeline({
		repeatDelay:1, 
		repeat:-1, 
		yoyo:true
	});
		
	grad
		.to('#gradient-stop-1', 5, {
			stopColor:'#2A17A0'
		})
		.to('#gradient-stop-2', 5, {
			stopColor:'#780BBC'
		})
		.to('#gradient-stop-3', 5, {
			stopColor:'#07145B'
		})

	var grad1 = gsap.timeline({
		repeatDelay:1, 
		repeat:-1, 
		yoyo:true
	});
		
	grad1
		.to('#paint0_linear > stop', 5, {
			stopColor:'#06D1EE'
		})
		.to('#paint1_linear > stop', 5, {
			stopColor:'#06D1EE'
		})
			
	
		

		
		
}