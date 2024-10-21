var main = document.querySelector(".main")
var cursor = document.querySelector(".cursor")
var image = document.querySelector(".image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
       
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More",
    gsap.to(cursor,{
        scale:5,
        backgroundColor:"#ffffff5d"
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML = "",
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
        
    })
})