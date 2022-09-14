const init = function(){
  const inject = document.createElement("div");
  const button = document.createElement("button")

  inject.id = "button-container"
  
  button.id = "hello"
  
  button.innerHTML = "Delete"
  
  inject.appendChild(button)
  inject.innerHTML += "<br /><input type='number' id='container-input' value='1' placeholder=''/><br />";
  document.body.appendChild(inject)
}
init()


document.getElementById("hello").addEventListener("click", () => {
  const inputValue = Number(document.getElementById("container-input").value)
  let counter = 0

  //Olması Gereken
  
/*
  // const observer = new MutationObserver(function(){
  //   const newDiv = document.getElementsByClassName("data-table-row")[1]

  //   if (newDiv) {
  //     for (i = 0; i < inputValue; i++) {
  //       document.getElementsByTagName("input")[1].click()
  //       document.getElementsByTagName("div")[60].click()
    
  //       const btnIndex = document.getElementsByTagName("div").length - 2
    
  //       document.getElementsByTagName("div")[btnIndex].click()
         
  //     }
  //     observer.disconnect()
  //   }

  // })
  // observer.observe(document.querySelector("body"), { childList: true })
  
*/

  // Enayi yöntemi


  const Interval = setInterval(() => {
    const newDiv = document.getElementsByClassName("data-table-row")[1]
    if (newDiv) {
      document.getElementsByTagName("input")[1].click()
      document.getElementsByTagName("div")[60].click()
  
      const btnIndex = document.getElementsByTagName("div").length - 2
  
      document.getElementsByTagName("div")[btnIndex].click()
      
      counter++
    } else {
      console.log("Interval is active");
    }
    counter === inputValue && clearInterval(Interval)
  }, 100)

})