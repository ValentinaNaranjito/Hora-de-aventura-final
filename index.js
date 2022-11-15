
    
const tanda1 = document.getElementById("tanda1");
const tanda2 = document.getElementById("tanda2");

let divtanda1 = document.createElement("div")
divtanda1.className = "tanda1"

let divtanda2 = document.createElement("div")
divtanda2.className = "tanda2"

cards.forEach((card, index) => {
if (index<3) {
    divtanda1.innerHTML+=`<a href="personaje.html?id=${card.id}"> <div class="reborde1"> <img src=${card.image} height="198px" width="325px"></div> </a>`
    tanda1.appendChild(divtanda1)
}
else{
    divtanda2.innerHTML+=`<a href="personaje.html?id=${card.id}"> <div class="reborde1"> <img src=${card.image} height="198px" width="325px"></div> </a>`
    tanda2.appendChild(divtanda2)
}
})