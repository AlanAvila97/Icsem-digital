<template>
    <section class="section-contact-general">
        <div class="container-contact-general d-flex">
            <div class="image-contact">
                <NuxtPicture
                    src="images/conctanos.jpg"
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
                        id:'img-contactanos', 
                        class:'img-fluid ', 
                        style:'display:block', 
                        alt: 'Image',                                
                        title: 'Imagen',
                        'data-my-data': 'my-value'}"/>
            </div>
            <div class="info-contact d-flex">
                <FormContact></FormContact>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

</style>