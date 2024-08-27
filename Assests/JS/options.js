if (localStorage.getItem("cloak")) {
    const cloak = JSON.parse(localStorage.getItem("cloak"))[0];
  
    if (
      localStorage.getItem("cloak") == "[]" ||
      localStorage.getItem("cloak") == null
    ) {
    } else {
      document.title = cloak.name;
      document.querySelector("link[rel='icon']").href = cloak.img;
    }
  }
  
  document.addEventListener("keydown", async (e) => {
    const panicData = JSON.parse(localStorage.getItem("panic"));
    if (panicData && panicData[0].key === e.key) {
      window.parent.window.location.replace(
        panicData[0].url || "https://google.com"
      );
    }
  });
  
  if (localStorage.getItem("theme")) {
    setBodyClass(localStorage.getItem("theme"));
  }
  
  function setBodyClass(className) {
    document.body.setAttribute("class", className);
  }

var chosenParticleState = localStorage.getItem("particleState") || "on";


document.addEventListener("DOMContentLoaded", function (event) {
  if (chosenParticleState === "on") {
    var particlesConfig = {"particles":{"number":{"value":67,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":1,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":6,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
    particlesJS("particles-js", particlesConfig)
  }
});

function particleSelect(param) {
  if (param == 'choose...') {return;}
  localStorage.setItem("particleState", param);
  chosenParticleState = param;

}