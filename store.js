import { reactive } from "vue";

export const store = reactive({
    cart: JSON.parse(localStorage.getItem("storageCart")) || [],
    totalPrice: JSON.parse(localStorage.getItem("storageTotalPrice")) || 0,

    // Salva il carrello nel localStorage
    saveCartToLocalStorage() {
        localStorage.setItem("storageCart", JSON.stringify(this.cart));
        this.updateCartTotal();
    },

    // Salva il prezzo totale nel localStorage
    saveTotalPrice() {
        localStorage.setItem("storageTotalPrice", JSON.stringify(this.totalPrice));
    },

    // Aggiorna il totale del carrello e il prezzo totale
    updateCartTotal() {
        this.totalPrice = this.cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
        this.saveTotalPrice();
    },
});
