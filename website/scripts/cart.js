export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart){
    cart = [];
};

function updateStorage(){
    localStorage.setItem("cart" , JSON.stringify(cart));
};


export function addToCart(productId , count){
    let cartItem;
    cart.forEach(item => {
        if (item.id === productId){
            cartItem = item;
        };
        });

    if(cartItem){
        cartItem.num += count
    }else{
        cart.push({
        id: productId,
        num: count,
        });
    };
    updateStorage();
};

export function getCartNum(){
    let cartNum = 0;
    cart.forEach(item => {
        cartNum += item.num;
    });
    document.querySelector(".cart_num").innerHTML = cartNum + "個商品"
};

export function deleteFromCart(productId){
    cart = cart.filter(item => item.id !== productId);
    updateStorage();
};

export function minusCartNum(productId, countInput){
    cart.forEach(item => {
        let count = Number(countInput.value);
        if (item.id === productId){
            if (count > 0){
                count --;
                countInput.value = count;
                item.num = count;
            };
            if (count < 1){
                document.querySelector(`.js-product-${productId}`).remove();
                deleteFromCart(productId);
            };
        };
    });
    updateStorage();
};

export function plusCartNum(productId, countInput){
    cart.forEach(item => {
        let count = Number(countInput.value);
        if (item.id === productId){
            count ++;
            countInput.value = count;
            item.num = count;
        };
    });
    updateStorage();
};
