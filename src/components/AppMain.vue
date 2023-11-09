<script>
import BoolCard from './BoolCard.vue';
// import productsJson from '../db.json';
import { store } from '../store';
import axios from "axios";

export default {
    name: "AppMain",
    components: {
        BoolCard
    },
    data() {
        return {
            store: store,
            open: false,
            selectedCard: {}
        }
    },
    methods: {

    },
    showModal(card) {
        this.selectedCard = card
        this.open = true
    },
    closeModal() {
        this.open = false
        this.selectedCard = {}
    },
    created() {
        axios.get("http://localhost:3000/products")
            .then(res => {
                // console.log(res.data)
                this.store.cards = res.data
            })
    }
}

</script>

<template>
    <main>
        <section class="section">
            <div class="container">
                <div class="row">
                    <BoolCard @show="showModal" v-for="product in store.cards" :key="product.id" :details="product" />
                </div>

            </div>
        </section>
        <div v-if="open" class="modal">
            <div class="content">
                <div>
                    <p> {{ selectedCard.brand }}</p>
                    <span @click="closeModal">&#10005;</span>
                </div>
                <div>
                    <span>
                        {{ selectedCard.name }}
                    </span>
                    <p>
                        {{ selectedCard.price }}
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.modal::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 40;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);


}
</style>