if (document.documentElement.clientWidth > 600){
$('.menu_btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu_btn_active');
	$('.slide_menu').toggleClass('slide_menu_active');
	$('.nav_menu').toggleClass('nav_menu_active');
	$('.poloska1').toggleClass('poloska_active');
	$('.poloska2').toggleClass('poloska_active');
	$('.poloska3').toggleClass('poloska_active');
});
$('.menu_link_btn').on('click', function(e){
	e.preventDefault;
	$('.planet_list').toggleClass('planet_list_active');
	$('.arrow').toggleClass('arrow_active');
	$('.poloska_active').toggleClass('poloska_act');
	$('.poloska_active').toggleClass('poloska_act');
	$('.poloska_active').toggleClass('poloska_act');
});

const score=document.querySelector('.Score');
const startscreen=document.querySelector('.StartScreen');
const gamearea=document.querySelector('.GameArea');
let player={ speed:7.5,score:0};
let highest=0;
startscreen.addEventListener('click',start);

let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false};

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyDown(ev){
	 ev.preventDefault();
	 keys[ev.key]=true;
}
function keyUp(ev){
	 ev.preventDefault();
	 keys[ev.key]=false;
}
function isCollide(a,b){
	 aRect=a.getBoundingClientRect();
	 bRect=b.getBoundingClientRect();

	 return !((aRect.bottom<bRect.top)||(aRect.top>bRect.bottom)||(aRect.right<bRect.left)||(aRect.left>bRect.right));
}
function moveLines(){
	 let lines=document.querySelectorAll('.lines');
	 lines.forEach(function(item){
		  if(item.y>=700){
				item.y-=700;
		  }
		  item.y+=player.speed;
		  item.style.top=item.y+'px';

	 })
}
function endGame(){
	 player.start=false;
	 startscreen.classList.remove('hide');
}
function moveCar(car){
	 let other=document.querySelectorAll('.other');
	 other.forEach(function(item){
		  if(isCollide(car,item)){
				console.log('HIT');
				endGame();
		  }
		  if(item.y>=750){
				item.y=-380;
				item.style.left=Math.floor(Math.random()*350) + 'px';
		  }
		  item.y+=player.speed;
		  item.style.top=item.y+'px';

	 })
}
function gamePlay(){

	 let car=document.querySelector('.car');
	 let road=gamearea.getBoundingClientRect();

	 if(player.start){

		  moveLines();
		  moveCar(car);
		  if(keys.ArrowUp && player.y>(road.top+70)){
				player.y-=player.speed;
		  }
		  if(keys.ArrowDown && player.y<(road.bottom-70)){
				player.y+=player.speed;
		  }
		  if(keys.ArrowLeft && player.x>0){
				player.x-=player.speed;
		  }
		  if(keys.ArrowRight && player.x<(road.width-75)){
				player.x+=player.speed;
		  }

		  car.style.top=player.y + 'px';
		  car.style.left=player.x + 'px';

		  window.requestAnimationFrame(gamePlay);
		  //console.log(player.score++);
		  player.score++;
		  if(player.score>=highest)
		  {
				highest=player.score;
		  }
		  score.innerHTML="Счёт:"+ player.score+"<br><br>"+"Рекорд:"+highest;


	 }
	 
}
function Reset(){
	 highest=0;
}
function start(){
	 //gamearea.classList.remove('hide');
	 startscreen.classList.add('hide');
	 gamearea.innerHTML="";

	 player.start=true;
	 player.score=0;
	 window.requestAnimationFrame(gamePlay);



	for(x=0;x<5;x++){
		  let roadline=document.createElement('div');
		  roadline.setAttribute('class','lines');
		  roadline.y=(x*150);
		  roadline.style.top=roadline.y+'px';
		  gamearea.appendChild(roadline);
	 }
	 
	 let car=document.createElement('div');
	 car.setAttribute('class','car');
	 gamearea.appendChild(car);

	 player.x=car.offsetLeft;
	 player.y=car.offsetTop;


	 for(x=0;x<3;x++){
		  let othercar=document.createElement('div');
		  othercar.setAttribute('class','other');
		  othercar.y=((x+1)*300)* -1;
		  othercar.style.top=othercar.y+'px';
		  othercar.style.left=Math.floor(Math.random()*300) + 'px';
		  gamearea.appendChild(othercar);
	 }
}
}
else{
	$('.menu_btn').on('click', function(e){
		e.preventDefault;
		$(this).toggleClass('menu_btn_active');
		$('.slide_menu').toggleClass('slide_menu_active');
		$('.nav_menu').toggleClass('nav_menu_active');
		$('.poloska1').toggleClass('poloska_active');
		$('.poloska2').toggleClass('poloska_active');
		$('.poloska3').toggleClass('poloska_active');
	});
	$('.menu_link_btn').on('click', function(e){
		e.preventDefault;
		$('.planet_list').toggleClass('planet_list_active');
		$('.arrow').toggleClass('arrow_active');
		$('.poloska_active').toggleClass('poloska_act');
		$('.poloska_active').toggleClass('poloska_act');
		$('.poloska_active').toggleClass('poloska_act');
	});
	
	const score=document.querySelector('.Score');
	const startscreen=document.querySelector('.StartScreen');
	const gamearea=document.querySelector('.GameArea');
	let player={ speed:8,score:0};
	let highest=0;
	startscreen.addEventListener('click',start);
	
	let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false};

        document.addEventListener('keydown',keyDown);
        document.addEventListener('keyup',keyUp);
        function keyDown(ev){
            ev.preventDefault();
            keys[ev.key]=true;

        }
        function keyUp(ev){
            ev.preventDefault();
            keys[ev.key]=false;
            
        }
	function isCollide(a,b){
		 aRect=a.getBoundingClientRect();
		 bRect=b.getBoundingClientRect();
	
		 return !((aRect.bottom<bRect.top)||(aRect.top>bRect.bottom)||(aRect.right<bRect.left)||(aRect.left>bRect.right));
	}
	function moveLines(){
		 let lines=document.querySelectorAll('.lines');
		 lines.forEach(function(item){
			  if(item.y>=900){
					item.y-=900;
			  }
			  item.y+=player.speed;
			  item.style.top=item.y+'px';
	
		 })
	}
	function endGame(){
		 player.start=false;
		 startscreen.classList.remove('hide');
	}
	function moveCar(car){
		 let other=document.querySelectorAll('.other');
		 other.forEach(function(item){
			  if(isCollide(car,item)){
					console.log('HIT');
					endGame();
			  }
			  if(item.y>=750){
					item.y=-380;
					item.style.left=Math.floor(Math.random()*350) + 'px';
			  }
			  item.y+=player.speed;
			  item.style.top=item.y+'px';
	
		 })
	}
	function gamePlay(){
	
		 let car=document.querySelector('.car');
		 let road=gamearea.getBoundingClientRect();
	
		 if(player.start){
	
			  moveLines();
			  moveCar(car);
			  if(keys.ArrowUp && player.y>(road.top+70)){
				player.y-=player.speed;
		  }
		  if(keys.ArrowDown && player.y<(road.bottom-70)){
				player.y+=player.speed;
		  }
		  if(keys.ArrowLeft && player.x>0){
				player.x-=player.speed;
		  }
		  if(keys.ArrowRight && player.x<(road.width+90)){
				player.x+=player.speed;
		  }
	
			  car.style.top=player.y + 'px';
			  car.style.left=player.x + 'px';
	
			  window.requestAnimationFrame(gamePlay);
			  //console.log(player.score++);
			  player.score++;
			  if(player.score>=highest)
			  {
					highest=player.score;
			  }
			  score.innerHTML="Счёт:"+ player.score+"<br>"+"Рекорд:"+highest;
	
	
		 }
		 
	}
	function Reset(){
		 highest=0;
	}
	function start(){
		 //gamearea.classList.remove('hide');
		 startscreen.classList.add('hide');
		 gamearea.innerHTML="";
	
		 player.start=true;
		 player.score=0;
		 window.requestAnimationFrame(gamePlay);
	
	
	
		for(x=0;x<5;x++){
			  let roadline=document.createElement('div');
			  roadline.setAttribute('class','lines');
			  roadline.y=(x*150);
			  roadline.style.top=roadline.y+'px';
			  gamearea.appendChild(roadline);
		 }
		 
		 let car=document.createElement('div');
		 car.setAttribute('class','car');
		 gamearea.appendChild(car);
	
		 player.x=car.offsetLeft;
		 player.y=car.offsetTop;
	
	
		 for(x=0;x<3;x++){
			  let othercar=document.createElement('div');
			  othercar.setAttribute('class','other');
			  othercar.y=((x+1)*300)* -1;
			  othercar.style.top=othercar.y+'px';
			  othercar.style.left=Math.floor(Math.random()*300) + 'px';
			  gamearea.appendChild(othercar);
		 }
	}
}