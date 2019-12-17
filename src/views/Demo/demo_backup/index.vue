<template>
  <div class="page app-root">
    <div class="app-root__left">
      <div class="app-root__left__header p-3 text-center">
        <h3 class="font-weight-normal">
        <img src="../../assets/logo.png" alt="logo" width="40" height="40">
          AMES
        </h3>
      </div>
      <ul class="app-root__left__menu">
        <li>
          <a><i class="mdi mdi-18px mdi-timetable"></i> 生产任务</a>
        </li>
        <li>
          <a><i class="mdi mdi-18px mdi-animation"></i> 产品管理</a>
        </li>
        <li>
          <a><i class="mdi mdi-18px mdi-settings"></i> 系统管理</a>
        </li>
      </ul>
    </div>
    <div class="app-root__right">
      <div class="app-root__right__header">
        <div class="d-flex px-3">
          <button class="btn btn-light" style="align-self: center;">驾驶舱</button>
        </div>

        <div class="header-tools px-3">
          <div class="d-flex">
            <a><i class="mdi mdi-24px mdi-account-circle"></i></a>
          </div>
          <div class="d-flex">
            <a><i class="mdi mdi-24px mdi-dialpad"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class DemoIndex extends Vue {
  @Provide() routes: any[] = [];
}
</script>
<style lang="less" scoped>
.app-root {
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f2f3f8;
  overflow: hidden;
  &__left {
    flex: 0 0 auto;
    width: 200px;
    color: #646c9a;
    background-color: #242939;
    box-shadow: 0 0 13px 0 rgba(82,63,105,.1);
    &__header {
      color: #fff;
    }
    &__menu {
      padding-left: 0;
      list-style: none;
      background: #242939;
      li {
        a {
          display: block;
          padding: .75rem;
          cursor: pointer;
          font-size: 14px;
          color: #c0c4d1;
          i {
            margin-right: .5rem;
            color: #646c9a;
            vertical-align: middle;
          }
        }
        &:hover {
          a {
            color: #fff;
            background-color: #1f2433;
            i {
              color: #5d78ff;
            }
          }
        }
      }
    }
  }
  &__right {
    flex: 1 1 auto;
    &__header {
      display: flex;
      height: 65px;
      justify-content: space-between;
      background-color: #fff;
      border-bottom: 1px solid #eff0f6;
      box-shadow: 0 0 40px 0 rgba(82,63,105,.1);
      .header-tools {
        display: flex;
        justify-content: space-around;
        &>div {
          &>a {
            padding: 5px 10px;
            align-self: center;
            &:hover {
              color: #5d78ff;
            }
          }
        }
      }
    }
  }
}
</style>
