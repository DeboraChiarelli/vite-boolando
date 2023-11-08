<script>

export default {
    name: "AppHeader",
    data() {
        return {
            menuVoices: ['Donna', 'Uomo', 'Bambino'],
        }
    }
}

</script>

<template>
    <header class="bg-orange">
        <nav class="container">
            <div class="row row-header">
                <div class="col">
                    <a class="white" v-for="menuVoice in menuVoices" href="">
                        {{ menuVoice }}
                    </a>
                    <input type="text" v-model="store.message">
                </div>
                <div class="col">
                    <img src="/img/boolean-logo.png" class="logo" alt="logo Boolean">
                </div>
                <div class="col">
                    <span></span>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.bg-orange {
    background-color: $headercolor;
}

.section {
    padding: 80px 0;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    min-height: 20px;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.row-header {
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 80px;
}
</style>