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
                         @click="filterServices">
                        <p data-categorie="all">Mostrar todo</p>
                    </div>
                    <div id="categorie_mecanica" class="item-categorie" data-categorie="mecanica"
                         @click="filterServices">
                        <p data-categorie="mecanica">Mecánica</p>
                    </div>
                    <div id="categorie_electricidad" class="item-categorie" data-categorie="electricidad"
                         @click="filterServices">
                        <p data-categorie="electricidad">Electricidad</p>
                    </div>
                    <div id="categorie_farmacia" class="item-categorie" data-categorie="farmacia"
                         @click="filterServices">
                        <p data-categorie="farmacia">Farmacia</p>
                    </div>
                </div>
            </div>
            <div class="content-items-products-services d-flex w-100" data-contador="1">
                <nuxt-link to="/servicios/1" 
                           class="items-products-services page-1 d-flex services-mecanica wow animate__animated animate__fadeInUp"
                           data-wow-delay="0.1s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-3.webp"
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
                        <h2>Servicio 1</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>   
                </nuxt-link>
                <nuxt-link to="/servicios/2" 
                           class="items-products-services page-1 d-flex services-electricidad wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.3s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-4.webp"
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
                        <h2>Servicio 2</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>    
                </nuxt-link>
                <nuxt-link to="/servicios/3" 
                           class="items-products-services page-1 d-flex services-farmacia wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.5s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-5.webp"
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
                        <h2>Servicio 3</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>                            
                    </div>  
                </nuxt-link>
                <nuxt-link to="/servicios/4" 
                           class="items-products-services page-2 d-flex services-mecanica wow animate__animated animate__fadeInUp"
                           data-wow-delay="0.1s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-3.webp"
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
                        <h2>Servicio 1</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>   
                </nuxt-link>
                <nuxt-link to="/servicios/5" 
                           class="items-products-services page-2 d-flex services-electricidad wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.3s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-4.webp"
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
                        <h2>Servicio 2</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>    
                </nuxt-link>
                <nuxt-link to="/servicios/6" 
                           class="items-products-services page-2 d-flex services-farmacia wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.5s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-5.webp"
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
                        <h2>Servicio 3</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>                            
                    </div>  
                </nuxt-link>
                <nuxt-link to="/servicios/7" 
                           class="items-products-services page-3 d-flex services-mecanica wow animate__animated animate__fadeInUp"
                           data-wow-delay="0.1s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-3.webp"
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
                        <h2>Servicio 1</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>   
                </nuxt-link>
                <nuxt-link to="/servicios/8" 
                           class="items-products-services page-3 d-flex services-electricidad wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.3s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-4.webp"
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
                        <h2>Servicio 2</h2>
                        <p class="sinopsis">
                            Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.
                        </p>
                        <p class="redirect"> 
                            Da click para para saber más <Icon name="ri:arrow-right-line" />
                        </p>    
                    </div>    
                </nuxt-link>
                <nuxt-link to="/servicios/9" 
                           class="items-products-services page-3 d-flex services-farmacia wow animate__animated animate__fadeInUp" 
                           data-wow-delay="0.5s" data-wow-offset="10" aria-label="Redirección">
                    <div class="visuals-products-services">
                        <NuxtPicture
                            src="images/img-600x400-5.webp"
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
            <div class="content-show-more d-flex">
                <hr>
                <button class="" @click="showMore">
                    <span class="box">
                        Mostrar más                        
                        <Icon name="ri:arrow-down-s-line" size="1.5rem"/>
                    </span>
                </button>
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
    const { getElement, getAllElement, addAllClass, removeClass, scrollSection,
            removeAllClass, addClassElement, initializationWow } = DataGlobal; 
    /**
    * @description Funcion que oculta los servicios por categoria
    * @param elements Contiene todos los elementos html 
    * @param typeClassElements Contiene la clase para ocultar los servicios
    * @param categorie Contiene la categoria seleccionada
    */ 
    const hiddenServices = (elements, typeClassElements, categorie) => {
        addAllClass(elements, typeClassElements)
        removeAllClass(getAllElement('.services-'+categorie), typeClassElements);
    }
    /**
    * @description Funcion de click para obtener los servicios por categoria 
    */  
    const filterServices = (e) => {
        let categorie = e.target.dataset.categorie;
        removeAllClass(getAllElement('.item-categorie'), 'active');
        addClassElement(getElement('#categorie_'+categorie), 'active');
        scrollSection(getElement('.content-items-products-services'), 80);
        if(categorie == 'all'){
            removeAllClass(getAllElement('.items-products-services'), 'd-none')
        }else{
            hiddenServices(getAllElement('.items-products-services'), 'd-none', categorie)
        }
    }
    const showMore = (e) => {
        let container = getElement('.content-items-products-services');
        let newCount = parseInt(container.dataset.contador) + 1;
        let nextCount = newCount + 1;
            container.dataset.contador = newCount;
        let items = getElement('.content-items-products-services .page-'+newCount);
        removeAllClass(getAllElement('.items-products-services'), 'd-none')
        if(items != null){
            let MaxHeight = 550 * newCount;
            let nextItems = getElement('.content-items-products-services .page-'+nextCount);     
                container.style = "max-height: "+MaxHeight+"px;";
            if(nextItems == null){
                getElement('.content-show-more').classList.add('d-none')
            }      
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
    .section-products-services .container-products-services .content-items-products-services{
        /*max-height: var(--height-max-more);*/
        max-height: 530px;
        overflow: hidden;
        padding: 0 1rem 1rem;
        gap: 2rem;
    }
    .section-products-services .container-products-services .content-items-products-services .items-products-services{
        box-shadow: 0px 4px 7px 2px rgb(0 0 0 / 53%);
    }
</style>