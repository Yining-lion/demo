export function renderProductGrid(products){
    let html = " ";
    products.forEach( product => {
        html += `
            <li class="product_block col-md-4">
                <a href="product.html#${product.id}">
                    <img class="product_image" src=${product.img}>
                </a>
                <div class="product_name">${product.name}</div>
                <div class="product_price">
                    <span class="origin_price">
                    ${product.origin_price ? "NT$" + product.origin_price : ""}
                    </span>
                    <span class="discount_price">
                    ${product.origin_price ? "活動價NT$" + product.discount_price : "NT$" + product.discount_price}
                    </span>
                </div>
            </li>
            `
    });
    
    document.querySelector(".product_list").innerHTML = html;
}
