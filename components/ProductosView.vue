<template>
    <section class="section-products-services">
        <div class="container-products-services d-flex">
            <div class="title-products-services w-100 d-flex">
                <h2 class="wow animate__animated animate__fadeInDown"
                    data-wow-delay="0.3s" data-wow-offset="10">Titulo Productos Servicios</h2>
            </div>
            <div class="categories-products wow animate__animated animate__fadeInDown" data-wow-delay="0.4s" data-wow-offset="10">
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
                <nuxt-link to="/productos/1" class="items-products-services d-flex product-mecanica wow animate__animated animate__fadeInUp"
                           data-wow-delay="0.1s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-3.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            loading="lazy"
                            width="425"
                            height="270"                            
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
                <nuxt-link to="/productos/2" class="items-products-services d-flex product-electricidad wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.3s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-4.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            loading="lazy"
                            width="425"
                            height="270"                            
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
                <nuxt-link to="/productos/3" class="items-products-services d-flex product-farmacia wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.5s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-5.jpg"
                            densities="x1 x2"
                            preset="blog" 
                            format="webp" 
                            quality="90" 
                            fit="cover" 
                            preload
                            loading="lazy"
                            width="425"
                            height="270"
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
    const { getElement, getAllElement, addAllClass, removeClass, removeAllClass, addClassElement, initializationWow } = DataGlobal; 
    /**
    * @description Funcion que oculta los productos por categoria
    * @param elements Contiene todos los elementos html 
    * @param typeClassElements Contiene la clase para ocultar los productos
    * @param categorie Contiene la categoria seleccionada
    */  
    const hiddenProducts = (elements, typeClassElements, categorie) => {
        addAllClass(elements, typeClassElements)
        removeClass(getElement('.product-'+categorie), typeClassElements);
    }
    /**
    * @description Funcion de click para obtener los productos por categoria 
    */  
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
    onMounted(() => {
        initializationWow();
    });
</script>

<style scoped>
    .title-products-services{
        padding-bottom: 1rem!important;
    }
</style>