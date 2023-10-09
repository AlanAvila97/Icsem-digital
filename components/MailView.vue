<template>
    <section class="section-emails">        
        <div class="title-emails w-100 d-flex">
            <h2 id="Contactanos" class="wow animate__animated animate__fadeInDown"
                data-wow-delay="0.1s" data-wow-offset="10">Contactanos</h2>
        </div>
        <div class="container-emails d-flex">
            <div id="infoMail1" class="card-emails wow animate__animated animate__fadeInUp"
                 data-wow-delay="0.5s" data-wow-offset="10">
                <div class="card-content">
                    <div class="card-title">Contacto 1</div>
                    <p class="card-description">This is a cool card design.</p>
                    <p class="mail">demo@prueba.com</p>
                    <button id="btn1"
                            class="card-button" type="button" 
                            @click="getInfoMail" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#ContainerForm" 
                            data-id="infoMail1"
                            aria-expanded="false" 
                            aria-controls="ContainerForm">
                            Click Me
                    </button>
                </div>
                <div class="icon-box">
                    <span class="icon d-flex">
                        <Icon name="material-symbols:contact-mail"/>
                    </span>
                </div>
            </div>
            <div id="infoMail2" class="card-emails wow animate__animated animate__fadeInUp"
                 data-wow-delay="0.3s" data-wow-offset="10">
                <div class="card-content">
                    <div class="card-title">Contacto 2</div>
                    <p class="card-description">This is a cool card design.</p>
                    <p class="mail">demo1@prueba.com</p>
                    <button id="btn2"
                            class="card-button" type="button" 
                            @click="getInfoMail" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#ContainerForm" 
                            data-id="infoMail2"
                            aria-expanded="false" 
                            aria-controls="ContainerForm">
                        Click Me
                    </button>
                </div>
                <div class="icon-box">
                    <span class="icon d-flex">
                        <Icon name="material-symbols:contact-mail"/>
                    </span>
                </div>
            </div>
            <div id="infoMail3" class="card-emails wow animate__animated animate__fadeInUp"
                 data-wow-delay="0.1s" data-wow-offset="10">
                <div class="card-content">
                    <div class="card-title">Contacto 3</div>
                    <p class="card-description">This is a cool card design.</p>
                    <p class="mail">demo2@prueba.com</p>
                    <button id="btn3"
                            class="card-button" type="button" 
                            @click="getInfoMail"  
                            data-id="infoMail3"
                            aria-expanded="false" 
                            aria-controls="ContainerForm">
                            Click Me
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
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    // 
    const DataGlobal = dataGlobal();  
    // 
    const { getElement, scrollSection, initializationWow } = DataGlobal; 
    /**
    * @description Funcion que obtiene la informacion del tipo de correo que se enviara
    */   
    function getInfoMail(e) {
        let id = e.target.dataset.id;
        let title = getElement('#'+id+' .card-title');
        let desc = getElement('#'+id+' .card-description');
        let mail = getElement('#'+id+' .mail');
            // 
            clickScroll();
            // 
            getElement("#EmailIcsem").value = mail.innerText;
            setInfoForm(getElement('#contactGeneral .title'), title.innerText);
            setInfoForm(getElement('#contactGeneral .message'), desc.innerText);
            setInfoForm(getElement('#contactGeneral .mail'), mail.innerText);
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
            scrollSection(element, 90);
    }
    onMounted(() => {
        initializationWow();
    });
</script>

<style scoped>
    .section-emails{
        
    }
</style>