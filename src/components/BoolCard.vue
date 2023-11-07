<script>
import { getTransitionRawChildren } from 'vue';

export default {
    name: 'BoolCard',
    props: {
        details: Object
    },
    data() {
        return {
        }
    },
    methods: {
        favoriteFunction() {
            this.details.isInFavorites = !this.details.isInFavorites;
            console.log(this.details.isInFavorites)
        }
    }
}
</script>

<template>
    <div class="col-4">
        <div class="card">
            <figure class="card-image">
                <a href="#">
                    <img :src="`/img/${details.frontImage}`" alt="" />
                    <img :src="`/img/${details.backImage}`" class="img-top">
                </a>
                <span class="heart-icon" @click="favoriteFunction()"
                    :class="details.isInFavorites === true ? 'red' : ' '">&hearts;</span>
                <span :class="badge.type" v-for="badge in details.badges"> {{ badge.value }}</span>
                <div class="details">
                    <section class="description"> {{ details.brand }}
                    </section>
                    <span> {{ details.name.toUpperCase() }} </span>
                    <span> {{ details.price }} </span>
                </div>
            </figure>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.red {
    color: red;
}

.details {
    display: flex;
    flex-direction: column;
}

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
    text-align: center;
}

.discount {
    display: block;
    position: absolute;
    bottom: 70px;
    width: 50px;
    background-color: red;
    font-size: 20px;
    color: white;
    text-align: center;
}

.tag {
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