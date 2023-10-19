<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
    import { onMounted } from 'vue';
    const { gtag, grantConsent, revokeConsent } = useGtag()
    function acceptTracking() {
        grantConsent('G-L19R8RP6KH')
    }
    onMounted(() => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-L19R8RP6KH');
      acceptTracking();
    })
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: .4;
    filter: blur(1rem);
  }
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0.4;
    filter: blur(1rem);
  }
  /*
  **/
  .router-link-active {
    
  }
  .router-link-active:hover {
      color: var(--green-logo-color)  ;    
      color: var(--green-dark-color)  ;    
  }
  .router-link-exact-active{
    color: var(--green-logo-color)!important;
    color: var(--green-dark-color)!important;
    font-weight: bold;
  }
</style>