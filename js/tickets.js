/* Boton Resumen del Toatal a pagar */ 

function montoPagar () {

    event.preventDefault();    

const valor = 200;
let totalPagar = 0;

let categoria        = document.getElementById("select-tickets").value;

let nombre           = document.getElementById("input-nombre");
let divErrorNombre   = document.getElementById("msjeErrorNombre");
let apellido         = document.getElementById("input-apellido");
let divErrorApellido = document.getElementById("msjeErrorApellido");
let correo           = document.getElementById("input-correo");
let divErrorCorreo   = document.getElementById("msjeErrorCorreo");
let cantidad         = parseInt(document.getElementById("input-cantidad").value);
let divErrorCantidad = document.getElementById("input-cantidad").value;

const quitarClaseError = () => {
   let listaNodos = document.querySelectorAll(".form-control, .form-select");
   for (let i = 0; i < listaNodos.length; i++){
       listaNodos[i].classList.remove('is-invalid');
   }
   let listaNodosdiv = document.querySelectorAll(".form-control, .form-select");
   for (let i = 0; i < listaNodosdiv.length; i++){
       listaNodosdiv[i].classList.remove('presentar');
   }

}

let listaNodos = document.querySelectorAll(".presentar")

   if (nombre.value ==="") {
    nombre.classList.add("is-invalid");
    divErrorNombre.classList.add("presentar")
        nombre.focus();
        return;
    }

   if (apellido.value ==="") {
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("presentar")
            apellido.focus();
            return;
        }

   if (correo.value ==="") {
            correo.classList.add("is-invalid");
            divErrorCorreo.classList.add("presentar")
                correo.focus();
                return;
            } 

    if (cantidad.value ==="") {
            correo.classList.add("is-invalid");
            divErrorCantidad.classList.add("presentar")
                 correo.focus();
                 return;
            } 


 if (cantidad > 0 && categoria > 0 && categoria <= 4) {


        if (categoria == 1) {
            totalPagar = valor * 0.2 * cantidad;

            
        }else if (categoria == 2) {
            totalPagar = valor * 0.5 * cantidad;

                 
        }else if (categoria == 3) {
            totalPagar = valor * 0.85 * cantidad;

        
        } else if (categoria == 4) {
            totalPagar = valor * cantidad;
        }
    } 

        /* alerta personalizada de la librería SweetAlert2 
        swal.fire({
            title: 'Error!',
            text: 'Por favor escriba un campo valido',
            icon: "error",
            width: '250px'
        });*/
    
    
    document.getElementById("input-total-pagar").value='Monto total a pagar: $' + totalPagar;
}


/* Método borrar */

const borrar = () => {
    form.reset();
}