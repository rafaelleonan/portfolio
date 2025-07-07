export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('intersect', {
		mounted(el, binding) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						el.classList.add(binding.value || 'visible');
						observer.unobserve(el);
					}
				},
				{ threshold: 0.1 }
			);
			observer.observe(el);
		},
	});
});