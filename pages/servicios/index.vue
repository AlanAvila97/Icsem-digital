<template>
    <main id="wrapper" class="services">
        <section class="pt-md-70 section-services">
            <div class="container-services d-flex">
                <div class="info-services" :style="`background-image: url(${urlCompletaImages+infoServicios.imagen1[0].imagenW})`">
                    <div class="image-services d-flex wow animate__animated animate__fadeInDown"
                         data-wow-delay="0.1s" data-wow-offset="10">
                        <NuxtPicture
                            :src="( infoServicios.imagen2[0].imagenW != null ) 
                                ? urlCompletaImages+infoServicios.imagen2[0].imagenN 
                                : urlCompletaImages+infoServicios.imagen2[0].imagenN"
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
                    <div class="name-services d-flex wow animate__animated animate__fadeInDown"
                         data-wow-delay="0.1s" data-wow-offset="10">
                        <h2 class="title-elipsis">{{ infoServicios.titulo[0].titulo }}</h2>
                    </div>
                </div>
            </div>
            <div class="container-sinopsis-services">
                <div class="sinopsis wow animate__animated animate__fadeInUp"
                     data-wow-delay="0.2s" data-wow-offset="10">
                    <h1>{{ infoServicios.subtitulo[0].titulo }}</h1>
                    <hr>
                    <p>{{ infoServicios.descripcion[0].titulo }}</p>
                </div>
            </div>
        </section>
        <ServicesView 
            :info="infoServicios.servicios" 
            :url="urlCompletaImages"
            :title="infoServicios.titulo_productos[0]">
        </ServicesView>
    </main>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Vue Router
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
    import 'assets/css/servicios.css'
    // 
    const jsonServicios = await fetchInfoIcsem('Servicios');
    //
    // const { data: infoServicios } = await useFetch(jsonServicios)
    const infoServicios = await fetchData('api_servicios');
    // 
    const route = useRoute();
    const router = useRouter();
    const urlImages = 'https://icsem.mx/Admin/admin/assets/php/';
    const urlCompletaImages = 'https://icsem.mx/Admin/admin/assets/php/uploads/';
    const img = useImage()
    const backgroundStyles =  ( urlImage ) => {
        const imgUrl = img( urlImage , { width: 100 })
        return { backgroundImage: `url('${imgUrl}')` }
    };
    // 
    onMounted(() => {
        initializationWow();
    });
</script>

<style lang="scss" scoped>

</style>