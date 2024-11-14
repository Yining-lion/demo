import { getCartNum } from "../cart.js";

export function renderHeader(){
    let html = " ";
    html +=`
            <div class="nav_top">
                <div class="nav_search">
                    <input class="search" placeholder="SEARCH">
                    <button class="search_btn">
                        <img class="search_icon" src="images/icon/search.svg">
                </div>
                
            </div>

            <div class="nav_bottom">
                <a href="home.html">
                    <img class="logo_icon" src="https://s4.lativ.com.tw/images/logo-2011.png?26452">
                </a>
                
                <ul class="nav_menu">
                    <li data-name="女" class="menu menu_women">
                        <a class="text-decoration-none link-secondary">WOMEN</a>
                    </li>
                    <li data-name="男" class="menu menu_men">
                        <a class="text-decoration-none link-secondary">MEN</a>
                    </li>
                    <li data-name="童" class="menu menu_kids">
                        <a class="text-decoration-none link-secondary">KIDS</a>
                    </li>
                    <li data-name="Baby" class="menu menu_baby">
                        <a class="text-decoration-none link-secondary">BABY</a>
                    </li>
                </ul>

                <div class="cart">
                    <a class="cart_icon cart_num" href="checkout.html">0個商品</a>
                </div>
            </div>
    `
    document.querySelector(".navbar").innerHTML = html;

    document.querySelector(".search_btn").addEventListener("click", () => {
        const searchText = document.querySelector(".search");
        location.href = `search.html?keyWord=${searchText.value}`
    })

    document.querySelectorAll(".menu").forEach(productType => {
        productType.addEventListener("click", () => {
            const productName = productType.dataset.name;
            location.href = `navbar.html?keyWord=${productName}`
                       
        });
    });

    getCartNum();
};
