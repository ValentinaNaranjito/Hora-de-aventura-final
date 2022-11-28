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
            fav: false,
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
        div.className = 'card'

        div.innerHTML = `<div class="card" id=${card.id}> <img src="${card.image}" alt="${card.nombre}" height="198px" width="325px"> <h3>${card.nombre}</h3></div>`
        div.addEventListener('click', () => {
            let divP = document.createElement('div')
            divP.className = 'divPBtn'
            divP.innerHTML = `<p class="descripcion">${card.description} </p>`
            let personaje = document.getElementById("personaje")
            let favButton = document.createElement('button')
            favButton.className = 'btnFav'
            favButton.innerHTML = "favorito"
            let exists;
            if (user == null || user.name == '') {
                exists = {
                    fav: false
                }
            } else {
                exists = user.favoritos.find(character => character.nombre === card.nombre)
            }

            if (exists == undefined || exists.fav == false) {
                favButton.innerHTML = "Añadir Favorito"
                favButton.addEventListener('click', (e) => {
                    if (user == null) {
                        alert('registrese primero por favor')
                    } else {
                        if (user !== undefined || user !== null || user !== '') {
                            let favUser = user.favoritos
                            card.fav = true
                            favUser.push(card)
                            user.favoritos = favUser
                            localStorage.setItem('actualUser', JSON.stringify(user))
                            let users = JSON.parse(localStorage.getItem('users'))
                            let index = users.findIndex((element, i) => {
                                if (element.correo === user.correo) {
                                    return true
                                }
                            })
                            users[index] = user;
                            localStorage.setItem('users', JSON.stringify(users))
                        }
                    }
                })

            } else {
                favButton.innerHTML = "Eliminar Favorito"
                favButton.addEventListener('click', (e) => {
                        let favUser = user.favoritos
                        let ind = favUser.findIndex((element, i) => {
                            if (element.nombre === card.nombre) {
                                return true
                            }
                        })
                        favUser.splice(ind,1);
                        user.favoritos = favUser
                        localStorage.setItem('actualUser', JSON.stringify(user))
                        let users = JSON.parse(localStorage.getItem('users'))
                        let index = users.findIndex((element, i) => {
                            if (element.correo === user.correo) {
                                return true
                            }
                        })
                        users[index] = user;
                        localStorage.setItem('users', JSON.stringify(users))
                    
                })
            }


            divP.appendChild(favButton)
            let flexCharacter = document.createElement('div')
            flexCharacter.className = 'flexCharacter'
            flexCharacter.innerHTML = `        
                <div><h1>${card.nombre}</h1><img class="imagenpersonaje" src=${card.image2} alt=""></div>
                `


            personaje.style.display = "flex"

            flexCharacter.appendChild(divP)
            personaje.appendChild(flexCharacter)
        })

        if (user === undefined || user === null || user.name === '') {
            general.appendChild(div);
        } else {

            let exists = user.favoritos.find(character => character.nombre === card.nombre)
            if (exists == undefined) {
                exists = {
                    fav: false
                }
            }
            if (exists.fav == true) {


                favorites.appendChild(div);


            }
            else {
                general.appendChild(div);
            }
        }
    })


}

fetchData();