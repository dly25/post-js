// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
function menuInit() {
	const iconMenu = document.querySelector('.icon-menu');
	if (iconMenu) {
		const menuBody = document.querySelector('.menu__body');
		const bodyTop = document.querySelector('body');
		iconMenu.addEventListener("click", function (e) {
			iconMenu.classList.toggle('menu-open')
			menuBody.classList.toggle('menu-open')
			bodyTop.classList.toggle('lock')
		});
	}
}