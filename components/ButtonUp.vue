<template>
    <div class="container-btn-up">
        <button type="button" class="btn-up" 
                @click="scrollTop"
                alt="Botón para regresar al top de la pagina">
            <Icon name="material-symbols:fitbit-arrow-upward"/>
        </button>
    </div>
</template>

<script setup>
    // Vue
    import { onMounted } from "vue";
    /**
    * @description Funcion que hace un scroll al top de la vista
    */ 
    const scrollTop = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }
    onMounted(() => {     
    }); 
</script>

<style scoped>
    .container-btn-up{
        position: relative;
        padding: 1rem;
    }
    .container-btn-up .btn-up{
        width: 60px;
        height: 60px;
        border-radius: 5rem;
        background: var(--green-logo-color);
        border: none;
        box-shadow: 0px 0px 4px 1px #000000b5;
        position: fixed;
        bottom: 0.5rem;
        right: 0.8rem;
        z-index: 1000;
    }
    .container-btn-up .btn-up svg{
        color: var(--white-icon-color);
        font-size: 2rem;
    }
</style>