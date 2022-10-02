AFRAME.registerComponent("playonclick", {
  schema: {
    isPlaying: { type: "boolean", default: false },
    id: {type: "string", default: "1"}
  },

  init: function () {
console.log(this.el.id)
console.log("meow")
    this.videoEl =   this.el.getAttribute("material").src;
    this.onClick = this.onClick.bind(this);    
  },

  play: function () {
    
    window.addEventListener("click", this.onClick);
  },
  onClick: function (evt) {
    console.log(this.el.id)
      console.log(this.data)
    
      if (!this.videoEl) {
        return;
      }
      var isPlaying = this.el.getAttribute("playonclick").isPlaying;

      this.el.object3D.visible = true;

      if (!isPlaying) {
       this.el.setAttribute("playonclick", {
          isPlaying: true
        });
     this.el.components.material.material.map.image.play();

      } else {
        this.el.setAttribute("playonclick", {
          isPlaying: false
        });
      this.el.components.material.material.map.image.pause();
      }
    }
});