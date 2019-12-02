import Grid from './grid'

document.addEventListener("DOMContentLoaded", function() {
	let svg = document.querySelectorAll('.grid_svg');
	let grids = [];

	for (let i = 0; i < svg.length; i++) {
		let grid = new Grid(svg[i], document.querySelector('.slide'));

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
