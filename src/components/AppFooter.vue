<script>

export default {
    name: "AppFooter",
    data() {
        return {

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