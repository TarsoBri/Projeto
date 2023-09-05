
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
            itens: 'figure',
            btnPrevius: '.btnprevious',
            btnNext: '.btnnext'
        });

        var carouselDocuments = new Carousel({
            container: '.quote-container .quote-slideshow',
            itens: 'figure',
            btnPrevius: '.prev',
            btnNext: '.next'
        });
