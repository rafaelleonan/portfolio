import {useModal} from "~/composables/useModal"

export const useOptionsImage = () => {
	// Pegamos as funções do sistema de modal global que criamos
	const { openModal: openGlobal, closeModal: closeGlobal } = useModal();

	const srcImage = useState<string>('globalModal_srcImage', () => '');
	const altImage = useState<string>('globalModal_altImage', () => '');

	function openImageModal(imageSrc: string, imageAlt: string) {
		srcImage.value = imageSrc;
		altImage.value = imageAlt;
		// Chamamos o ID específico do modal de zoom
		openGlobal('modal-zoom');
	}

	function closeImageModal() {
		closeGlobal();
		srcImage.value = '';
		altImage.value = '';
	}

	return {
		srcImage,
		altImage,
		openModal: openImageModal,
		closeModal: closeImageModal
	}
}