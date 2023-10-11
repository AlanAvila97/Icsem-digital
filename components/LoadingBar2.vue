<template>
    <div class="preloader" :class="(loading) ? '' : 'preloader-fade d-none'" >
        <NuxtPicture                        
            src="images/bg-preloader_icsem.png"
            densities="x1 x2"
            preset="blog" 
            format="webp" 
            quality="90" 
            fit="cover" 
            preload
            loading="lazy"
            :imgAttrs="{
                id:'Logo', 
                class:'bg-preloader', 
                style:'', 
                alt: 'Logo Icsem',                                
                title: 'Logo Icsem'}"/>
    </div>
</template>

<script setup>
    // vue
    import { ref, onMounted} from 'vue'
    // css
    import 'assets/css/loader.css'
    // 
    const loading = ref(true);
    /**
    * @description Funcion muestra el preloader y desaparece cuando este cargada la pagina 
    */   
    const preload = () => {
        document.querySelector('body').classList.add('overflow-auto');
        loading.value = false;
    }
    onMounted(() => {
        preload();
    }); 
</script>

<style scoped>
.preloader{ 
    display:flex; 
    justify-content:center; 
    align-items: flex-end;
    height:100vh; 
    width:100%; 
    background-size: 100% 100%;    
    background: var(--white-icon-color);
    position: fixed; 
    top:0; 
    left:0; 
    z-index:9999; 
    transition:opacity 1.5s linear;                    
}    
.preloader-fade{
    transition: all 0.5s;
    opacity: 0;
    filter: blur(1rem);
    z-index: 0;
}
</style>
