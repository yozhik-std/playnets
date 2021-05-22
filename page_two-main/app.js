if (document.documentElement.clientWidth > 900){
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

$('.cycle-planet-venus').toggleClass('cycle-planet-2', true);
$('.cycle-planet-earth').toggleClass('cycle-planet-3', true);
$('.shadow-mercury').css('display', 'block');
$('.shadow-venus').toggleClass('shadow_act2').css('display', 'block');
$('#descrip_mercury').css('display', 'block');

$('#mercury_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'block');
	 $('.cycle-planet-venus').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
	 $('.cycle-planet-earth').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', true).css('display', 'block');
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.shadow-mercury').toggleClass('shadow_act2', false).css('display', 'block');
	 $('.shadow-venus').toggleClass('shadow_act2', true).css('display', 'block');
	 $('.shadow-earth').css('display', 'none');
	 $('.shadow-mars').css('display', 'none');
	 $('.shadow-jupiter').css('display', 'none');
	 $('.shadow-saturn').css('display', 'none');
	 $('.shadow-uran').css('display', 'none');
	 $('.shadow-neptun').css('display', 'none');
	 $('.shadow-myplanet').css('display', 'none');
	 $('#descrip_mercury').css('display', 'block');
	 $('#descrip_venus').css('display', 'none');
	 $('#descrip_earth').css('display', 'none');
	 $('#descrip_mars').css('display', 'none');
	 $('#descrip_jupiter').css('display', 'none');
	 $('#descrip_saturn').css('display', 'none');
	 $('#descrip_uran').css('display', 'none');
	 $('#descrip_neptun').css('display', 'none');
	 $('#descrip_myplanet').css('display', 'none');
	}
	})
$('#venera_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-venus').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
	 $('.cycle-planet-earth').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
	 $('.cycle-planet-mars').toggleClass('cycle-planet-3', true).css('display', 'block');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.shadow-mercury').css('display', 'none');
	 $('.shadow-venus').toggleClass('shadow_act2', false).css('display', 'block');
	 $('.shadow-earth').toggleClass('shadow_act2', true).css('display', 'block');
	 $('.shadow-mars').css('display', 'none');
	 $('.shadow-jupiter').css('display', 'none');
	 $('.shadow-saturn').css('display', 'none');
	 $('.shadow-uran').css('display', 'none');
	 $('.shadow-neptun').css('display', 'none');
	 $('.shadow-myplanet').css('display', 'none');
	 $('#descrip_mercury').css('display', 'none');
	 $('#descrip_venus').css('display', 'block');
	 $('#descrip_earth').css('display', 'none');
	 $('#descrip_mars').css('display', 'none');
	 $('#descrip_jupiter').css('display', 'none');
	 $('#descrip_saturn').css('display', 'none');
	 $('#descrip_uran').css('display', 'none');
	 $('#descrip_neptun').css('display', 'none');
	 $('#descrip_myplanet').css('display', 'none');
	}
	})
$('#zemlya_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-earth').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
	 $('.cycle-planet-mars').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
	 $('.cycle-planet-jupiter').toggleClass('cycle-planet-3', true).css('display', 'block');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.shadow-mercury').css('display', 'none');
	 $('.shadow-venus').css('display', 'none');
	 $('.shadow-earth').toggleClass('shadow_act2', false).css('display', 'block');
	 $('.shadow-mars').toggleClass('shadow_act2', true).css('display', 'block');
	 $('.shadow-jupiter').css('display', 'none');
	 $('.shadow-saturn').css('display', 'none');
	 $('.shadow-uran').css('display', 'none');
	 $('.shadow-neptun').css('display', 'none');
	 $('.shadow-myplanet').css('display', 'none');
	 $('#descrip_mercury').css('display', 'none');
	 $('#descrip_venus').css('display', 'none');
	 $('#descrip_earth').css('display', 'block');
	 $('#descrip_mars').css('display', 'none');
	 $('#descrip_jupiter').css('display', 'none');
	 $('#descrip_saturn').css('display', 'none');
	 $('#descrip_uran').css('display', 'none');
	 $('#descrip_neptun').css('display', 'none');
	 $('#descrip_myplanet').css('display', 'none');
	}
	})
$('#mars_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'none');
	 $('.cycle-planet-mars').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
	 $('.cycle-planet-jupiter').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
	 $('.cycle-planet-saturn').toggleClass('cycle-planet-3', true).css('display', 'block');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.shadow-mercury').css('display', 'none');
	 $('.shadow-venus').css('display', 'none');
	 $('.shadow-earth').css('display', 'none');
	 $('.shadow-mars').toggleClass('shadow_act2', false).css('display', 'block');
	 $('.shadow-jupiter').toggleClass('shadow_act2', true).css('display', 'block');
	 $('.shadow-saturn').css('display', 'none');
	 $('.shadow-uran').css('display', 'none');
	 $('.shadow-neptun').css('display', 'none');
	 $('.shadow-myplanet').css('display', 'none');
	 $('#descrip_mercury').css('display', 'none');
	 $('#descrip_venus').css('display', 'none');
	 $('#descrip_earth').css('display', 'none');
	 $('#descrip_mars').css('display', 'block');
	 $('#descrip_jupiter').css('display', 'none');
	 $('#descrip_saturn').css('display', 'none');
	 $('#descrip_uran').css('display', 'none');
	 $('#descrip_neptun').css('display', 'none');
	 $('#descrip_myplanet').css('display', 'none');
	}
	})
$('#jupiter_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.cycle-planet-saturn').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		$('.cycle-planet-uran').toggleClass('cycle-planet-3', true).css('display', 'block');
		$('.cycle-planet-neptune').css('display', 'none');
		$('.cycle-planet-myplanet').css('display', 'none');
		$('.shadow-mercury').css('display', 'none');
	 $('.shadow-venus').css('display', 'none');
	 $('.shadow-earth').css('display', 'none');
	 $('.shadow-mars').css('display', 'none');
	 $('.shadow-jupiter').toggleClass('shadow_act2', false).css('display', 'block');
	 $('.shadow-saturn').toggleClass('shadow_act2', true).css('display', 'block');
	 $('.shadow-uran').css('display', 'none');
	 $('.shadow-neptun').css('display', 'none');
	 $('.shadow-myplanet').css('display', 'none');
	 $('#descrip_mercury').css('display', 'none');
	 $('#descrip_venus').css('display', 'none');
	 $('#descrip_earth').css('display', 'none');
	 $('#descrip_mars').css('display', 'none');
	 $('#descrip_jupiter').css('display', 'block');
	 $('#descrip_saturn').css('display', 'none');
	 $('#descrip_uran').css('display', 'none');
	 $('#descrip_neptun').css('display', 'none');
	 $('#descrip_myplanet').css('display', 'none');
	}
	})
$('#saturn_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').css('display', 'none');
		$('.cycle-planet-saturn').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.cycle-planet-uran').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		$('.cycle-planet-neptune').toggleClass('cycle-planet-3', true).css('display', 'block');
		$('.cycle-planet-myplanet').css('display', 'none');
		$('.shadow-mercury').css('display', 'none');
	 $('.shadow-venus').css('display', 'none');
	 $('.shadow-earth').css('display', 'none');
	 $('.shadow-mars').css('display', 'none');
	 $('.shadow-jupiter').css('display', 'none');
	 $('.shadow-saturn').toggleClass('shadow_act2', false).css('display', 'block');
	 $('.shadow-uran').toggleClass('shadow_act2', true).css('display', 'block');
	 $('.shadow-neptun').css('display', 'none');
	 $('.shadow-myplanet').css('display', 'none');
	 $('#descrip_mercury').css('display', 'none');
	 $('#descrip_venus').css('display', 'none');
	 $('#descrip_earth').css('display', 'none');
	 $('#descrip_mars').css('display', 'none');
	 $('#descrip_jupiter').css('display', 'none');
	 $('#descrip_saturn').css('display', 'block');
	 $('#descrip_uran').css('display', 'none');
	 $('#descrip_neptun').css('display', 'none');
	 $('#descrip_myplanet').css('display', 'none');
	}
	})
$('#uran_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').css('display', 'none');
		$('.cycle-planet-saturn').css('display', 'none');
		$('.cycle-planet-uran').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.cycle-planet-neptune').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		$('.cycle-planet-myplanet').toggleClass('cycle-planet-3', true).css('display', 'block');
		$('.shadow-mercury').css('display', 'none');
	 $('.shadow-venus').css('display', 'none');
	 $('.shadow-earth').css('display', 'none');
	 $('.shadow-mars').css('display', 'none');
	 $('.shadow-jupiter').css('display', 'none');
	 $('.shadow-saturn').css('display', 'none');
	 $('.shadow-uran').toggleClass('shadow_act2', false).css('display', 'block');
	 $('.shadow-neptun').toggleClass('shadow_act2', true).css('display', 'block');
	 $('.shadow-myplanet').css('display', 'none');
	 $('#descrip_mercury').css('display', 'none');
	 $('#descrip_venus').css('display', 'none');
	 $('#descrip_earth').css('display', 'none');
	 $('#descrip_mars').css('display', 'none');
	 $('#descrip_jupiter').css('display', 'none');
	 $('#descrip_saturn').css('display', 'none');
	 $('#descrip_uran').css('display', 'block');
	 $('#descrip_neptun').css('display', 'none');
	 $('#descrip_myplanet').css('display', 'none');
	}
	})
$('#neptun_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').css('display', 'none');
		$('.cycle-planet-saturn').css('display', 'none');
		$('.cycle-planet-uran').css('display', 'none');
		$('.cycle-planet-neptune').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.cycle-planet-myplanet').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		$('.shadow-mercury').css('display', 'none');
	 $('.shadow-venus').css('display', 'none');
	 $('.shadow-earth').css('display', 'none');
	 $('.shadow-mars').css('display', 'none');
	 $('.shadow-jupiter').css('display', 'none');
	 $('.shadow-saturn').css('display', 'none');
	 $('.shadow-uran').css('display', 'none');
	 $('.shadow-neptun').toggleClass('shadow_act2', false).css('display', 'block');
	 $('.shadow-myplanet').toggleClass('shadow_act2', true).css('display', 'block');
	 $('#descrip_mercury').css('display', 'none');
	 $('#descrip_venus').css('display', 'none');
	 $('#descrip_earth').css('display', 'none');
	 $('#descrip_mars').css('display', 'none');
	 $('#descrip_jupiter').css('display', 'none');
	 $('#descrip_saturn').css('display', 'none');
	 $('#descrip_uran').css('display', 'none');
	 $('#descrip_neptun').css('display', 'block');
	 $('#descrip_myplanet').css('display', 'none');
	}
	})
$('#moya_planeta_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').css('display', 'none');
		$('.cycle-planet-saturn').css('display', 'none');
		$('.cycle-planet-uran').css('display', 'none');
		$('.cycle-planet-neptune').css('display', 'none');
		$('.cycle-planet-myplanet').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.shadow-mercury').css('display', 'none');
	 $('.shadow-venus').css('display', 'none');
	 $('.shadow-earth').css('display', 'none');
	 $('.shadow-mars').css('display', 'none');
	 $('.shadow-jupiter').css('display', 'none');
	 $('.shadow-saturn').css('display', 'none');
	 $('.shadow-uran').css('display', 'none');
	 $('.shadow-neptun').css('display', 'none');
	 $('.shadow-myplanet').toggleClass('shadow_act2', false).css('display', 'block');
	 $('#descrip_mercury').css('display', 'none');
	 $('#descrip_venus').css('display', 'none');
	 $('#descrip_earth').css('display', 'none');
	 $('#descrip_mars').css('display', 'none');
	 $('#descrip_jupiter').css('display', 'none');
	 $('#descrip_saturn').css('display', 'none');
	 $('#descrip_uran').css('display', 'none');
	 $('#descrip_neptun').css('display', 'none');
	 $('#descrip_myplanet').css('display', 'block');
	}
	})
} else {
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
		
		$('.cycle-planet-venus').toggleClass('cycle-planet-2', true);
		$('.cycle-planet-earth').toggleClass('cycle-planet-3', true);
		$('.shadow-mercury').css('display', 'block');
		$('.shadow-venus').toggleClass('shadow_act2', true).css('display', 'block');
		$('#descrip_mercury').css('display', 'block');
		
		$('#link_mercury').on('click', function () {
			$('#mercury_btn').prop('checked', true);
			$('.cycle-planet-mercury').css('display', 'block');
			$('.cycle-planet-venus').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			$('.cycle-planet-earth').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', true).css('display', 'block');
			$('.cycle-planet-mars').css('display', 'none');
			$('.cycle-planet-jupiter').css('display', 'none');
			$('.cycle-planet-saturn').css('display', 'none');
			$('.cycle-planet-uran').css('display', 'none');
			$('.cycle-planet-neptune').css('display', 'none');
			$('.cycle-planet-myplanet').css('display', 'none');
			$('.shadow-mercury').toggleClass('shadow_act2', false).css('display', 'block');
			$('.shadow-venus').toggleClass('shadow_act2', true).css('display', 'block');
			$('.shadow-earth').css('display', 'none');
			$('.shadow-mars').css('display', 'none');
			$('.shadow-jupiter').css('display', 'none');
			$('.shadow-saturn').css('display', 'none');
			$('.shadow-uran').css('display', 'none');
			$('.shadow-neptun').css('display', 'none');
			$('.shadow-myplanet').css('display', 'none');
			$('#descrip_mercury').css('display', 'block');
		$('#descrip_venus').css('display', 'none');
		$('#descrip_earth').css('display', 'none');
		$('#descrip_mars').css('display', 'none');
		$('#descrip_jupiter').css('display', 'none');
		$('#descrip_saturn').css('display', 'none');
		$('#descrip_uran').css('display', 'none');
		$('#descrip_neptun').css('display', 'none');
		$('#descrip_myplanet').css('display', 'none'); 
		$('.menu_btn').toggleClass('menu_btn_active', false);
		$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
		$('#link_venus').on('click', function () {
		  $('#venera_btn').prop('checked', true);
			$('.cycle-planet-mercury').css('display', 'none');
			$('.cycle-planet-venus').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			$('.cycle-planet-earth').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			$('.cycle-planet-mars').toggleClass('cycle-planet-3', true).css('display', 'block');
			$('.cycle-planet-jupiter').css('display', 'none');
			$('.cycle-planet-saturn').css('display', 'none');
			$('.cycle-planet-uran').css('display', 'none');
			$('.cycle-planet-neptune').css('display', 'none');
			$('.cycle-planet-myplanet').css('display', 'none');
			$('.shadow-mercury').css('display', 'none');
			$('.shadow-venus').toggleClass('shadow_act2', false).css('display', 'block');
			$('.shadow-earth').toggleClass('shadow_act2', true).css('display', 'block');
			$('.shadow-mars').css('display', 'none');
			$('.shadow-jupiter').css('display', 'none');
			$('.shadow-saturn').css('display', 'none');
			$('.shadow-uran').css('display', 'none');
			$('.shadow-neptun').css('display', 'none');
			$('.shadow-myplanet').css('display', 'none');
			$('#descrip_mercury').css('display', 'none');
			$('#descrip_venus').css('display', 'block');
			$('#descrip_earth').css('display', 'none');
			$('#descrip_mars').css('display', 'none');
			$('#descrip_jupiter').css('display', 'none');
			$('#descrip_saturn').css('display', 'none');
			$('#descrip_uran').css('display', 'none');
			$('#descrip_neptun').css('display', 'none');
			$('#descrip_myplanet').css('display', 'none');
			$('.menu_btn').toggleClass('menu_btn_active', false);
			$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
		$('#link_earth').on('click', function () {
			$('#zemlya_btn').prop('checked', true);
			$('.cycle-planet-mercury').css('display', 'none');
			$('.cycle-planet-venus').css('display', 'none');
			$('.cycle-planet-earth').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			$('.cycle-planet-mars').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			$('.cycle-planet-jupiter').toggleClass('cycle-planet-3', true).css('display', 'block');
			$('.cycle-planet-saturn').css('display', 'none');
			$('.cycle-planet-uran').css('display', 'none');
			$('.cycle-planet-neptune').css('display', 'none');
			$('.cycle-planet-myplanet').css('display', 'none');
			$('.shadow-mercury').css('display', 'none');
			$('.shadow-venus').css('display', 'none');
			$('.shadow-earth').toggleClass('shadow_act2', false).css('display', 'block');
			$('.shadow-mars').toggleClass('shadow_act2', true).css('display', 'block');
			$('.shadow-jupiter').css('display', 'none');
			$('.shadow-saturn').css('display', 'none');
			$('.shadow-uran').css('display', 'none');
			$('.shadow-neptun').css('display', 'none');
			$('.shadow-myplanet').css('display', 'none');
			$('#descrip_mercury').css('display', 'none');
			$('#descrip_venus').css('display', 'none');
			$('#descrip_earth').css('display', 'block');
			$('#descrip_mars').css('display', 'none');
			$('#descrip_jupiter').css('display', 'none');
			$('#descrip_saturn').css('display', 'none');
			$('#descrip_uran').css('display', 'none');
			$('#descrip_neptun').css('display', 'none');
			$('#descrip_myplanet').css('display', 'none');
			$('.menu_btn').toggleClass('menu_btn_active', false);
			$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
		$('#link_mars').on('click', function () {
			$('#mars_btn').prop('checked', true);
			$('.cycle-planet-mercury').css('display', 'none');
			$('.cycle-planet-venus').css('display', 'none');
			$('.cycle-planet-earth').css('display', 'none');
			$('.cycle-planet-mars').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			$('.cycle-planet-jupiter').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			$('.cycle-planet-saturn').toggleClass('cycle-planet-3', true).css('display', 'block');
			$('.cycle-planet-uran').css('display', 'none');
			$('.cycle-planet-neptune').css('display', 'none');
			$('.cycle-planet-myplanet').css('display', 'none');
			$('.shadow-mercury').css('display', 'none');
			$('.shadow-venus').css('display', 'none');
			$('.shadow-earth').css('display', 'none');
			$('.shadow-mars').toggleClass('shadow_act2', false).css('display', 'block');
			$('.shadow-jupiter').toggleClass('shadow_act2', true).css('display', 'block');
			$('.shadow-saturn').css('display', 'none');
			$('.shadow-uran').css('display', 'none');
			$('.shadow-neptun').css('display', 'none');
			$('.shadow-myplanet').css('display', 'none');	
			$('#descrip_mercury').css('display', 'none');
			$('#descrip_venus').css('display', 'none');
			$('#descrip_earth').css('display', 'none');
			$('#descrip_mars').css('display', 'block');
			$('#descrip_jupiter').css('display', 'none');
			$('#descrip_saturn').css('display', 'none');
			$('#descrip_uran').css('display', 'none');
			$('#descrip_neptun').css('display', 'none');
			$('#descrip_myplanet').css('display', 'none');
			$('.menu_btn').toggleClass('menu_btn_active', false);
			$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
		$('#link_jupiter').on('click', function () {
			  $('#jupiter_btn').prop('checked', true);
			  $('.cycle-planet-mercury').css('display', 'none');
			  $('.cycle-planet-venus').css('display', 'none');
			  $('.cycle-planet-earth').css('display', 'none');
			  $('.cycle-planet-mars').css('display', 'none');
			  $('.cycle-planet-jupiter').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			  $('.cycle-planet-saturn').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			  $('.cycle-planet-uran').toggleClass('cycle-planet-3', true).css('display', 'block');
			  $('.cycle-planet-neptune').css('display', 'none');
			  $('.cycle-planet-myplanet').css('display', 'none');
			  $('.shadow-mercury').css('display', 'none');
			$('.shadow-venus').css('display', 'none');
			$('.shadow-earth').css('display', 'none');
			$('.shadow-mars').css('display', 'none');
			$('.shadow-jupiter').toggleClass('shadow_act2', false).css('display', 'block');
			$('.shadow-saturn').toggleClass('shadow_act2', true).css('display', 'block');
			$('.shadow-uran').css('display', 'none');
			$('.shadow-neptun').css('display', 'none');
			$('.shadow-myplanet').css('display', 'none');
			$('#descrip_mercury').css('display', 'none');
			$('#descrip_venus').css('display', 'none');
			$('#descrip_earth').css('display', 'none');
			$('#descrip_mars').css('display', 'none');
			$('#descrip_jupiter').css('display', 'block');
			$('#descrip_saturn').css('display', 'none');
			$('#descrip_uran').css('display', 'none');
			$('#descrip_neptun').css('display', 'none');
			$('#descrip_myplanet').css('display', 'none');
			$('.menu_btn').toggleClass('menu_btn_active', false);
			$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
		$('#link_saturn').on('click', function () {
		  $('#saturn_btn').prop('checked', true);
			  $('.cycle-planet-mercury').css('display', 'none');
			  $('.cycle-planet-venus').css('display', 'none');
			  $('.cycle-planet-earth').css('display', 'none');
			  $('.cycle-planet-mars').css('display', 'none');
			  $('.cycle-planet-jupiter').css('display', 'none');
			  $('.cycle-planet-saturn').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			  $('.cycle-planet-uran').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			  $('.cycle-planet-neptune').toggleClass('cycle-planet-3', true).css('display', 'block');
			  $('.cycle-planet-myplanet').css('display', 'none');
			  $('.shadow-mercury').css('display', 'none');
			$('.shadow-venus').css('display', 'none');
			$('.shadow-earth').css('display', 'none');
			$('.shadow-mars').css('display', 'none');
			$('.shadow-jupiter').css('display', 'none');
			$('.shadow-saturn').toggleClass('shadow_act2', false).css('display', 'block');
			$('.shadow-uran').toggleClass('shadow_act2', true).css('display', 'block');
			$('.shadow-neptun').css('display', 'none');
			$('.shadow-myplanet').css('display', 'none');
			$('#descrip_mercury').css('display', 'none');
			$('#descrip_venus').css('display', 'none');
			$('#descrip_earth').css('display', 'none');
			$('#descrip_mars').css('display', 'none');
			$('#descrip_jupiter').css('display', 'none');
			$('#descrip_saturn').css('display', 'block');
			$('#descrip_uran').css('display', 'none');
			$('#descrip_neptun').css('display', 'none');
			$('#descrip_myplanet').css('display', 'none');
			$('.menu_btn').toggleClass('menu_btn_active', false);
			$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
		$('#link_uranus').on('click', function () {
		  $('#uran_btn').prop('checked', true);
			  $('.cycle-planet-mercury').css('display', 'none');
			  $('.cycle-planet-venus').css('display', 'none');
			  $('.cycle-planet-earth').css('display', 'none');
			  $('.cycle-planet-mars').css('display', 'none');
			  $('.cycle-planet-jupiter').css('display', 'none');
			  $('.cycle-planet-saturn').css('display', 'none');
			  $('.cycle-planet-uran').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			  $('.cycle-planet-neptune').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			  $('.cycle-planet-myplanet').toggleClass('cycle-planet-3', true).css('display', 'block');
			  $('.shadow-mercury').css('display', 'none');
			$('.shadow-venus').css('display', 'none');
			$('.shadow-earth').css('display', 'none');
			$('.shadow-mars').css('display', 'none');
			$('.shadow-jupiter').css('display', 'none');
			$('.shadow-saturn').css('display', 'none');
			$('.shadow-uran').toggleClass('shadow_act2', false).css('display', 'block');
			$('.shadow-neptun').toggleClass('shadow_act2', true).css('display', 'block');
			$('.shadow-myplanet').css('display', 'none');
			$('#descrip_mercury').css('display', 'none');
			$('#descrip_venus').css('display', 'none');
			$('#descrip_earth').css('display', 'none');
			$('#descrip_mars').css('display', 'none');
			$('#descrip_jupiter').css('display', 'none');
			$('#descrip_saturn').css('display', 'none');
			$('#descrip_uran').css('display', 'block');
			$('#descrip_neptun').css('display', 'none');
			$('#descrip_myplanet').css('display', 'none');
			$('.menu_btn').toggleClass('menu_btn_active', false);
			$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
		$('#link_neptun').on('click', function () {
		  $('#neptun_btn').prop('checked', true);
			  $('.cycle-planet-mercury').css('display', 'none');
			  $('.cycle-planet-venus').css('display', 'none');
			  $('.cycle-planet-earth').css('display', 'none');
			  $('.cycle-planet-mars').css('display', 'none');
			  $('.cycle-planet-jupiter').css('display', 'none');
			  $('.cycle-planet-saturn').css('display', 'none');
			  $('.cycle-planet-uran').css('display', 'none');
			  $('.cycle-planet-neptune').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			  $('.cycle-planet-myplanet').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			  $('.shadow-mercury').css('display', 'none');
			$('.shadow-venus').css('display', 'none');
			$('.shadow-earth').css('display', 'none');
			$('.shadow-mars').css('display', 'none');
			$('.shadow-jupiter').css('display', 'none');
			$('.shadow-saturn').css('display', 'none');
			$('.shadow-uran').css('display', 'none');
			$('.shadow-neptun').toggleClass('shadow_act2', false).css('display', 'block');
			$('.shadow-myplanet').toggleClass('shadow_act2', true).css('display', 'block');
			$('#descrip_mercury').css('display', 'none');
			$('#descrip_venus').css('display', 'none');
			$('#descrip_earth').css('display', 'none');
			$('#descrip_mars').css('display', 'none');
			$('#descrip_jupiter').css('display', 'none');
			$('#descrip_saturn').css('display', 'none');
			$('#descrip_uran').css('display', 'none');
			$('#descrip_neptun').css('display', 'block');
			$('#descrip_myplanet').css('display', 'none');
			$('.menu_btn').toggleClass('menu_btn_active', false);
			$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
		$('#link_moya_planeta').on('click', function () {
		  $('#moya_planeta_btn').prop('checked', true);
			  $('.cycle-planet-mercury').css('display', 'none');
			  $('.cycle-planet-venus').css('display', 'none');
			  $('.cycle-planet-earth').css('display', 'none');
			  $('.cycle-planet-mars').css('display', 'none');
			  $('.cycle-planet-jupiter').css('display', 'none');
			  $('.cycle-planet-saturn').css('display', 'none');
			  $('.cycle-planet-uran').css('display', 'none');
			  $('.cycle-planet-neptune').css('display', 'none');
			  $('.cycle-planet-myplanet').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			  $('.shadow-mercury').css('display', 'none');
			$('.shadow-venus').css('display', 'none');
			$('.shadow-earth').css('display', 'none');
			$('.shadow-mars').css('display', 'none');
			$('.shadow-jupiter').css('display', 'none');
			$('.shadow-saturn').css('display', 'none');
			$('.shadow-uran').css('display', 'none');
			$('.shadow-neptun').css('display', 'none');
			$('.shadow-myplanet').toggleClass('shadow_act2', false).css('display', 'block');
			$('#descrip_mercury').css('display', 'none');
			$('#descrip_venus').css('display', 'none');
			$('#descrip_earth').css('display', 'none');
			$('#descrip_mars').css('display', 'none');
			$('#descrip_jupiter').css('display', 'none');
			$('#descrip_saturn').css('display', 'none');
			$('#descrip_uran').css('display', 'none');
			$('#descrip_neptun').css('display', 'none');
			$('#descrip_myplanet').css('display', 'block');
			$('.menu_btn').toggleClass('menu_btn_active', false);
			$('.slide_menu').toggleClass('slide_menu_active', false);
		  })
	}
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