<template>
    <main id="wrapper" class="experience">
        <ProductosView></ProductosView>
        <section class="pt-md-70 section-experience">
            <div class="container-experience d-flex">
                <div class="title-experience d-flex wow animate__animated animate__bounce" data-wow-delay="0.1s">
                    <h2 id="Experiencias">Titulo de Experiencia</h2>                    
                </div>
                <div class="content-items-experience">
                    <nuxt-link to="/experiencia/1" class="items-experience d-flex wow animate__animated animate__fadeInUp" 
                               arial-label="" data-wow-delay="0.1s">                        
                        <div class="visual-experience">
                            <NuxtPicture
                                src="images/img-600x400-3.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-experience-1', 
                                    class:'img-fluid ', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                        </div>                        
                        <div class="info-experience">
                            <div class="content-title">
                                <h2>Empresa</h2>
                            </div>  
                            <h3>Subtitulo</h3>
                            <p class="sinopsis">
                                We Are pioneers of solar & renewable energy industry
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>  
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/experiencia/2" class="items-experience d-flex wow animate__animated animate__fadeInUp" 
                               data-wow-delay="0.3s">
                        <div class="visual-experience">
                            <NuxtPicture
                                src="images/img-600x400-4.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-experience-2', 
                                    class:'img-fluid ', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                        </div>                        
                        <div class="info-experience">
                            <div class="content-title">
                                <h2>Empresa</h2>
                            </div>  
                            <h3>Subtitulo</h3>
                            <p class="sinopsis">
                                We Are pioneers of solar & renewable energy industry
                            </p>
                            <p class="redirect"> 
                                Da click para para saber más <Icon name="ri:arrow-right-line" />
                            </p>  
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/experiencia/3" class="items-experience d-flex wow animate__animated animate__fadeInUp" 
                               data-wow-delay="0.5s">
                        <div class="visual-experience">
                            <NuxtPicture
                                src="images/img-600x400-5.jpg"
                                densities="x1 x2"
                                preset="blog" 
                                format="webp" 
                                quality="90" 
                                fit="cover" 
                                preload
                                :imgAttrs="{
                                    id:'img-experience-3', 
                                    class:'img-fluid ', 
                                    alt: 'Image',                                
                                    title: 'Imagen',
                                    'data-my-data': 'my-value'}"/>  
                        </div>                        
                        <div class="info-experience">
                            <div class="content-title">
                                <h2>Empresa</h2>
                            </div>  
                            <h3>Subtitulo</h3>
                            <p class="sinopsis">
                                We Are pioneers of solar & renewable energy industry
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
    import {ref, onMounted, onBeforeUpdate, onBeforeUnmount} from 'vue';
    // css
    import 'assets/css/experiencias.css'
    // 
    onMounted(() => {
        var wow = new WOW(
                            {
                                boxClass:     'wow',      // animated element css class (default is wow)
                                animateClass: 'animate__animated', // animation css class (default is animated)
                                offset:       0,          // distance to the element when triggering the animation (default is 0)
                                mobile:       true,       // trigger animations on mobile devices (default is true)
                                live:         true,       // act on asynchronously loaded content (default is true)
                                callback:     function(box) {
                                // the callback is fired every time an animation is started
                                // the argument that is passed in is the DOM node being animated
                                },
                                scrollContainer: null,    // optional scroll container selector, otherwise use window,
                                resetAnimation: true,     // reset animation on end (default is true)
                            }
                        );
        wow.init();
    });
</script>

<style  scoped>

</style>