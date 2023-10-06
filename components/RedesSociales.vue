<template>
    <div class="content-social-networks d-flex">
        <div class="info">
            <Icon name="subway:location"/>
            <h2>Ubicacion</h2>
        </div>
        <div class="aditionals-social-networks">
            <div class="social-networks d-flex">
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
                <!-- <button @click="onClick" value="light">Light</button>
                <button @click="onClick" value="dark">Dark</button> -->
            </div>
        </div>
    </div>
</template>
<script setup>
    // css 
    import 'assets/css/switchDarkMode.css'
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