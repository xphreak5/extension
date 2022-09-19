// Menu container var
const menuContainer = document.getElementById("menu-container");

// Delete variables
const deleteMenuItem = document.getElementById("delete-menu-item");
const deleteContainer = document.getElementById("delete-container");
const deleteButton = document.getElementById("delete-button");
const maxButton = document.getElementById("max-button");
const input = document.getElementById("container-input");
const arrowBack = document.getElementById("arrow-back");


// Theme button
const themeButton = document.getElementById("theme-menu-item");

// Delete section

deleteMenuItem.onclick = () => {
  menuContainer.style.display = "none"
  deleteContainer.style.display = "block"
}

deleteButton.onclick = () => {
  chrome.storage.local.set({inpVal: input.value}, function() {
    console.log('Value is set to ' + input.value);
  });


  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "delete.js"});
  });
};

maxButton.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "max.js"});
  });
  
  chrome.storage.local.get(['maxVal'], function(result) {
    input.value = result.maxVal
  });

  chrome.storage.local.set({inpVal: input.value}, function() {
    console.log('Value is set to ' + input.value);
  });
}

// Theme button


themeButton.onclick = () => {
  chrome.tabs.query({ 'active': true, 'currentWindow': true }, function (tabs) {
    var tab = tabs[0].url
    var tabWithoutHttps = tab.substring(tab.indexOf("/") + 2)
    var storeName = tabWithoutHttps.substring(0, tabWithoutHttps.indexOf("."))

    console.log(storeName);

    chrome.storage.local.set({urlVal: `https://${storeName}.myikas.com/admin/storefront/partner/theme/edit`}, function() {
      chrome.tabs.executeScript(
        tabs[0].id,
        {file: "openNewTab.js"});
    });
  });
}




// Arrow to go back

arrowBack.onclick = () => {
  deleteContainer.style.display = "none";
  menuContainer.style.display = "block"
}


