// Utility per animazioni scroll con Intersection Observer

export function initScrollAnimations() {
	if (typeof window === 'undefined') return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
					// Una volta animato, smetti di osservare
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1, // Trigger quando 10% dell'elemento è visibile
			rootMargin: '0px 0px -50px 0px' // Inizia animazione prima che sia completamente visibile
		}
	);

	// Osserva tutti gli elementi con classi animate
	const animatedElements = document.querySelectorAll(
		'.fade-in, .fade-in-up, .fade-in-down, .scale-in, .slide-in-left, .slide-in-right'
	);

	animatedElements.forEach((el) => {
		observer.observe(el);
	});

	return observer;
}

// Helper per aggiungere delay progressivo agli elementi in griglia
export function addStaggerDelay(selector: string, baseDelay: number = 100) {
	if (typeof window === 'undefined') return;

	const elements = document.querySelectorAll(selector);
	elements.forEach((el, index) => {
		(el as HTMLElement).style.animationDelay = `${index * baseDelay}ms`;
	});
}
