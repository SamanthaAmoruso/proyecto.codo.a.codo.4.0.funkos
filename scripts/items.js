document.addEventListener("DOMContentLoaded", function () {

    const productos = [
        {
            categoria: "STAR WARS",
            titulo: "BABY YODA IN BOX",
            precio: "$ 5600.10",
            descripcion: "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/star-wars/baby-yoda-1.webp",
            imagenBack: "/assets/star-wars/baby-yoda-box.webp",
            enlace: "/pages/starWars.html",
            nuevo: true,
        },
        {
            
            categoria: "STAR WARS",
            titulo: "BOBBAFETH IN BOX",
            precio: "$ 4888.99",
            descripcion: "Figura coleccionable de bobbafeth - The Mandalorian Saga, edición limitada.",
            promo: "3 cuotas sin interes",
            imagenFront:"/assets/star-wars/bobbafeth-1.webp" ,
            imagenBack: "/assets/star-wars/bobbafeth-box.webp",
            enlace: "/pages/starWars.html",
            nuevo: true,
        },
        {

            categoria: "STAR WARS",
            titulo: "LUKE IN BOX",
            precio: "$ 6999.80",
            descripcion: "Figura coleccionable de luke - The Mandalorian Saga, edición limitada.",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/star-wars/luke-1.webp",
            imagenBack: "/assets/star-wars/luke-box.webp",
            enlace: "/pages/starWars.html",
            nuevo: true,
        },



        {
            categoria: 'STARS WARS',
            titulo: 'STORMTROOPER LIGHTSABER',
            precio: '$ 1799,99',
            descripcion: "Figura coleccionable de trooper - The Mandalorian Saga, edición limitada.",
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/star-wars/trooper-1.webp',
            imagenBack: '/assets/star-wars/trooper-box.webp',
            enlace: './pages/item.html',
            nuevo: true,
        },
        {
            categoria: "HARRY POTTER",
            titulo: "HARRY POTTER",
            precio: "$ 3799.99",
            descripcion: "Figura coleccionable de Harry Potter - Harry Potter",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/harry-potter/harry-1.webp",
            imagenBack: "/assets/harry-potter/harry-box.webp",
            enlace: './pages/item.html',
            nuevo: true,
        },
        {
            categoria: "HARRY POTTER",
            titulo: "LUNA LOVEGOOD LION MASK",
            precio: "$ 3920.99",
            descripcion: "Figura coleccionable del Luna Lovegood - Harry Potter",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/harry-potter/luna-1.webp",
            imagenBack: "/assets/harry-potter/luna-box.webp",
            enlace: './pages/item.html',
            nuevo: true,

        },




        {
            categoria: "HARRY POTTER",
            titulo: "HERMIONE GRANGER",
            precio: "$ 3920.99",
            descripcion: "Figura coleccionable del Hermione Granger- Harry Potter",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/harry-potter/hermione-1.webp",
            imagenBack: "/assets/harry-potter/hermione-box.webp",
            enlace: './pages/item.html',
            nuevo: true,
        },
        {
            categoria: "HARRY POTTER",
            titulo: "SNAPE PATRONUS BOX",
            precio: "$ 3920.99",
            descripcion: "Figura coleccionable del patronus de Spane Severus- Harry Potter",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/harry-potter/snape-patronus-1.webp",
            imagenBack: "/assets/harry-potter/snape-patronus-box.webp",
            enlace: './pages/item.html',
            nuevo: true,
        },
        {
            categoria: "POKEMON",
            titulo: "CHARMANDER",
            precio: "$ 3920.99",
            descripcion: "Figura coleccionable de Charmander - Pokemon",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/pokemon/charmander-1.webp",
            imagenBack: "/assets/pokemon/charmander-box.webp",
            enlace: './pages/item.html',
            nuevo: true,

        },




        {
            categoria: "POKEMON",
            titulo: "DRAGONITE",
            precio: "$ 1859.99",
            descripcion: "Figura coleccionable de Dragonite - Pokemon",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/pokemon/dragonite-1.webp",
            imagenBack: "/assets/pokemon/dragonite-box.webp",
            enlace: './pages/item.html',
            nuevo: true,

        },
        {
            categoria: "POKEMON",
            titulo: "VULPIX",
            precio: "$ 1859.99",
            descripcion: "Figura coleccionable de Vulpix - Pokemon",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/pokemon/vulpix-1.webp",
            imagenBack: "/assets/pokemon/vulpix-box.webp",
            enlace: './pages/item.html',
            nuevo: true,
        },
        {
            categoria: "POKEMON",
            titulo: "PIKACHU",
            precio: "$ 2039.99",
            descripcion: "Figura coleccionable de Pikachu - Pokemon",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/pokemon/pikachu-1.webp",
            imagenBack: "/assets/pokemon/pikachu-box.webp",
            enlace: './pages/item.html',
            nuevo: true,
        },
        



        {
            categoria: "POKEMON",
            titulo: "PIDGEOTTO",
            precio: "$ 2039.99",
            descripcion: "Figura coleccionable de Pidgeotto - Pokemon",
            promo: "3 cuotas sin interes",
            imagenFront: "/assets/pokemon/pidgeotto-1.webp",
            imagenBack: "/assets/pokemon/pidgeotto-box.webp",
            enlace: './pages/item.html',
            nuevo: true,
        },


        
        
    ]; // fin array de productos



    function createProductElement(producto) 
    {
        const productDiv = document.createElement("div");
        productDiv.className = "col-md-4";
        productDiv.innerHTML = `
        <div class="card">
            <span class="card-item__span">${producto.nuevo ? 'NUEVO' : ''}</span>
            <img src="${producto.imagenFront}" alt="${producto.titulo}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-item__licence">${producto.titulo}</h5>
                <p class="card-item__title">${producto.categoria}</p>
                <p class="card-item__price">${producto.precio}</p>
                <p class="card-item__promo">${producto.promo}</p>
            </div>
        </div>
        `;
    return productDiv;
    }
    
  
    const carouselContainer = document.getElementById("carouselInner");

    const carouselDiv = document.createElement("div");
    carouselDiv.id = "carouselExample";
    carouselDiv.className = "carousel slide";
    carouselDiv.setAttribute("data-bs-ride", "carousel");
  
    const carouselInnerDiv = document.createElement("div");
    carouselInnerDiv.className = "carousel-inner";
  
    for (let i = 0; i < productos.length; i += 3) {
      const carouselItemDiv = document.createElement("div");
      carouselItemDiv.className = "carousel-item";
      if (i === 0) {
        carouselItemDiv.classList.add("active");
      }
  
      const rowDiv = document.createElement("div");
      rowDiv.className = "row";
  
      for (let j = i; j < i + 3 && j < productos.length; j++) {
        const productElement = createProductElement(productos[j]);
        rowDiv.appendChild(productElement);
      }
  
      carouselItemDiv.appendChild(rowDiv);
      carouselInnerDiv.appendChild(carouselItemDiv);
    }
  
    carouselDiv.appendChild(carouselInnerDiv);
    carouselContainer.appendChild(carouselDiv);
  
  
    const cardImages = document.querySelectorAll(".card-img-top");
  
    cardImages.forEach((image) => 
    {
        image.addEventListener("mouseover", function () 
        {
            const index = Array.from(cardImages).indexOf(image);
  
            const imagenBack = new Image();
            imagenBack.src = productos[index].imagenBack;
  
            imagenBack.onload = function () 
            {
            image.src = imagenBack.src;
            };
        
        image.style.transform = "scaleX(1)";
        });
  
        image.addEventListener("mouseout", function () 
        {
            const index = Array.from(cardImages).indexOf(image);
            image.src = productos[index].imagenFront;
            image.style.transform = "none";
        });
    });// fin de carditems


    



    // al hacer click muestra su valor pisando el viejo
     const carruselElements = carouselContainer.querySelectorAll('.col-md-4');
     carruselElements.forEach((elemento, index) => 
     {
         elemento.addEventListener('click', () => {
             const producto = productos[index];
             actualizarContenidoProducto(producto);
         });
     });




    function actualizarContenidoProducto(producto) {
        const cardItemLicence = document.querySelector('.card-item__licence--item-page');
        const cardItemTitle = document.querySelector('.card-item__title--item-page');
        const collectionText = document.querySelector('.collection__text');
        const cardItemPrice = document.querySelector('.card-item__price--item-page');
        const collectionCoverImg = document.querySelector('.collection__cover img');

        cardItemLicence.textContent = producto.categoria;
        cardItemTitle.textContent = producto.titulo;
        collectionText.textContent = producto.descripcion;
        cardItemPrice.textContent = producto.precio;
        collectionCoverImg.src = producto.imagenFront;
    }
});





/* esto hace q funcione la suma y resta de productos*/
document.addEventListener("DOMContentLoaded", function () 
{
    const minusButton = document.querySelector("#menos_producto");
    const plusButton = document.querySelector("#mas_producto");
    const cantidadInput = document.querySelector("#cantidad");

    minusButton.addEventListener("click", function () 
    {
        const currentValue = parseInt(cantidadInput.value);
        if (currentValue > 0) 
        {
            cantidadInput.value = currentValue - 1;
        }
    });

    plusButton.addEventListener("click", function () 
    {
        const currentValue = parseInt(cantidadInput.value);
        cantidadInput.value = currentValue + 1;
    });
});