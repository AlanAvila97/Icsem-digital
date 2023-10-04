<template>
    <main id="wrapper" class="product">
        <section class="pt-md-70 section-products">
        <h2 style="color:#000;">{{ $route.params.id }}</h2>
        </section>
    </main>
</template>

<script setup>
    // Vue
    import { useRoute, useRouter } from "vue-router";
    // 
    const route = useRoute();
    const router = useRouter();
</script>

<style scoped>

</style>