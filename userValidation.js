let user = JSON.parse (localStorage.getItem('actualUser'));

console.log(user)
let login = document.getElementById('login')
let url = document.getElementById('loginUrl')
if (user === undefined || user === null || user.name === '' ) {
    login.src = './imagenes/login.png'
    url.href = 'login.html'
    
} else {
    login.src = './imagenes/login_user.png'
    url.href = ''
    login.addEventListener('click', (e) =>{
        localStorage.setItem('actualUser',JSON.stringify({name: ''}));
    })
}