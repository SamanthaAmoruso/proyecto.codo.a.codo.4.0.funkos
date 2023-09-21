document.addEventListener("DOMContentLoaded", function() 
{
  const nombrePattern = /^[a-zA-ZñÑ ]+$/;
  const correoPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const telefonoPattern = /^\d{10}$/;

  let form = document.getElementById("miFormulario");
  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");
  const telefonoInput = document.getElementById("telefono");
  const correoInput = document.getElementById("correo");
  const terminosInput = document.getElementById("terminos");
  const textoInput = document.getElementById("texto");

  form.addEventListener("submit", function(event) 
  {
    event.preventDefault();

      const nombre = nombreInput.value.trim();
      const apellido = apellidoInput.value.trim();
      const correo = correoInput.value.trim();
      const telefono = telefonoInput.value.trim();
      const texto = textoInput.value.trim();

      if (nombre === '') 
      {
          nombreInput.classList.add("error");

          setTimeout(() => {
            nombreInput.classList.toggle("error");
            nombreInput.value = '';
          }, 1000);
        
          nombreInput.setCustomValidity("Debe rellenar el campo nombre");
      } else {
          nombreInput.classList.remove("error");
          nombreInput.setCustomValidity('');
      }

      if (apellido === '') 
      {
          apellidoInput.classList.add("error");

          setTimeout(() => {
            apellidoInput.classList.toggle("error");
            apellidoInput.value = '';
          }, 1000);

          apellidoInput.setCustomValidity("Debe rellenar el campo apellido");
      } else {
          apellidoInput.classList.remove("error");
          apellidoInput.setCustomValidity('');
      }

      if (correo === '') 
      {
          correoInput.classList.add("error");

          setTimeout(() => {
            correoInput.classList.toggle("error");
            correoInput.value = '';
          }, 1000);

          correoInput.setCustomValidity("Debe rellenar el campo correo");
      } else {
          correoInput.classList.remove("error");
          correoInput.setCustomValidity('');
      }

      if (telefono === '') 
      {
          telefonoInput.classList.add("error");
          
          setTimeout(() => {
            telefonoInput.classList.toggle("error");
            telefonoInput.value = '';
          }, 1000);

          telefonoInput.setCustomValidity("Debe rellenar el campo telefono");
      } else {
          telefonoInput.classList.remove("error");
          telefonoInput.setCustomValidity('');
      }

      if (texto === '') 
      {
          textoInput.classList.add("error");

          setTimeout(() => {
            textoInput.classList.toggle("error");
            textoInput.value = '';
          }, 1000);
        
          textoInput.setCustomValidity("Debe rellenar el campo de consultas");
      } else {
          textoInput.classList.remove("error");
          textoInput.setCustomValidity('');
      }

      if (terminosInput.checked === false) 
      {
        terminosInput.classList.add("error");

        setTimeout(() => {
          terminosInput.classList.toggle("error");
          terminosInput.value = '';
        }, 1000);

        terminosInput.setCustomValidity("Debe marcar la casilla para enviar el formulario");
      } else {
          terminosInput.classList.remove("error");
          terminosInput.setCustomValidity('');
      }

      if (nombre === '' || apellido === '' || correo === '' || telefono === '' || texto === ''|| terminosInput.checked === false)  
      {
        return false; // Evita la recarga de la página     

      } else {
        event.preventDefault();

        correoInput.classList.remove("error");
        apellidoInput.classList.remove("error");
        nombreInput.classList.remove("error");
        telefonoInput.classList.remove("error");
        terminosInput.classList.remove("error");
        textoInput.classList.remove("error");

        nombreInput.setCustomValidity("");
        apellidoInput.setCustomValidity("");
        correoInput.setCustomValidity("");
        telefonoInput.setCustomValidity("");
        terminosInput.setCustomValidity("");
        textoInput.setCustomValidity("");

        alert("El formulario se envió correctamente");
        window.location.href = "../index.html";
      }//fin else

      if (!nombrePattern.test(nombre)) 
      {
          nombreInput.classList.add("error");
          nombreInput.setCustomValidity("El nombre no es válido");
      } else if (nombre.length < 3) 
      {
          nombreInput.classList.add("error");
          nombreInput.setCustomValidity("El nombre debe tener al menos 3 letras");
      }

      if (!nombrePattern.test(apellido)) 
      {
          apellidoInput.classList.add("error");
          apellidoInput.setCustomValidity("El apellido no es válido");
      } else if (apellido.length < 3) 
      {
          apellidoInput.classList.add("error");
          apellidoInput.setCustomValidity("El apellido debe tener al menos 3 letras");
      }

      if (!correoPattern.test(correo)) 
      {
          correoInput.classList.add("error");
          correoInput.setCustomValidity("El correo no es válido");
      }

      if (!telefonoPattern.test(telefono)) 
      {
          telefonoInput.classList.add("error");
          telefonoInput.setCustomValidity("El telefono lleva solo numeros");
      }else if (telefono.length < 10 || telefono.length > 10)
      {
        telefonoInput.classList.add("error");
        telefonoInput.setCustomValidity("El telefono arranca en 11 y le siguen 8 digitos sin espacios");
      }

      if (!telefonoPattern.test(texto) && !nombrePattern.test(texto)) 
      {
          nombreInput.classList.add("error");
          nombreInput.setCustomValidity("Debe escribir algo valido");
      } else if (nombre.length < 3) 
      {
          nombreInput.classList.add("error");
          nombreInput.setCustomValidity("Minimo debe haber 3 letras");
      }

      if (terminosInput === '') 
      {
        //terminosInput.classList.add("error");
        terminosInput.setCustomValidity("Debe marcar la casilla para enviar el formulario");
      }


}); // fin funcion formulario

  
  nombreInput.addEventListener("input", function(event) 
  {
    const nombre = nombreInput.value.trim();

    if (!nombrePattern.test(nombre)) 
    {
      nombreInput.classList.add("error");
      nombreInput.setCustomValidity("El nombre no es válido");
    } else if (nombre.length < 3) 
    {
      nombreInput.classList.add("error");
      nombreInput.setCustomValidity("El nombre debe tener al menos 3 letras");
    } else {
      nombreInput.classList.remove("error");
      nombreInput.setCustomValidity('');
    }
  });

  apellidoInput.addEventListener("input", function(event) 
  {
    const apellido = apellidoInput.value.trim();

    if (!nombrePattern.test(apellido)) 
    {
      apellidoInput.classList.add("error");
      apellidoInput.setCustomValidity("El apellido no es válido");
    } else if (apellido.length < 3) 
    {
      apellidoInput.classList.add("error");
      apellidoInput.setCustomValidity("El apellido debe tener al menos 3 letras");
    } else 
    {
      apellidoInput.classList.remove("error");
      apellidoInput.setCustomValidity('');
    }
  });

  correoInput.addEventListener("input", function(event) 
  {
      const correo = correoInput.value.trim();

      if (!correoPattern.test(correo)) 
      {
          correoInput.classList.add("error");
          correoInput.setCustomValidity("El correo no es válido");
      } else 
      {
          correoInput.classList.remove("error");
          correoInput.setCustomValidity('');
      }
  });

  telefonoInput.addEventListener("input", function(event) 
  {
    const telefono = telefonoInput.value.trim();

    if (nombrePattern.test(telefono)) 
    {
      telefonoInput.classList.add("error");
      telefonoInput.setCustomValidity("El telefono no es válido, solo numeros");
    } else if (telefono.length < 10 || telefono.length > 10)
    {
      telefonoInput.classList.add("error");
      telefonoInput.setCustomValidity("El telefono debe empezar con el prefijo 11 y 8 digitos despues sin espacios");
    } else {
      telefonoInput.classList.remove("error");
      telefonoInput.setCustomValidity('');
    }
  });

  textoInput.addEventListener("input", function(event) 
  {
    const texto = textoInput.value.trim();

    if (!nombrePattern.test(texto)) 
    {
      textoInput.classList.add("error");
      textoInput.setCustomValidity("El texto no es válido");
    } else if (texto.length < 3) 
    {
      textoInput.classList.add("error");
      textoInput.setCustomValidity("El texto debe tener al menos 3 letras");
    } else {
      textoInput.classList.remove("error");
      textoInput.setCustomValidity('');
    }
  });

  terminosInput.addEventListener("input", function(event)
  {
    if (!terminosInput.checked) 
    {
      //terminosInput.classList.add("error");
      terminosInput.setCustomValidity("Debe marcar la casilla para enviar el formulario");
    } else{
      //terminosInput.classList.remove("error");
      terminosInput.setCustomValidity('');
    }

  });


});//fin funcion dom

function arrepentirse() 
{
  alert("Usted volvera a la pagina principal sin enviar nada");
  window.location.href = "../index.html";
}

const checkbox = document.getElementById('terminos');
const label = document.querySelector('.puntitos label');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    label.style.textIndent = '0';
  } else {
    label.style.textIndent = '35px';
  }
});