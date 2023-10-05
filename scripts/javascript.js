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


});//fin de listener