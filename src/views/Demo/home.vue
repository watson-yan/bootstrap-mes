<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Demo extends Vue {
  mounted () {
    console.log($)
  }
}
</script>
<style lang="less" scoped>
</style>
