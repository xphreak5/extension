var inputValue;

chrome.storage.local.get(['inpVal'], function(result) {
  if (result.inpVal > Number(document.getElementsByTagName("ul")[document.getElementsByTagName("ul").length - 1].getElementsByTagName("li")[document.getElementsByTagName("ul")[document.getElementsByTagName("ul").length - 1].getElementsByTagName("li").length - 2].firstChild.innerText)) {
    inputValue = Number(document.getElementsByTagName("ul")[document.getElementsByTagName("ul").length - 1].getElementsByTagName("li")[document.getElementsByTagName("ul")[document.getElementsByTagName("ul").length - 1].getElementsByTagName("li").length - 2].firstChild.innerText)
    console.log(inputValue)
  } else {
    inputValue = Number(result.inpVal)
  }
});

var counter = 0

var Interval = setInterval(() => {
  var newDiv = document.getElementsByClassName("data-table-row")[1]
  if (newDiv) {
    document.getElementsByTagName("input")[1].click()
    document.getElementsByTagName("div")[60].click()
    
    var btnIndex = document.getElementsByTagName("div").length - 2
    
    document.getElementsByTagName("div")[btnIndex].click()
    
    counter++
  }
  counter === inputValue && clearInterval(Interval)
}, 100)


chrome.storage.local.set({inpVal: "1"}, function() {
  document.getElementById("container-input").value = "1"
  console.log('Value is set to ' + "1");
});