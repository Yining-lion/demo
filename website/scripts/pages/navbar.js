import { searchProduct } from "../../data/products.js";
import { renderProductGrid } from "../components/product_grid.js";

const params = new URLSearchParams(location.search)
const products = searchProduct(params.get("keyWord"));
renderProductGrid(products);
