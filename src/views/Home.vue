<template>
  <div>
    <h1>Home node:{{ nodeVer }} imUrl: {{ imUrl }}</h1>
    <div class=" text-red-500">count: {{ count }}</div>
    <button class="btn btn-primary" @click="addCount">add +1</button>
    <button class="btn ml-2">Button</button>
    <hello-world msg="Hello world message." class=" mt-6"></hello-world>
    <button class="btn" @click="remoteTest">remote test</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
// import { BrowserWindow } from '@electron/remote'
console.log(window.electron_znl.versions)

export default {
  components: {HelloWorld},
  data() {
    return {
      nodeVer: window.versions.node(),
      imUrl: import.meta.env.VITE_IM_URL,
    }
  },
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    addCount() {
      this.$store.commit("addCount", 1);
    },
    remoteTest(){
      // const win = BrowserWindow.getFocusedWindow()
      // win.close()
      electron_znl.closeWindow()
    },
  },
};
</script>
