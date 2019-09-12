<template>
  <div class="p-4">
    <h3 class="title">标记 #Badge</h3>
    <br>
    <h5 class="mb-3">标记分类</h5>
    <div class="badge-container mb-3">
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-secondary">Secondary</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-danger">Danger</span>
      <span class="badge badge-warning">Warning</span>
      <span class="badge badge-info">Info</span>
      <span class="badge badge-light">Light</span>
      <span class="badge badge-dark">Dark</span>
      <div class="mt-3">
        <button type="button" class="btn btn-primary">
          运行数量 <span class="badge badge-light">4</span>
        </button>

        <button type="button" class="btn btn-light">
          错误信息 <span class="badge badge-danger">4</span>
        </button>
      </div>
    </div>

    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(badgeTemp1)">
      </code>
    </pre>

    <br>
    <br>
    <h5 class="mb-3">丸状标记</h5>
    <div class="badge-container mb-3">
      <span class="badge badge-pill badge-primary">Primary</span>
      <span class="badge badge-pill badge-secondary">Secondary</span>
      <span class="badge badge-pill badge-success">Success</span>
      <span class="badge badge-pill badge-danger">Danger</span>
      <span class="badge badge-pill badge-warning">Warning</span>
      <span class="badge badge-pill badge-info">Info</span>
      <span class="badge badge-pill badge-light">Light</span>
      <span class="badge badge-pill badge-dark">Dark</span>
    </div>

    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(badgeTemp2)">
      </code>
    </pre>
    <br>
    <h5 class="mb-3">标记尺寸</h5>
    <div class="badge-container mb-3">
      <span class="badge badge-pill badge-primary">普通标记</span>
      <span class="badge badge-pill badge-primary badge-lg">大标记</span>
      <span class="badge badge-pill badge-light">普通标记</span>
      <span class="badge badge-pill badge-light badge-lg">大标记</span>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(badgeTemp3)">
      </code>
    </pre>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class ComponentBadge extends Vue {
  @Provide() badgeTemp1:string = `
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-danger">Danger</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-info">Info</span>
    <span class="badge badge-light">Light</span>
    <span class="badge badge-dark">Dark</span>
    <!-- 示例 -->
    <button type="button" class="btn btn-primary">运行数量 <span class="badge badge-light">4</span></button>
    <button type="button" class="btn btn-light">错误信息 <span class="badge badge-danger">4</span></button>
  `;

  @Provide() badgeTemp2:string = `
    <span class="badge badge-pill badge-primary">Primary</span>
    <span class="badge badge-pill badge-secondary">Secondary</span>
    <span class="badge badge-pill badge-success">Success</span>
    <span class="badge badge-pill badge-danger">Danger</span>
    <span class="badge badge-pill badge-warning">Warning</span>
    <span class="badge badge-pill badge-info">Info</span>
    <span class="badge badge-pill badge-light">Light</span>
    <span class="badge badge-pill badge-dark">Dark</span>
  `
   @Provide() badgeTemp3:string = `
    <span class="badge badge-pill badge-primary">普通标记</span>
    <span class="badge badge-pill badge-primary badge-lg">大标记</span>
    <span class="badge badge-pill badge-light">普通标记</span>
    <span class="badge badge-pill badge-light badge-lg">大标记</span>
   `
}
</script>
<style lang="less" scoped>
.badge-container {
  .badge {
    margin: 0 .2rem;
  }
  .btn {
    margin: 0 .2rem;
  }
}
</style>
