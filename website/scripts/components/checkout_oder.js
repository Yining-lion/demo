import { cart, deleteFromCart, minusCartNum, plusCartNum, getCartNum } from "../cart.js";
import { getProduct } from "./product_function.js";
import { renderCheckoutPrice } from "./checkout_price.js";

export function renderCheckoutOder(){
    let html = " ";
    cart.forEach(item => {
        const productId = item.id;
        let cartItem = getProduct(productId);

        html += `
        <div class="product_row js-product-${cartItem.id}">
            <div class="product_block col-md-2">
                <img class="product_image" src="${cartItem.img}">
            </div>
            <div class="product_name col-md-5">
                <div>${cartItem.name}</div>
            </div>
            <div class="col-md-2"></div>
            <div class="amount col-md-2">
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button data-product-id=${cartItem.id} type="button" class="minus btn btn-outline-secondary">-</button>
                    <input class="buy_count" maxlength="2" value="${item.num}" readonly="value">
                    <button data-product-id=${cartItem.id} type="button" class="plus btn btn-outline-secondary">+</button>
                </div>
            </div>
            <div class="subtotal col-md-1">
                <div data-product-id=${cartItem.id} class="delete_cart_item">X</div>
                <div class="discount_price">$ ${cartItem.discount_price}</div>
                <div class="origin_price">
                ${cartItem.origin_price ? "$ " + cartItem.origin_price : ""}</div>
            </div>
        </div>
        `
    });
    document.querySelector(".shopping_top").innerHTML = html;


    document.querySelectorAll(".delete_cart_item").forEach(button => {
        button.addEventListener("click" , () => {
            const productId = button.dataset.productId;
            deleteFromCart(productId);
            document.querySelector(`.js-product-${productId}`).remove();
            renderCheckoutPrice();
            getCartNum();
        });
    });

    document.querySelectorAll(".minus").forEach(button => {
        button.addEventListener("click" , () => {
            const productId = button.dataset.productId;
            const countInput = button.nextElementSibling;
            minusCartNum(productId, countInput);
            renderCheckoutPrice();
            getCartNum();
        });
    });

    document.querySelectorAll(".plus").forEach(button => {
        button.addEventListener("click" , () => {
            const productId = button.dataset.productId;
            const countInput = button.previousElementSibling;
            plusCartNum(productId, countInput);
            renderCheckoutPrice();
            getCartNum();
        });
    });
}

let delivery_cvs = document.getElementById("delivery_cvs");
delivery_cvs.addEventListener("click" , () => {
    let delivery_price = 0;
    renderCheckoutPrice(delivery_price);
})

let delivery_home = document.getElementById("delivery_home");
delivery_home.addEventListener("click" , () => {
    let delivery_price = 60;
    renderCheckoutPrice(delivery_price);
})