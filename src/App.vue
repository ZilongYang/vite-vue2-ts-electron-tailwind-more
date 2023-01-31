<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue';
import Demo1 from './components/Demo1.vue';
</script>

<template>
  <div class=" m-3">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/hello">Hello</router-link> | 
      <router-link to="/about">About</router-link>  
    </nav>
    <router-view />
    <!-- <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" /> 
    <Demo />   
    <Demo1 />    -->
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
