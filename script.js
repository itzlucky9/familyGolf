var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")
var h4all = document.querySelectorAll("#nav h4")
var colon1 = document.querySelector("#page3 #colon1")      
var colon2 = document.querySelector("#page3 #colon2")      
var fH2 = document.querySelectorAll("#footer h2,h5")


document.addEventListener("mousemove",function(dets){

    cursor.style.top = dets.y+"px";
    cursor.style.left = dets.x+5+"px";
    cursorBlur.style.top = dets.y-150+"px";
    cursorBlur.style.left = dets.x-150+"px";
    
})

h4all.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent" 
    })
})
h4all.forEach(function(val){
    val.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border = "0px #95C11E"
        cursor.style.backgroundColor="#95C11E";
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10",
        end:"top -11",
        scrub:3,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2,
    }
})




gsap.to("#colon1",{
    x:80,
    y:65,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 20%",
        scrub:5
    }
})
gsap.to("#colon2",{
    x:-50,
    y:-60,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top 20%",
        scrub:5
    }
})
gsap.from("#page4 h1",{
    y:30,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 30%",
        scrub:1
    }
})



fH2.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent" 
    })
})
fH2.forEach(function(val){
    val.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border = "0px #95C11E"
        cursor.style.backgroundColor="#95C11E";
    })
})