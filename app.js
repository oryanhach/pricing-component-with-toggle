const toggleInput = document.querySelector('.toggle__input')
const prices = document.querySelectorAll('.plan__price')

const monthly = ['19.99', '24.99', '39.99']
const annually = ['199.99', '249.99', '399.99']

function renderPrices(isMonthly) {
	prices.forEach((priceEl, i) => {
		priceEl.innerHTML = `<span>&dollar;</span>${
			isMonthly ? monthly[i] : annually[i]
		}`
	})
}

renderPrices(true)

toggleInput.addEventListener('change', () => {
	renderPrices(toggleInput.checked)
})
