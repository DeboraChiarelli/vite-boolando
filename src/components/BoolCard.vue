<script>
export default {
    name: 'BoolCard',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="col-4">
        <div class="card">
            <figure class="card-image">
                <a href="#">
                    <img src="/img/2.webp" alt="" />
                    <img src="/img/2b.webp" class="img-top">
                </a>
                <span class="heart-icon">&hearts;</span>
                <span class="sale">-50%</span>
                <span class="sust">Sostenibilità</span>

                <section>
                    <span>Levi's</span>
                    <p><strong>RELAXED FIT TEE UNISEX</strong></p>
                    <span class="price-red">14,99€ </span>
                    <span class="price-grey">29,99</span>
                </section>
            </figure>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-image {
    position: relative;
}

.card-image>img {
    display: block;
    width: 100%;
}
</style>