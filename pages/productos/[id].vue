<template>
    <main id="wrapper" class="product">
        <section class="pt-md-70 section-product">
            <template v-for="(item, index) in infoProductos?.productos" :key="index?.id">
                <div v-if="(parseoTexto(item?.titulo) === $route.params.id)" 
                    :class="$route.params.id"
                    class="container-product d-flex">
                        <div class="info-product">
                            <div class="image-product d-flex wow animate__animated animate__fadeInDown"
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
                            <div class="name-product d-flex wow animate__animated animate__fadeInDown" 
                                    data-wow-delay="0.1s" data-wow-offset="10">
                                <h1 class="title-elipsis">{{ item?.titulo }}</h1>
                            </div>                   
                        </div>
                </div>
                <div v-if="(parseoTexto(item?.titulo) == String($route.params.id))" 
                    class="container-sinopsis-product">
                    <div class="sinopsis wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.2s" data-wow-offset="10">
                        <p>{{ item?.descripcion }}</p>
                    </div>
                </div>
            </template>
        </section>
        <ProductosEspecificos 
            :info="infoProductos?.productos" 
            :id="$route.params.id"
            :url="urlCompletaImages"
            :title="infoProductos.titulo_productos[0]">            
        </ProductosEspecificos>
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
    import 'assets/css/productos.css'
    // 
    const route = useRoute();
    const router = useRouter();
    // 
    const jsonProductos = await fetchInfoIcsem('Productos');
    //
    // const { data: infoProductos } = await useFetch(jsonProductos)
    const infoProductos = await fetchData('api_productos');
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