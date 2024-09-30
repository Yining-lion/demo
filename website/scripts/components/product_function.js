import { addToCart, getCartNum } from "../cart.js";
import { products } from "../../data/products.js";

export function renderProductFunction(){
    minusProductNum();
    plusProductNum();
    addProductToCart();
}

export function getProduct(productId){
    return products.find(product => product.id === productId);
}

function minusProductNum(){
    let button = document.querySelector(".minus")
    button.addEventListener("click" , () => {
        let countInput = button.nextElementSibling;
        let count = Number(countInput.value);
        if (count > 1){
            count --;
            countInput.value = count;
        };
    });
};

function plusProductNum(){
    let button = document.querySelector(".plus")
    button.addEventListener("click" , () => {
        let countInput = button.previousElementSibling;
        let count = Number(countInput.value);
        if (count < 99){
            count ++;
            countInput.value = count;
        };
    });
};

function addProductToCart(){
    let button = document.querySelector(".add_cart_text");
    button.addEventListener("click" , () => {
        const productId = button.dataset.productId;
        let countInput = document.querySelector(".buy_count");
        let count = Number(countInput.value);
        addToCart(productId , count);
        getCartNum();
    });
};


    


