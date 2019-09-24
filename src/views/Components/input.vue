<template>
  <div class="p-4">
    <h3 class="title">输入框 #Input</h3>
    <br>
    <h5 class="mb-3">一般用法</h5>
    <div class="w-50 mb-3">
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="请输入名称">
      </div>
      <div class="mb-3">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">用户名</span>
          </div>
          <input type="text" class="form-control" placeholder="请输入用户名" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="请输入邮箱地址" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="请输入搜索内容" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-primary">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(inputTemp1)">
      </code>
    </pre>
    <br>
    <h5 class="mb-3">尺寸</h5>
    <div class="w-50">
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
        </div>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class ComponentInput extends Vue {
  @Provide() inputTemp1: string = `
    <input type="text" class="form-control" placeholder="请输入名称">

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">用户名</span>
      </div>
      <input type="text" class="form-control" placeholder="请输入用户名" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group">
      <input type="text" class="form-control" placeholder="请输入邮箱地址" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    </div>
  `
}
</script>
<style lang="less" scoped>
</style>
