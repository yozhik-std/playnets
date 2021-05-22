const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let boardLocked = false;
let firstCard,secondCard;

const flipCard = e => {
	if (boardLocked) return;

    const target = e.target.parentElement;

	if (target === firstCard) return;

    target.classList.add('flip');

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = target;
	}
	else {
		hasFlippedCard = false;
		secondCard = target;

		checkForMatch();
	}
};

const checkForMatch = () => {
	const isEqual = firstCard.dataset.planet === secondCard.dataset.planet;
	isEqual ? disableCards() : unflipCards();
		
};

const disableCards = () => {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);
};

const unflipCards = () => {
	boardLocked = true;

	setTimeout(()  => {
	firstCard.classList.remove('flip');
	secondCard.classList.remove('flip');

	resetBoard();
	},1000);
};


const resetBoard = () => {
	hasFlippedCard = boardLocked = false;
	firstCard, secondCard = null;
}

cards.forEach( card => {
    card.addEventListener('click', flipCard);
	const randomIndex = Math.floor(Math.random() * cards.length);
	card.style.order = randomIndex;
});



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

$(".modal").each( function(){
	$(this).wrap('<div class="overlay"></div>')
  });
  
  $(".open-modal").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
		modal = $($this).data("modal");
	
	$(modal).parents(".overlay").addClass("open");
	setTimeout( function(){
	  $(modal).addClass("open");
	}, 350);
	
	$(document).on('click', function(e){
	  var target = $(e.target);
	  
	  if ($(target).hasClass("overlay")){
		$(target).find(".modal").each( function(){
		  $(this).removeClass("open");
		});
		setTimeout( function(){
		  $(target).removeClass("open");
		}, 350);
	  }
	  
	});
	
  });
  
  $(".cl-btn-2").on('click', function(e){
	e.preventDefault();
	e.stopImmediatePropagation;
	
	var $this = $(this),
		modal = $($this).data("modal");
	
	$(modal).removeClass("open");
	setTimeout( function(){ 
	  $(modal).parents(".overlay").removeClass("open");
	}, 350);
	
  });