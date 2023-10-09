<template>
    <main id="wrapper" class="experience">
        <section class="pt-md-70 section-experience-global">
            <div class="container-experience-global d-flex">
                <div class="info-experience-global">
                    <div class="name-experience-global d-flex wow animate__animated animate__fadeInDown"
                         data-wow-delay="0.1s" data-wow-offset="10">
                        <h1>Empresas</h1>
                    </div>
                </div>
            </div>
            <div class="container-sinopsis-experience-global">
                <div class="sinopsis wow animate__animated animate__fadeInDown" 
                     data-wow-delay="0.1s" data-wow-offset="10">
                    <h2>Subtitulo</h2>
                    <hr>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi nulla quidem labore possimus cumque corporis explicabo, 
                        necessitatibus libero nam. Nihil earum corrupti nam possimus laboriosam perferendis quaerat quasi quas.
                    </p>
                </div>
            </div>
        </section>
        <ExperienceView></ExperienceView>
        <MailView></MailView>     
        <ContactView></ContactView>   
    </main>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // 
    const DataGlobal = dataGlobal();   
    const { initializationWow } = DataGlobal;     
    // css
    import 'assets/css/experiencias.css'
    // 
    onMounted(() => {
        initializationWow();
    });
</script>

<style  scoped>

</style>