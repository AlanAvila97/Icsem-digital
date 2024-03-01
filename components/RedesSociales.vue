<template>
    <div class="content-social-networks d-flex">
        <div class="info">
            <Icon name="subway:location"/>
            <h2>{{ infoIcsem?.datos[0].titulo }}</h2>
        </div>
        <div class="aditionals-social-networks">
            <div class="company-phone">
                <Icon name="ic:baseline-local-phone" size="1.5rem" />
                <h2>{{ infoIcsem?.datos[1].titulo }}</h2>
            </div>
            <div class="social-networks d-none">
                <nuxt-link to="/" target="_blank" rel="Redireccion Facebook" aria-label="Redireccion Facebook">
                    <Icon name="fa-brands:facebook-f"/>
                </nuxt-link>
                <nuxt-link to="/" target="_blank" rel="Redireccion Twitter" aria-label="Redireccion Twitter">
                    <Icon name="fa-brands:twitter"/>
                </nuxt-link>
                <nuxt-link to="/" target="_blank" rel="Redireccion Twitter" aria-label="Redireccion Twitter">
                    <Icon name="fa-brands:instagram"/>                
                </nuxt-link>
            </div>
            <div class="change-mode">
                <label class="ui-switch" to="checbox-mode">
                    <input id="checbox-mode" name="checbox-mode" type="checkbox" 
                           alt="Cambio de color de sitio"
                           :class="$colorMode.value"                           
                           @click="onClick">
                    <div class="slider">
                    <div class="circle"></div>
                    </div>
                </label>              
            </div>
        </div>
    </div>
</template>
<script setup>
    // css 
    import 'assets/css/switchDarkMode.css'
    // Global Data (Pinia)
    import {dataGlobal} from '@/store/globalData'
    import {infoGlobal} from '@/store/jsonData'
    // 
    const DataGlobal = dataGlobal();
    const InfoGlobal = infoGlobal();   
    const { fetchInfoIcsem } = DataGlobal;
    const { fetchData } = InfoGlobal; 
    // 
    const jsonIcsem = await fetchInfoIcsem('Api');
    //
    // const { data: infoIcsem } = await useFetch(jsonIcsem)
    const infoIcsem = await fetchData('api');
    // Vue
    import { onMounted } from "vue";
    const colorMode = useColorMode()
    const statusViewMode = () => {
        let element = document.querySelector('#checbox-mode');
        if(colorMode.value === 'dark' || colorMode.value === 'system'){
            element.setAttribute('checked', '')        
        }
    }
    const onClick = (e) => (
        colorMode.preference = ( (e.target.checked) ? 'dark' : 'light')
    )
    onMounted(() => {
        statusViewMode()
    });
</script>
<style scoped>
</style>