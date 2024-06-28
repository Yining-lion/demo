import { renderHeader } from "../components/header.js";
import { searchProduct } from "../../data/products.js";
import { renderProductGrid } from "../components/product_grid.js";

renderHeader();

const params = new URLSearchParams(location.search);
const products = searchProduct(params.get("keyWord"));
renderProductGrid(products);