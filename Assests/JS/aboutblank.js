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

// Start of about:blank functions

function getAboutBlank() {
    if (localStorage.getItem('aboutBlank') === 'on') {
        var introText = document.getElementById("introText");
        introText.innerHTML = "<b>Elixir:</b><br>Search the web without censorship or tracking.</a>"

        var searchPlaceholder = document.querySelector("input");
        searchPlaceholder.placeholder = "Search here without tracking";

        return 'on';
    } else {
        return 'off';
    }
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
    window.location.replace(getSearchEngineURL()); 
}
// end of about:blank functions
}

function createCustom() {
  let UrlTingy = document.getElementById("textInputThingy").value;

  if (!UrlTingy.startsWith("http://") && !UrlTingy.startsWith("https://")) {
    create("https://" + UrlTingy);
  } else {
    create(UrlTingy);
  }
}
