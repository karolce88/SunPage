addEventListener('DOMContentLoaded', () => {


	// nav anim:

	const nav = document.querySelector('.JSnav')
	if (nav) {
		const navBtn = document.querySelector('.JSnavBtn')
		window.addEventListener('scroll', () => {
			if (window.scrollY > 450) {
				nav.classList.add('nav--short')
				nav.classList.add('nav--shadow')
				navBtn.classList.add('btn--medium')
			} else {
				nav.classList.remove('nav--short')
				navBtn.classList.remove('btn--medium')
				nav.classList.remove('nav--shadow')
			}

			if (window.scrollY > 1) {
				nav.classList.add('nav--shadow')
			} else {
				nav.classList.remove('nav--shadow')
			}
		})
	}


	// footer year:

	const footerYear = document.querySelector('.JSfooterYear')
	const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		footerYear.innerText = year
	}
	handleCurrentYear()


   // contact form - styling:

   const inputsContactForm = document.querySelectorAll('.JSinputs')

   inputsContactForm.forEach(item => {

      item.addEventListener('focus', () => {
         item.parentElement.classList.add('contact__form-box--active')
         item.nextElementSibling.classList.add('contact__label--active')
      })

      item.addEventListener('focusout', () => {
         if (item.value.length <= 0) {
            item.parentElement.classList.remove('contact__form-box--active')
            item.nextElementSibling.classList.remove('contact__label--active')
         }
      });
   })


  // contact form - validation:















	//end
})
