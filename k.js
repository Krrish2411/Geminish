var tl = gsap.timeline()
var tl1 = gsap.timeline()
var tl2 = gsap.timeline()


tl.from("#nleft h2" , {
    x:100,
    opacity : 0,
    duration: 2,
    stagger: 0.3
})

tl.from("#nleft h3" , {
    x:100,
    opacity : 0,
    duration: 2,
    stagger: 0.3
})

tl1.from ("#nav1 h1", {
    x : -100 ,
    duration :2 ,
    opacity:0 , 
    stagger : 0.2
})
tl1.from ("#nav1 h2", {
    x : -100 ,
    duration :2 ,
    opacity:0 , 
    stagger : 0.2
})

tl1.from("#nav1 , #icons",{
    y : -100 ,
    duration :2 ,
    opacity:0 , 
    stagger : 0.2
})

gsap.from("#nav", {
    y:-100,
    duration:2,
    opacity:0, 
})

tl2.from("#nav img", {
    y:-100,
    duration:2,
    opacity:0,
    stagger: 0.2
})

tl2.from("#nav button", {
    y:-100,
    duration:2,
    opacity:0
})

var tl3 = gsap.timeline()

tl3.from("#nav-part1 h1", {
    x : -100 ,
    opacity:0 ,
    duration: 2 ,
    stagger : 0.3
})

tl3.from("#nav-part1 h2", {
    y : 100 ,
    opacity:0 ,
    duration: 2 ,
    stagger : 0.3
})

tl3.from("#nav-part1 h5", {
    y : 100 ,
    opacity:0 ,
    duration: 2 ,
    stagger : 0.2
})

tl3.from("#nav-part1 button", {
    y : 100 ,
    opacity:0 ,
    duration: 2 ,
    stagger : 0.2
})

tl3.from("#nav-part1 input", {
    z: 100 ,
    opacity:0 ,
    duration: 2 ,
    stagger : 0.2
})