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