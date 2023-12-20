import { reactive } from "vue";
// import { BraintreeGateway } from "braintree";

export const store = reactive({
    // braintree: require("braintree"),

    // gateway: new braintree.BraintreeGateway({
    //     environment: braintree.Environment.Sandbox,
    //     merchantId: "bhcnjb7v5ps4kyg2",
    //     publicKey: "n78rfbjjfj9kfy4r",
    //     privateKey: "b5608ecc38630b78349f565d1f8425f2"
    // }),
    cart: JSON.parse(localStorage.getItem("storageCart")) || [],
    totalPrice: JSON.parse(localStorage.getItem("storageTotalPrice")) || 0,
    singleCart: [],
    // me lo trasforma in json o 0
    totalItem: JSON.parse(localStorage.getItem("storageTotalItem")) || 0,

    // Salva totalItem nel localStorage
    saveTotalItemToLocalStorage() {
        localStorage.setItem("storageTotalItem", JSON.stringify(this.totalItem));
    },

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
        this.totalPrice = this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
        this.totalItem = this.cart.reduce((total, product) => total + product.quantity, 0);
        this.saveTotalPrice();
        this.saveTotalItemToLocalStorage();
    },

});
