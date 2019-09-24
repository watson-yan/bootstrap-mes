<template>
  <div class="page-component">
    <div class="page-component__left py-3 bg-light shadow">
      <h5 class="component-title">组件列表</h5>
      <ul class="component-menu">
        <li><router-link to="/components/button">按钮</router-link></li>
        <li><router-link to="/components/badge">标记</router-link></li>
        <li><router-link to="/components/form">表单</router-link></li>
        <li><router-link to="/components/input">输入框</router-link></li>
        <li><router-link to="/components/checkbox">复选框</router-link></li>
        <li><router-link to="/components/radio">单选框</router-link></li>
        <li><router-link to="/components/switch">开关</router-link></li>
        <li><router-link to="/components/table">表格</router-link></li>
        <li><router-link to="/components/dropdown">下拉列表</router-link></li>
        <li><router-link to="/components/tab">TAB</router-link></li>
        <li><router-link to="/components/progress">进度条</router-link></li>
        <li><router-link to="/components/alert">提示</router-link></li>
        <li><router-link to="/components/card">卡片</router-link></li>
      </ul>
    </div>
    <div class="page-component__right">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ComponentRoot extends Vue {}
</script>
<style lang="less" scoped>
 .page-component {
     height: 100%;
     display: flex;
     &__left {
         flex: 0 0 auto;
         width: 180px;
     }
     &__right {
         flex: 1 1 auto;
         overflow-y: auto;
     }
     .component-title {
          padding: .25rem 1.5rem;
     }
     .component-menu {
       padding-left: 0;
       list-style: none;
       li {
         a {
            display: block;
            padding: .25rem 1.5rem;
            font-size: 90%;
            color: rgba(0,0,0,.65);
            &:hover {
              color: #000;
              text-decoration: none;
            }
            &.router-link-active {
              font-weight: 600;
              color: #000;
            }
         }
       }
     }
 }
</style>
