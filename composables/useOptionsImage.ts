import { useState } from '#app'

export const useOptionsImage = () => {
	const isOpen = useState<boolean>('globalModal_isOpen', () => false);
	const srcImage = useState<string>('globalModal_srcImage', () => '');
	const altImage = useState<string>('globalModal_altImage', () => '');
	
	function openModal(imageSrc: string, imageAlt: string) {
		srcImage.value = imageSrc;
		altImage.value = imageAlt;
		isOpen.value = true;
	}
	
	function closeModal() {
		isOpen.value = false;
		srcImage.value = '';
		altImage.value = '';
	}
	
	return {
		isOpen,
		srcImage,
		altImage,
		openModal,
		closeModal
	}
}
