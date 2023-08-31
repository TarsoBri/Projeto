
       var $body = document.querySelector('body');
       $body.classList.remove('no-js');
       $body.classList.add('js');
       
        var menu = Menu({
            container: '.header__nav',
            toggleBtn: '.header__btn-menu',
            widthEnabled: 1024
        }); 

        