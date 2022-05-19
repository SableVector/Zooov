const menuFixed = () => {
    const menuSelector = document.querySelector('.header__top');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.header__top');
    const fixedClass = 'top-header--fixed';

    function setFixed(num) {
        menuSelector.classList.add(fixedClass);
        header.style.paddingTop = num;
    }

    function removeFixed() {
        menuSelector.classList.remove(fixedClass);
        header.style.paddingTop = '';
    }

    function calcScrollHeight() {
        const navHeight = nav.offsetHeight;
        const getNavMarginBottom = window.getComputedStyle(nav).getPropertyValue("margin-bottom");
        const navMarginBottom = +getNavMarginBottom.slice(0, getNavMarginBottom.length - 2);
        const paddingTop = navHeight + navMarginBottom + 'px';
        return paddingTop;
    }

    function scrollMenu() {
        const headerHeight = header.offsetHeight;

        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= headerHeight) {
                const paddingTop = calcScrollHeight();

                setFixed(paddingTop);
            } else {
                removeFixed();
            }
        });
    }

    scrollMenu();

};

export default menuFixed;