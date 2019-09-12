<template>
  <div class="p-4">
    <h3 class="title">按钮 #Button</h3>
    <br>
    <h5 class="mb-3">按钮分类</h5>
    <div class="button-container mb-3">
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-link">Link</button>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(buttonTemp1)">
      </code>
    </pre>
    <br>
    <br>
    <h5 class="mb-3">按钮尺寸</h5>
    <div class="button-container mb-3">
      <!-- 小型按钮 -->
      <button type="button" class="btn btn-primary btn-sm">Primary</button>
      <button type="button" class="btn btn-secondary btn-sm">Secondary</button>
      <button type="button" class="btn btn-light btn-sm">Light</button>
      <!-- 大型按钮 -->
      <button type="button" class="btn btn-primary btn-lg">Primary</button>
      <button type="button" class="btn btn-secondary btn-lg">Secondary</button>
      <button type="button" class="btn btn-light btn-lg">Light</button>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(buttonTemp2)">
      </code>
    </pre>

    <br>
    <br>
    <h5 class="mb-3">按钮组</h5>
    <div class="mb-3">
      <div class="btn-group">
        <button type="button" class="btn btn-light">Left</button>
        <button type="button" class="btn btn-light">Middle</button>
        <button type="button" class="btn btn-light">Right</button>
      </div>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(buttonTemp3)">
      </code>
    </pre>
    <br>
    <br>

    <br>
    <br>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class ComponentButton extends Vue {
  @Provide() buttonTemp1:string = `  
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>`

  @Provide() buttonTemp2:string = `
    <!-- 小型按钮 -->
    <button type="button" class="btn btn-primary btn-sm">Primary</button>
    <button type="button" class="btn btn-secondary btn-sm">Secondary</button>
    <button type="button" class="btn btn-light btn-sm">Light</button>
    <!-- 大型按钮 -->
    <button type="button" class="btn btn-primary btn-lg">Primary</button>
    <button type="button" class="btn btn-secondary btn-lg">Secondary</button>
    <button type="button" class="btn btn-light btn-lg">Light</button>
  `
  @Provide() buttonTemp3:string = `
    <div class="btn-group">
      <button type="button" class="btn btn-light">Left</button>
      <button type="button" class="btn btn-light">Middle</button>
      <button type="button" class="btn btn-light">Right</button>
    </div>
  `

  mounted () {
  }
}
</script>
<style lang="less" scoped>
.button-container {
  .btn {
    margin: 0 .3rem .3rem;
  }
}
</style>
