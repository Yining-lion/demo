export const products=[
    {
        id: "women1",
        img: "images/product_images/product_image1.jpg",
        name: "莫代爾V領文字上衣-01-女",
        origin_price: 399,
        discount_price: 299,
    },
    {
        id: "women2",
        img: "images/product_images/product_image2.jpg",
        name: "悠閒生活毛圈寬長版連帽衫-20-女",
        origin_price: 650,
        discount_price: 390,
    },
    {
        id: "women3",
        img: "images/product_images/product_image3.jpg",
        name: "竹節棉口袋電繡T恤-女",
        origin_price: null,
        discount_price: 299,
    },
    {
        id: "men1",
        img: "images/product_images/product_image4.jpg",
        name: "快乾棉羅紋背心-男",
        origin_price: 190,
        discount_price: 159,
    },
    {
        id: "men2",
        img: "images/product_images/product_image5.jpg",
        name: "純棉網眼徽章polo衫-男",
        origin_price: null,
        discount_price: 399,
    },
    {
        id: "men3",
        img: "images/product_images/product_image6.jpg",
        name: "印花輕便短褲-02-男",
        origin_price: 299,
        discount_price: 266,
    },
    {
        id: "kid1",
        img: "images/product_images/product_image7.jpg",
        name: "純棉印花七分袖T恤-童",
        origin_price: 249,
        discount_price: 220,
    },
    {
        id: "kid2",
        img: "images/product_images/product_image8.jpg",
        name: "純棉網眼印花T恤(2入)-童",
        origin_price: null,
        discount_price: 249,
    },
    {
        id: "kid3",
        img: "images/product_images/product_image9.jpg",
        name: "純棉印花背心-01-童",
        origin_price: 199,
        discount_price: 168,
    },
    {
        id: "baby1",
        img: "images/product_images/product_image10.jpg",
        name: "STAR WARS系列純棉羅紋包臀衣-Baby",
        origin_price: null,
        discount_price: 188,
    },{
        id: "baby2",
        img: "images/product_images/product_image11.jpg",
        name: "嫘縈印花束口褲-Baby",
        origin_price: 249,
        discount_price: 220,
    },{
        id: "baby3",
        img: "images/product_images/product_image12.jpg",
        name: "竹節棉印花束口褲-Baby",
        origin_price: 249,
        discount_price: 199,
    },
]

export function searchProduct(searchText){
    return products.filter(product => {
        if(product.name.includes(searchText)){
            return product;
        };
    });
};