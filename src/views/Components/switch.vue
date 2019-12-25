<template>
  <div class="p-4">
    <h3 class="title">开关 #Switch</h3>
    <br>
    <h5 class="mb-3">一般用法</h5>
    <div class="mb-3">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1">
        <label class="custom-control-label" for="customSwitch1">1号阀门</label>
      </div>
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
        <label class="custom-control-label" for="customSwitch2">2号阀门</label>
      </div>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(radioTemp1)">
      </code>
    </pre>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class ComponentSwitch extends Vue {
  @Provide() radioTemp1: string = `
  <div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">尺寸</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">颜色</label>
  </div>
  `
}
</script>
<style lang="less" scoped>
</style>
