<template>
    <footer class="section-footer">
        <div class="container-footer d-flex">
            <div class="info-contact">
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
            <div class="notice-privacy">
                <h2>Aviso de privacidad</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sunt repellat sapiente unde voluptates illo voluptatum officia,
                     maiores earum corporis a corrupti, porro id ipsam repellendus. Molestiae aliquam voluptas inventore!
                </p>
            </div>
            <div class="links-navigation">
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