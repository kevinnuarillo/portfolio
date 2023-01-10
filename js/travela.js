/*===== SHOW SCROLL TOP =====*/
function scrollTop(){
	const scrollTop = document.getElementById('scroll-top');
	if(this.scrollY >= 70) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
 }
 window.addEventListener('scroll', scrollTop);