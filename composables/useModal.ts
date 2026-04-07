export const useModal = () => {
    // Usamos um identificador (string) para permitir múltiplos modais diferentes
    const activeModalId = useState<string | null>('active-modal-id', () => null);

    const openModal = (id: string) => {
        activeModalId.value = id;
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        activeModalId.value = null;
        document.body.classList.remove('modal-open');
    };

    return { activeModalId, openModal, closeModal };
};