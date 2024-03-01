<template>
    <main id="wrapper" class="index">
        <section class="pt-md-70 section-slider-head">
            <div class="container-slider-head">
                 <swiper 
                     :direction="'vertical'"
                     :slidesPerView="1"
                     :spaceBetween="30"
                     :rewind="true"
                     :grabCursor="true"  
                     :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                     }"     
                     :pagination='{
                         clickable: true,
                         dynamicBullets: true,
                         dynamicMainBullets: 1,
                         renderBullet: function (index, className) {
                             let title = "paginacion-"+(index + 1);
                             return "<span id="+title+" class="+className+" title="+title+"></span>";
                         }
                     }'                    
                     :modules="modules" 
                     class="swiper-head">
                     <swiper-slide v-for="(item, index) in infoIcsem.destacados" :key="index?.id">
                         <NuxtPicture
                             :src="( item?.imagenW != null ) 
                                ? urlCompletaImages+item?.imagenW 
                                : urlImages+item?.imagenN"
                             densities="x1 x2"
                             preset="blog" 
                             format="webp" 
                             quality="90" 
                             fit="cover" 
                             preload
                             loading="lazy"
                             width="1519"
                             height="550" 
                             sizes="xxl:1540px xl:1180px lg:1020px md:500px sm:320px"
                             :imgAttrs="{
                                 id:'img-1', 
                                 class:'img-fluid', 
                                 alt: 'Image',                                
                                 title: 'Imagen',
                                 'data-my-data': 'my-value'}"/>
                         <div class="container-info">
                             <h1>{{ item?.titulo }}</h1>
                             <p> {{ item?.descripcion }} </p>
                         </div>                                
                     </swiper-slide>
                 </swiper>
            </div>
        </section>
        <section class="section-values">
            <div class="title-value d-flex">
                <h2 class="wow animate__animated animate__fadeInDown" 
                    data-wow-delay="0.1s" data-wow-offset="10">{{ infoIcsem.titulo_valores[0].titulo }}</h2>
            </div>
            <div class="container-values d-flex">
                <div v-for="(item, index) in infoIcsem.valores" :key="index.id"
                     class="item-values d-flex wow animate__animated animate__fadeInUp"
                     :data-wow-delay="aumentarTiempos(index, 1)" 
                     data-wow-offset="10">
                    <div class="title-values d-flex">                        
                        <div class="icon-values">
                            <Icon name="material-symbols:award-star" size='1.5rem'/>
                        </div>
                        <h2>{{ item?.titulo }}</h2>
                    </div>
                    <div class="info-values">
                        <p> {{ item?.description }} </p> 
                    </div>
                </div>
            </div>
        </section>
        <section class="section-us">
            <div class="content-us">
                <div class="container-img-us">
                    <NuxtPicture
                        :src="( infoIcsem.quienes[0].imagenW != null ) 
                              ? urlCompletaImages+infoIcsem.quienes[0].imagenW 
                              : urlCompletaImages+infoIcsem.quienes[0].imagenN"
                        densities="x1 x2"
                        preset="blog" 
                        format="webp" 
                        quality="90" 
                        fit="cover" 
                        preload
                        loading="lazy"
                        width="760"
                        height="500" 
                        sizes="xxl:1540px xl:1180px lg:1020px md:500px sm:320px"
                        :imgAttrs="{
                            id:'img-us', 
                            class:'img-fluid ', 
                            style:'display:block', 
                            alt: 'Image',                                
                            title: 'Imagen',
                            'data-my-data': 'my-value'}"/>
                </div>
                <div class="info-us d-flex wow animate__animated animate__fadeInUp" data-wow-delay="0.4s" data-wow-offset="10">
                    <small>{{ infoIcsem.quienes[0].titulo }}</small>
                    <h2>{{ infoIcsem.quienes[0].subtitulo }}</h2>
                    <p>{{ infoIcsem.quienes[0].sinopsis }}</p>
                    <div class="list-items"></div>
                </div>
            </div>
        </section>
        <section class="section-products-services">
            <div class="container-products-services d-flex">
                <div class="title-products-services w-100 d-flex">
                    <h2 class="wow animate__animated animate__fadeInDown" 
                        data-wow-delay="0.1s" data-wow-offset="10">{{ infoIcsem.titulo_productos[0].titulo }}</h2>
                </div>
                <div class="content-items-products-services d-flex w-100">
                    <nuxt-link v-for="(item, index) in infoIcsem.productos" :key="index?.id"
                               :to="parserURL('', item?.titulo, item?.tipo)" 
                               class="items-products-services d-flex first wow animate__animated animate__fadeInUp" 
                               :data-wow-delay="aumentarTiempos(index, 2)" 
                               data-wow-offset="10" aria-label="Redirección" >
                        <div class="visuals-products-services">
                            <NuxtPicture
                                :src="( item?.imagenw != null ) 
                                      ? urlCompletaImages+item?.imagenw 
                                      : urlCompletaImages+item?.imagen"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                loading="lazy"
                                width="425"
                                height="270" 
                                sizes="xxl:1540px xl:1180px lg:1020px md:500px sm:320px"
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
                                    ? urlCompletaImages+item?.imagenw2 
                                    : urlCompletaImages+item?.imagen2"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                loading="lazy"
                                width="80"
                                height="80" 
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
                </div>
            </div>
        </section>
        <section class="section-post-sell">
            <div class="container-post-sell">
                <div class="info-post-sell d-flex wow animate__animated animate__fadeInUp"
                     data-wow-delay="0.4s" data-wow-offset="10">
                    <small>{{ infoIcsem.servicios_postventa[0].titulo }}</small>
                    <h2 class="title-post-sell">{{ infoIcsem.servicios_postventa[0].subtitulo }}</h2>
                    <p> {{ infoIcsem.servicios_postventa[0].descripcion }} </p>
                    <div class="items-post-sell d-flex">
                        <div class="item wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s" data-wow-offset="10">
                            <Icon name="uil:github" size="3rem"/>
                            <h2 class="title-item">{{ infoIcsem.servicios_postventa[0].p1 }}</h2>
                        </div>
                        <div class="item wow animate__animated animate__fadeInRight" data-wow-delay="0.5s" data-wow-offset="10">
                            <Icon name="uil:github" size="3rem"/>
                            <h2 class="title-item">{{ infoIcsem.servicios_postventa[0].p2 }}</h2>
                        </div>
                        <div class="item wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s" data-wow-offset="10">
                            <Icon name="uil:github" size="3rem"/>
                            <h2 class="title-item">{{ infoIcsem.servicios_postventa[0].p3 }}</h2>
                        </div>
                        <div class="item wow animate__animated animate__fadeInRight" data-wow-delay="0.5s" data-wow-offset="10">
                            <Icon name="uil:github" size="3rem"/>
                            <h2 class="title-item">{{ infoIcsem.servicios_postventa[0].p4 }}</h2>
                        </div>
                    </div>
                </div>
                <div class="container-img-post-sell">
                    <NuxtPicture
                        :src="( infoIcsem.servicios_postventa[0].imagenW != null ) 
                            ? urlCompletaImages+infoIcsem.servicios_postventa[0].imagenW 
                            : urlCompletaImages+infoIcsem.servicios_postventa[0].imagenN"
                        densities="x1 x2"
                        preset="blog" 
                        format="webp" 
                        quality="90" 
                        fit="cover" 
                        preload
                        loading="lazy"
                        width="760"
                        height="550"
                        sizes="xxl:1540px xl:1180px lg:1020px md:500px sm:320px"
                        :imgAttrs="{
                            id:'my-id', 
                            class:'img-fluid ', 
                            alt: 'Image',                                
                            title: 'Imagen',
                            'data-my-data': 'my-value'}"/>
                </div>
            </div> 
        </section>
        <section  class="section-emails">        
            <div class="title-emails w-100 d-flex">
                <h2 id="Contactanos" class="wow animate__animated animate__fadeInDown" 
                    data-wow-delay="0.1s" data-wow-offset="10">{{ infoIcsem.titulo_contactanos[0].titulo }}</h2>
            </div>
            <div class="container-emails d-flex">
                <div v-for="(item, index) in infoIcsem.contactos" :key="index?.id"
                     :id="`infoMail${index+1}`" class="card-emails wow animate__animated animate__fadeInUp" 
                     :data-wow-delay="aumentarTiempos(index, 1)" data-wow-offset="10">
                    <div class="card-content">
                        <div class="card-title"> {{ item?.nombre }} </div>
                        <p class="card-description"> {{ item?.puesto }} </p>
                        <p class="mail">                            
                            <Icon name="material-symbols:mail" size="1rem" />
                            {{ item?.correo }}
                        </p>
                        <p class="phone">
                            <Icon name="ic:baseline-local-phone" size="1rem" />
                            {{ item?.numero }}
                        </p>
                        <button :id="`btn${index+1}`"
                                @click="getInfoMail" 
                                :data-id="`infoMail${index+1}`"
                                class="card-button" type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#ContainerForm" 
                                aria-expanded="false" 
                                aria-controls="ContainerForm">
                                Presiona para Contactarnos
                        </button>
                    </div>
                    <div class="icon-box">
                        <span class="icon d-flex">
                            <Icon name="material-symbols:contact-mail"/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-contact-general">
            <div class="container-contact-general d-flex">
                <div class="image-contact">
                    <NuxtPicture
                        :src="( infoIcsem.imagen_contactos[0].imagenW != null ) 
                            ? urlCompletaImages+infoIcsem.imagen_contactos[0].imagenW 
                            : urlCompletaImages+infoIcsem.imagen_contactos[0].imagenN"
                        densities="x1 x2"
                        preset="blog" 
                        format="webp" 
                        quality="90" 
                        fit="cover" 
                        preload
                        loading="lazy"
                        width="760"
                        height="700"
                        sizes="xxl:1540px xl:950px lg:1020px md:500px sm:320px"
                        :imgAttrs="{
                            id:'img-contactanos', 
                            class:'img-fluid ', 
                            alt: 'Image',                                
                            title: 'Imagen',
                            'data-my-data': 'my-value'}"/>
                </div>
                <div class="info-contact d-flex">
                    <FormContact :info="infoIcsem.contactos[0]"></FormContact>
                </div>
            </div>
        </section>
        <section class="section-experience">
            <div class="container-experience d-flex">
                <div class="title-experience d-flex">
                    <h2 id="Experiencias" class="wow animate__animated animate__fadeInDown" 
                        data-wow-delay="0.1s" data-wow-offset="10">{{ infoIcsem.titulo_experiencia[0].titulo }}</h2>                    
                </div>
                <div class="content-items-experience">
                    <nuxt-link v-for="(item, index) in infoIcsem.experiencia" :key="index?.id"
                               :to="parserURL('/experiencia/', item?.empresa, 'Experiencia')" 
                               class="items-experience d-flex wow animate__animated animate__fadeInUp" 
                               :data-wow-delay="aumentarTiempos(index, 2)" data-wow-offset="10" arial-label="">                        
                        <div class="visual-experience">
                            <NuxtPicture
                                :src="( item?.imagenw != null ) 
                                     ? urlCompletaImages+item?.imagenw 
                                     : urlCompletaImages+item?.imagen"
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
                            <h3>{{ item?.titulo }}</h3>
                            <p class="sinopsis">
                               {{ item?.subtitulo }}
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>  
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
    // Vue
    import { onMounted, computed } from "vue";
    // vue router
    import { useRoute, useRouter } from "vue-router";
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/modules';
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    import {infoGlobal} from '@/store/jsonData'
    // 
    const DataGlobal = dataGlobal();   
    const InfoGlobal = infoGlobal();   
    const route = useRoute();
    const router = useRouter();
    const urlImages = 'https://icsem.mx/Admin/admin/assets/php/';
    const urlCompletaImages = 'https://icsem.mx/Admin/admin/assets/php/uploads/';
    // 
    const { getElement, scrollSection, initializationWow, fetchInfoIcsem, parseoTexto } = DataGlobal; 
    const { fetchData } = InfoGlobal; 
    // 
    const modules = [Navigation, Pagination, Mousewheel, Autoplay];
    // 
    const jsonIcsem = await fetchInfoIcsem('Api');
    //
    const infoIcsem = await fetchData('api');
    // const { data: infoIcsem } = await useFetch(jsonIcsem);    
    // console.log(infoIcsem1);
    /**
    * @description Funcion que obtiene la informacion del tipo de correo que se enviara
    */   
    function getInfoMail(e) {
        let id = e.target.dataset.id;
        let title = getElement('#'+id+' .card-title');
        let desc = getElement('#'+id+' .card-description');
        let mail = getElement('#'+id+' .mail');
        let phone = getElement('#'+id+' .phone');
        // 
        clickScroll();
        // 
        getElement("#EmailIcsem").value = mail.innerText;
        setInfoForm(getElement('#contactGeneral .title'), title.innerText);
        setInfoForm(getElement('#contactGeneral .sinopsis'), desc.innerText);
        setInfoForm(getElement('#contactGeneral .message'), 'Estas por contactarnos al correo ');
        setInfoForm(getElement('#contactGeneral .mail'), mail.innerText);
        setInfoForm(getElement('#contactGeneral .phone'), phone.innerText);
    }
    /**
    * @description Funcion reescribe la informacion del formulario
    */  
    function setInfoForm(element, text) {
        element.innerText = text;
    }
    /**
        * @description Funcion que hace un scroll al dar click a un elemento del nabvar (blog, podcast)
    */
    const clickScroll = (e) => {
        let element = getElement('#contactGeneral');
        let page = document.querySelector('main.index');
        if(page != null){
            scrollSection(element, 90);
        }else{
            console.log('sa');
        }
    }
    const aumentarTiempos = (index, plus) => {
        let i = (index === 0) ? index + 1 : index + plus;
        return `0.${i}s`
    }
    const parserURL = (direccion, titulo, tipo) => {        
        let TiposUrl = { 
                    'Producto': '/productos/', 
                    'Servicio': '/servicios/', 
                    'Experiencia': '/experiencia/', 
                  };
        return `${TiposUrl[tipo] + parseoTexto(titulo)}`;
    }
    onMounted(() => {
        initializationWow();
    });
</script>
<style scoped>

    #Contactanos {
        scroll-margin-block-start: 110px;
        scroll-margin-block-end: 110px;
    }
    @media(max-width: 780px){
        #Experiencias {
            scroll-margin-block-start: 110px;
            scroll-margin-block-end: 110px;
        }   
    }
    .prueba-image-nuxt{
        width: 100%;
        height: 300px;
    }
</style>