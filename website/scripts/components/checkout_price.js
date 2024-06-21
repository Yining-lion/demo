import { cart } from "../cart.js";
import { getProduct } from "./product_function.js";

export function renderCheckoutPrice(delivery_price){
    let html = " ";
    let productNum = 0;
    let productPrice = 0;
    let deliveryPrice = 0;
    let totalPrice = 0;
    cart.forEach(item => {
        const productId = item.id;
        let product = getProduct(productId);
        productNum += item.num;
        productPrice += product.discount_price * item.num;
        deliveryPrice = delivery_price;
        totalPrice = productPrice + deliveryPrice;
    });


    html += `
    <tr>
        <td class="col-md-2">共 ${productNum} 件商品</td>
        <td class="col-md-2">商品金額</td>
        <td class="col-md-1">$ ${productPrice}</td>
    </tr>
    <tr>
        <td class="col-md-2"></td>
        <td class="col-md-2">運費</td>
        <td class="col-md-1">$ ${deliveryPrice ? deliveryPrice : 0}</td>
    </tr>
    <tr class="tr_last_pay">
        <td class="col-md-2"></td>
        <td class="col-md-2">小計</td>
        <td class="td_last_pay col-md-1">$ ${totalPrice ? totalPrice : productPrice}</td>
    </tr>
    `
    document.querySelector(".total_block").innerHTML = html;
}

