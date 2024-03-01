<template>
    <footer class="section-footer">
        <div class="container-footer d-flex">
            <div class="info-contact wow animate__animated animate__fadeInDown" data-wow-delay="0.1s" data-wow-offset="10">
                <h2>Información de contacto</h2>
                <p class="ubi">
                    <Icon name="ic:baseline-location-on" size="1.5rem" />
                    {{ infoIcsem?.datos[0].titulo }}                    
                </p>
                <p>
                    <Icon name="ic:baseline-local-phone" size="1.5rem" />
                    {{ infoIcsem?.datos[1].titulo }} 
                </p>
                <p>                    
                    <Icon name="material-symbols:mail" size="1.5rem" />
                    {{ infoIcsem?.datos[2].titulo }} 
                </p>
            </div>
            <div class="notice-privacy wow animate__animated animate__fadeInDown" data-wow-delay="0.2s" data-wow-offset="10">
                <h2>{{ infoIcsem?.aviso[0].titulo }}</h2>
                <p>{{ infoIcsem?.aviso[1].titulo }}</p>
            </div>
            <div class="links-navigation wow animate__animated animate__fadeInDown" data-wow-delay="0.3s" data-wow-offset="10">
                <h2>Lista de Navegación</h2>
                <nuxt-link to="/" aria-label="Redirección Inicio">
                    Inicio
                </nuxt-link>
                <nuxt-link to="/productos" aria-label="Redirección a Productos">
                    Productos
                </nuxt-link>
                <nuxt-link to="/servicios" aria-label="Redirección a Servicios">
                    Servicios
                </nuxt-link>
                <nuxt-link to="/experiencia" class="scroll-element scroll-experiencia" data-element="Experiencias" 
                    alt="Redirección a Experiencia" title="Redirección a Experiencia" aria-label="Redirección a Experiencia">
                    Experiencia
                </nuxt-link>
                <p class="scroll-element scroll-contactanos" data-element="Contactanos" 
                    @click="clickScrollElementsIndex" aria-label="Scroll a Sección Contactanos">
                    Contactanos
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
    // css
    import 'assets/css/footer.css'
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    import {infoGlobal} from '@/store/jsonData'
    // 
    const DataGlobal = dataGlobal(); 
    const InfoGlobal = infoGlobal();   
    const { getElement, scrollSection, fetchInfoIcsem } = DataGlobal; 
    const { fetchData } = InfoGlobal; 
    // 
    const jsonIcsem = await fetchInfoIcsem('Api');
    //
    // const { data: infoIcsem } = await useFetch(jsonIcsem)
    const infoIcsem = await fetchData('api');
    /**
     * @description Funcion que da opacidad o da backgound solido al navbar dependiendo de la posición del top de la vista
    */
    function scrollFunction() {
        let mobile = (/iphone|webOS|Windows Phone|iPod|Android|ipad/i.test(navigator.userAgent.toLowerCase()));
        if (document.body.scrollTop > 39 || document.documentElement.scrollTop > 39) {
            document.querySelector('.header').classList.add('top-0') 
        } else {
            document.querySelector('.header').classList.remove('top-0');
        }
    }    
    /**
        * @description Funcion que hace un scroll al dar click a un elemento del nabvar (Contacatnos, Experiencias)
    */
    const clickScrollElementsIndex = (e) => {
        // 
        if(getElement('#check').checked){
            getElement('#check').click();
        }
        // 
        let element = e.target.dataset.element;
        let page = document.querySelector('main.index');
        if(page == null){     
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0;
            router.push("/#"+element);
        }else{
            scrollSection(getElement('#'+element), 70);
        }
    }
</script>

<style scoped>

</style>