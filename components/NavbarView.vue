<template>
    <header class="header fixed-header-top header-once" @scroll="scrollFunction()">
        <div class="container-header">
            <div class="content-menu-hamburguer">
                <label for="check" class="menuButton">
                    <input id="check" type="checkbox" @click="openMenu">
                    <span class="top"></span>
                    <span class="mid"></span>
                    <span class="bot"></span>
                </label> 
            </div><!-- End div content menu hamburguer -->
            <div class="logo h-100">
                <nuxt-link to="/">                    
                    <NuxtPicture
                        src="images/logo_icsem.png"
                        densities="x1 x2"
                        preset="blog" 
                        format="webp" 
                        quality="90" 
                        fit="cover" 
                        preload
                        loading="lazy"
                        :imgAttrs="{
                            id:'Logo', 
                            class:'', 
                            style:'', 
                            alt: 'Logo Icsem',                                
                            title: 'Logo Icsem'}"/>
                </nuxt-link>
            </div><!-- End div logo -->
            <div class="sections-nav">
                <ul class="elements-nav">
                    <li>
                        <nuxt-link to="/" aria-label="Redirección Inicio">
                            Inicio
                        </nuxt-link>
                    </li>
                    <li>   
                        <nuxt-link to="/productos" aria-label="Redirección a Productos">
                            Productos
                        </nuxt-link>
                    </li>
                    <li>   
                        <nuxt-link to="/servicios" aria-label="Redirección a Servicios">
                            Servicios
                        </nuxt-link>
                    </li>
                    <li>   
                        <nuxt-link to="/experiencia" class="scroll-element scroll-experiencia" 
                            aria-label="Scroll a Sección Inicio">
                            Experiencia
                        </nuxt-link>
                    </li>
                    <li>   
                        <div class="scroll-element scroll-contactanos" data-element="Contactanos" 
                             @click="clickScrollElementsIndex" aria-label="Scroll a Sección Contactanos">
                            Contactanos
                        </div>
                    </li>
                </ul>
            </div><!-- End div sections nav -->
        </div>
        <div id="sidebarMenu">
            <div class="container-menu scroll-menu">
                <nuxt-link id="MenuInicio" to="/" class="items Seccion-Menu" aria-label="Redirección Inicio">
                    Inicio
                </nuxt-link>
                <nuxt-link id="MenuProductow" to="/productos" class="items Seccion-Menu" aria-label="Redirección a Productos">
                    Productos
                </nuxt-link>
                <nuxt-link id="MenuServicios" to="/servicios" class="items Seccion-Menu" aria-label="Redirección a Servicios">
                    Servicios
                </nuxt-link>
                <nuxt-link                                      
                    id="MenuExperiencias" to="/experiencia" class="items Seccion-Menu" 
                    aria-label="Scroll a Sección Contactanos">
                    Experiencia
                </nuxt-link>
                <p                    
                    id="MenuContactanos" class="items Seccion-Menu" data-element="Contactanos"
                    @click="clickScrollElementsIndex" aria-label="Scroll a Sección Inicio">
                    Contáctanos
                </p>
            </div>
        </div> 
    </header>
</template>

<script setup>
    // 
    import { onMounted } from "vue";
    // vue router
    import { useRoute, useRouter } from "vue-router";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // Composables
    // 
    const DataGlobal = dataGlobal();   
    const router = useRouter();
    // 
    const { getElement, scrollSection } = DataGlobal; 
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
    * @description Funcion que detecta el tamaño de la pantalla para ocultar el menu de hamburguesa en desktop
    */
    function reportWindowSize() {
        let status = getElement('#check').checked;
        if(window.innerWidth >= '780'){
            if(status){
                getElement('#check').click();
            }
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
    /**
    * @description Funcion que abre el menu de hamburguesa
    */  
    const openMenu = (e) => {
        let status = e.target.checked;
        let element = getElement('#sidebarMenu');
        let body = getElement('body');
        if(status){
            body.classList.add('overflow-hidden')
            element.classList.add('active');    
        }else{
            body.classList.remove('overflow-hidden')
            element.classList.remove('active');    
        }
    }
    const comprobationTopNavbar = () =>{
        let element = getElement('header');
        console.log(element.offsetTop);
        console.log(document.body.scrollTop);
        console.log(document.documentElement.scrollTo);
        if (document.body.scrollTop > 39 || document.documentElement.scrollTop > 39) {
            document.querySelector('.header').classList.add('top-0'); 
        }
    }
    onMounted(() => {
        comprobationTopNavbar();
        window.onscroll = function() { scrollFunction(); };
        window.onresize = function() { reportWindowSize(); };
    });
</script>

<style scoped>

</style>