<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class DataTable extends Vue {
  mounted () {
    console.log($)
  }
}
</script>
<style lang="less" scoped>
</style>
