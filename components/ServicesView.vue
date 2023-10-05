<template>
    <section class="section-products-services">
        <div class="container-products-services d-flex">
            <div class="title-products-services w-100 d-flex">
                <h2>Titulo Productos Servicios</h2>
            </div>
            <div class="categories-products">
                <div class="list-categories">
                    <div id="categorie_all" class="item-categorie active" 
                         @click="filterProducts">
                        <p data-categorie="all">Mostrar todo</p>
                    </div>
                    <div id="categorie_mecanica" class="item-categorie" data-categorie="mecanica"
                         @click="filterProducts">
                        <p data-categorie="mecanica">Mecánica</p>
                    </div>
                    <div id="categorie_electricidad" class="item-categorie" data-categorie="electricidad"
                         @click="filterProducts">
                        <p data-categorie="electricidad">Electricidad</p>
                    </div>
                    <div id="categorie_farmacia" class="item-categorie" data-categorie="farmacia"
                         @click="filterProducts">
                        <p data-categorie="farmacia">Farmacia</p>
                    </div>
                </div>
            </div>
            <div class="content-items-products-services d-flex w-100">
                <nuxt-link to="/servicios/1" class="items-products-services d-flex services-mecanica"
                           @click.prevent="actionLink()" aria-label="Redirección">
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
                        <h2>Servicio 1</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>   
                </nuxt-link>
                <nuxt-link to="/servicios/2" class="items-products-services d-flex services-electricidad" 
                          @click.prevent="actionLink()" aria-label="Redirección">
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
                        <h2>Servicio 2</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>    
                </nuxt-link>
                <nuxt-link to="/servicios/3" class="items-products-services d-flex services-farmacia" 
                           @click.prevent="actionLink()" aria-label="Redirección">
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
                        <h2>Servicio 3</h2>
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
    // Composables
    const preload = actionPreload();
    const { hiddenPreoload } = preload;    
    // 
    const DataGlobal = dataGlobal();
    // 
    const { getElement, getAllElement, addAllClass, removeClass, removeAllClass, addClassElement } = DataGlobal; 
    /**
     * @description Función 
    */ 
    const actionLink = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
        getElement('#check').click();
        const divPreload =  document.querySelector('.preloader');
        hiddenPreoload(divPreload, 'preloader');
    }
    // 
    const hiddenProducts = (elements, typeClassElements, categorie) => {
        addAllClass(elements, typeClassElements)
        removeClass(getElement('.services-'+categorie), typeClassElements);
    }
    const filterProducts = (e) => {
        let categorie = e.target.dataset.categorie;
        removeAllClass(getAllElement('.item-categorie'), 'active');
        addClassElement(getElement('#categorie_'+categorie), 'active');
        if(categorie == 'all'){
            removeAllClass(getAllElement('.items-products-services'), 'd-none')
        }else{
            hiddenProducts(getAllElement('.items-products-services'), 'd-none', categorie)
        }
    }
</script>

<style scoped>
    .title-products-services{
        padding-bottom: 1rem!important;
    }
</style>