/*const cards =[
    {id:"bcard", fav: true , image:"imagenes/Bmo.gif", image2:"https://i.pinimg.com/736x/5e/31/88/5e3188314a94a6538c0a77ec1ab1e9fc.jpg" , image3: "https://youtu.be/jJHxd5nt7ww", nombre: "Bmo", description: "" } , 
    {id:"jcard" , image:"imagenes/jake.jpeg", fav: true, image2:"https://i.pinimg.com/564x/66/7d/8c/667d8c5ebae19d27de846b754d8357fc.jpg", nombre: "Jake", description: "Jake es el co-protagonista de la serie Hora de Aventura. Él es un perro mágico y compañero constante de Finn que es su mejor amigo y hermano adoptivo. Jake tiene Poderes Elásticos, que le permiten estirar y manipular su cuerpo. Él es el hijo adoptivo de Joshua y Margaret, y que nació de una protuberancia que le creció a Joshua cuando la Criatura Venenosa inyectó un veneno extraño sobre él. Él tiene un hermano llamado Jermaine. Jake es un perro de 34 años con poderes mágicos, aunque no suele actuar con madurez en algunas ocasiones. Tanto él como su novia, Arcoiris, comparten la pasión por tocar la viola o violín. En Jake el Papá, tiene cinco hijos Lluvia-Cornios con ella."}, 
    {id:"fcard" , fav: true,image:"imagenes/finn.jpg" , image2:"https://i.pinimg.com/564x/2c/71/78/2c717858511bd657b92c63eac485b1b1.jpg width = 240px" , nombre: "Finn" , description : "Finn es el protagonista principal de Hora de Aventura y el mejor amigo y hermano adoptivo de Jake. Él es un joven con un gran espíritu aventurero y explorador de la Tierra de Ooo, junto a Jake, sus amigos y conocidos.Él es hijo de Martin Mertens y Minerva Campbell, y nació en las islas, pero tras una serie de hechos termino llegando a la Tierra de Ooo en donde fue adoptado por Joshua y Margaret. Durante mucho tiempo se creyó que Finn era el último humano, pero en ''Islas'' eso se erradicó por completo. Anteriormente estaba enamorado de la Dulce Princesa, pero ella no le correspondió. Luego se hace novio de la Princesa Flama, quien luego rompe con él. Actualmente sale con la Maga Cazadora."} , 
    {id:"pcard", fav: true , image:"imagenes/dulceprincesa.jpg" , image2:"https://i.pinimg.com/564x/f7/73/32/f773323fb10fa35979ecac41748a276a.jpg" , nombre: "Dulce Princesa", description: " Dulce Princesa es una de las personajes principales de Hora de Aventura y la benevolente princesa del Dulce Reino. Ella también es amiga cercana de Finn y Jake, quienes le rinden lealtad. Tiene 827 años cronológicamente, pero ella dice tener entre 18 y 19 años, siendo esta la edad que parece tener. Desde el episodio ''Amor Peligroso'', se vuelve más joven y tiene 13 años al igual que Finn, donde pasa mucho tiempo con él, pero en ''Demasiado Joven'' regresa a su edad del presente. Ha mantenido la misma edad desde hace mucho tiempo como se puede ver en el episodio ''El Pretendiente'', ya que había pretendientes que esperaron hasta 300 años para salir con ella."}, 
    {id:"pfcard", fav: false , image:"imagenes/Princesaflama.gif" , image2:"https://i.pinimg.com/564x/ab/a8/31/aba831ee4589cefd2f0cf15f9533d500.jpg" , nombre: "Princesa Flama", description: "Lorem Ipsum"} , 
    {id:"scard", fav: false , image:"imagenes/magacazadora.jpg" , nombre: "Maga Cazadora", description: "Lorem Ipsum"},
    

]*/
const cardsgeneral =[
    {id:"bcard", fav: true , image:"", image2:"https://i.pinimg.com/736x/5e/31/88/5e3188314a94a6538c0a77ec1ab1e9fc.jpg" , nombre: "Rey Helado", description: "es uno de los personajes principales de Hora de Aventura. Al principio estaba considerado como un antagonista principal, sin embargo ha desarrollado una personalidad más neutral, convirtiéndose en un anti-héroe pero con un gran carisma. Él gobernaba el Reino Helado. Él originalmente era un hombre humano llamado Simon Petrikov el cual estaba comprometido con una mujer humana Betty Grof. Sin embargo debido a la corona mágica que el compro a un trabajador al norte de Escandinavia, lo fue transformando en el Rey Helado, enloqueciendo y obteniendo poderes de controlar el hielo y la nieve. Él logro sobrevivir a la Guerra de los Champiñones y durante las secuelas de esta conocio a Marceline a quien cuido y se hizo amigo de ella. Sin embargo debido a su corona se vi obligado a dejarla." } , 
    {id:"jcard" , image:"", fav: true, image2:"https://i.pinimg.com/564x/66/7d/8c/667d8c5ebae19d27de846b754d8357fc.jpg", nombre: "Jake", description: "Jake es el co-protagonista de la serie Hora de Aventura. Él es un perro mágico y compañero constante de Finn que es su mejor amigo y hermano adoptivo. Jake tiene Poderes Elásticos, que le permiten estirar y manipular su cuerpo. Él es el hijo adoptivo de Joshua y Margaret, y que nació de una protuberancia que le creció a Joshua cuando la Criatura Venenosa inyectó un veneno extraño sobre él. Él tiene un hermano llamado Jermaine. Jake es un perro de 34 años con poderes mágicos, aunque no suele actuar con madurez en algunas ocasiones. Tanto él como su novia, Arcoiris, comparten la pasión por tocar la viola o violín. En Jake el Papá, tiene cinco hijos Lluvia-Cornios con ella."}, 
    {id:"fcard" , fav: true,image:"" , image2:"https://i.pinimg.com/564x/2c/71/78/2c717858511bd657b92c63eac485b1b1.jpg width = 240px" , nombre: "Finn" , description : "Finn es el protagonista principal de Hora de Aventura y el mejor amigo y hermano adoptivo de Jake. Él es un joven con un gran espíritu aventurero y explorador de la Tierra de Ooo, junto a Jake, sus amigos y conocidos.Él es hijo de Martin Mertens y Minerva Campbell, y nació en las islas, pero tras una serie de hechos termino llegando a la Tierra de Ooo en donde fue adoptado por Joshua y Margaret. Durante mucho tiempo se creyó que Finn era el último humano, pero en ''Islas'' eso se erradicó por completo. Anteriormente estaba enamorado de la Dulce Princesa, pero ella no le correspondió. Luego se hace novio de la Princesa Flama, quien luego rompe con él. Actualmente sale con la Maga Cazadora."} , 
    {id:"pcard", fav: true , image:"" , image2:"https://i.pinimg.com/564x/f7/73/32/f773323fb10fa35979ecac41748a276a.jpg" , nombre: "Dulce Princesa", description: " Dulce Princesa es una de las personajes principales de Hora de Aventura y la benevolente princesa del Dulce Reino. Ella también es amiga cercana de Finn y Jake, quienes le rinden lealtad. Tiene 827 años cronológicamente, pero ella dice tener entre 18 y 19 años, siendo esta la edad que parece tener. Desde el episodio ''Amor Peligroso'', se vuelve más joven y tiene 13 años al igual que Finn, donde pasa mucho tiempo con él, pero en ''Demasiado Joven'' regresa a su edad del presente. Ha mantenido la misma edad desde hace mucho tiempo como se puede ver en el episodio ''El Pretendiente'', ya que había pretendientes que esperaron hasta 300 años para salir con ella."}, 
    {id:"pfcard", fav: false , image:"" , image2:"https://i.pinimg.com/564x/ab/a8/31/aba831ee4589cefd2f0cf15f9533d500.jpg" , nombre: "Princesa Flama", description: "Lorem Ipsum"} , 
    

]

let users =[

]

let favoritos = [

]


/*
var cards = []
const request = new XMLHttpRequest();
request.open('GET', 'https://adventure-time-api.herokuapp.com/api/v1/characters', true);
request.onload = function(){
    const data = JSON.parse(this.response);
    data.forEach(element => {
        const card = {
            id: element.id, 
            fav: true , 
            image: element.sprite, 
            image2:element.sprite, 
            image3: element.sprite,
             nombre: element.fullName, 
             description: element.quotes[0]
        }
        cards2.push(card)
    });
    console.log(cards2);
}

request.send();
*/