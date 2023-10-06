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
                  <!-- <button @click="onClick" value="light">Light</button>
                  <button @click="onClick" value="dark">Dark</button> -->
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

  </style>