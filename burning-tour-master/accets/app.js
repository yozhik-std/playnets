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

const COUNT_OF_PARTICLES = 100
const container = document.querySelector('.flame')

container.style.setProperty('--particles', COUNT_OF_PARTICLES)

Array(COUNT_OF_PARTICLES).fill('').forEach((particle, i) => {
    let span = document.createElement('span')
    span.style.setProperty('--n', i + 1)
    span.style.setProperty('--rnd', Math.random())
    container.appendChild(span)
})
