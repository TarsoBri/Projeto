function Menu(config){
    this.nav = ( typeof config.container === 'string') ? 
    document.querySelector(config.container) : config.container;
    
    this.btn = ( typeof config.toggleBtn === 'string') ?
    document.querySelector(config.toggleBtn) : config.toggleBtn;
    
    this.maxWidth = config.widthEnabled || false;
    
    var _opened = false;
    var _this = this;
    
    this.btn.removeAttribute('style');
    
    if(this.maxWidth){
        window.addEventListener('resize', e => {
            if(window.innerWidth > _this.maxWidth){
                _this.nav.removeAttribute('style');
                _opened = true;
            } else if(!this.nav.getAttribute('style')){
                closeMenu();
            }
        })

        if(window.innerWidth <= this.maxWidth){
            closeMenu();
        }
    }
    



    this.btn.addEventListener('click', openOrCloseMenu);
    
    function openOrCloseMenu(){
        if(!_opened){
            openMenu();
        } else {
            closeMenu();
        }
    }
    
    function openMenu(){
        _opened = true;
        _this.btn.classList.add('active')
        
        var  _top = this.nav.getBoundingClientRect().top + 'px';
        var _style = {
            maxHeight: 'calc(100vh - '+ _top +')',
            overflow: 'hidden'
        };
        
        applyStyle(_style);
    }
    
    function closeMenu(){
        _opened = false;
        _this.btn.classList.remove('active')

        var _style = {
            maxHeight: '0',
            overflow: 'hidden'
        };
        
        applyStyle(_style);
    }
    
    function applyStyle(_style){
        Object.keys(_style).forEach(stl =>{
            _this.nav.style[stl] = _style[stl];
        })
        console.log(_style)
    }


}