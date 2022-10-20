function loco(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
function swip(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      
      
}

function gsp(){

    ScrollTrigger.create({
        trigger:"#awwwards",
        start:"top 10%",
        end:"top -2400vh",
        scroller:"#main",
        pin:true,
        // markers:true,
    })




    var tl = gsap.timeline();
    
    tl
    
    .to("#nav-left, #nav-right, #first, #social",{
        scrollTrigger:{
            trigger:"#section-1",
            scroller:"#main",
            start:"top 17%",
            scrub: 2,
            // markers: true
        },
        y: -400
    })
    .to("#rob",{
        scrollTrigger:{
            trigger:"#section-1",
            scroller:"#main",
            start:"top 17%",
            scrub: 2,
            // markers: true
        },
        y: -200
    })
    .to("#clouds1",{
        scrollTrigger:{
            trigger:"#section-2",
            scroller:"#main",
            start:"top bottom",
            scrub: 2,
            // markers: true
        },
        y: -200
    })
    .to("#clouds2",{
        scrollTrigger:{
            trigger:"#section-2",
            scroller:"#main",
            start:"top bottom",
            scrub: 2,
            // markers: true
        },
        y: -400
    })
    .to("#swp3 ul",{ 
        scrollTrigger:{
            trigger:"#section-2",
            scroller:"#main",
            start:"top bottom",
            // markers: true
        },
        y: "-160",
        duration:5,
        repeat: -1,
    })
    .to("#nav2-left, #nav2-right",{
        scrollTrigger:{
            trigger:"#section-2",
            scroller:"#main",
            start:"top bottom",
            scrub: 2,
            // markers: true
        },
        y: -400,
        ease: Expo.easeInout
    })
    .to("#part2",{
        scrollTrigger:{
            trigger:"#section-2",
            scroller:"#main",
            start:"top bottom",
            scrub: 3,
            // markers: true
        },
        delay:.5,
        y: -550,
        ease: Expo.easeInout
    })
    .to("#part1, #part3",{
        scrollTrigger:{
            trigger:"#section-2",
            scroller:"#main",
            start:"top bottom",
            scrub: 5,
            // markers: true
        },
        y: -550,
        ease: Expo.easeInout
    })

    
    .to("#mountain",{
        scrollTrigger:{
            trigger:"#section-3",
            scroller:"#main",
            start:"top bottom",
            scrub: 2,
            // markers: true
        },
        y: -200
    })
    .to("#mountain1",{
        scrollTrigger:{
            trigger:"#section-3",
            scroller:"#main",
            start:"top bottom",
            scrub: 2,
            // markers: true
        },
        y: -400
    })
    
    .to("#nav3-left, #nav3-right",{
        scrollTrigger:{
            trigger:"#section-3",
            scroller:"#main",
            start:"top bottom",
            scrub: 2,
            // markers: true
        },
        y: -400,
        ease: Expo.easeInout
    })
    .to("#el-2",{
        scrollTrigger:{
            trigger:"#section-3",
            scroller:"#main",
            start:"top bottom",
            scrub: 3,
            // markers: true
        },
        delay:.5,
        y: -550,
        ease: Expo.easeInout
    })
    .to("#el-1, #el-3",{
        scrollTrigger:{
            trigger:"#section-3",
            scroller:"#main",
            start:"top bottom",
            scrub: 5,
            // markers: true
        },
        y: -550,
        ease: Expo.easeInout
    })

    .to("#wave",{
        scrollTrigger:{
            trigger:"#section-4",
            scroller:"#main",
            start:"top bottom",
            scrub: 2,
            // markers: true
        },
        x: -50,
        y: -200
    })
    .to("#wave1",{
        scrollTrigger:{
            trigger:"#section-4",
            scroller:"#main",
            start:"top bottom",
            scrub: 2,
            // markers: true
        },
        x: 50,
        y: -250
    })
    
    .from("#nav5-left, #nav5-right",{
        scrollTrigger:{
            trigger:"#section-5",
            scroller:"#main",
            start:"-20% bottom",
            end:"top 20%",
            scrub: 2,
            // markers: true
        },
        y: 50,
        ease: Expo.easeInout
    })
    .from("#left5",{
        scrollTrigger:{
            trigger:"#section-5",
            scroller:"#main",
            start:"top bottom",
            end:"top 20%",
            scrub: 3,
            // markers: true
        },
        delay:.5,
        y: 150,
        ease: Expo.easeInout
    })
    .from("#right5",{
        scrollTrigger:{
            trigger:"#section-5",
            scroller:"#main",
            start:"top bottom",
            end:"top 20%",
            scrub: 5,
            // markers: true
        },
        y: 150,
        ease: Expo.easeInout
    })

}

loco();
swip();
gsp();

document.addEventListener("readystatechange", function(){
    if(document.readyState === "complete"){
        gsap.to("#loader",{
            top: "-100vh",
            duration:2,
            delay:2,
            ease: Expo.easeInout
        })
    }
})
