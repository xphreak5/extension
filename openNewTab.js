chrome.storage.local.get(['urlVal'], function(result) {
  window.open(result.urlVal , "_blank")
});