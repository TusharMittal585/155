AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{
            type:"string",
            default:"#ring1"
        }
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    isCollided:function(elementId){
        var element=document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#coin")){
                element.setAttribute("visible",false)
                console.log("coin collision")
            }
            else if(elementId.includes("#fish")){
                element.setAttribute("visible",false)
                console.log("fish collision")
            }
        })
    }
})