<script>
import braintree from 'braintree-web';
// import paypal from 'paypal-checkout';
import { store } from '../../store';
import axios from 'axios';
export default {
    data() {
        return {
            hostedFieldInstance: false,
            nonce: "",
            error: "",
            amount: store.totalPrice,
            base_url: "http://localhost:8000",
            orders_url: '/api/orders',
            clientToken: '',

        }
    },
    methods: {
        getClientToken(){
            axios
            .get(this.base_url + this.orders_url)
            .then((response) => {
                this.clientToken = response.data.token
                console.log(this.clientToken);
            })
            .catch((err) => {
                console.error(err);
            });
        },
        payWithCreditCard() {
            if (this.hostedFieldInstance) {
                this.error = "";
                this.nonce = "";
                this.hostedFieldInstance.tokenize().then(payload => {
                    console.log(payload);
                    this.nonce = payload.nonce;
                })
                    .catch(err => {
                        console.error(err);
                        this.error = err.message;
                    })
            }
        }
    },
    mounted() {

        this.getClientToken();


        braintree.client.create({
            authorization: "sandbox_nd6bgb7z_bhcnjb7v5ps4kyg2"
        })
            .then(clientInstance => {
                let options = {
                    client: clientInstance,
                    styles: {
                        input: {
                            'font-size': '14px',
                            'font-family': 'Open Sans'
                        }
                    },
                    fields: {
                        number: {
                            selector: '#creditCardNumber',
                            placeholder: 'Inserisci il numero della carta'
                        },
                        cvv: {
                            selector: '#cvv',
                            placeholder: 'Inserisci il codice a tre cifre CVV'
                        },
                        expirationDate: {
                            selector: '#expireDate',
                            placeholder: '00 / 0000'
                        }
                    }
                }
                return Promise.all([
                    braintree.hostedFields.create(options),
                    // braintree.paypalCheckout.create({ client: clientInstance })
                ])
            })
            .then(instances => {
                const hostedFieldInstance = instances[0];
                // const paypalCheckoutInstance = instances[1];
                // Use hostedFieldInstance to send data to Braintree
                this.hostedFieldInstance = hostedFieldInstance;
                // Setup PayPal Button
                //             return paypal.Button.render({
                //                 env: 'sandbox',
                //                 style: {
                //                     label: 'paypal',
                //                     size: 'responsive',
                //                     shape: 'rect'
                //                 },
                //                 payment: () => {
                //                     return paypalCheckoutInstance.createPayment({
                //                         flow: 'checkout',
                //                         intent: 'sale',
                //                         amount: parseFloat(this.amount) > 0 ? this.amount : 10,
                //                         displayName: 'Braintree Testing',
                //                         currency: 'USD'
                //                     })
                //                 },
                //                 onAuthorize: (data, options) => {
                //                     return paypalCheckoutInstance.tokenizePayment(data).then(payload => {
                //                         console.log(payload);
                //                         this.error = "";
                //                         this.nonce = payload.nonce;
                //                     })
                //                 },
                //                 onCancel: (data) => {
                //                     console.log(data);
                //                     console.log("Payment Cancelled");
                //                 },
                //                 onError: (err) => {
                //                     console.error(err);
                //                     this.error = "An error occurred while processing the paypal payment.";
                //                 }
                //             }, '#paypalButton')
                //         })
                //         .catch(err => {
            });
    }
}
</script>

<template>
    <div id="dropin-container"></div>





    <div class="container py-5">
        <div class="col-6 offset-3">
            <div class="card bg-warning-subtle">
                <h3 class="card-header text-center">Informazioni di pagamento</h3>
                <div class="card-body">
                    <div class="alert alert-success" v-if="nonce">
                        Pagamento effettuato con successo
                    </div>
                    <div class="alert alert-danger" v-if="error">
                        {{ error }}
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="amount">prezzo</label>
                            <div class="input-group">
                                <div class="input-group-prepend"><span class="input-group-text">€</span></div>
                                <label class="form-control" type="disabledTextInput" placeholder="Inserisci il prezzo">{{
                                    amount }}</label>

                                <!-- <input type="disabledTextInput" id="amount" v-model="amount" class="form-control"
                                    placeholder="Inserisci il prezzo"> -->
                            </div>
                        </div>
                        <hr />
                        <div class="form-group">
                            <label>Numero della carta</label>
                            <div id="creditCardNumber" class="form-control"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>Data di scadenza</label>
                                    <div id="expireDate" class="form-control"></div>
                                </div>
                                <div class="col-6">
                                    <label>CVV</label>
                                    <div id="cvv" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block w-100 my-3" @click.prevent="payWithCreditCard">Paga con la
                            carta</button>
                        <hr />
                        <!-- <div id="paypalButton"></div> -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>