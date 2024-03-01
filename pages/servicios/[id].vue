<template>
    <main id="wrapper" class="services">
        <section class="pt-md-70 section-services">
            <template v-for="(item, index) in infoServicios?.servicios" :key="index?.id">
                <div v-if="(parseoTexto(item?.titulo) == String($route.params.id))" 
                    class="container-services d-flex">
                    <div class="info-services">
                        <div class="image-services d-flex wow animate__animated animate__fadeInDown"
                            data-wow-delay="0.1s" data-wow-offset="10">
                            <NuxtPicture
                                :src="( item?.imagenw != null ) 
                                    ? urlCompletaImages+item?.imagen 
                                    : urlCompletaImages+item?.imagen"
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
                            <h1 class="title-elipsis"> {{ item?.titulo }}</h1>
                        </div>
                    </div>
                </div>
                <div v-if="(parseoTexto(item?.titulo) == String($route.params.id))" 
                    class="container-sinopsis-services">
                    <div class="sinopsis wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.2s" data-wow-offset="10">
                        <p> {{ item?.descripcion }} </p>
                    </div>
                </div>
            </template>
        </section>
        <ServiciosEspecificos 
            :info="infoServicios?.servicios" 
            :id="$route.params.id"
            :url="urlCompletaImages"
            :title="infoServicios.titulo_productos[0]">
        </ServiciosEspecificos>
    </main>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Vue router
    import { useRoute, useRouter } from "vue-router";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    import {infoGlobal} from '@/store/jsonData'
    // 
    const DataGlobal = dataGlobal();   
    const InfoGlobal = infoGlobal();
    const { initializationWow, fetchInfoIcsem, parseoTexto } = DataGlobal;   
    const { fetchData } = InfoGlobal;  
    // 
    import 'assets/css/servicios.css'
    // 
    const route = useRoute();
    const router = useRouter();
    // 
    const jsonServicios = await fetchInfoIcsem('Servicios');
    //
    const infoServicios = await fetchData('api_servicios');
    // 
    const urlImages = 'https://icsem.mx/Admin/admin/assets/php/';
    const urlCompletaImages = 'https://icsem.mx/Admin/admin/assets/php/uploads/';
    // 
    onMounted(() => {
        initializationWow();
    });     
</script>

<style lang="scss" scoped>

</style>