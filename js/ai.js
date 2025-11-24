document.addEventListener('DOMContentLoaded', function() {
    // Menu dropdown do usuário
    const userIconWrapper = document.querySelector('.user-icon-wrapper');
    const userMenu = document.querySelector('.user-menu');
    
    if (userIconWrapper && userMenu) {
        userIconWrapper.addEventListener('click', function() {
            userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (!userIconWrapper.contains(event.target)) {
                userMenu.style.display = 'none';
            }
        });
        
        // Fechar menu ao pressionar ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                userMenu.style.display = 'none';
            }
        });
    }
    
    // Menu dropdown do FAQ
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Menu dropdown do usuário
    const userIconWrapper = document.querySelector('.user-icon-wrapper');
    const userMenu = document.querySelector('.user-menu');
    
    if (userIconWrapper && userMenu) {
        userIconWrapper.addEventListener('click', function() {
            userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
        });
        
        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            if (!userIconWrapper.contains(event.target)) {
                userMenu.style.display = 'none';
            }
        });
        
        // Fechar menu ao pressionar ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                userMenu.style.display = 'none';
            }
        });
    }
    
    // Menu dropdown do FAQ
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});