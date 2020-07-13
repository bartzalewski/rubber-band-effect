const textEl = document.querySelector('.rubber-band');

if (textEl) {
	const text = textEl.textContent;
	const swap = text.replace(/\s/g, ' ');
	const letters = swap.split('');
	const makeSpan = (letter) => `<span class="rubber-span">${letter}</span>`;
	let html = '';

	letters.forEach((letter) => (html += makeSpan(letter)));
	textEl.innerHTML = html;
}

const spans = document.querySelectorAll('.rubber-span');

spans.forEach((span) => {
	span.addEventListener('mouseover', () =>
		span.classList.add('animated', 'rubberBand')
	);
});

spans.forEach((span) =>
	span.addEventListener('mouseout', () =>
		setTimeout(() => {
			span.classList.remove('animated', 'rubberBand');
		}, 1000)
	)
);
