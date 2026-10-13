(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray("[data-rise]").forEach(function (el) {
    gsap.from(el, {
      y: 22,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%" }
    });
  });
})();
