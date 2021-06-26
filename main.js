const menuActive = (idToggle, idMenu) => {
    const menu = document.getElementById(idMenu);
    const toggle = document.getElementById(idToggle);

    console.log(menu, toggle);
    
    toggle.addEventListener("click", () => {
        menu.classList.toggle('menu-active');
    })

}

menuActive('toggleButton', 'menu');
menuActive('exitButton', 'menu');


