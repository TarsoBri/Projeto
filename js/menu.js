function Menu(config){
    this.nav = ( typeof config.container === 'string') ? 
    document.querySelector(config.container) : config.container;

    


}