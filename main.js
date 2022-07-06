// $(document).ready(function(){

// 	$(window).scroll(function () {
// 		if($(this).scrollTop() > 40){
// 			$('#to-top').fadeIn();
// 		} else {
// 			$('#to-top').fadeOut();
// 		}
// 	});


// 	$('#to-top').click(function(){
// 		$('html, body').animate({scrollTop : 0,},600);
// 	});
// });


// const toggleButton =document.getElementsByClassName()

let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navbarLinks = document.getElementsByClassName('header__nav')[0];

// toggleButton.addEventListener('click', btnClick)
// 	// navbarLinks.classList.toggle('active')

// )

toggleButton.addEventListener('click', btnClick);

function btnClick(){
	console.log('this click');
	navbarLinks.classList.toggle('active');


	toggleButton.classList.toggle('drop');

};
console.log(toggleButton)
console.log(navbarLinks)