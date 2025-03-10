let crsr = document.querySelector("#cursor")
let crsr2 = document.querySelector("#cursor2")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+ 30 + "px"
    crsr.style.top = dets.y  + "px"
    crsr2.style.left = dets.x - 200 + "px"
    crsr2.style.top = dets.y - 200 + "px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:0.5,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"end -70%",
        scrub:2,
    }
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});


gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger:0.3,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from(".card", {
    scaler:0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    },
  });

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });