async function fetchProductsByCatID(id) {
    const URL = `${PRODUCTS_URL}${id}.json`;
    try {
        const response = await fetch(URL);

        if (!response.ok) {
            console.error("getProductsByID() - error response: ", response);
        }

        const responseBody = await response.json();
        return responseBody.products ?? [];
    } catch (error) {
        console.error("getProductsByID() - error: ", error);
    }
}

async function displayProducts() {
    try {
        const container = document.getElementById("products");
        container.innerHTML = "";

        const catID = localStorage.getItem("catID");
        if (!catID) {
            console.error("showProducts() - error: no category ID found");
            return;
        }

        const products = await fetchProductsByCatID(catID);

        if (!products.length) {
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
            const soldCount = product.soldCount ?? 0;

            productDiv.innerHTML = `
                <img src="${image}" alt="${name}">
                <div class="product-info">
                    <h4>${name}</h4>
                    <p>${description}</p>
                    <p>Precio: $${cost}</p>
                    <span>${soldCount}</span> ${(soldCount === 1) ? 'Vendido' : 'Vendidos'}
                </div>
            `;

            container.appendChild(productDiv);
        });
    } catch (error) {
        console.error("showProducts() - error: ", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    void displayProducts();
});