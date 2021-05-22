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





const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const space = new Image();
space.src = "img/kva.png";

const foodImg = new Image();
foodImg.src = "img/zvezda.png";

let box = 42;

let score = 0;


let food = {
   x: Math.floor((Math.random() * 13 + 1)) * box,
   y: Math.floor((Math.random() * 13 + 3 - 3)) * box,
};

let snake = [];
snake[0] = {
   x: 7 * box,
   y: 7 * box,
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
   if(event.keyCode == 37 && dir !="right")
      dir = "left";
   else if(event.keyCode == 38 && dir !="down")
      dir = "up";
   else if(event.keyCode == 39 && dir !="left")
      dir = "right";
   else if(event.keyCode == 40 && dir !="up")
      dir = "down";
}

function eatTail(head, arr) {
   for(let i = 0; i< arr.length; i++) {
      if(head.x == arr[i].x && head.y == arr[i].y)
      clearInterval(game); 
   }
}

function drawGame() {
   ctx.drawImage(space, 0, 0);

   ctx.drawImage(foodImg, food.x, food.y);

   for (let i = 0; i < snake.length; i++) {
      ctx.fillStyle = i == 0 ? "purple": "skyblue";
      ctx.fillRect(snake[i].x, snake[i].y, box, box);
   }

   ctx.fillStyle = "white";
   ctx.font = "40px Montserrat";
   ctx.fillText(score, box * 13, box * 0.7);

   let snakeX = snake[0].x;
   let snakeY = snake[0].y;

   if(snakeX == food.x && snakeY == food.y) {
      score++;
      food = {
      x: Math.floor((Math.random() * 13 + 1)) * box,
      y: Math.floor((Math.random() * 13 + 1)) * box,
      };
} else {
   snake.pop();
}

   if(snakeX < box || snakeX > box * 12
      || snakeY < 1.5 * box || snakeY > box * 12)
      clearInterval(game);

   if(dir == "left") snakeX -= box;
   if(dir == "right") snakeX += box;
   if(dir == "up") snakeY -= box;
   if(dir == "down") snakeY += box;

   let newHead = {
      x: snakeX,
      y: snakeY
   };

   eatTail(newHead, snake);

   snake.unshift(newHead);
}


let game = setInterval(drawGame, 100);


$('.button').on('click', function(e){
   e.preventDefault;
   window.location.reload();
   })
