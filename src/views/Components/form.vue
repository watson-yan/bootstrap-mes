<template>
  <div class="p-4">
    <h3 class="title">表单相关 #Form</h3>
    <br>
    <h5 class="mb-3">常用表单元素</h5>
    <br>
    <div class="form-container w-50 mb-3">
      <div class="form-group">
        <label class="form-label">产品描述</label>
        <input type="text" class="form-control" placeholder="请输入产品描述">
      </div>
      <div class="form-group">
        <label class="form-label">产品规格</label>
        <select type="text" class="form-control" placeholder="请选择产品规格">
          <option value="1">小型</option>
          <option value="2">中型</option>
          <option value="3">大型</option>
        </select>
      </div>
      <div class="text-right">
        <button type="button" class="btn btn-light mr-2">取消</button>
        <button type="button" class="btn btn-primary">提交</button>
      </div>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(formTemp1)">
      </code>
    </pre>
    <br>
    <div class="w-50">
      <form>
        <div class="form-group row">
          <label class="col-lg-2 col-md-12 col-form-label">产品描述</label>
          <div class="col-lg-10 col-md-12">
            <input type="email" class="form-control" placeholder="产品描述">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-lg-2 col-md-12 col-form-label">产品规格</label>
          <div class="col-lg-10 col-md-12">
            <select type="text" class="form-control" placeholder="请选择产品规格">
              <option value="1">小型</option>
              <option value="2">中型</option>
              <option value="3">大型</option>
            </select>
          </div>
        </div>
        <div class="text-right">
          <button type="button" class="btn btn-light mr-2">取消</button>
          <button type="button" class="btn btn-primary">提交</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class ComponentForm extends Vue {
  @Provide() formTemp1 = `
  <div class="form-group">
    <label class="form-label">产品描述</label>
    <input type="text" class="form-control" placeholder="请输入产品描述">
  </div>
  <div class="form-group">
    <label class="form-label">产品规格</label>
    <select type="text" class="form-control" placeholder="请选择产品规格">
      <option value="1">小型</option>
      <option value="2">中型</option>
      <option value="3">大型</option>
    </select>
  </div>
  <div class="text-right">
    <button type="button" class="btn btn-light mr-2">取消</button>
    <button type="button" class="btn btn-primary">提交</button>
  </div>
  `
}
</script>
<style lang="less" scoped>
</style>
