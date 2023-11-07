<script>
import BoolCard from './BoolCard.vue';
import productsJson from '../db.json';
export default {
    name: "AppMain",
    components: {
        BoolCard
    },
    data() {
        return {
            cards: productsJson.products
        }
    }
}

</script>

<template>
    <main>
        <section class="section">
            <div class="container">
                <div class="row">
                    <BoolCard v-for="product in cards" :key="product.id" :details="product" />
                </div>

            </div>
        </section>

    </main>
</template>

<style scoped></style>