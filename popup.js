const menuContainer = document.getElementById("menu-container");

const deleteMenuItem = document.getElementById("delete-menu-item");


const deleteContainer = document.getElementById("delete-container");
const deleteButton = document.getElementById("delete");
const maxButton = document.getElementById("max-button");
const input = document.getElementById("container-input");
const arrowBack = document.getElementById("arrow-back");


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

arrowBack.onclick = () => {
  deleteContainer.style.display = "none";
  menuContainer.style.display = "block"
}
