export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('intersect', {
		mounted(el, binding) {
			const { value } = binding;
			const className = typeof value === 'string' ? value : value.class || 'visible';
			const delay = typeof value === 'object' && value.delay ? value.delay : 0;
			
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							el.classList.add(className);
						}, delay);
						observer.unobserve(el);
					}
				},
				{ threshold: 0.1 }
			);
			
			observer.observe(el);
		},
	});
});
