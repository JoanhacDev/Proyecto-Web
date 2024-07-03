// function show(e) {
//     var inputPass = document.getElementById("password");
//     var labelShow = document.getElementById("text-pass");
//     inputPass.type = e.checked? "text" : "password";
//     labelShow.textContent = e.checked? "Ocultar Contraseña" : "Mostrar Contraseña";
// }

const toogleMode = document.getElementById("toogle");
const labelToogle = document.getElementById("label-toogle");

toogleMode.addEventListener("click", (e) => {
    let checked = e.target.checked;
    document.body.classList.toggle("dark");

    checked == true 
    ? labelToogle.innerHTML = '<i class="ph ph-sun"></i>'
    : labelToogle.innerHTML = '<i class="ph ph-moon"></i>';
});