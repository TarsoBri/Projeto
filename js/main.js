
       var $body = document.querySelector('body');
       $body.classList.remove('no-js');
       $body.classList.add('js');
       
        var menu = new Menu({
            container: '.header__nav',
            toggleBtn: '.header__btn-menu',
            widthEnabled: 1024
        });

        var carouselImgs = new Carousel({
            container: '.slider-img .slideshow',
            itens: '.slideshow figure',
            btnPrevius: '.slideshow .btnprevius',
            btnNext: '.slideshow .btnnext'
        });

        