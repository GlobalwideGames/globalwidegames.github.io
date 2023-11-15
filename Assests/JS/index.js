var says = [
    //"Example text",
  ];
  
  function splashText() {
    document.querySelector(".Index-SplashText").innerHTML =
      says[Math.floor(Math.random() * says.length)];
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    splashText();
  
    fetch("https://ipv4.wtfismyip.com/json")
      .then((response) => response.json())
      .then((data) => {
        ipAddress = data.YourFuckingIPAddress;
        says.push(`umm your ip: ${ipAddress}`);
        splashText();
      });
  });