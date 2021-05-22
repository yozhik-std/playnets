$('.menu_btn').on('click', function (e) {
	e.preventDefault;
	$(this).toggleClass('menu_btn_active');
	$('.slide_menu').toggleClass('slide_menu_active');
	$('.nav_menu').toggleClass('nav_menu_active');
	$('.poloska1').toggleClass('poloska_active');
	$('.poloska2').toggleClass('poloska_active');
	$('.poloska3').toggleClass('poloska_active');
});
$('.menu_link_btn').on('click', function (e) {
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


var timerour = document.getElementById('our');
var timernotour = document.getElementById('notour');
var timeourRemaining = 0;
var timenotourRemaining = 0;
timerour.innerText = timeourRemaining;
timernotour.innerText = timenotourRemaining;



var playerColor = 'solntse',
	computerColor = 'luna',
	playerTurn = true,
	moveCount = 0,
	gameover = false,
	moveIsMade = false;
// objects to represent the nine blocks
// first the class
function Block(name, row, column) {
	this.name = name,
		this.row = row,
		this.column = column,
		this.owner = "none",
		this.owned = false;
}
// then the instances
var a = new Block("a", 1, 1);
var b = new Block("b", 1, 2);
var c = new Block("c", 1, 3);
var d = new Block("d", 2, 1);
var e = new Block("e", 2, 2);
var f = new Block("f", 2, 3);
var g = new Block("g", 3, 1);
var h = new Block("h", 3, 2);
var i = new Block("i", 3, 3);
// then put them all in an array
// to make them easy to iterate through
var blocks = [a, b, c, d, e, f, g, h, i];

// how to reset the board
function reset() {
	blocks.forEach(function (z) {
		$('.block').toggleClass('luna', false).css('pointer-events', 'auto');
		$('.block').toggleClass('solntse', false).css('pointer-events', 'auto');
		z.owned = false;
		z.owner = "none";
		$('.reset_button').css('opacity', '0');
		$('.final').css('opacity', '0');
		$('.final').css('z-index', '1');
		$('.final').text("")
	});
	gameover = false,
	moveIsMade = false;
	moveCount = 0;
	playerTurn = true;
}

$('.reset_button').on('click', function () {
	reset();
});

// when the user 'marks' a block
$('.block').on('click', function () {
	if (moveCount == 0) {
		$('.final').fadeOut('slow', function () {
			$(this).text("")
			$(this).fadeIn('fast');
		});
	}
	if (gameover == false){
		if (playerTurn) {
			markBlock(this);
			computerTurn();
		}
	}
	if (moveCount == 9) {
		$('.final').text("Ничья!");
		$('.final').css('opacity', '1');
		$('.final').css('z-index', '10');
		$('.reset_button').css('opacity', '1');
	}
});

// how the computer chooses and 'marks' a block
function computerTurn() {
	function readSet(setNumber, setType) {
		var criteria = blocks.filter(function (block) {
			return block[setType] == setNumber;
		});
		return criteria;
	};
	if (e.owned == false) {
		if (playerTurn == false && moveIsMade == false) {
			moveIsMade = true;
			setTimeout(function () {
				markBlock("#e");
			}, 1000);
		}
	}
	function assessField(threatLevel, opportunityLevel) {
		var numbers = [1, 2, 3];
		numbers.forEach(function (number) {
			var sets = ["row", "column"];
			sets.forEach(function (set) {
				var threat = 0;
				var opportunity = 0;
				readSet(number, set).forEach(function (item) {
					if (item.owned == false) {
						opportunity++;
					} else if (item.owner == "player") {
						threat++;
					}
				});
				if (threat == threatLevel && opportunity == opportunityLevel) {
					var toMark = readSet(number, set).filter(function (item) {
						return item.owned == false;
					});
					if (playerTurn == false && moveIsMade == false) {
						moveIsMade = true;
						setTimeout(function () {
							markBlock("#" + toMark[0].name);
						}, 1000);
					}
				}
			});
		});
		function readDiagonals(diagonalSet) {
			var threat = 0;
			var opportunity = 0;
			diagonalSet.forEach(function (item) {
				if (item.owned == false) {
					opportunity++;
				} else if (item.owner == "player") {
					threat++;
				}
			});
			if (threat == threatLevel && opportunity == opportunityLevel) {
				var toMark = diagonalSet.filter(function (item) {
					return item.owned == false;
				});
				if (playerTurn == false && moveIsMade == false) {
					moveIsMade = true;
					setTimeout(function () {
						markBlock("#" + toMark[0].name);
					}, 1000);
				}
			}
			
		}
		readDiagonals([a, e, i]);
		readDiagonals([c, e, g]);	
	};
	assessField(0, 1);
	assessField(2, 1);
	if (moveCount < 9 && gameover == false && moveIsMade == false) {
		moveIsMade = true;
		setTimeout(function () {
			do {
				var randomColumn = Math.floor(Math.random() * 3) + 1;
				var randomRow = Math.floor(Math.random() * 3) + 1;
				var blockToMark = blocks.filter(function (x) {
					return x.column == randomColumn;
				}).filter(function (y) {
					return y.row == randomRow;
				});
			} while (blockToMark[0].owned)
			markBlock("#" + blockToMark[0].name);
		}, 1000);
	}
	if (moveCount == 9) {
		$('.final').text("Ничья!");
		$('.final').css('opacity', '1');
		$('.final').css('z-index', '10');
		$('.reset_button').css('opacity', '1');
	}
}

// how a block is 'marked'
function markBlock(whichBlock) {
	// the visual presentation of 'marking' 
	function markGraphic(whichBlock, whoseColor) {
		$(whichBlock).toggleClass(whoseColor, true).css('opacity', '1', true).css('pointer-events', 'none');
	}
	// the logical representation of 'marking'
	var blockSelected = blocks.filter(function (block) {
		return block.name == $(whichBlock).attr("id");
	});
	if (!blockSelected[0].owned) {
		if (playerTurn) {
			playerTurn = !playerTurn;
			blockSelected[0].owned = true;
			blockSelected[0].owner = "player";
			markGraphic(whichBlock, playerColor);
			
		} else {
			playerTurn = !playerTurn;
			blockSelected[0].owned = true;
			blockSelected[0].owner = "computer";
			markGraphic(whichBlock, computerColor);
			
		}
	}
	moveCount++;
	checkForWin();
	if(gameover == false){
		moveIsMade = false;
	}
	else if(gameover == true){
		moveIsMade = true;
		announceWinner(winner);}
}

// how to test if a player has one
function checkForWin() {
	// run the tests
	var j = 1;
	while (j <= 3) {
//		readDiagonals("player");
//		readDiagonals("computer");
		readSet(j, "row");
		readSet(j, "column");
		j++;
	}
	// search diagonals for a winner
	function readDiagonals() {
			if (a.owned && e.owned && i.owned && a.owner == e.owner && i.owner == e.owner && a.owner == i.owner) {
				gameover = true;
				winner = e.owner;
			} 
			else if (c.owned && e.owned && g.owned && c.owner == e.owner && g.owner == e.owner && c.owner == g.owner) {
				gameover = true;
				winner = e.owner;
			}
			else {moveIsMade = false}
	}
	readDiagonals();
	// search columns and rows for a winner
	function readSet(setNumber, setType) {
		var criteria = blocks.filter(function (block) {
			return block[setType] == setNumber;
		});
		if (criteria[0].owned && criteria[1].owned && criteria[2].owned && criteria[0].owner == criteria[1].owner && criteria[1].owner == criteria[2].owner && criteria[0].owner == criteria[2].owner) {
			switch (criteria[0].owner) {
				case 'player': 			
				gameover = true;
				winner = "player";
				break;
				case 'computer': 
				gameover = true;
				winner = "computer"; 
				break;
			}
		} else {moveIsMade = false}
	}
	readSet();
}
// when a winner is found...
function announceWinner(winner) {
	setTimeout(function () {
		if (winner == "player") {
			timeourRemaining = timeourRemaining+1;
			timerour.innerText = timeourRemaining;
			$('.final').text("Победа :)");
			$('.final').css('opacity', '1');
			$('.final').css('z-index', '10');
			$('.reset_button').css('opacity', '1');
		} 
		if (winner == "computer") {
			timenotourRemaining = timenotourRemaining+1;
			timernotour.innerText = timenotourRemaining;
			$('.final').text("Поражение :(");
			$('.final').css('opacity', '1');
			$('.final').css('z-index', '10');
			$('.reset_button').css('opacity', '1');
		}
	}, 1000);
}