<script>
import BoolCard from './BoolCard.vue';
import productsJson from '../db.json';
import { store } from '../store';
export default {
    name: "AppMain",
    components: {
        BoolCard
    },
    data() {
        return {
            store: store,
        }
    }
}

</script>

<template>
    <main>
        <section class="section">
            <div class="container">
                <div class="row">
                    <BoolCard v-for="product in store.cards" :key="product.id" :details="product" />
                </div>

            </div>
        </section>

    </main>
</template>

<style scoped></style>