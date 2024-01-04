var says = [
  "Your one and only Unbl0cked Playground",
  "I hate working on Global",
  "Better than 3kh0",
  "Fortnite!",
  "your mom",
  "Bot",
  "Ballsack",
  "stop asking where disc0rd is. its in widgetbot",
  "blogs was usless",
  "so was secrets",
  "Tempus fugit ⏰",
  "yes its open-source",
  "no you shouldnt skid it",
  "what do i add?",
  "*you're* 👆🤓",
  "idk how many games are in this lol",
  "optimized by ChatGPT",
  "archiving piksulh soon",
  "i cant use fontawesome because of you guys :(",
  "LunarOS 🔛🔝",
  "i need ads on this site cuz i need money 😮",
  "uh",
  "my coder friends copying me and hes better at coding then me",
  "Schools Pretty Boring",
  "This Websites Trash", 
  "i took too long making this :(", 
  "AOSUDHASIUD4u3ghiuj34hgi34gH", 
  "hotline bling", 
  "all 1v1lol's are blocked at my school", 
  "the person who made this websites pretty cool", 
  "what day is it?", 
  "fortnite battl pass", 
  "i made this on the weekend :((((",
  "hiiii andy :)",
  "i hate myself",
  "im in love with a emo gorl 💅",
  "amog",
  "💀",
  "hey e-kitten",
  "Kwame is coolll... jk he ass at fortnite",
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