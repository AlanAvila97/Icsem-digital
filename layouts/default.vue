<template>
    <div>
        <LoadingBar></LoadingBar>        
        <!-- <LoadingBar2></LoadingBar2>         -->
        <RedesSociales></RedesSociales>
        <NavbarView></NavbarView>
        <slot/>        
        <FooterView></FooterView>
        <ButtonUp></ButtonUp>
    </div>
</template>
<script setup>
    import { onMounted } from 'vue';
    const { gtag, grantConsent, revokeConsent } = useGtag()
    function acceptTracking() {
        grantConsent('G-L19R8RP6KH')
    }

    onMounted(() => {
      acceptTracking();
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-L19R8RP6KH');
    })
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