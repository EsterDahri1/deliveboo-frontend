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


            costumer: '',
            costumerAddress: '',
            phoneNumber: '',
            email: '',
            restaurant_id: store.cart[0].restaurant_id,
            products_name: [],
            products_quantity: [],

        }
    },
    methods: {

        async dataSend() {
            let result = await axios.post('http://localhost:8000/api/payment', {
                costumer: this.costumer,
                costumerAddress: this.costumerAddress,
                phoneNumber: this.phoneNumber,
                email: this.email,
                restaurant_id: this.restaurant_id,
                totalPrice: this.amount,
                products_name: this.products_name.toString(' '),
                products_quantity: this.products_quantity.toString(' ')
            })
            console.warn(result)
        },



        getClientToken() {
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
                    this.submitForm()
                })
                    .catch(err => {
                        console.error(err);
                        this.error = err.message;
                    })
            }
        },

        submitForm() {
            // console.log(this.data);
            this.dataSend()

            let data = JSON.stringify({
                "token": "fake-valid-nonce",
                "amount": this.amount,
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:8000/api/orders',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {

        store.cart.forEach(product => {
            this.products_name.push(product.name)
        })

        store.cart.forEach(quantity => {
            this.products_quantity.push(quantity.quantity
)
        })

        console.log(this.products_quantity);

        // store.cart.forEach(product => {
        //     console.log(product.name);
        // })
        // console.log(store.cart.forEach(product => {

        // }));

        // this.inviaDati()

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
                        <div class="form-group">
                            <label for="costumer">Nome</label>
                            <input type="text" id="costumer" v-model="costumer" class="form-control"
                                placeholder="Inserisci il tuo nome">
                        </div>
                        <div class="form-group">
                            <label for="costumerAddress">Indirizzo</label>
                            <input type="text" id="costumerAddress" v-model="costumerAddress" class="form-control"
                                placeholder="Inserisci il tuo indirizzo">
                        </div>
                        <div class="form-group">
                            <label for="phoneNumber">Numero di telefono</label>
                            <input type="tel" id="phoneNumber" v-model="phoneNumber" class="form-control"
                                placeholder="Inserisci il tuo numero di telefono">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="email" class="form-control"
                                placeholder="Inserisci la tua email">
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