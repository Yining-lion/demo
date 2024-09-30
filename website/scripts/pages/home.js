import { products } from "../../data/products.js";
import { renderHeader } from "../components/header.js";
import { renderProductGrid } from "../components/product_grid.js";

renderHeader();
renderProductGrid(products);