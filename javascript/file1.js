// Function Delete
function fDelete(){
    document.getElementById("myForm").reset();
    var textoTotal = document.getElementById("total");
    textoTotal.innerHTML = "Total a Pagar: $ ";
}

// Function Calculate
function fBuy(){
    var entradas = document.getElementById("cantidad").value;
    var total = entradas * 200;
    var lista = document.getElementById("opciones");
    var valorSeleccionado = lista.options[lista.selectedIndex].value;
    var resultado = document.getElementById("total");
    if (valorSeleccionado == "estudiante"){
        total -= total * 0.80;
        resultado.innerHTML = "Total a Pagar: $ " + total;
    }else if (valorSeleccionado == "trainee"){
        total -= total * 0.50;
        resultado.innerHTML = "Total a Pagar: $ " + total;
    }else if (valorSeleccionado == "junior"){
        total -= total * 0.15;
        resultado.innerHTML = "Total a Pagar: $ " + total;
    }else if (valorSeleccionado == "otro"){
        resultado.innerHTML = "Total a Pagar: $ " + total;
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
