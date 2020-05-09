var music = document.getElementById('music');
music.loop = true;
music.load();

var can_play = false;
var isClicked = false;
music.addEventListener('canplaythrough', (event) => {
	/*
	can_play = true;
	play();
	*/
	var check_progress = setInterval(function(){
		if(music.buffered.end(music.buffered.length - 1) == music.duration)
		{
			clearInterval(check_progress);
			can_play = true;
			play();
		}
	}, 500);
}, false);


function play(){
	if(!can_play){
		$('#btn_play').text('OPENING').css({'font-size': '20px'}).addClass('btn-play-loading');
	}else{
		if(isClicked){
			start();
		}
	}
}

function uncover(){
	isClicked = true;
	play();
	music.play();
}

function start(){
	isPlaying = true;
	music.play();
	$('body').css({'position': 'static'}).scrollTop(0);
	$('.zdog-canvas').addClass('zdog-unfog');
	$('.message').addClass('zdog-unfog');
	$('.start').animate({
		opacity: '0',
	}, 3000, 'easeInQuart', function(){
		$(this).hide();
	});
}

window.addEventListener("scroll", function() {
	var y = $('html').scrollTop();
	if(y > 0){
		$('html').css({'background-color': '#FF9BD7'});
	}else{
		$('html').css({'background-color': '#5C1077'});
	}
}, false);

