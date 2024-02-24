addEventListener('DOMContentLoaded', () => {

	const nav = document.querySelector('.JSnav')
	const navBtn = document.querySelector('.JSnavBtn')

	window.addEventListener('scroll', () => {
		if (window.scrollY > 450) {
			nav.classList.add('nav--short')
			navBtn.classList.add('btn--medium')
		} else {
			nav.classList.remove('nav--short')
			navBtn.classList.remove('btn--medium')
		}
	})
















})
