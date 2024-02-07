function WidgetBot() {
  create(protocolThingy + "/Assests/Others/WidgetBot.html");
}

function about_blank(){
    var newWindow = window.open('about:blank', '_blank');
    newWindow.document.body.style.margin = '0';
    newWindow.document.body.style.height = '100vh';
    newWindow.document.body.style.minHeight = '100vh';
    var iframe = newWindow.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.minWidth = '100%';
    iframe.style.minHeight = '100%';
    iframe.style.margin = '0';
    iframe.src = `${window.location.origin}`;
    newWindow.document.body.appendChild(iframe);
    window.location.replace("https://google.com");
}

// Opens page in a new about:blank tab
function setAboutBlank() {
    const $aboutBlankSelect = document.getElementById('aboutBlankSelect');
    const aboutBlankSelect = $aboutBlankSelect.value;
    if (aboutBlankSelect === 'on') {
        localStorage.setItem('aboutBlank', 'on');
        openAboutBlank();
    } else if (aboutBlankSelect === 'off') {
        localStorage.setItem('aboutBlank', 'off');
    }
}

// opens page in about:blank
function openAboutBlank(url) {
    if (url === undefined) {
      var encoded_url = window.location.origin;
    }
    else {
      var encoded_url = url;
    }
    var w = open('about:blank', '_blank') || alert("It seems like you are blocking pop-ups. Please try again once you have allowed pop-ups.")
      w.document.write(`<iframe style="height: 100%; width: 100%; border: none;" src="${encoded_url}" allowfullscreen></iframe>`)
      w.document.body.style.margin = '0'
    window.location.replace("https://google.com"); 
}
// end of about:blank functions

function createCustom() {
  let UrlTingy = document.getElementById("textInputThingy").value;

  if (!UrlTingy.startsWith("http://") && !UrlTingy.startsWith("https://")) {
    create("https://" + UrlTingy);
  } else {
    create(UrlTingy);
  }
}
