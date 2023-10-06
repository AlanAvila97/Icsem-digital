<template>
    <main id="wrapper" class="bg-home index">
        <section class="pt-md-70 section-slider-head">
            <div class="container-slider-head">
                <h1>Color mode: {{ $colorMode.value }}</h1>
                <select v-model="$colorMode.preference">
                    <option value="system">System</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
                <div >
                  <button @click="onClick" value="light">Light</button>
                  <button @click="onClick" value="dark">Dark</button>
                </div>
            </div>
        </section>
    </main>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  
  console.log(colorMode.preference)
  const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
  </script>
  
  <!-- body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  } -->
  <!-- color: var(--white-icon-color)!important; -->
  <!-- .dark-mode body h2{
    color: var(--white-icon-color)!important;
  } -->

  <style>
  .dark-mode body {
    background-color: var(--Outer-color);
    color: var(--white-icon-color);
  }
  .dark-mode body .content-social-networks{    
    background-color: var(--white-icon-color);
  }
  .dark-mode body .content-social-networks *{    
    color: var(--green-logo-color)!important;
  }
  .dark-mode body .header{
    background-color: var(--trout-color);
    background-color: var(--Outer-color);
    background-color: #1e2528;
  }
  .dark-mode body .header .container-header .logo picture img{
    filter: brightness(2) drop-shadow(2px 4px 6px #5f6061);
  }
  .dark-mode body .header .container-header .sections-nav .elements-nav li a{
    color: var(--white-icon-color);
  }
  .dark-mode body .header .container-header .sections-nav .elements-nav li .scroll-element{
    color: var(--white-icon-color);
  }
  .dark-mode body .router-link-exact-active{
    color: var(--green-light-color)!important;
  }
  .dark-mode body .section-values .title-value h2,
  .dark-mode body .section-emails .title-emails h2,
  .dark-mode body .section-experience .container-experience .title-experience h2,
  .dark-mode body .section-products-services .container-products-services .title-products-services h2{
    color: var(--white-icon-color);
  }
  .dark-mode body .section-products-services .container-products-services .categories-products .list-categories .item-categorie p{
    color: var(--white-icon-color);
  }
  .dark-mode body .section-products-services .container-products-services .categories-products .list-categories .item-categorie.active p{
    color: var(--green-light-color);
  }
  .dark-mode body .section-product .container-sinopsis-product .sinopsis{
    box-shadow: 0px 0px 4px 1px #ffffff33;
  }
  </style>