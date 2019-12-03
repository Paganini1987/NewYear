import Grid from './grid'

document.addEventListener("DOMContentLoaded", function() {
	let svg = document.querySelectorAll('.grid__svg');
	let grids = [];

	for (let i = 0; i < svg.length; i++) {
		let grid = new Grid(svg[i], document.querySelector('.slide.active'));

		grids.push(grid)
	}
	
	window.addEventListener('resize', function () {
		for (let i = 0; i < grids.length; i++) {
			grids[i].resize()
		}
	})

	for (let i = 0; i < grids.length; i++) {
		grids[i].resize()
	}
});
