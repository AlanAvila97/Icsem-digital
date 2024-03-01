<template>
    <section class="section-contact-general">
        <div class="container-contact-general d-flex">
            <div class="image-contact">
                <NuxtPicture
                    :src="( props?.info[0].imagenW != null ) 
                        ? urlCompletaImages+props?.info[0].imagenW 
                        : urlCompletaImages+props?.info[0].imagenN"
                    densities="x1 x2"
                    preset="blog" 
                    format="webp" 
                    quality="90" 
                    fit="cover" 
                    preload
                    loading="lazy"
                    width="760"
                    height="700"
                    :imgAttrs="{
                        id:'img-contactanos', 
                        class:'img-fluid ', 
                        style:'display:block', 
                        alt: 'Image',                                
                        title: 'Imagen',
                        'data-my-data': 'my-value'}"/>
                        <!-- {{ props?.info[0].imagenW }} -->
            </div>
            <div class="info-contact d-flex">
                <FormContact :info="props?.contactanos[0]"></FormContact>
            </div>
        </div>
    </section>
</template>

<script setup>
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // 
    const DataGlobal = dataGlobal();   
    const { fetchInfoIcsem } = DataGlobal; 
    // 
    const props = defineProps({ info: Array, contactanos: Array });
    // 
    const urlCompletaImages = 'https://icsem.mx/Admin/admin/assets/php/uploads/';
</script>

<style scoped>

</style>