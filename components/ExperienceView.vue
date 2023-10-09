<template>
    <section class="section-experience">
        <div class="container-experience d-flex">
            <div class="title-experience d-flex">
                <h2 id="Experiencias" class="wow animate__animated animate__fadeInDown"
                    data-wow-delay="0.3s" data-wow-offset="10">Titulo de Experiencia</h2>                    
            </div>
            <div class="content-items-experience">
                <nuxt-link to="/experiencia/1" class="items-experience d-flex wow animate__animated animate__fadeInUp"
                           data-wow-delay="0.1s" data-wow-offset="10" aria-label="Redirección">                        
                    <div class="visual-experience">
                        <NuxtPicture
                            src="images/img-600x400-3.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-experience-1', 
                                class:'img-fluid ', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>  
                    </div>                        
                    <div class="info-experience">
                        <div class="content-title">
                            <h2>Empresa</h2>
                        </div>  
                        <h3>Subtitulo</h3>
                        <p class="sinopsis">
                            We Are pioneers of solar & renewable energy industry
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>  
                    </div>
                </nuxt-link>
                <nuxt-link to="/experiencia/2" class="items-experience d-flex wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.3s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visual-experience">
                        <NuxtPicture
                            src="images/img-600x400-4.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-experience-2', 
                                class:'img-fluid ', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>  
                    </div>                        
                    <div class="info-experience">
                        <div class="content-title">
                            <h2>Empresa</h2>
                        </div>  
                        <h3>Subtitulo</h3>
                        <p class="sinopsis">
                            We Are pioneers of solar & renewable energy industry
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>  
                    </div>
                </nuxt-link>
                <nuxt-link to="/experiencia/3" class="items-experience d-flex wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.5s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visual-experience">
                        <NuxtPicture
                            src="images/img-600x400-5.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-experience-3', 
                                class:'img-fluid ', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>  
                    </div>                        
                    <div class="info-experience">
                        <div class="content-title">
                            <h2>Empresa</h2>
                        </div>  
                        <h3>Subtitulo</h3>
                        <p class="sinopsis">
                            We Are pioneers of solar & renewable energy industry
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>  
                    </div>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // 
    const DataGlobal = dataGlobal();   
    const { initializationWow } = DataGlobal; 
    // 
    onMounted(() => {
        initializationWow();
    });
</script>

<style  scoped>
.section-experience  hr{
    background: #2a3a41;
    border-radius: 15px;
    border: 1px solid #0d8184;
    box-shadow: 0 0 30px #0d8184;
    height: 1px;
    width: 100%;
    opacity: 1;
}
</style>