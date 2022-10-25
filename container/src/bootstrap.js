import {mount as mountProds} from 'products/ProductList'
import {mount as mountCart} from 'cart/CartInfo'
mountCart(document.querySelector('#cart-info'))
mountProds(document.querySelector("#product-list-container"));
