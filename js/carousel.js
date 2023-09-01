function Carousel(config){
    this.container = ( typeof config.container === 'string' ) ? 
    document.querySelector(config.container) : config.container;

    this.itens = ( typeof config.itens === 'string' ) ?
    document.querySelectorAll(this.itens) : this.itens;

    this.btnPrevius = ( typeof config.btnPrevius === 'string' ) ?
    document.querySelectorAll(this.btnPrevius) : this.btnPrevius;

    this.btnNext = ( typeof config.btnNext === 'string' ) ?
    document.querySelectorAll(this.btnNext) : this.btnNext;

    var _this = this;
    console.log(this)

}  