const favorites = document.getElementById("favoritos")

cards.forEach(card => {
if (card.fav == true){
    let div = document.createElement("div")
    div.className= 'card'

    div.innerHTML = `<div class="card" id=${card.id}> <img src="${card.image}" alt="Finn" height="198px" width="325px"> <h3>${card.nombre}</h3></div>`    
    div.addEventListener('click', ()=>{
        let personaje = document.getElementById("personaje")
        personaje.style.display = "flex"
        personaje.innerHTML = `        <div class="flexCharacter">
        <div><h1>${card.nombre}</h1><img class="imagenpersonaje" src=${card.image2} alt=""></div>
        <p class="descripcion">${card.description} </p></div>`
    })

    favorites.appendChild(div);
    

}

})