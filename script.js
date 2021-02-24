window.addEventListener("load", () => {
  let button = document.getElementById("confirmButton")
  button.addEventListener("click", () => {
    window.confirm("did you click me?")
  })
})