<template>
  <div class="p-4">
    <h3 class="title">复选框 #Checkbox</h3>
    <br>
    <h5 class="mb-3">一般用法</h5>
    <div class="mb-3">
      <div class="custom-control custom-checkbox d-inline-block mr-4">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1">温度</label>
      </div>
      <div class="custom-control custom-checkbox d-inline-block mr-4">
        <input type="checkbox" class="custom-control-input" id="customCheck2">
        <label class="custom-control-label" for="customCheck2">压力</label>
      </div>
      <div class="custom-control custom-checkbox d-inline-block mr-4">
        <input type="checkbox" class="custom-control-input" id="customCheck3">
        <label class="custom-control-label" for="customCheck3">时间</label>
      </div>
      <div class="custom-control custom-checkbox d-inline-block mr-4">
        <input type="checkbox" class="custom-control-input" id="customCheck4">
        <label class="custom-control-label" for="customCheck4">状态</label>
      </div>
      <div class="custom-control custom-checkbox d-inline-block mr-4">
        <input type="checkbox" class="custom-control-input" id="customCheck5" disabled>
        <label class="custom-control-label" for="customCheck5">工况</label>
      </div>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(checkboxTemp1)">
      </code>
    </pre>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class ComponentCheckbox extends Vue {
  @Provide() checkboxTemp1: string = `
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1">
    <label class="custom-control-label" for="customCheck1">温度</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">压力</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck3">
    <label class="custom-control-label" for="customCheck3">时间</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck4">
    <label class="custom-control-label" for="customCheck4">状态</label>
  </div>
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck5" disabled>
    <label class="custom-control-label" for="customCheck5">工况</label>
  </div>
  `
}
</script>
<style lang="less" scoped>
</style>
