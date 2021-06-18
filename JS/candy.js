
const validar = () => {
        let user = document.getElementById("UsuarioLogin").value
        let pass = document.getElementById("PassLogin").value
        if (user == 'admin') {
                var win = window.open("../Dulceria/screens/adminInicio.html", '_blank')
                win.focus()
                alert(`Bienvenido ${user}, usuario y contraseña correctos`)
        } else if (user == 'cajero'){
                var win2 = window.open("../Dulceria/screens/cajeroInicio.html", '_blank')
                win.focus()
                alert(`Bienvenido ${user}, usuario y contraseña correctos`)
        }else{
                alert(` usuario y contraseña incorrectos`)
        }
}