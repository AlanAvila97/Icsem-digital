<template>
    <div>
        <LoadingBar></LoadingBar>        
        <RedesSociales></RedesSociales>
        <NavbarView></NavbarView>
        <slot/>        
        <!-- <FooterView></FooterView> -->
        <!-- <ButtonUp></ButtonUp> -->
    </div>
</template>
<script setup>

</script>
<style scoped>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
  .link-active {
      color: var(--green-logo-color);
  }
</style>