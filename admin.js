document.addEventListener("DOMContentLoaded", loadProducts);

function loadProducts() {
    fetch("products.json")
        .then(response => response.json())
        .then(data => displayProducts(data));
}

function displayProducts(products) {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach((product, index) => {
        productList.innerHTML += `
            <li class="list-group-item">
                ${product.name} - ${product.location} (Available: ${product.availability})
            </li>`;
    });
}

function addProduct() {
    let name = document.getElementById("productName").value;
    let location = document.getElementById("shopLocation").value;
    let availability = document.getElementById("availability").value;

    if (name && location && availability) {
        let newProduct = { name, location, availability: parseInt(availability) };

        fetch("products.json")
            .then(response => response.json())
            .then(products => {
                products.push(newProduct);
                saveProducts(products);
            });
    }
}

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(products);
}
