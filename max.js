var list = document.getElementsByTagName("ul")
var newList = list[list.length - 1].getElementsByTagName("li")

chrome.storage.local.set({maxVal: newList[newList.length - 2].firstChild.innerText}, function() {
});
