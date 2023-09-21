document.addEventListener("DOMContentLoaded", function () {

    const productos = [
        {
          categoria: 'STARS WARS',
          titulo: 'STORMTROOPER LIGHTSABER',
          precio: '$ 1799,99',
          promo: '3 CUOTAS SIN INTERÉS',
          imagenFront: '/assets/star-wars/trooper-1.webp',
          imagenBack: '/assets/star-wars/trooper-box.webp',
          enlace: './pages/item.html',
          nuevo: true,
        },
        {
          categoria: 'POKEMON',
          titulo: 'PIDGEOTTO',
          precio: '$ 1799,99',
          promo: '3 CUOTAS SIN INTERÉS',
          imagenFront: '/assets/pokemon/pidgeotto-1.webp',
          imagenBack: '/assets/pokemon/pidgeotto-box.webp',
          enlace: './pages/item.html',
          nuevo: true,
        },
        {
          categoria: 'HARRY POTTER',
          titulo: 'LUNA LOVEGOOD LION MASK',
          precio: '$ 1799,99',
          promo: '3 CUOTAS SIN INTERÉS',
          imagenFront: '/assets/harry-potter/luna-1.webp',
          imagenBack: '/assets/harry-potter/luna-box.webp',
          enlace: './pages/item.html',
          nuevo: true,
        },




        {
            categoria: 'STARS WARS',
            titulo: 'STORMTROOPER LIGHTSABER',
            precio: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/star-wars/trooper-1.webp',
            imagenBack: '/assets/star-wars/trooper-box.webp',
            enlace: './pages/item.html',
            nuevo: true,
          },
          {
            categoria: 'STARS WARS',
            titulo: 'STORMTROOPER LIGHTSABER',
            precio: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/star-wars/trooper-1.webp',
            imagenBack: '/assets/star-wars/trooper-box.webp',
            enlace: './pages/item.html',
            nuevo: true,
          },
          {
            categoria: 'HARRY POTTER',
            titulo: 'LUNA LOVEGOOD LION MASK',
            precio: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/harry-potter/luna-1.webp',
            imagenBack: '/assets/harry-potter/luna-box.webp',
            enlace: './pages/item.html',
            nuevo: true,
          },





          {
            categoria: 'POKEMON',
            titulo: 'PIDGEOTTO',
            precio: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/pokemon/pidgeotto-1.webp',
            imagenBack: '/assets/pokemon/pidgeotto-box.webp',
            enlace: './pages/item.html',
            nuevo: true,
          },
          {
            categoria: 'POKEMON',
            titulo: 'PIDGEOTTO',
            precio: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/pokemon/pidgeotto-1.webp',
            imagenBack: '/assets/pokemon/pidgeotto-box.webp',
            enlace: './pages/item.html',
            nuevo: true,
          },
          {
            categoria: 'HARRY POTTER',
            titulo: 'LUNA LOVEGOOD LION MASK',
            precio: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/harry-potter/luna-1.webp',
            imagenBack: '/assets/harry-potter/luna-box.webp',
            enlace: './pages/item.html',
            nuevo: true,
          }

    ];


    
  
    const carouselContainer = document.getElementById("carouselContainer");

    const carouselDiv = document.createElement("div");
    carouselDiv.id = "funkosCarousel";
    carouselDiv.className = "carousel slide";
    carouselDiv.setAttribute("data-bs-ride", "carousel");

    carouselDiv.setAttribute("data-bs-interval", "4000");

    const carouselInnerDiv = document.createElement("div");
    carouselInnerDiv.className = "carousel-inner";

    for (let i = 0; i < productos.length; i += 3) 
    {
        const carouselItemDiv = document.createElement("div");
        carouselItemDiv.className = "carousel-item";
        if (i === 0) 
        {
            carouselItemDiv.classList.add("active");
        }

        const rowDiv = document.createElement("div");
        rowDiv.className = "row";

        for (let j = i; j < i + 3 && j < productos.length; j++) 
        {
            const producto = productos[j];
            const carouselItem = document.createElement("div");
            carouselItem.className = "col-md-4"; // Col-md-4 para mostrar 3 elementos por fila

            const content = `
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

            carouselItem.innerHTML = content;
            rowDiv.appendChild(carouselItem);
        }//fin for

        carouselItemDiv.appendChild(rowDiv);
        carouselInnerDiv.appendChild(carouselItemDiv);
    }//fin for

    carouselDiv.appendChild(carouselInnerDiv);
    carouselContainer.appendChild(carouselDiv);

    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    // Obtener la instancia del carrusel de Bootstrap
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselContainer'));

    prevButton.addEventListener('click', function (e) {
        e.preventDefault(); // Evita que el enlace de la flecha retroceda
        carousel.prev();
    });

    nextButton.addEventListener('click', function (e) {
        e.preventDefault(); // Evita que el enlace de la flecha avance
        carousel.next();
    });

    //si deseas iniciar el carrusel automáticamente cuando se carga la página
    carousel.cycle();





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

    });




});