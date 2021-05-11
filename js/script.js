'use strict'
function ValidaNombre() {
    var nombre = document.getElementById("nombres").value;
    let mensajeNombre = document.getElementById("msjNombres");
    if (nombre.length < 3) {
        mensajeNombre.innerText = "El nombre debe de tener al menos 3 caracteres"
        mensajeNombre.classList.remove("exito");
        mensajeNombre.classList.add("error");
        return false;
    } else {
        mensajeNombre.innerText = "El nombre es correcto."
        mensajeNombre.classList.remove("error");
        mensajeNombre.classList.add("exito");
        return true;
    }
}
function ValidarApellido() {
    var apellido = document.getElementById("apellidos").value;
    let mensajeApellido = document.getElementById("msjApellidos");
    if (apellido.length < 3) {
        mensajeApellido.innerText = "El apellido debe de tener al menos 3 caracteres"
        mensajeApellido.classList.remove("exito");
        mensajeApellido.classList.add("error");
        return false;
    } else {
        mensajeApellido.innerText = "El apellido es correcto."
        mensajeApellido.classList.remove("error");
        mensajeApellido.classList.add("exito");
        return true;
    }
}

// function ValidarApellidos() {

//     let apellido = document.getElementById('apellidos').value;
//     let mensajeApellido = document.getElementsByName('msjApellidos');
//     console.log('El apellido es ' + apellido);
//     console.log('El msj es ' + mensajeApellido);

//     if (apellido.length < 3) {
//         mensajeApellido.innerText = "El apellido debe de tener al menos 3 caracteres"
//         mensajeApellido.classList.remove("exito");
//         mensajeApellido.classList.add("error");

//     } else {
//         mensajeApellido.innerText = "El apellido el correcto"
//         console.log('El mensaje de exito es ' + mensajeApellido);
//         mensajeApellido.classList.remove("error");
//         mensajeApellido.classList.add("exito");

//     }

// }

function ValidarCargo() {
    var cargo = document.getElementById('cargo').value;
    let msjCargo = document.getElementById('msjCargo');

    if (cargo === 'Ingeniero' || cargo === 'Diseñador' || cargo === 'Analista QA') {

        msjCargo.innerText = "El cargo es correcto"
        msjCargo.classList.remove("error");
        msjCargo.classList.add("exito");
        return true;
    } else {
        msjCargo.innerText = "Elija una cargo de la lista"
        msjCargo.classList.remove("exito");
        msjCargo.classList.add("error");
        return false;
    }


}

function ValidarSalario() {

    // let regex = /^([0-9]{7,12})/; 
    var salario = document.getElementById('salario').value;
    let msjSalario = document.getElementById('msjSalario');
    console.log(salario);

    if ( salario.length < 7 ) {

        msjSalario.innerHTML = "Ingrese un Salario Valido"
        msjSalario.classList.remove("exito");
        msjSalario.classList.add("error");
        return false;
    } else {
        msjSalario.innerHTML = "El Salario es valido"
        msjSalario.classList.remove("error");
        msjSalario.classList.add("exito");
        return true;
    }
}

function ValidarCuenta() {

    // let regex = /^([0-9]{11,12})/; 
    var cuenta = document.getElementById('cuenta').value;
    let msjCuenta = document.getElementById('msjCuenta');


    console.log(cuenta);
    if (cuenta.length < 11) {

        msjCuenta.innerHTML = "Ingrese un Salario Valido"
        msjCuenta.classList.remove("exito");
        msjCuenta.classList.add("error");
        return false;
    } else {
        msjCuenta.innerHTML = "El Salario es valido"
        msjCuenta.classList.remove("error");
        msjCuenta.classList.add("exito");
        return true;
    }

}


function ValidarCorreo() {

    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var correo = document.getElementById("correo").value;
    let msjCorreo = document.getElementById("msjCorreo");

    if (!regex.test(correo)) {
        msjCorreo.innerText = "Ingrese un correo valido.";
        msjCorreo.classList.remove("exito");
        msjCorreo.classList.add("error");
        return false;
    } else {
        msjCorreo.innerText = "El correo es valido.";
        msjCorreo.classList.remove("error");
        msjCorreo.classList.add("exito"); ValidarCargo()
        return true;
    }
}


function listarEmpleados() {
    // debugger;

    // var thead = document.getElementById('encabezado');
    // thead.style.display = "none"

    // var tabla = document.getElementById("listado"); //BUSCO A MI TABLA POR SU ID
    // var nuevoRegistro = tabla.insertRow(0); //CREO UNA NUEVA FILA A MI TABLA

    // var nuevaColumna = nuevoRegistro.insertCell(0);
    // var nuevoNombre = document.createTextNode("Nombre Samir");
    // nuevaColumna.appendChild(nuevoNombre);
    
    // nuevaColumna = nuevoRegistro.insertCell(1);
    // nuevoNombre = document.createTextNode("Apellido");
    // nuevaColumna.appendChild(nuevoNombre);

    // nuevaColumna = nuevoRegistro.insertCell(2);
    // nuevoNombre = document.createTextNode("Cargo");
    // nuevaColumna.appendChild(nuevoNombre);

    // nuevaColumna = nuevoRegistro.insertCell(3);
    // nuevoNombre = document.createTextNode("Salario");
    // nuevaColumna.appendChild(nuevoNombre);

    // nuevaColumna = nuevoRegistro.insertCell(4);
    // nuevoNombre = document.createTextNode("Cuenta Bancaria");
    // nuevaColumna.appendChild(nuevoNombre);

    // nuevaColumna = nuevoRegistro.insertCell(5);
    // nuevoNombre = document.createTextNode("Correo Electronico");
    // nuevaColumna.appendChild(nuevoNombre);

    console.log(empleado)

    if (empleado != '') {

        console.log("esta listando");

        for (var fila = 1; fila <= 1; fila++) {

            var tabla = document.getElementById("listado"); //BUSCO A MI TABLA POR SU ID
            var nuevoRegistro = tabla.insertRow(fila); //CREO UNA NUEVA FILA A MI TABLA
            for (var colum = 0; colum <= 5; colum++) {

                var nuevaColumna = nuevoRegistro.insertCell(colum); //CREO UNA NUEVA CELDA A MI FILA
                var nuevoNombre = document.createTextNode(empleado[colum]); //CREAR UN NUEVO TEXTO PARA MI HTML
                 nuevaColumna.appendChild(nuevoNombre); //EL TEXTO QUE REALICE LO ASIGNE A MI CELDA
    
            }


        }





    } else {
        alert('Error: No hay empleado');
        }
}


var empleado = [];  
function crearEmpleado(nombre, apellido, cargo, salario, cuenta, correo) {


     if (ValidaNombre() == true && ValidarApellido() == true && ValidarCargo() == true && ValidarSalario() == true && ValidarCuenta() == true && ValidarCorreo() == true) {

        nombre = document.getElementById('nombres').value;
        empleado.push(nombre);
        apellido = document.getElementById('apellidos').value;
        empleado.push(apellido);
        cargo = document.getElementById('cargo').value;
        empleado.push(cargo);
        salario = document.getElementById('salario').value;
        empleado.push(salario);
        cuenta = document.getElementById('cuenta').value;
        empleado.push(cuenta);
        correo = document.getElementById('correo').value;
        empleado.push(correo);

        console.log(empleado)
          alert("Se agrego empleado correctamente");
        console.log("Se agrego empleado correctamente")
        
    } else {
        alert("Varifique los datos ingresados");
    }
}


