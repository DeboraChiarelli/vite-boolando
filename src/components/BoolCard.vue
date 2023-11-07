<script>
export default {
    name: 'BoolCard',
    props: {
        details: Object,
        

    },
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
                    <img :src="details.frontImage" alt="" />
                    <img :src="details.backImage" class="img-top">
                </a>
                <span class="heart-icon">&hearts;</span>
                <span class="sale">-50%</span>
                <span class="sust">Sostenibilità</span>

                <section class="description"> {{ details.brand }}
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

.heart-icon {
    display: block;
    position: absolute;
    top: 15px;
    left: 265px;
    width: 30px;
    background-color: white;
    font-size: 25px;
    color: black;
    text-align: center;
}

.sale {
    display: block;
    position: absolute;
    bottom: 70px;
    width: 50px;
    background-color: red;
    font-size: 20px;
    color: white;
    text-align: center;
}

.sust {
    display: block;
    position: absolute;
    bottom: 70px;
    left: 55px;
    width: 100px;
    background-color: green;
    font-size: 20px;
    color: white;
}

.price-red {
    color: red;
    font-size: 15px;
}

.price-grey {
    text-decoration: line-through;
}

.img-top {
    opacity: 0;
    position: absolute;
    left: 0;
}

.img-top:hover {
    opacity: 1;
    transition: all 300ms ease-in-out;
}
</style>