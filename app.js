const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


/*  3d Tilting not working
const box = document.querySelector('.contact.container .contact-item');
const boxRect=box.getBoundingClientRect();

box.addEventListener('mousemove', e=> {
	const xPos=(e.clientX-boxRect.left)/boxRect.width;
	const yPos=(e.clientY-boxRect.top)/boxRect.height - 0.3;
	const xOffset= -(xPos-0.3);
	const dxNorm=Math.min(Math.max(xOffset,-0.3),0.3);
	box.style.transform=`perspective(500px)
						 rotateY(${dxNorm*15}deg)
						rotateX(${yPos*15}deg)`

});

box.addEventListener('mouseleave', () => {
	box.style.transform='none';
});*/

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor = '#1e272c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});