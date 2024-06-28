document.querySelectorAll(".size").forEach(productsSize => {
    productsSize.addEventListener("click", () => {
        productsSize.style = "border: 1px black solid"
        const productSize = productsSize.dataset.size;
        document.querySelector(".product_name").innerHTML = `${product.name} ( ${productSize} )`
    });
});