AFRAME.registerComponent("marker-handler", {
    init: function(){
        console.log("damn")
        this.el.addEventListener("markerFound", () => {
            console.log("meow")
            console.log(this.el.id)
            if (this.el.id) {
                var markerId = this.el.id.split(":")[1]
                var vidEl = document.querySelector(`#vid${markerId}`)
                console.log(vidEl)
                vidEl.setAttribute("playonclick", {})
            }
        })

        this.el.addEventListener("markerLost", () => {
            if (this.el.id) {

                var markerId = this.el.id.split(":")[1]
                var vidEl = document.querySelector(`#vid${markerId}`)
                vidEl.components.material.material.map.image.pause();
                vidEl.removeAttribute("playonclick", {})
            }
        })
    }
})