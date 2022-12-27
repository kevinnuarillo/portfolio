const navMenu = document.getElementById('nav-menu'),
			navToggle = document.getElementById('nav-toggle'),
			navClose = document.getElementById('nav-close')

if(navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

if(navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
} 

const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2000,
	delay: 400
})

sr.reveal(`.hero .container-medium`)
sr.reveal(`.experience .container-medium`, {delay:400})
sr.reveal(`.project, .contact`, {interval:10})

/*===== SHOW SCROLL TOP =====*/
function scrollTop(){
	const scrollTop = document.getElementById('scroll-top');
	if(this.scrollY >= 70) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
 }
 window.addEventListener('scroll', scrollTop);