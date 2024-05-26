function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //Essa é outra forma de fazer
  //if (html.classList.contains("light")) {
  //html.classlist.remove("light")
  //} else {
  //html.classList.add("light")
  //}

  //Pegar a tag img
  const img = document.querySelector ("#profile img")

  //Substituir a imagem 
  if (html.classList.contains("light")) {
    //se tiver no light mode, usar a imagem light
    img.setAttribute("src", "./Assets/assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./Assets/assets/avatar.png")
  }
}
