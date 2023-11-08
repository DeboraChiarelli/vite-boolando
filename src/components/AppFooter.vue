<script>
import { store } from '../store';
export default {
    name: "AppFooter",
    data() {
        return {
            store: store,
            footerLinks: [
                'Informazioni legali',
                'Informativa sulla privacy',
                'Diritto di recesso',
            ],
        }
    }
}

</script>

<template>
    <footer class="bg-blackgrey">

        <nav class="container">
            <div class="row row-header">
                <div class="col">
                    <div class="col">{{ dati che ho salvato nello store }}</div>
                    <p class="white"><strong>Booleando s.r.l.</strong></p>
                    <a class="white" v-for="footerLink in footerLinks">
                        {{ footerLink }}
                    </a>
                </div>
                <div class="col">
                    <p class="white">Trovaci anche su</p>
                </div>
            </div>
        </nav>

    </footer>
</template>

<style scoped></style>