addEventListener('DOMContentLoaded', () => {
	// nav animation:

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

	// footer - current year:

	const footerYear = document.querySelector('.JSfooterYear')
	if (footerYear) {
		const handleCurrentYear = () => {
			const year = new Date().getFullYear()
			footerYear.innerText = year
		}
		handleCurrentYear()
	}

	// contact form - styling:

	const inputsContactForm = document.querySelectorAll('.JSinputs')

	if (inputsContactForm) {
		inputsContactForm.forEach((item) => {
			item.addEventListener('focus', () => {
				item.parentElement.classList.add('contact__form-box--active')
				item.nextElementSibling.classList.add('contact__label--active')
			})

			item.addEventListener('focusout', () => {
				if (item.value.length <= 0) {
					item.parentElement.classList.remove('contact__form-box--active')
					item.nextElementSibling.classList.remove('contact__label--active')
				}
			})
		})
	}

	// FORM VALIDATION:

	const JScontactForm = document.querySelector('.JScontactForm')

	if (JScontactForm) {
		// checkbox - validation:

		let error = 0

		const validationForm = () => {
			const checkboxForm = document.querySelector('.JScheckbox')

			checkboxForm.addEventListener('click', () => {
				if (checkboxForm) {
					const JScheckboxTerms = document.querySelector('.JScheckboxTerms')
					const JScheckboxTermsLink = document.querySelector('.JScheckboxTermsLink')
					if (!checkboxForm.checked) {
						JScheckboxTerms.classList.add('contact__checkbox-terms--error')
						JScheckboxTermsLink.classList.add('contact__link--error')
						error++
					} else {
						JScheckboxTerms.classList.remove('contact__checkbox-terms--error')
						JScheckboxTermsLink.classList.remove('contact__link--error')
						error = 0
					}
				}
			})

			// inputs - validation:

			const formName = document.querySelector('#name')
			const formSurName = document.querySelector('#surname')
			const formEmail = document.querySelector('#email')
			const formPhone = document.querySelector('#phone')
			const formMsg = document.querySelector('#message')
			const formBtn = document.querySelector('#formBtn')

			const showError = (item) => {
				item.parentElement.nextElementSibling.classList.add('contact__error--show-error')
			}

			const clearError = (item) => {
				item.parentElement.nextElementSibling.classList.remove('contact__error--show-error')
			}

			const checkIsEmpty = (data, item) => {
				let lengthData = data.length
				if (lengthData == 0) {
					showError(item)
					error++
				} else {
					clearError(item)
					error = 0

					if (item.id == 'phone') {
						checkPhone(item)
					}
					if (item.id == 'email') {
						checkEmail(item)
					}
				}
			}

			const checkEmail = (item) => {
				let email = item.value
				const regex = /\S+@\S+\.\S+/
				const errorMsg = 'Wpisz poprawny adres email.'

				if (regex.test(email)) {
					error = 0
				} else {
					item.parentElement.nextElementSibling.innerText = errorMsg
					error++
				}
			}

			const checkPhone = (item) => {
				let email = item.value
				const errorMsg = 'Wprowadź poprawny numer telefonu.'
				const regex = /^(?:\+?48)?(?: ?\-?[1-9]\d{2}){3}$/

				if (regex.test(email)) {
					error = 0
				} else {
					item.parentElement.nextElementSibling.innerText = errorMsg
					error++
				}
			}

			formName.addEventListener('input', () => {
				let item = formName
				checkIsEmpty(formName.value, item)
			})

			formSurName.addEventListener('input', () => {
				let item = formSurName
				checkIsEmpty(formSurName.value, item)
			})

			formMsg.addEventListener('input', () => {
				let item = formMsg
				checkIsEmpty(formMsg.value, item)
			})

			formEmail.addEventListener('input', () => {
				let item = formEmail
				checkIsEmpty(formEmail.value, item)
			})

			formPhone.addEventListener('input', () => {
				let item = formPhone
				checkIsEmpty(formPhone.value, item)
			})

			const addSuccessInfo = () => {
				const success = document.querySelector('.JSsuccess')
				success.classList.add('contact__success--active')

				setTimeout(() => {
					success.classList.remove('contact__success--active')
				}, 2500)
			}

			const clearForm = () => {
				const allInputsElements = document.querySelectorAll('.contact__data-inputs')

				allInputsElements.forEach((el) => {
					el.value = ''
					el.parentElement.classList.remove('contact__form-box--active')
					el.nextElementSibling.classList.remove('contact__label--active')
				})
			}
		}

      validationForm()

		formBtn.addEventListener('click', (e) => {
			e.preventDefault()

         validationForm()

			if (error == 0) {
				// fetch
				clearForm()
				addSuccessInfo()
			}
		})
	}

	// blog - hover with JS

	const blog = document.querySelectorAll('.JSblog')

	blog.forEach((blog) => {
		let blogBox
		blog.addEventListener('mouseover', () => {
			if (
				blog.parentElement.nextElementSibling.nextElementSibling.firstElementChild.classList.contains('blog__h6-title')
			) {
				blogBox = blog.parentElement.nextElementSibling.nextElementSibling.firstElementChild
				blogBox.classList.add('blog__h6-title--JShover')
			}
		})
		blog.addEventListener('mouseleave', () => {
			if (blogBox.classList.contains('blog__h6-title')) {
				blogBox.classList.remove('blog__h6-title--JShover')
			}
		})
	})

	// burger btn

	const JSburgerBTN = document.querySelector('.JSburgerBTN')

	if (JSburgerBTN) {
		const JSmobileMenu = document.querySelector('.JSmobileMenu')
		const JSlogo = document.querySelector('.JSlogo')
		const body = document.querySelector('body')
		const JSburgerSvgX = document.querySelector('.JSburgerSvgX')
		const JSburgerSvg = document.querySelector('.JSburgerSvg')

		JSburgerBTN.addEventListener('click', () => {
			if (!JSmobileMenu.classList.contains('menu__box--show')) {
				JSmobileMenu.classList.add('menu__box--show')
				JSburgerSvg.classList.add('menu__btn-svg--close')
				JSburgerSvgX.classList.add('menu__btn-svg-x--show')
				body.classList.add('overflow-hidden')
			} else {
				JSmobileMenu.classList.remove('menu__box--show')
				JSburgerSvg.classList.remove('menu__btn-svg--close')
				JSburgerSvgX.classList.remove('menu__btn-svg-x--show')
				body.classList.remove('overflow-hidden')
			}
		})

		JSmobileMenu.addEventListener('click', (e) => {
			if (e.target.classList.contains('menu__item')) {
				JSmobileMenu.classList.remove('menu__box--show')
				JSburgerSvg.classList.remove('menu__btn-svg--close')
				JSburgerSvgX.classList.remove('menu__btn-svg-x--show')
				body.classList.remove('overflow-hidden')
			}
		})

		JSlogo.addEventListener('click', () => {
			if (JSmobileMenu.classList.contains('menu__box--show')) {
				JSmobileMenu.classList.remove('menu__box--show')
				body.classList.remove('overflow-hidden')
				JSburgerSvgX.classList.add('menu__btn-svg-x--show')
			}
		})
	}

	//end
})
