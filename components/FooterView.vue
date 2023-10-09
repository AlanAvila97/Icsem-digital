<template>
    <footer class="section-footer">
        <div class="container-footer d-flex">
            <div class="info-contact wow animate__animated animate__fadeInDown" data-wow-delay="0.1s" data-wow-offset="10">
                <h2>Información de contacto</h2>
                <p>
                    <Icon name="ic:baseline-location-on" size="1.5rem" />
                    Ubicación                    
                </p>
                <p>
                    <Icon name="ic:baseline-local-phone" size="1.5rem" />
                    Telefono
                </p>
                <p>                    
                    <Icon name="material-symbols:mail" size="1.5rem" />
                    Correo                    
                </p>
            </div>
            <div class="notice-privacy wow animate__animated animate__fadeInDown" data-wow-delay="0.2s" data-wow-offset="10">
                <h2>Aviso de privacidad</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt repellat sapiente unde voluptates illo voluptatum officia,
                     maiores earum corporis a corrupti, porro id ipsam repellendus. Molestiae aliquam voluptas inventore!
                </p>
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
                <p class="scroll-element scroll-contactanos" data-element="Contactanos" 
                aria-label="Scroll a Sección Contactanos">
                    Contactanos
                </p>
                <p class="scroll-element scroll-experiencia" data-element="Experiencias" 
                aria-label="Scroll a Sección Inicio">
                    Experiencia
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import 'assets/css/footer.css'
</script>

<style scoped>

</style>