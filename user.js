document.addEventListener("DOMContentLoaded", loadUserProducts);

let userLocation = null;

function loadUserProducts() {
    getUserLocation()
        .then(location => {
            userLocation = location;
            fetch("products.json")
                .then(response => response.json())
                .then(data => displayProducts(data));
        })
        .catch(error => console.error("Error getting location:", error));
}

function searchProduct() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            let filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery) &&
                product.location.includes(userLocation)
            );

            displayProducts(filteredProducts);
        });
}

function displayProducts(products) {
    let searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    if (products.length === 0) {
        searchResults.innerHTML = "<p class='text-danger'>No matching products found nearby.</p>";
        return;
    }

    products.forEach(product => {
        searchResults.innerHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5>${product.name}</h5>
                    <p>Available at: ${product.location} (Stock: ${product.availability})</p>
                </div>
            </div>`;
    });
}
