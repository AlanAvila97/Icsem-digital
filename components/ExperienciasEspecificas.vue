<template>
    <section class="section-experience">
        <div class="container-experience" :class="filterItems( props?.info, props?.id)">
            <div class="title-experience d-flex">
                <h2 id="Experiencias" class="wow animate__animated animate__fadeInDown"
                    data-wow-delay="0.3s" data-wow-offset="10">{{ props?.title.titulo }}</h2>                    
            </div>
            <div class="content-items-experience" data-contador="3" data-limite="1">
                <template v-for="(item, index) in props?.info" :key="index?.id">
                    <nuxt-link :class="paginationItems(index + 1, props?.info?.length)"
                                :to="parserURL('/experiencia/', item?.empresa)" 
                                v-if="parseoTexto(item.empresa) != String(props?.id)"
                                class="items-experience d-flex wow animate__animated animate__fadeInUp"
                                data-wow-delay="0.1s" data-wow-offset="10" aria-label="Redirección">                        
                        <div class="visual-experience">
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
                                    id:'img-experience-1', 
                                    class:'img-fluid ', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                        </div>                        
                        <div class="info-experience">
                            <div class="content-title">
                                <h2>{{ item?.empresa }}</h2>
                            </div>  
                            <p class="sinopsis"> {{ item?.subtitulo }} </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>  
                        </div>
                    </nuxt-link>
                </template>
            </div>
            <div class="content-show-more" :class="filterItemProducts( props?.info, props?.id)">
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
    // Vue
    import { onMounted } from "vue";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // 
    const DataGlobal = dataGlobal();   
    const { getElement, getAllElement, initializationWow, parseoTexto } = DataGlobal; 
    // 
    let num = 3;
    // 
    const props = defineProps({ info: Array, url: String, id: String, title: Object });
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
    // 
    const showMore = (e) => {
        let container = getElement('.content-items-experience');
        let newCount = parseInt(container.dataset.contador) * 2;
        let nextCount = newCount * 2;
        let limiteProductos = parseInt(container.dataset.limite) + 1;
            container.dataset.contador = newCount;
            container.dataset.limite = nextCount;
        let items = getAllElement('.content-items-experience .page-'+newCount);        
        if(items.length != 0){
            let height = getElement('.content-items-experience').offsetHeight + 20;          
            let MaxHeight = height * limiteProductos;
            let nextItems = getElement('.content-items-experience .page-'+nextCount);     
                container.style = "max-height: "+MaxHeight+"px;";
            if(nextItems === null){
                getElement('.content-show-more').classList.add('d-none')
                container.style = "max-height: 100%";
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
        return (data.length <= 3 ) ? 'd-none': 'd-flex';
    }
    const filterItems = (info, idProduct) => {
        let data = []
        info.forEach((ele, index) => {
            if(parseoTexto(ele.titulo) != idProduct){
                data.push(ele);
            }
        });
        return (data.length == 0 ) ? 'd-none': 'd-flex';
    }
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
    .section-experience .container-experience .content-items-experience{
        max-height: 585px;
        overflow: hidden;
        padding: 0 1rem 1rem;
        gap: 2rem;
    }
    .section-experience .container-experience .content-items-experience .items-experience{
        box-shadow: 0px 4px 7px 2px rgb(0 0 0 / 53%);
    }
    @media(max-width: 680px){
        /*-------------------------------------------------------------
        # Seccion Productos Servicios   
        --------------------------------------------------------------*/
        .section-experience .container-experience .content-items-experience{
            max-height: 1710px;
        }
    }
</style>