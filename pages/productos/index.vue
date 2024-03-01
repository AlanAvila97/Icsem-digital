<template>
    <main id="wrapper" class="product">
        <section class="pt-md-70 section-product">
            <div class="container-product d-flex">
                <div class="info-product" :style="`background-image:  url(${urlCompletaImages+infoProductos.imagen1[0].imagenW})`">
                    <div class="image-product d-flex wow animate__animated animate__fadeInDown"                    
                         data-wow-delay="0.1s" data-wow-offset="10">
                        <NuxtPicture
                            :src="( infoProductos.imagen2[0].imagenW != null ) 
                                    ? urlCompletaImages+infoProductos.imagen2[0].imagenN 
                                    : urlCompletaImages+infoProductos.imagen2[0].imagenN"
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
                    <div class="name-product d-flex wow animate__animated animate__fadeInDown" 
                         data-wow-delay="0.1s" data-wow-offset="10">
                        <h2 class="title-elipsis"> {{ infoProductos.titulo[0].titulo }} </h2>
                    </div>
                </div>
            </div>
            <div class="container-sinopsis-product">
                <div class="sinopsis wow animate__animated animate__fadeInUp"
                     data-wow-delay="0.2s" data-wow-offset="10">
                    <h1> {{ infoProductos.subtitulo[0].titulo }}</h1>
                    <hr>
                    <p> {{ infoProductos.descripcion[0].titulo }} </p>
                    <div class="content-additional-product d-none">
                        <div class="img-product">
                            <NuxtPicture
                                :src="( infoProductos.imagen2[0].imagenW != null ) 
                                        ? urlCompletaImages+infoProductos.imagen2[0].imagenW 
                                        : urlCompletaImages+infoProductos.imagen2[0].imagenN"
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
                        <div class="info-product">
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit soluta unde culpa ab, dicta vitae enim deleniti, 
                                pariatur ipsa, cumque eveniet maiores veniam tempore reprehenderit iste dolores animi non! Provident!
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ProductosView 
            :info="infoProductos.productos" 
            :url="urlCompletaImages"
            :title="infoProductos.titulo_productos[0]">
        </ProductosView>
    </main>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Vue
    import { useRoute, useRouter } from "vue-router";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    import {infoGlobal} from '@/store/jsonData'
    // 
    const DataGlobal = dataGlobal();   
    const InfoGlobal = infoGlobal();   
    const { initializationWow, fetchInfoIcsem } = DataGlobal;     
    const { fetchData } = InfoGlobal; 
    // 
    import 'assets/css/productos.css'
    // 
    const jsonProductos = await fetchInfoIcsem('Productos');
    //
    const infoProductos = await fetchData('api_productos');
    // 
    const route = useRoute();
    const router = useRouter();
    // 
    const urlImages = 'https://icsem.mx/Admin/admin/assets/php/';
    const urlCompletaImages = 'https://icsem.mx/Admin/admin/assets/php/uploads/';
    const img = useImage()
    const backgroundStyles =  ( urlImage ) => {
        const imgUrl = img('https://github.com/nuxt.png', { width: 100 })
        return { backgroundImage: `url('${imgUrl}')` }
    };
    // 
    onMounted(() => {
        initializationWow();
    });
</script>

<style lang="scss" scoped>

</style>