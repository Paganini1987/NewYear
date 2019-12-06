export default class Grid {
	constructor (svg, selector) {
		this.selector = selector
		this.wrap = svg.closest(this.selector);
		this.svg = svg;
		this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

		this.init();
	}
	init () {
		let d = this.draw();

		this.path.setAttribute('d', d)

		this.svg.appendChild(this.path)
	}
	draw () {
		let path = '';
		let size = 41;

		for (let i = 0; i< size; i++) {
			if (i > 0) {
				path += ' '
			}

			path += 'M' + (i * 100) + ' 0' + ' V 5000 M0 ' + (i * 100) + ' H 5000'
		}
		
		return path
	}
	resize () {
		let wrapWidth = this.wrap.clientWidth;
		let wrapHeight = this.wrap.clientHeight;
		let ratio = wrapWidth / wrapHeight;

		this.path.setAttribute('vector-effect', 'non-scaling-stroke')

		if (wrapWidth === 0) return null;

		if (wrapWidth >= 1600) {
			this.svg.setAttribute('viewBox', '0 0 4400 3100')
			this.path.setAttribute('stroke', 'url(#paint0_linear)')
		} else if (wrapWidth >= 1024) {
			this.svg.setAttribute('viewBox', '0 0 1599 ' + Math.round(1599/ratio))
			this.path.setAttribute('stroke', 'url(#paint1_linear)')
		} else if (wrapWidth >= 320) {
			this.svg.setAttribute('viewBox', '0 0 1100 ' + Math.round(1599/ratio))
			this.path.setAttribute('stroke', 'url(#paint1_linear)')
		}

		//Горизонтальный режим
		if (this.wrap.dataset.orientation !== 'portrait' && wrapWidth < 1024) {
			this.svg.setAttribute('viewBox', '0 0 2000 ' + Math.round(2000*ratio))
			this.path.setAttribute('stroke', 'url(#paint1_linear)')
		}
	}
}