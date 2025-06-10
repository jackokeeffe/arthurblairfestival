let scrollY = 0;

function showElement(modeNumber) {
    const modalIds = [
        'modal-days',
        'modal-love',
        'modal-which',
        'modal-knight',
        'modal-watchmen',
        'modal-leap',
        'modal-aesthete',
        'modal-sister'
    ];

    const modalId = modalIds[modeNumber - 1];
    const modal = document.getElementById(modalId);

    if (modal) {
        scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;
        document.body.classList.add('modal-open');
        modal.style.display = 'flex';
    }
}

function hideElement(modeNumber) {
    const modalIds = [
        'modal-days',
        'modal-love',
        'modal-which',
        'modal-knight',
        'modal-watchmen',
        'modal-leap',
        'modal-aesthete',
        'modal-sister'
    ];

    const modalId = modalIds[modeNumber - 1];
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        window.scrollTo(0, scrollY); // Restore original scroll
    }
}
