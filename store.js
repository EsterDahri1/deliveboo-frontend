import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
    cart: [],
    totalCartQuantity: 0,
    savedCart: localStorage.getItem("storageCart"),
    savedTotal: localStorage.getItem("storageTotalPrice"),
    totalPrice: 0,
    saveCartToLocalStorage() {
        localStorage.setItem("storageCart", JSON.stringify(this.cart));

        
        this.updateCartTotal()
    },
    saveTotalPrice() {
        localStorage.setItem("storageTotalPrice", JSON.stringify(this.totalPrice));
    },

    updateCartTotal() {
        this.totalCartQuantity = 0;
        this.cart.forEach(product => {
            this.totalCartQuantity += product.quantity
        });
    },
});