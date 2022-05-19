const popup = () => {

    const body = document.querySelector('body');
    const popups = document.querySelectorAll('[data-popup]');

    // Вешаем прослушивание событий на кнопку Escape (закрытие модальных окон)
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            if (document.documentElement.classList.contains('modal-open')) {
                popups.forEach(modal => {
                    closePopups(modal);
                });
            }
        }
    });

    // вешаем прослушивание событий на клик мышкой (закрытие модальных окон)
    if (popups) {
        popups.forEach((item, i) => {
            item.addEventListener('click', e => {

                const target = e.target;

                if (target && target.dataset.popupClose === '' || !target.closest('.body-popup')) {
                    closePopups(popups[i]);
                }
            });



        });
    }

    // Вешаем прослушивание событий на клик мышки всего документа (открытие модальных окон)
    if (body) {
        body.addEventListener('click', e => {

            const target = e.target;

            if (target &&
                (target.dataset.popupBtn)) {

                e.preventDefault();

                popups.forEach(item => {

                    if (item.dataset.popup === target.dataset.popupBtn) {
                        let scrollWidth = calcScroll();
                        target.dataset.popupBtn === 'ration' ? addCardInfo(target, item) : null;
                        // closePopups();
                        openModal(item, scrollWidth);
                    }
                });

            }
        });

    }

    // Функция отвечающая за закрытие модального окна.
    function closePopups(modal) {
        modal.classList.remove('popup--active');
        modal.classList.add('popup--not-active');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('popup--not-active');
        }, 800);
        body.parentElement.classList.remove('modal-open');
        body.style.paddingRight = ``;
    }

    // Функция отвечающая за откритие модального окна.
    function openModal(modal, scroll) {
        modal.classList.add('popup--active');
        modal.style.display = 'flex';
        body.parentElement.classList.add('modal-open');
        body.style.paddingRight = `${scroll}px`;
    }

    // Функция вычисляющая ширину скрола
    function calcScroll() {
        const element = document.createElement('div');
        element.style.width = '50px';
        element.style.height = '50px';
        element.style.overflowY = 'scroll';
        element.style.visibility = 'hidden';
        body.insertAdjacentElement('beforeend', element);

        let scrollWidth = element.offsetWidth - element.clientWidth;
        element.remove();

        return scrollWidth;
    }

    // Функция добавляющая содержимая модального окна
    function addCardInfo(target, item) {
        const card = target.parentElement.closest('.body-ration__ration-card');
        const title = card.querySelector('.ration-card__title').textContent;
        const subtitle = card.querySelector('.ration-card__subtitle').textContent;
        const url = card.querySelector('.ration-card__image-ibg > img').src;

        item.querySelector('.header-content__title').textContent = title;
        item.querySelector('.header-content__subtitle').textContent = subtitle;
        item.querySelectorAll('.image-slider__image-ibg > img').forEach(img => {
            img.src = url;
        });
        item.querySelectorAll('.thrumbs-image__image-ibg > img').forEach(img => {
            img.src = url;
        });
    }

};

export default popup;