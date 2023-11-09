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
        }
    },
    methods: {

    },
    showModal() {
        
    }
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

    </main>
</template>

<style scoped></style>