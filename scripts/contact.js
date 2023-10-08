document.addEventListener("DOMContentLoaded", function() 
{
  const nombrePattern = /^[a-zA-ZñÑ ]{3,}$/;
  const correoPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const telefonoPattern = /^11\d{8}$/;

  const form = document.getElementById("miFormulario");
  const inputs = 
  {
      nombre: document.getElementById("nombre"),
      apellido: document.getElementById("apellido"),
      telefono: document.getElementById("telefono"),
      correo: document.getElementById("correo"),
      terminos: document.getElementById("terminos"),
      texto: document.getElementById("texto")
  };

  form.addEventListener("submit", function(event) 
  {
      event.preventDefault();

      for (const key in inputs) 
      {
          const input = inputs[key];
          const value = input.value.trim();

          if (value === '') 
          {
              input.classList.add("error");
              input.setCustomValidity(`Debe rellenar el campo ${key}`);
          } 

          else if (key === 'telefono' && !telefonoPattern.test(value)) 
          {
              input.classList.add("error");
              input.setCustomValidity("El telefono debe empezar con el prefijo 11 y 8 digitos después sin espacios");
          } 
          
          else if (key === 'nombre' && (!nombrePattern.test(value) || value.length < 3)) 
          {
              input.classList.add("error");
              input.setCustomValidity(`El ${key} no es válido o debe tener al menos 3 letras`);
          } 
          
          else if (key === 'apellido' && (!nombrePattern.test(value) || value.length < 3)) 
          {
              input.classList.add("error");
              input.setCustomValidity(`El ${key} no es válido o debe tener al menos 3 letras`);
          } 
          
          else if (key === 'correo' && !correoPattern.test(value)) 
          {
              input.classList.add("error");
              input.setCustomValidity(`El ${key} no es válido`);
            
          } else {
              input.classList.remove("error");
              input.setCustomValidity('');
          } 
      }//fin form

      if (!inputs.terminos.checked) 
      {
          inputs.terminos.setCustomValidity("Debe marcar la casilla para enviar el formulario");
      }

      const hasErrors = Object.values(inputs).some(input => input.classList.contains("error"));
      if (!hasErrors) 
      {
          alert("El formulario se envió correctamente");
          window.location.href = "../index.html";
      }

  }); //FIN FORM

  for (const key in inputs) 
  {
      const input = inputs[key];
      input.addEventListener("input", function(event) 
      {
          const value = input.value.trim();

          if (key === 'nombre' && (!nombrePattern.test(value) || value.length < 3)) {
              input.classList.add("error");
              input.setCustomValidity(`El ${key} no es válido o debe tener al menos 3 letras`);
          } 

          else if (key === 'apellido' && (!nombrePattern.test(value) || value.length < 3)) 
          {
            input.classList.add("error");
            input.setCustomValidity(`El ${key} no es válido o debe tener al menos 3 letras`);
          } 
          
          else if (key === 'telefono' && !telefonoPattern.test(value)) 
          {
              input.classList.add("error");
              input.setCustomValidity("El telefono debe empezar con el prefijo 11 y 8 digitos después sin espacios");
          }
          else if (key === 'correo' && !correoPattern.test(value)) 
          {
              input.classList.add("error");
              correoInput.setCustomValidity("El correo no es válido");
          }
          else if (key === 'texto' && (!nombrePattern.test(value) || value.length < 3)) 
          {
            input.classList.add("error");
            input.setCustomValidity(`El ${key} no es válido o debe tener al menos 3 letras`);
          } else {
              input.classList.remove("error");
              input.setCustomValidity('');
          }
      }); //fin listener

  }//fin for

}); //fin dom

function arrepentirse() 
{
  alert("Usted volvera a la pagina principal sin enviar nada");
  window.location.href = "../index.html";
}