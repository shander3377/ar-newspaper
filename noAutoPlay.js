AFRAME.registerComponent("noautoplay", {
    init: function(){
    this.el.components.material.material.map.image.pause();
    }
})