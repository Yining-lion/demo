import { getProduct } from "./product_function.js";

export function renderProductInfo(){
    const productId = location.hash.substring(1);
    let product = getProduct(productId);

    let html = " ";
    html += `
        <div class="product_block col-md-6">
                <img class="product_image" src="${product.img}">
        </div>
        <div class="product_text col-md-6">
            <div class="product_title row">
                <div class="product_name col-md-8">${product.name}</div>
                <div class="product_price_area col-md-4">
                    <div class="origin_price">${product.origin_price ? product.origin_price : ""}</div>
                    <span class="NT">NT$</span>
                    <span class="discount_price">${product.discount_price}</span>
                </div>
            </div>
            <div class="add_cart">
                <label class="num_text">數量</label>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="minus btn btn-outline-secondary">-</button>
                    <input class="buy_count" maxlength="2" value="1">
                    <button type="button" class="plus btn btn-outline-secondary">+</button>
                </div>
                <button data-product-id="${product.id}" class="add_cart_text">加入購物車</button>
            </div>
        </div>
        `
    document.querySelector(".product_info").innerHTML = html;
};


