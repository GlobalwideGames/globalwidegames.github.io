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
        about_blank();
    } else if (aboutBlankSelect === 'off') {
    }
}

function createCustom() {
  let UrlTingy = document.getElementById("textInputThingy").value;

  if (!UrlTingy.startsWith("http://") && !UrlTingy.startsWith("https://")) {
    create("https://" + UrlTingy);
  } else {
    create(UrlTingy);
  }
}
