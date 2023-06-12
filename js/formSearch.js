//находим элементы
const searchOpen = document.querySelector('.js-search-open'); //находим кнопку открытия формы
const form = document.querySelector('.js-search-form'); // находим саму форму
const searchClose = form.querySelector('.js-search-close'); //находим кнопку закрытия формы. form - ищем в самой форме
const focusableElems = form.querySelectorAll('[tabindex]'); //для доступности. внутри формы находим элементы по атрибуту

//пишем действие
searchOpen.addEventListener('click', () => { //на кнопку открытие цепляем слушатель  события на событие "клик" и определяем функцию, которая будет отрабатыавть при клике на данную кнопку
  form.classList.add('header__form_active'); //после клика на форму добавляется класс
  focusableElems.forEach(el => { //для доступности
    el.tabIndex = '0'
  })
});

//пишем закрытие формы
searchClose.addEventListener('click', () => { //на кнопку открытие цепляем слушатель  события на событие "клик" и определяем функцию, которая будет отрабатыавть при клике на данную кнопку
  form.classList.remove('header__form_active'); //после клика на форму убираем класс
  focusableElems.forEach(el => { //для доступности
    el.tabIndex = '-1'
  })
});
