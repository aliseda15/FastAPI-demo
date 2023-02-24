document.addEventListener("DOMContentLoaded", function (event) {
});

function llamarAPI3() {
    const ValorRecuperado = document.getElementById("buscador").value;
    console.log(ValorRecuperado)
    fetch("http://localhost:8000/app/v1/usuarios/recuperar_usuario?id=" + ValorRecuperado + "")
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
    fetch('http://localhost:8000/app/v1/usuarios/recuperar_usuario?id=1')
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
    fetch('http://localhost:8000/app/v1/usuarios/recuperar_usuario?id=4')
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

function llamarAPI4() {
    event.preventDefault()
    const ValorRecuperado1 = document.getElementById("valorNombreAña").value;
    const ValorRecuperado2 = document.getElementById("valorApellidoAña").value;
    const ValorRecuperado3 = document.getElementById("valorTrabajoAña").value;
    console.log(ValorRecuperado1, ValorRecuperado2, ValorRecuperado3);
    console.log("paso1")
    if (ValorRecuperado1, ValorRecuperado2, ValorRecuperado3 !== "") {
        fetch("/app/v1/usuarios/insertar_usuario", {
            method: "POST",
            body: JSON.stringify({ "nombre": ValorRecuperado1, "apellido": ValorRecuperado2, "trabajo": ValorRecuperado3 }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .catch(error => console.error(error))
            
    } else{
        alert("Rellena los campos antes")
    }
}
function llamarAPI5() {
    const ValorRecuperado = document.getElementById("id_Borrar").value;
    console.log(ValorRecuperado)
    fetch("http://localhost:8000/app/v1/usuarios/borrar_usuario/?id=" + ValorRecuperado + "", {
        method: "DELETE",
    })
        .then(response => response.json())
        .catch(error => console.error(error))
}

function llamarAPI6(event) {
    const id = parseInt(document.getElementById("id_Actualizar").value);
    const nombre = document.getElementById("valorNombreActu").value;
    const apellido = document.getElementById("valorApellidoActu").value;
    const trabajo = document.getElementById("valorTrabajoActu").value;
    console.log(id, nombre, apellido, trabajo)
    fetch("app/v1/usuarios/actualizar_usuario", {
        method: "PUT",
        body: JSON.stringify({ id, nombre, apellido, trabajo}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}