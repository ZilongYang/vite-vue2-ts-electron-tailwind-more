<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    require: false,
    default: "Haha"
  }
})


const count = ref(0)

const add = ()=>{
  count.value++
}


</script>




<template>
  <div>
    <p>
      Demo {{ msg }} 
    </p>
    <p>
      <button
        @click="add"
      >
        count++
      </button>
      <div>
        {{ count }}
      </div>
    </p>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>