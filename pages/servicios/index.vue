<template>
    <main id="wrapper" class="services">
        <section class="pt-md-70 section-services">
            <div class="container-services d-flex">
                <div class="info-services">
                    <div class="image-services d-flex">
                        <NuxtPicture
                            src="https://api.iconify.design/ri:aliens-line.svg?color=%23888888"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-us-2', 
                                class:'img-fluid bg-products-services', 
                                style:'display:block', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>  
                    </div>
                    <div class="name-services d-flex">
                        <h1>Servicios</h1>
                    </div>
                </div>
            </div>
            <div class="container-sinopsis-services">
                <div class="sinopsis">
                    <h2>Subtitulo</h2>
                    <hr>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi nulla quidem labore possimus cumque corporis explicabo, 
                        necessitatibus libero nam. Nihil earum corrupti nam possimus laboriosam perferendis quaerat quasi quas.
                    </p>
                </div>
            </div>
        </section>
        <ServicesView></ServicesView>
    </main>
</template>

<script setup>
    // Vue
    import { useRoute, useRouter } from "vue-router";
    // 
    import 'assets/css/servicios.css'
    // 
    const route = useRoute();
    const router = useRouter();
</script>

<style lang="scss" scoped>

</style>