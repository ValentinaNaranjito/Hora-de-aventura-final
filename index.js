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
            fav: true , 
            image: "imagenes/" + element.id + '.jpeg', 
            image2: "imagenes/" + element.id +'-2'+ '.jpeg', 
            image3: "imagenes/" + element.id + '.jpeg', 
             nombre: element.fullName, 
             description: element.quotes[0]
        }
        cards.push(card)
    });
    console.log(cards);

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
}
    
const tanda1 = document.getElementById("tanda1");
const tanda2 = document.getElementById("tanda2");

let divtanda1 = document.createElement("div")
divtanda1.className = "tanda1"

let divtanda2 = document.createElement("div")
divtanda2.className = "tanda2"

fetchData()