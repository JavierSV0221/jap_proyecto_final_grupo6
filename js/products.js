async function fetchProductsByCatID(id) {
    const jsonData = await getJSONData(PRODUCTS_URL + id + EXT_TYPE);
    if (jsonData.status === "error") {
        console.error("fetchProductsByCatID() - error: ", jsonData.data);
        return null;
    }
    return jsonData?.data?.products ?? [];
}

async function fetchCategoryByID(id) {
    const jsonData = await getJSONData(CATEGORIES_URL);
    if (jsonData.status === "error") {
        console.error("fetchCategoryByID() - error: ", jsonData.data);
        return null;
    }
    return jsonData?.data?.find(cat => cat.id === parseInt(id)) ?? null;
}

async function displayProducts() {
    try {
        const container = document.getElementById("products");
        container.innerHTML = "";

        const catID = localStorage.getItem("catID");
        if (!catID) {
            console.error("displayProducts() - error: no category ID found");
            document.getElementById("category").textContent = "Categoría no encontrada";
            document.getElementById("categoryDescription").textContent = ""
            return;
        }

        const category = await fetchCategoryByID(catID);
        if (!category) {
            document.getElementById("category").textContent = "Categoría no encontrada";
            document.getElementById("categoryDescription").textContent = ""
            return;
        }

        document.getElementById("category").textContent = category.name;
        document.getElementById("categoryDescription").textContent = category.description;

        const products = await fetchProductsByCatID(catID);
        if (products === null) {
            console.error("displayProducts() - error: no products found for category ID", catID);
            let msg = document.createElement("p");
            msg.textContent = "Error al cargar los productos de la categoría.";
            container.appendChild(msg);
            return;
        }

        if (products.length === 0) {
            let msg = document.createElement("p");
            msg.textContent = "No se encontraron productos para esta categoría.";
            container.appendChild(msg);
            return;
        }

        products.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";

            const name = product.name ?? "";
            const image = product.image ?? "";
            const description = product.description ?? "";
            const cost = product.cost ?? 0;
            const currency = product.currency ?? "$";
            const soldCount = product.soldCount ?? 0;

            const imgElement = document.createElement("img");
            imgElement.src = image;
            imgElement.alt = name;

            const productInfoDiv = document.createElement("div");
            productInfoDiv.className = "product-info";

            const nameElement = document.createElement("h4");
            nameElement.textContent = name;

            const descElement = document.createElement("p");
            descElement.textContent = description;

            const costElement = document.createElement("p");
            costElement.textContent = `${currency} ${cost}`;

            const soldCountElement = document.createElement("span");
            soldCountElement.textContent = `${soldCount} ${(soldCount === 1) ? ' Vendido' : ' Vendidos'}`;

            const nameDescriptionInfoDiv = document.createElement("div");
            nameDescriptionInfoDiv.className = "product-name-description";

            const soldPriceInfoDiv = document.createElement("div");
            soldPriceInfoDiv.className = "product-sold-price";

            nameDescriptionInfoDiv.appendChild(nameElement);
            nameDescriptionInfoDiv.appendChild(descElement);
            soldPriceInfoDiv.appendChild(soldCountElement);
            soldPriceInfoDiv.appendChild(costElement);

            productInfoDiv.appendChild(nameDescriptionInfoDiv);
            productInfoDiv.appendChild(soldPriceInfoDiv);

            productDiv.appendChild(imgElement);
            productDiv.appendChild(productInfoDiv);

            container.appendChild(productDiv);
        });
    } catch (error) {
        console.error("displayProducts() - error: ", error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await displayProducts();
});


// CAMBIAR ENTRE MODO LISTA Y GRID
const checkbox = document.getElementById('list-grid');
const icon = document.getElementById('icon-list-grid');
const products = document.getElementById('products');

function updateIcon() {
    products.classList.remove('list-view');
    products.classList.remove('grid-view');

    products.classList.add(checkbox.checked ? 'list-view' : 'grid-view');

    icon.textContent = checkbox.checked ? 'grid_view' : 'view_list';
}

checkbox.addEventListener('change', updateIcon);

updateIcon();
