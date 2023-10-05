<template>
    <section class="section-products-services">
        <div class="container-products-services d-flex">
            <div class="title-products-services w-100 d-flex">
                <h2>Titulo Productos Servicios</h2>
            </div>
            <div class="categories-products">
                <lu class="list-categories">
                    <li class="active">
                        <p>Mostrar todo</p>
                    </li>
                    <li>
                        <p>Mecánica</p>
                    </li>
                    <li>
                        <p>Electricidad</p>
                    </li>
                    <li>
                        <p>Farmacia</p>
                    </li>
                </lu>
            </div>
            <div class="content-items-products-services d-flex w-100">
                <nuxt-link to="./productos/1" class="items-products-services d-flex first" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-3.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-us-1', 
                                class:'img-fluid bg-products-services', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>  
                    </div> 
                    <div class="info-products-services">
                        <div class="image-item">
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
                        <h2>Producto 1</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>   
                </nuxt-link>
                <nuxt-link to="./productos/2" class="items-products-services d-flex second" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-4.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-us-3', 
                                class:'img-fluid bg-products-services', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>
                    </div>    
                    <div class="info-products-services">
                        <div class="image-item">
                            <NuxtPicture
                            src="https://api.iconify.design/ri:aliens-line.svg?color=%23888888"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-us-4', 
                                class:'img-fluid bg-products-services', 
                                style:'display:block', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>  
                        </div>
                        <h2>Producto 2</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>    
                </nuxt-link>
                <nuxt-link to="./productos/3" class="items-products-services d-flex three" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-5.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-us-5', 
                                class:'img-fluid bg-products-services', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>                                       
                    </div>    
                    <div class="info-products-services">
                        <div class="image-item">
                            <NuxtPicture
                            src="https://api.iconify.design/ri:aliens-line.svg?color=%23888888"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            :imgAttrs="{
                                id:'img-us-6', 
                                class:'img-fluid bg-products-services', 
                                style:'display:block', 
                                alt: 'Image',                                
                                title: 'Imagen',
                                'data-my-data': 'my-value'}"/>  
                        </div>
                        <h2>Producto 3</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
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
    // 
    import { onMounted } from "vue";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // 
    const DataGlobal = dataGlobal();   
    // 
    const { getElement, scrollSection } = DataGlobal; 
    const initializationIsotope = () => {
        let container = getElement('.portfolio-container');
        var portfolioIsotope = container.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });
    }
    onMounted(() => {
        // initializationIsotope();
    });
</script>

<style scoped>
    .title-products-services{
        padding-bottom: 1rem!important;
    }
</style>