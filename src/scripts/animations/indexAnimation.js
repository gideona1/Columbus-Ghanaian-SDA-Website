const controller = new ScrollMagic.Controller();

// Section 1
const section1Image = TweenMax.fromTo(
  document.getElementById("cg-image-animation-s1"),
  3,
  { y: "-350px", ease: Sine.easeIn, opacity: 1 },
  { y: "0px", ease: Sine.easeOut }
);
new ScrollMagic.Scene({
  duration: 800,
  triggerElement: document.querySelector(".cg-hero-content-quote"),
  triggerHook: 0.5,
})
  .setTween(section1Image)
  // .addIndicators()
  .addTo(controller);

const section1Text = TweenMax.fromTo(
  document.getElementById("cg-text-animation-s1"),
  3,
  { opacity: 0, y: "100px", ease: Sine.easeIn },
  { opacity: 1, y: "0px", ease: Sine.easeOut }
);
new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: document.querySelector(".cg-hero-content-quote"),
  triggerHook: 0.5,
})
  .setTween(section1Text)
  //   .addIndicators()
  .addTo(controller);

// Section 2
const section2Image = TweenMax.fromTo(
  document.getElementById("cg-image-animation-s2"),
  3,
  { x: "-50px", ease: Sine.easeIn },
  { x: "0px", ease: Sine.easeOut }
);
new ScrollMagic.Scene({
  duration: 800,
  triggerElement: document.getElementById("cg-section-1"),
  triggerHook: 0.5,
})
  .setTween(section2Image)
  // .addIndicators()
  .addTo(controller);

const section2Text = TweenMax.fromTo(
  document.getElementById("cg-text-animation-s2"),
  3,
  { opacity: 0, x: "50px", ease: Sine.easeIn },
  { opacity: 1, x: "0px", ease: Sine.easeOut }
);
new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: document.getElementById("cg-section-1"),
  triggerHook: 0.5,
})
  .setTween(section2Text)
  //   .addIndicators()
  .addTo(controller);

// Section 3
const section3Background = TweenMax.fromTo(
  document.getElementById("cg-bg-animation-s3"),
  3,
  { left: "0%", opacity: 0, ease: Sine.easeIn },
  { left: "-20%", opacity: 0.075, ease: Sine.easeOut }
);
new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: document.getElementById("cg-section-2"),
  triggerHook: 0.5,
})
  .setTween(section3Background)
  .addTo(controller);
