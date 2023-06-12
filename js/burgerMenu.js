// здесь мы определяем функцию, которая отвечает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  menu.addEventListener('animationend', function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener('click', function () {
    this.classList.toggle(params.activeClass);

    if (!menu.classList.contains(params.activeClass) && !menu.classList.contains(params.hiddenClass)) {
      menu.classList.add(params.activeClass);
    } else {
      menu.classList.add(params.hiddenClass);
    }
  });
}

// здесь мы вызываем функцию и передаем в нее классы наших элементов
setBurger({
  btnClass: 'burger', // класс бургера
  menuClass: 'menu', // класс меню
  activeClass: 'is-opened', // класс открытого состояния
  hiddenClass: 'is-closed' // класс закрывающегося состояния (удаляется сразу после закрытия)
});
