var illoElem = document.querySelector('.zdog-canvas');
var illoWidth = 128;
var illoHeight = 128;
var minWindowSize = Math.min( window.innerWidth - 20, (window.innerHeight - 60) );
var zoom = Math.floor( minWindowSize / illoWidth );
illoElem.setAttribute( 'width', illoHeight * zoom );
illoElem.setAttribute( 'height', illoWidth * zoom );

//
var base_y = 50;
//

const TAU = Zdog.TAU;
let isDragging = false; 
let isPlaying = false;
let timerEndDrag;

let illo = new Zdog.Illustration({
	element: illoElem,
	zoom: zoom / 1.5, 
	dragRotate: true,
	onDragStart: function(){
		clearTimeout(timerEndDrag);
		isDragging = true;
		music.playbackRate = 2.5;
	},
	onDragEnd: function(){
		timerEndDrag = setTimeout(function(){
			isDragging = false;
		}, 500);
	}
});

// white board
new Zdog.Rect({
	addTo: illo,
	width: 100,
	height: 100,
	stroke: 4,
	fill: true,
	color: '#fff',
	rotate: {x: TAU / 4},
	translate: {y: base_y + 7},
});

// base
new Zdog.Ellipse({
	addTo: illo,
	diameter: 80,
	rotate: {x: TAU / 4},
	translate: {y: base_y},
	stroke: 10,
	fill: true,
	color: '#FED3FC'
});

// chocolate 1
new Zdog.Cylinder({
	addTo: illo,
	diameter: 80,
	length: 5,
	stroke: true,
	color: '#954C37',
	rotate: {x: TAU / 4},
	translate: {y: base_y - 8},
});

// cream 1 
new Zdog.Ellipse({
	addTo: illo,
	diameter: 80,
	rotate: {x: TAU / 4},
	translate: {y: base_y - 14},
	stroke: 5,
	fill: true,
	color: '#fff'
});

// chocolate 2
new Zdog.Cylinder({
	addTo: illo,
	diameter: 80,
	length: 5,
	stroke: true,
	color: '#954C37',
	rotate: {x: TAU / 4},
	translate: {y: base_y - 20},
});

// cream 1 
new Zdog.Ellipse({
	addTo: illo,
	diameter: 80,
	rotate: {x: TAU / 4},
	translate: {y: base_y - 26},
	stroke: 5,
	fill: true,
	color: '#fff'
});

// chocolate 3
new Zdog.Cylinder({
	addTo: illo,
	diameter: 80,
	length: 5,
	stroke: true,
	color: '#954C37',
	rotate: {x: TAU / 4},
	translate: {y: base_y - 32},
});

// top cream 
var top_cream = new Zdog.Ellipse({
	addTo: illo,
	diameter: 80,
	rotate: {x: TAU / 4},
	translate: {y: base_y - 40},
	stroke: 10,
	fill: true,
	color: '#B9E6FF'
});

top_cream.copy({
	translate: {y: base_y - 44},
});


new Zdog.Ellipse({
	addTo: illo,
	diameter: 84,
	opacity: .5,
	rotate: {x: TAU / 4},
	translate: {y: base_y - 48},
	stroke: 2,
	color: 'rgba(255,255,255,.5)',
});


/*
new Zdog.Shape({
	addTo: illo,
	stroke: 10,
	translate: {y: base_y - 36, z: 40},
	color: '#B9E6FF'
});
*/

// runny scream parameters

var point_x_0 = -10;
var point_x_1_a = -5;
var point_x_1 = -2;
var point_x_2 = 0;
var point_x_3 = 2;
var point_x_3_a = 5;
var point_x_4 = 10;
var point_y_0 = 0;
var point_y_1 = 8;
var point_y_2 = 10;
var point_z_0 = 25;
var point_z_1 = 28;
/*

 ┃             ┊
 ┃             ┊
 ┃             ┊
 ┃             ┊
 ┃             ┊
━0━━━━━━1/0━━━━━━━━━━2━━━━━━━4━
 ┃             ┊
 ┃             ┊
 ┃┈┈┈┈┈┈┈1┈┈┈┈┈┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 ┃             ┊
 ┃             ┊
 ┃┈┈┈┈┈┈┈2┈┈┈┈┈┊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*/ 

// runny 1
var runny = new Zdog.Shape({
	addTo: illo,
	stroke: 10,
	translate: {y: base_y - 40},
	color: '#B9E6FF',
	closed: true,
	fill: true,
	scale: {x: 1.5, y: 1.5, z: 1.5},
	path: [ 
		// start
		{x: point_x_0, y: point_y_0, z: point_z_0},

		{arc: [
			{x: point_x_1, y: point_y_0, z: point_z_1},
			{x: point_x_1, y: point_y_1, z: point_z_1},
		]},

		{arc: [
			{x: point_x_1, y: point_y_2, z: point_z_1},
			{x: point_x_2, y: point_y_2, z: point_z_1},
		]},

		{arc: [
			{x: point_x_3, y: point_y_2, z: point_z_1},
			{x: point_x_3, y: point_y_1, z: point_z_1},
		]},
		
		{arc: [
			{x: point_x_3, y: point_y_0, z: point_z_1},
			{x: point_x_4, y: point_y_0, z: point_z_0},
		]},

		{arc: [
			{x: point_x_3_a, y: point_y_0, z: point_z_1},
			{x: point_x_2, y: point_y_0, z: point_z_1},
		]},

		{arc: [
			{x: point_x_1_a, y: point_y_0, z: point_z_1},
			{x: point_x_0, y: point_y_0, z: point_z_0},
		]},
	],

});

// runny 2
runny.copy({
	rotate: {y: 1.4},
	translate: {y: base_y - 40},
	scale: {x: 1.2, y: 1.2, z: 1.5},
});

// runny 3
runny.copy({
	rotate: {y: 2.2},
	translate: {y: base_y - 40},
	scale: {x: 1.8, y: 1.8, z: 1.45},
});


// runny 4
runny.copy({
	rotate: {y: 4.31},
	translate: {y: base_y - 40},
	scale: {x: 1.2, y: 1, z: 1.45},
});


// runny 5
runny.copy({
	rotate: {y: 3.58},
	translate: {y: base_y - 40},
	scale: {x: 1.2, y: 2, z: 1.45},
});


// top cream end

// star
var starPath = ( function() {
	var path = [];
	var starRadiusA = 3;
	var starRadiusB = 1.7;
	for ( var i=0; i<10; i++ ) {
		var radius = i % 2 ? starRadiusA : starRadiusB;
		var angle = TAU * i/10 + TAU/4;
		var point = {
			x: Math.cos( angle ) * radius,
			y: Math.sin( angle ) * radius,
		};
		path.push( point );
	}
	return path;
})();
// star shape
var star = new Zdog.Shape({
	addTo: illo,
	path: starPath,
	scale: {x: 3, y: 3, z: 3},
	translate: {y: base_y - 77},
	stroke: 4,
	color: '#FFFA00',
});

star.copy({
	addTo: illo,
	scale: {x: 1, y: 1, z: 1},
	color: '#ff0',
});

var glow = new Zdog.Shape({
	addTo: illo,
	stroke: 20,
	color: 'rgba(255,255,0,.3)',
	translate: { y: base_y - 77},
});

glow.copy({
	addTo: illo,
	stroke: 35,
	color: 'rgba(255,255,0,.2)',
	translate: { y: base_y - 77},
});

glow.copy({
	addTo: illo,
	stroke: 50,
	color: 'rgba(255,255,0,.1)',
	translate: { y: base_y - 77},
});

new Zdog.Cylinder({
	addTo: illo,
	diameter: 3,
	length: 20,
	rotate: {x: TAU / 4},
	translate: {y: base_y - 58},
	stroke: false,
	color: '#7600FF',
});

var colour_1 = '#FF72DF';
var colour_2 = '#0082FF';
var colour_3 = '#57FF00';
var colour_4 = '#FFFFFF';
var colour_5 = '#FF3939';

// candies
var candy_1 = new Zdog.Hemisphere({
	addTo: illo,
	diameter: 5,
	stroke: false,
	color: colour_1,
	rotate: {x: TAU / 4},
	translate: {x: 10, y: base_y - 50,},
});

candy_1.copy({
	diameter: 3,
	color: colour_2,
	translate: {x: 10, y: base_y - 50, z: 30},
});

candy_1.copy({
	diameter: 4,
	color: colour_3,
	translate: {x: -20, y: base_y - 50, z: -24},
});

candy_1.copy({
	diameter: 4,
	color: colour_5,
	translate: {x: -20, y: base_y - 50, z: 19},
});

candy_1.copy({
	diameter: 4,
	color: colour_2,
	translate: {x: 3, y: base_y - 50, z: -32},
});

candy_1.copy({
	diameter: 4,
	color: colour_5,
	translate: {x: 18, y: base_y - 50, z: -18},
});

var candy_2 = new Zdog.Cylinder({
	addTo: illo,
	diameter: 2,
	length: 6,
	rotate: {y: 0.3},
	translate: {x: 17, y: base_y - 50, z: 13},
	color: colour_3,
	stroke: false,
});

candy_2.copy({
	diameter: 2,
	length: 6,
	rotate: {y: 0.9},
	translate: {x: 33, y: base_y - 50, z: 4},
	color: colour_4,
});

candy_2.copy({
	diameter: 2,
	length: 6,
	rotate: {y: 9},
	translate: {x: 33, y: base_y - 50, z: -20},
	color: colour_5,
});

candy_2.copy({
	diameter: 2.4,
	length: 5,
	rotate: {y: 100},
	translate: {x: -13, y: base_y - 50, z: -4},
	color: colour_4,
});

candy_2.copy({
	diameter: 2.4,
	length: 5,
	rotate: {y: 74},
	translate: {x: -38, y: base_y - 50, z: -4},
	color: colour_1,
});

candy_2.copy({
	diameter: 2.4,
	length: 7,
	rotate: {y: 34},
	translate: {x: -3, y: base_y - 50, z: 34},
	color: colour_1,
});

candy_2.copy({
	diameter: 4,
	length: 4,
	rotate: {y: 54},
	translate: {x: -10, y: base_y - 50, z: -34},
	color: colour_1,
});


// illo.updateRenderGraph();

illo.rotate.x = -0.2;

function animate(){
	if(isPlaying){
		if(!isDragging){
			illo.rotate.y += 0.003;
			music.playbackRate = 1;
		}
	}
	illo.updateRenderGraph();
	requestAnimationFrame(animate);
}

animate();
