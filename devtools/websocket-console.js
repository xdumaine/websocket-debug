console.log('wsd panel.js');
document.getElementById('header').innerHTML = 'Loaded2';

var websockets = [];

document.getElementById('har').onclick = function () {
  chrome.devtools.network.getHAR(function(request) {
    debugger;
    websockets = request.entries.filter(r => r.request.url.indexOf('wss') === 0);
  });
}
