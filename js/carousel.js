
function Carousel(config){
    this.container = ( typeof config.container === 'string' ) ? 
    document.querySelector(config.container) : config.container;
    
    this.itens = ( typeof config.itens === 'string' ) ?
    this.container.querySelectorAll(config.itens) : config.itens;
    
    this.btnPrevius = ( typeof config.btnPrevius === 'string' ) ?
    this.container.querySelector(config.btnPrevius) : config.btnPrevius;
    
    this.btnNext = ( typeof config.btnNext === 'string' ) ?
    this.container.querySelector(config.btnNext) : config.btnNext;

    var _this = this;
    var _currentSlide = 0;
    
    initCarrousel()
    function initCarrousel(){
        var _show = _this.container.querySelectorAll('.show');
        
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show');
        });
        
     
        _this.btnPrevius.removeAttribute('style');
        _this.btnNext.removeAttribute('style');
        _this.itens[0].classList.add('show');
        
        addListeners();
    }
    
    function addListeners(){
        _this.btnPrevius.addEventListener('click', showPreviusSlide);
        _this.btnNext.addEventListener('click', showNextSlide);
    }
    
    function showPreviusSlide(){
        _currentSlide--;
        showSlide();
    }
    
    function showNextSlide(){
        _currentSlide++;
        showSlide();
    }
    setInterval(showNextSlide, 10000);
    
    function showSlide(){
        var qtd = _this.itens.length;
        var slide = Math.abs(_currentSlide % qtd);

        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show');
    }

}  