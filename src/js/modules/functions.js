import swiper from "../libs/slider.js";
import tippy from "../libs/tippy.js";
import rangeInit from "../libs/range.js";
import spoller from "../modules/spoller.js";
import dynamicAdapt from "../modules/dynamicAdapt.js";
import menuBurger from "../modules/menuBurger.js";
import ratingStar from "../modules/ratingStar.js";
import select from "../modules/select.js";
import tabs from "../modules/tabs.js";
import popups from "../modules/popups.js";
import menuFixed from "../modules/menuFixed.js";
import smoothScrolling from "../modules/smoothScroll.js";

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {

		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

// Экспорт функция.
export {
	isWebp,
	swiper,
	tippy,
	spoller,
	dynamicAdapt,
	menuBurger,
	ratingStar,
	select,
	rangeInit,
	tabs,
	popups,
	menuFixed,
	smoothScrolling
};