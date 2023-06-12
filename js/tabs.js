document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tabs__nav-link');
  tabBtns.forEach(function(tabsNavLink) {
        tabsNavLink.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            tabBtns.forEach(item => {
              item.classList.remove("active-btn");
            });

            document.querySelectorAll('.tabs__contant').forEach(function(tabsContant) {
                tabsContant.classList.remove('tabs__contant-active');
            });

            this.classList.add("active-btn");
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__contant-active');

        })
    })
})
