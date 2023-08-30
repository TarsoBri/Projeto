
       var $body = document.querySelector('body');
       $body.classList.remove('no-js');
       $body.classList.add('js');
       
        var $btnMenu = document.querySelector('.header__btn-menu');
        $btnMenu.removeAttribute('style');

        var menu = Menu({
            container: '.header__nav',
            toggleBtn: '.header__btnmenu',
            widthEnabled: 1024
        });