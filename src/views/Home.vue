<template>
  <div>
    <h1>Home</h1>
    <div class=" text-red-500">count: {{ count }}</div>
    <button class="btn btn-primary btn-sm" @click="addCount">+1</button>
    <button class="btn">Button</button>

  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    addCount() {
      this.$store.commit("addCount", 1);
    },
  },
};
</script>
