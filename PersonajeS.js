const favorites = document.getElementById("favoritos")
const general = document.getElementById("general")

const fetchData = async () => {
    const url = 'https://adventure-time-api.herokuapp.com/api/v1/characters'
    // Get the list from the api
    const data = await fetch(url)
    // Convert to json
    const dataJson = await data.json()
    var cards = []
    dataJson.forEach(element => {
        const card = {
            id: element.id, 
            fav: false , 
            image: "imagenes/" + element.id + '.jpg', 
            image2: "imagenes/" + element.id + '.jpg', 
            image3: "imagenes/" + element.id + '.jpg', 
             nombre: element.fullName, 
             description: element.quotes[0]
        }
        cards.push(card)
    });
    cards.forEach(card => {
        let div = document.createElement("div")
            div.className= 'card'
        
            div.innerHTML = `<div class="card" id=${card.id}> <img src="${card.image}" alt="${card.nombre}" height="198px" width="325px"> <h3>${card.nombre}</h3></div>`    
            div.addEventListener('click', ()=>{
                let personaje = document.getElementById("personaje")
                personaje.style.display = "flex"
                personaje.innerHTML = `        <div class="flexCharacter">
                <div><h1>${card.nombre}</h1><img class="imagenpersonaje" src=${card.image2} alt=""></div>
                <p class="descripcion">${card.description} </p></div>`
            })
        if (card.fav == true){
            
        
            favorites.appendChild(div);
            
        
        }
        else{
            general.appendChild(div);
        }
        
        })

    
}

    fetchData ();