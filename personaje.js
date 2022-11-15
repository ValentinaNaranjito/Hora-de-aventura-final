let cardid ;
const url = window.location.search;
const searchParas = new URLSearchParams(url);
cardid = searchParas.get("id").replace('"', "");

const actualcard = cards.find(card => card.id===cardid)
console.log (actualcard)

let personaje =document.getElementById("personaje")

personaje.innerHTML =` <div class="reborde1"> <img src=${actualcard.image2} height="198px" width="325px"> <h1>${actualcard.nombre} </h1> <p>${actualcard.description} <p> </div> `