document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');
    const modalLink = document.getElementById('modal-link');
    const closeModal = document.querySelector('.close-button');
    const compactCards = document.querySelectorAll('.compact-card');

    compactCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega os dados do HTML usando atributos data-*
            const title = card.querySelector('h4').innerText;
            const details = card.dataset.details;
            const link = card.dataset.link;

            // Preenche o modal com os dados
            modalTitle.innerText = title;
            modalDetails.innerHTML = details;
            modalLink.href = link;

            // Mostra o modal
            modal.style.display = 'block';
        });
    });

    // Função para fechar o modal
    const closeTheModal = () => {
        modal.style.display = 'none';
    };

    // Eventos para fechar o modal
    closeModal.addEventListener('click', closeTheModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeTheModal();
        }
    });

    // Fechar com a tecla 'Esc'
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeTheModal();
        }
    });
});
