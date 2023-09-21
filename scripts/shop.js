document.addEventListener("DOMContentLoaded", function () {

    const cardData = [
        {
            category: 'STARS WARS',
            title: 'STORMTROOPER LIGHTSABER',
            price: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/star-wars/trooper-1.webp',
            imagenBack: '/assets/star-wars/trooper-box.webp',
            enlace: './items.html',
            nuevo: true,
        },
        {
            category: 'POKEMON',
            title: 'PIDGEOTTO',
            price: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/pokemon/pidgeotto-1.webp',
            imagenBack: '/assets/pokemon/pidgeotto-box.webp',
            enlace: './items.html',
            nuevo: true,
        },
        {
            category: 'HARRY POTTER',
            title: 'LUNA LOVEGOOD LION MASK',
            price: '$ 1799,99',
            promo: '3 CUOTAS SIN INTERÉS',
            imagenFront: '/assets/harry-potter/luna-1.webp',
            imagenBack: '/assets/harry-potter/luna-box.webp',
            enlace: './items.html',
            nuevo: true,
        }
    ];//fin array de funkos


    const repeatedData = Array(3).fill([...cardData]).flat();

    function createCard(data) 
    {
        const cardItem = document.createElement("li");
        cardItem.className = "slider__item";
        cardItem.style.marginBottom = "50px";

        const article = document.createElement("article");
        article.className = "card-item";

        const link = document.createElement("a");
        link.className = "card-item__link";
        link.href = data.enlace;

        const picture = document.createElement("picture");
        picture.className = "card-item__cover";

        const span = document.createElement("span");
        span.className = "card-item__span";
        span.textContent = "NUEVO";

        const imgFront = document.createElement("img");
        imgFront.className = "card-item__img--front";
        imgFront.src = data.imagenFront;
        imgFront.alt = `Figura coleccionable Funko de ${data.title}`;

        const imgBack = document.createElement("img");
        imgBack.className = "card-item__img--back";
        imgBack.src = data.imagenBack;
        imgBack.alt = `Figura coleccionable Funko de ${data.title} en caja`;

        picture.appendChild(span);
        picture.appendChild(imgFront);
        picture.appendChild(imgBack);

        const content = document.createElement("div");
        content.className = "card-item__content";

        const category = document.createElement("p");
        category.className = "card-item__licence";
        category.textContent = data.category;

        const title = document.createElement("h4");
        title.className = "card-item__title";
        title.textContent = data.title;

        const price = document.createElement("p");
        price.className = "card-item__price";
        price.textContent = data.price;

        const promo = document.createElement("p");
        promo.className = "card-item__promo";
        promo.textContent = data.promo;

        content.appendChild(category);
        content.appendChild(title);
        content.appendChild(price);
        content.appendChild(promo);

        link.appendChild(picture);
        link.appendChild(content);

        article.appendChild(link);

        cardItem.appendChild(article);

        // Agregar eventos mouseenter y mouseleave para cambiar la imagen
        cardItem.addEventListener("mouseenter", function () {
            imgFront.style.display = "none";
            imgBack.style.display = "block";
        });

        cardItem.addEventListener("mouseleave", function () {
            imgFront.style.display = "block";
            imgBack.style.display = "none";
        });

        return cardItem;

    }//fin de la funcion createCard

    const gridItems = document.querySelector(".grid__items");

    repeatedData.forEach((data) => 
    {
        const card = createCard(data);
        gridItems.appendChild(card);
    });

}); 
//fin de los funkos repetidos en el shop
















/* seccion de buscar por precio, nombre, etc */

document.addEventListener("DOMContentLoaded", function () 
{
    // Crear el contenido del aside
    const aside = document.querySelector(".aside");
    const asideContent = document.createElement("ul");
    asideContent.className = "aside__list";

    // Elemento Buscar
    const buscarLi = document.createElement("li");
    buscarLi.className = "aside__item aside__item--search";
    const buscarLabel = document.createElement("label");
    buscarLabel.htmlFor = "buscar";
    buscarLabel.className = "aside__label";
    buscarLabel.textContent = "Buscar";
    const buscarInput = document.createElement("input");
    buscarInput.type = "text";
    buscarInput.id = "buscar";
    buscarInput.name = "q";
    buscarInput.placeholder = "Item o categoría";
    buscarInput.className = "aside__input";

    buscarLi.appendChild(buscarLabel);
    buscarLi.appendChild(buscarInput);

    // Elemento Ordenar por
    const ordenarLi = document.createElement("li");
    ordenarLi.className = "aside__item aside__item--order";
    const ordenarLabel = document.createElement("label");
    ordenarLabel.htmlFor = "ordenar";
    ordenarLabel.className = "aside__label";
    ordenarLabel.textContent = "Ordenar por";
    const ordenarSelect = document.createElement("select");
    ordenarSelect.id = "ordenar";
    ordenarSelect.name = "ordenar";
    ordenarSelect.className = "aside__select";
    const ordenarOption1 = document.createElement("option");
    ordenarOption1.value = "";
    ordenarOption1.disabled = true;
    ordenarOption1.selected = true;
    ordenarOption1.hidden = true;
    ordenarOption1.textContent = "Seleccionar";
    const ordenarOption2 = document.createElement("option");
    ordenarOption2.value = "mayorAMenor";
    ordenarOption2.textContent = "Mayor a menor";
    const ordenarOption3 = document.createElement("option");
    ordenarOption3.value = "menorAMayor";
    ordenarOption3.textContent = "Menor a mayor";

    ordenarSelect.appendChild(ordenarOption1);
    ordenarSelect.appendChild(ordenarOption2);
    ordenarSelect.appendChild(ordenarOption3);

    ordenarLi.appendChild(ordenarLabel);
    ordenarLi.appendChild(ordenarSelect);


    // Elemento "Precio"
    const precioLi = document.createElement("li");
    precioLi.className = "aside__item";
    const precioLabel = document.createElement("label");
    precioLabel.className = "aside__label";
    precioLabel.textContent = "Precio";
    const precioDiv = document.createElement("div");
    precioDiv.className = "aside__item-price";
    const minPrecioLabel = document.createElement("label");
    minPrecioLabel.htmlFor = "minPrecio";
    minPrecioLabel.className = "aside__label-price";
    minPrecioLabel.textContent = "MIN";
    const minPrecioInput = document.createElement("input");
    minPrecioInput.type = "number";
    minPrecioInput.id = "minPrecio";
    minPrecioInput.name = "minPrecio";
    minPrecioInput.placeholder = "0";
    minPrecioInput.value = "0";
    minPrecioInput.min = "0";
    minPrecioInput.className = "aside__input aside__input-price";
    const maxPrecioLabel = document.createElement("label");
    maxPrecioLabel.htmlFor = "maxPrecio";
    maxPrecioLabel.className = "aside__label-price";
    maxPrecioLabel.textContent = "MAX";
    const maxPrecioInput = document.createElement("input");
    maxPrecioInput.type = "number";
    maxPrecioInput.id = "maxPrecio";
    maxPrecioInput.name = "maxPrecio";
    maxPrecioInput.placeholder = "0";
    maxPrecioInput.value = "0";
    maxPrecioInput.min = "0";
    maxPrecioInput.className = "aside__input aside__input-price";

    precioDiv.appendChild(minPrecioLabel);
    precioDiv.appendChild(minPrecioInput);
    precioDiv.appendChild(document.createTextNode(" - "));
    precioDiv.appendChild(maxPrecioLabel);
    precioDiv.appendChild(maxPrecioInput);

    precioLi.appendChild(precioLabel);
    precioLi.appendChild(precioDiv);

    // Elemento "Filtrar"
    const filtrarLi = document.createElement("li");
    filtrarLi.className = "aside__item aside__item--filter";
    const filtrarLabel = document.createElement("label");
    filtrarLabel.className = "aside__label";
    filtrarLabel.textContent = "Filtrar";
    const filtrarUl = document.createElement("ul");
    filtrarUl.className = "aside__item-filter-list";
    const filtros = [
        { id: "nuevos", name: "nuevos", label: "Nuevos" },
        { id: "ofertas", name: "ofertas", label: "Ofertas" },
        { id: "edicionEspecial", name: "edicionEspecial", label: "Edición Especial" },
        { id: "favoritos", name: "favoritos", label: "Favoritos" }
    ];

    filtros.forEach((filtro) => 
    {
        const filtroLi = document.createElement("li");
        filtroLi.className = "aside__item-filter-items";
        const filtroInput = document.createElement("input");
        filtroInput.type = "checkbox";
        filtroInput.id = filtro.id;
        filtroInput.name = filtro.name;
        filtroInput.className = "aside__checkbox";
        const filtroLabel = document.createElement("label");
        filtroLabel.htmlFor = filtro.id;
        filtroLabel.className = "aside__checkbox-label";
        filtroLabel.textContent = filtro.label;

        filtroLi.appendChild(filtroInput);
        filtroLi.appendChild(filtroLabel);
        filtrarUl.appendChild(filtroLi);
    });

    filtrarLi.appendChild(filtrarLabel);
    filtrarLi.appendChild(filtrarUl);

    // Agregar elementos al aside
    asideContent.appendChild(buscarLi);
    asideContent.appendChild(ordenarLi);
    asideContent.appendChild(precioLi);
    asideContent.appendChild(filtrarLi);
    aside.appendChild(asideContent);

    // Configurar el atributo inputMode
    minPrecioInput.setAttribute("inputMode", "numeric");
    maxPrecioInput.setAttribute("inputMode", "numeric");

});
//fin de la funcion de filtrado











