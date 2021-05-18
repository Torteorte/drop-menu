const btnMenus = document.querySelectorAll('.main-target');

function dropMenu() {
    for (let btnMenu of btnMenus) {
        const menu = btnMenu.closest("li").querySelector('.cbp-hrsub');
    
        btnMenu.addEventListener('click', function() {
            toggleMenu()
        })
    
        function toggleMenu() {
            menu.classList.toggle('open')
            btnMenu.classList.toggle("back")
        }
    
        document.addEventListener('click', function(event) {
            const target = event.target
            const its_menu = target == menu || menu.contains(target)
            const its_btnMenu = target == btnMenu
            const menu_is_active = menu.classList.contains('open')
            
            if (!its_menu && !its_btnMenu && menu_is_active) {
                toggleMenu()
            }
        })
    }
}

dropMenu()