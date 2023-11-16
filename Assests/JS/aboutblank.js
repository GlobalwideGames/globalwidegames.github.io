const protocolThingy = window.location.protocol + "//" + window.location.host;

function create(urlThingyHere) {
  var url = urlThingyHere;

  if (url) {
    var win;
    if (win) {
      win.focus();
    } else {
      win = window.open();
      win.document.title = "New Tab";
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100vh";
      var iframe = win.document.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.margin = "0";
      iframe.src = url;
      win.document.body.appendChild(iframe);

      var interval = setInterval(function () {
        if (win.closed) {
          clearInterval(interval);
          win = undefined;
        }
      }, 500);
    }
  }
}

function WidgetBot() {
  create(protocolThingy + "/Assests/Others/WidgetBot.html");
}

function RailinAboutBlank() {
  window.location.replace("https://google.com");
  create(protocolThingy);
}

function createCustom() {
  let UrlTingy = document.getElementById("textInputThingy").value;

  if (!UrlTingy.startsWith("http://") && !UrlTingy.startsWith("https://")) {
    create("https://" + UrlTingy);
  } else {
    create(UrlTingy);
  }
}
