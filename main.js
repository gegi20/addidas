const btn1 = document.querySelector(".addtocart")

const blue = document.querySelector(".blue")
const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const blueBotas = document.querySelector(".bluebotas")
const yellowBotas = document.querySelector(".yellowbotas")
const pinkBotas = document.querySelector(".pinkbotas")


blue.addEventListener("click", () => {
    blueBotas.style.opacity = "1"
    pinkBotas.style.opacity = "0"
    yellowBotas.style.opacity = "0"

 blue.style.outline = "2px solid blue"
    blue.style.outlineOffset = "2px"

      yellow.style.outline = "none"
    yellow.style.outlineOffset = "none"

    red.style.outline = "none"
   red.style.outlineOffset = "none"
})

red.addEventListener("click", () => {
    blueBotas.style.opacity = "0"
    pinkBotas.style.opacity = "1"
    yellowBotas.style.opacity = "0"

     red.style.outline = "2px solid red"
    red.style.outlineOffset = "2px"

        yellow.style.outline = "none"
    yellow.style.outlineOffset = "none"

     blue.style.outline = "none"
    blue.style.outlineOffset = "none"

})

yellow.addEventListener("click", () => {
    blueBotas.style.opacity = "0"
    pinkBotas.style.opacity = "0"
    yellowBotas.style.opacity = "1"
    yellow.style.outline = "2px solid rgb(216, 216, 51)"
    yellow.style.outlineOffset = "2px"

red.style.outline = "none"
   red.style.outlineOffset = "none"

 blue.style.outline = "none"
    blue.style.outlineOffset = "none"
  

})