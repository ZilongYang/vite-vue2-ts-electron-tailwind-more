<template>
  <div>
    Demo1 {{ str }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Demo1 extends Vue {
  @Prop({default: ''}) msg?: string

  str: string = '测试文字，点击电竞酒店' 

  add(): number {
    console.log('haah')
    return 12
  }
}
</script>

<style>

</style>