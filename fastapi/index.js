document.addEventListener("DOMContentLoaded", function (event) {
});

function llamarAPI3() {
    const ValorRecuperado = document.getElementById("buscador").value;
    console.log(ValorRecuperado)
    fetch("http://localhost:8000/app/v1/usuarios/prueba_conexion?id=" + ValorRecuperado + "")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const tablacuerpo = document.getElementById("TABLA");
            tablacuerpo.innerHTML = "<tr>";
            data[0].forEach(usuario => {
                tablacuerpo.innerHTML += "<td>" + usuario + "</td>";
            });
            tablacuerpo.innerHTML += "</tr>";
        })
        .catch(error => console.error(error))
}

function llamarAPI1() {
    fetch('http://localhost:8000/app/v1/usuarios/prueba_conexion?id=1')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const tablacuerpo = document.getElementById("TABLA");
            tablacuerpo.innerHTML = "<tr>";
            data[0].forEach(usuario => {
                tablacuerpo.innerHTML += "<td>" + usuario + "</td>";
            });
            tablacuerpo.innerHTML += "</tr>";
        })
        .catch(error => console.error(error));
}
function llamarAPI2() {
    fetch('http://localhost:8000/app/v1/usuarios/prueba_conexion?id=4')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const tablacuerpo = document.getElementById("TABLA");
            tablacuerpo.innerHTML = "<tr>";
            data[0].forEach(usuario => {
                tablacuerpo.innerHTML += "<td>" + usuario + "</td>";
            });
            tablacuerpo.innerHTML += "</tr>";
        })
        .catch(error => console.error(error));
}
