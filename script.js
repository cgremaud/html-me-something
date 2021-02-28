window.addEventListener("load", () => {
  let button = document.getElementById("confirmButton")
  button.addEventListener("click", () => {
    window.confirm("did you click me?")
  })
  let navBarLink = document.getElementById("navBarLinks")
  navBarLink.addEventListener("mouseover", () => {
   document.getElementbyId("mainBody").innerHTML += "Howdy"
  })
})