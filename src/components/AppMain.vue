<script>
import BoolCard from './BoolCard.vue';
export default {
    name: "AppMain",
    components: {
        BoolCard
    },
    data() {
        return {
        }
    }
}

</script>

<template>
    <main>
        <section class="section">
            <div class="container">
                <div class="row">
                    <BoolCard v-for="i in 3" image-one="" image-two="" />
                </div>

            </div>
        </section>

    </main>
</template>

<style scoped></style>