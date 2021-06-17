let user = document.getElementById("UsuarioLogin");
let pass =document.getElementById("PassLogin")
const validar = () => {
    if(user == 'admin'){
        location.href="./screens/adminInicio.html";
        alert(`Bienvenido ${user}, usuario y/o contraseña correctos`)
    }else if(user == 'cajero'){
        location.href="./screens/cajeroInicio.html";
        alert(`Bienvenido ${user}, usuario y/o contraseña correctos`)

    }else{
        alert(`Usuario y/o Contraseña incorrectos`)
    }
}
