<template>
    <main id="wrapper" class="experience">
        <section class="pt-md-70 section-experience-global">
            <div class="container-experience-global d-flex">
                <div class="info-experience-global" :style="`background-image:  url(${urlCompletaImages+infoExperiencias.imagen1[0].imagenW})`">
                    <div class="name-experience-global d-flex wow animate__animated animate__fadeInDown"
                         data-wow-delay="0.1s" data-wow-offset="10">
                        <h2>{{ infoExperiencias.titulo[0].titulo }}</h2>
                    </div>
                </div>
            </div>
            <div class="container-sinopsis-experience-global">
                <div class="sinopsis wow animate__animated animate__fadeInDown" 
                     data-wow-delay="0.1s" data-wow-offset="10">
                    <h1>{{ infoExperiencias.subtitulo[0].titulo }}</h1>
                    <hr>
                    <p> {{ infoExperiencias.descripcion[0].titulo }} </p>
                </div>
            </div>
        </section>
        <MailView :info="infoIcsem.contactos" :title="infoIcsem.titulo_contactanos"></MailView>     
        <ContactView :info="infoIcsem.imagen_contactos" :contactanos="infoIcsem.contactos"></ContactView>   
        <ExperienceView 
            :info="infoExperiencias.experiencias" 
            :url="urlCompletaImages" 
            :title="infoExperiencias.titulo_experiencias"></ExperienceView>
    </main>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    import {infoGlobal} from '@/store/jsonData'
    // 
    const DataGlobal = dataGlobal();  
    const InfoGlobal = infoGlobal();
    const { initializationWow, fetchInfoIcsem } = DataGlobal;     
    const { fetchData } = InfoGlobal; 
    // css
    import 'assets/css/experiencias.css'
    // 
    const jsonExperiencias = await fetchInfoIcsem('Experiencias');
    const jsonIcsem = await fetchInfoIcsem('Api');
    //
    // const { data: infoIcsem } = await useFetch(jsonIcsem); 
    // const { data: infoExperiencias } = await useFetch(jsonExperiencias);  
    // const infoIcsem1 = await fetchData('channels');
    const infoIcsem = await fetchData('api');
    const infoExperiencias = await fetchData('api_experiencias');
    // 
    const urlImages = 'https://icsem.mx/Admin/admin/assets/php/';
    const urlCompletaImages = 'https://icsem.mx/Admin/admin/assets/php/uploads/';
    // 
    const img = useImage()
    const backgroundStyles =  ( urlImage ) => {
        const imgUrl = img('https://github.com/nuxt.png', { width: 100 })
        return { backgroundImage: `url('${imgUrl}')` }
    };
    onMounted(() => {
        initializationWow();
    });
</script>

<style  scoped>

</style>