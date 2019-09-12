<template>
  <div class="p-4">
    <h3 class="title">文字 #text</h3>
    <br>
    <h5 class="mb-3">标记分类</h5>
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-danger">Danger</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-info">Info</span>
    <span class="badge badge-light">Light</span>
    <span class="badge badge-dark">Dark</span>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentText extends Vue {}
</script>
<style lang="less" scoped>
</style>
