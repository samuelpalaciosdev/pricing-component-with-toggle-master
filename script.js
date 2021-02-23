const toggle = document.getElementById('toggle');
const prices = document.getElementById('prices')

toggle.addEventListener('change', e => {
	prices.classList.toggle('show-monthly');
});