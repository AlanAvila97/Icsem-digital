<template>
    <main id="wrapper" class="experience">
        <section class="pt-md-70 section-experience-global">
            <template v-for="(item, index) in infoExperiencias?.experiencias" :key="index?.id">
                <div v-if="(parseoTexto(item?.empresa) === $route.params.id)"
                     class="container-experience-global d-flex">
                    <div class="info-experience-global wow animate__animated animate__fadeInDown"
                         :style='`background-image: url("${urlCompletaImages+item?.imagen}");`'
                         data-wow-delay="0.1s" data-wow-offset="10">
                        <div class="name-experience-global d-flex">
                            <h1>{{ item?.empresa }}</h1>
                        </div>
                    </div>
                </div>
                <div v-if="(parseoTexto(item?.empresa) == String($route.params.id))" 
                     class="container-sinopsis-experience-global">
                    <div class="sinopsis wow animate__animated animate__fadeInDown"
                        data-wow-delay="0.1s" data-wow-offset="10">
                        <p> {{ item?.subtitulo }} </p>
                    </div>
                </div>
            </template>
        </section>
        <MailView :info="infoIcsem.contactos" :title="infoIcsem.titulo_contactanos"></MailView>     
        <ContactView :info="infoIcsem.imagen_contactos" :contactanos="infoIcsem.contactos"></ContactView>   
        <ExperienciasEspecificas 
                :info="infoExperiencias?.experiencias" 
                :id="$route.params.id"
                :url="urlCompletaImages"
                :title="infoExperiencias.titulo_experiencias">
        </ExperienciasEspecificas>  
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
    const { initializationWow, fetchInfoIcsem, parseoTexto } = DataGlobal;
    const { fetchData } = InfoGlobal;       
    // css
    import 'assets/css/experiencias.css'
    // 
    const jsonIcsem = await fetchInfoIcsem('Api');
    const jsonExperiencias = await fetchInfoIcsem('Experiencias');
    //
    const infoIcsem = await fetchData('api');
    const infoExperiencias = await fetchData('api_experiencias');  
    // 
    const urlImages = 'https://icsem.mx/Admin/admin/assets/php/';
    const urlCompletaImages = 'https://icsem.mx/Admin/admin/assets/php/uploads/';
    // 
    onMounted(() => {
        initializationWow();
    });
</script>

<style  scoped>

</style>