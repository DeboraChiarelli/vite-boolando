<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import BoolCard from './components/BoolCard.vue';


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    BoolCard,
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
  <BoolCard />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
