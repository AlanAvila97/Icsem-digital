<template>
    <section class="section-products-services">
        <div class="container-products-services d-flex">
            <div class="title-products-services w-100 d-flex">
                <h2 class="wow animate__animated animate__fadeInDown"
                    data-wow-delay="0.3s" data-wow-offset="10">{{ props?.title.titulo }}</h2>
            </div>
            <div class="categories-products wow animate__animated animate__fadeInDown d-none" 
                 data-wow-delay="0.4s" data-wow-offset="10">
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
            <div class="content-items-products-services d-flex w-100" 
                 data-contador="3" data-limite="1">
                 <template v-for="(item, index) in props?.info" :key="index?.id">
                    <nuxt-link :class="paginationItems(index + 1, props?.info?.length)"
                               :to="parserURL('/servicios/', item?.titulo)" 
                               v-if="parseoTexto(item.titulo) != String(props?.id)"
                               class="items-products-services d-flex services-mecanica wow animate__animated animate__fadeInUp"
                               data-wow-delay="0.1s" data-wow-offset="10" aria-label="Redirección">
                        <div class="visuals-products-services">
                            <NuxtPicture
                                    :src="( item?.imagenw != null ) 
                                        ? props?.url+item?.imagenw 
                                        : props?.url+item?.imagen"
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
                                :src="( item?.imagenw2 != null ) 
                                        ? props?.url+item?.imagenw2 
                                        : props?.url+item?.imagen2"
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
                            <h3>{{ item?.titulo }}</h3>
                            <p class="sinopsis"> {{ item?.descripcion }} </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>    
                        </div>                          
                    </nuxt-link>
                 </template>
            </div>
            <div class="content-show-more" :class="filterItemProducts( props?.info, props?.id) ">
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
    let num = 3;
    // 
    const { getElement, getAllElement, addAllClass, scrollSection, filterItems,
            removeClass, removeAllClass, addClassElement, initializationWow, parseoTexto } = DataGlobal;
    // 
    const props = defineProps({ info: Array, url: String, id: String, title: Object  });
    // 
    const paginationItems = (index, sizeProducts) => {        
        let classItem = '';
        if(index <= num){
            classItem = `page-${num}`;            
        } else{
            num = num * 2;
            classItem =  `page-${num}`;
        }      
        return classItem;
    }
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
        let newCount = parseInt(container.dataset.contador) * 2;
        let nextCount = newCount * 2;
        let limiteProductos = parseInt(container.dataset.limite) + 1;
            container.dataset.contador = newCount;
            container.dataset.limite = nextCount;
        let items = getAllElement('.content-items-products-services .page-'+newCount);
        removeAllClass(getAllElement('.items-products-services'), 'd-none')
        if(items.length != 0){
            let height = getElement('.content-items-products-services').offsetHeight + 20;
            let MaxHeight = height * limiteProductos;
            let nextItems = getAllElement('.content-items-products-services .page-'+nextCount);     
                container.style = "max-height: "+MaxHeight+"px;";
            if(nextItems.length == 0){
                getElement('.content-show-more').classList.add('d-none')
            }      
        }
    }
    const parserURL = (direccion, titulo) => {
        return `${direccion + parseoTexto(titulo)}`;
    }
    const filterItemProducts = (info, idProduct) => {
        let data = []
        info.forEach((ele, index) => {
            if(parseoTexto(ele.titulo) != idProduct){
                data.push(ele);
            }
        });        
        return ( data.length <= 3 ) ? 'd-none': 'd-flex';
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
        max-height: 585px;
        overflow: hidden;
        padding: 0 1rem 1rem;
        gap: 2rem;
    }
    .section-products-services .container-products-services .content-items-products-services .items-products-services{
        box-shadow: 0px 4px 7px 2px rgb(0 0 0 / 53%);
    }
    @media(max-width: 680px){
        /*-------------------------------------------------------------
        # Seccion Productos Servicios   
        --------------------------------------------------------------*/
        .section-products-services .container-products-services .content-items-products-services{
            max-height: 1710px;
        }
    }
</style>