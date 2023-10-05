<template>
    <main id="wrapper" class="product">
        <section class="pt-md-70 section-product">
            <div class="container-product d-flex">
                <div class="info-product">
                    <div class="image-product d-flex">
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
                    <div class="name-product d-flex">
                        <h1>Producto {{ $route.params.id }}</h1>
                    </div>
                </div>
            </div>

        </section>
        <!-- <ProductosView></ProductosView> -->
    </main>
</template>

<script setup>
    // Vue
    import { useRoute, useRouter } from "vue-router";
    // 
    import 'assets/css/productos.css'
    // 
    const route = useRoute();
    const router = useRouter();
</script>

<style lang="scss" scoped>

</style>