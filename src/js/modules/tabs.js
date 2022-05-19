const tabs = () => {

    const tabsArray = document.querySelectorAll('[data-tabs]');

    if (tabsArray.length) {
        tabsArray.forEach(tabs => {
            const tabsTitles = tabs.querySelector('[data-tabs-titles]');
            const contentsBody = tabs.querySelector('[data-tabs-body]');
            const buttons = tabsTitles.querySelectorAll('button');
            const contents = [...contentsBody.children];

            if (tabsTitles && contentsBody) {
                tabsTitles.addEventListener('click', (e) => {
                    const target = e.target;

                    if (target && target.nodeName === 'BUTTON') {
                        buttons.forEach((button, i) => {
                            if (target === button) {
                                hideContent(buttons, contents);
                                showContent(buttons, contents, i);
                            }
                        });
                    }
                });
            }

            hideContent(buttons, contents);
            showContent(buttons, contents);
        });
    }

    function hideContent(buttons, contents) {
        buttons.forEach(button => {
            button.classList.remove('_tab-active');
        });
        contents.forEach(content => {
            content.style.cssText = `
                max-height: 0;
                opacity: 0;
                transition: all 0.3s ease-in-out;
                `;
                // content.style.display = 'none';
            });
        }
        
        function showContent(buttons, contents, i = 0) {
            buttons[i].classList.add('_tab-active');
            contents[i].style.cssText = `
            max-height: ${contents[i].scrollHeight}px;
            opacity: 1;
            transition: all 0.3s ease-in-out;
        `;
    }
}

export default tabs;