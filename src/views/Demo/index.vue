<template>
  <div class="page app-root">
    <div class="app-root__header px-4">
      <div>
        <button class="btn-collapse" v-if="collapse" @click="collapse = false;">
          <i class="las la-outdent"></i>
        </button>
        <a class="navbar-brand text-light mt-1" href="#" style="align-self:center;">
          <img class="mr-2" width="32" height="32" src="../../assets/logo.png" alt="ALC生产线管理系统AMES v1.0">
          AMES<small>v1.0</small>
        </a>
      </div>
      <div class="pl-3">
        <a @click="toggleSysmenu" class="text-light text-decoration-none cursor-pointer">
          <i class="iconfont icon-quanjushezhi align-middle" style="font-size: 1.6rem;"></i>
          系统设置
        </a>
        <div class="dropdown d-inline-block">
          <button class="btn btn-link dropdown-toggle text-light text-decoration-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="iconfont icon-gerentouxiang align-middle" style="font-size: 1.6rem;"></i>
            管理员
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">个人资料</a>
            <a class="dropdown-item" href="#">修改密码</a>
            <a class="dropdown-item" href="#">退出登录</a>
          </div>
        </div>
      </div>
    </div>
    <div class="app-root__content">
      <div class="app-root__content__leftside" :style="menuStyle">
        <ul class="menu-list">
          <li>
            <a href=""><i class="i-menu i-qgfz"></i> 生产任务</a>
          </li>
          <li>
            <a href=""><i class="i-menu i-qgfz"></i> 产品管理</a>
          </li>
          <li>
            <a href=""><i class="i-menu i-pljz"></i> 配料浇筑</a>
          </li>
          <li>
            <a href=""><i class="i-menu i-jybd"></i> 静养摆渡</a>
          </li>
          <li>
            <a href=""><i class="i-menu i-qgfz"></i> 切割翻转</a>
          </li>
          <li>
            <a href=""><i class="i-menu i-zyyh"></i> 蒸压养护</a>
          </li>
          <li>
            <a href=""><i class="i-menu i-crflz"></i> 出入釜流转</a>
          </li>
          <li>
            <a href=""><i class="i-menu i-gjxh"></i> 钢筋循环</a>
          </li>
        </ul>

        <div class="hide-menu">
          <a class="d-block" @click="collapse = true;">
            <i class="las la-angle-double-left"></i> 收起菜单
          </a>
        </div>
      </div>
      <div class="app-root__content__rightside">
        <router-view></router-view>
      </div>
    </div>

    <div v-if="sysMenuVisible" class="system-menu" ref="sysMenu">
      <ul>
        <li><a href="javascript:void(0);"><i class="las la-user-alt mr-1"></i> 用户管理</a></li>
        <li><a href="javascript:void(0);"><i class="las la-user-secret mr-1"></i>  角色管理</a></li>
        <li><a href="javascript:void(0);"><i class="las la-users mr-1"></i> 部门管理</a></li>
        <li><a href="javascript:void(0);"><i class="las la-laptop-code mr-1"></i> 代码生成</a></li>
        <li><a href="javascript:void(0);"><i class="las la-list mr-1"></i> 菜单管理</a></li>
        <li><a href="javascript:void(0);"><i class="las la-book mr-1"></i> 字典管理</a></li>
        <li><a href="javascript:void(0);"><i class="las la-file-alt mr-1"></i> 业务日志</a></li>
        <li><a href="javascript:void(0);"><i class="las la-paper-plane mr-1"></i> 设备在线</a></li>
        <li><a href="javascript:void(0);"><i class="las la-tools mr-1"></i> 设备故障</a></li>
        <li><a href="javascript:void(0);"><i class="las la-lock mr-1"></i> 锁机管理</a></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class DemoIndex extends Vue {
  @Provide() routes: any[] = [];

  @Provide() sysMenuVisible: boolean = false;

  @Provide() collapse: boolean = false;

  get menuStyle () {
    return this.collapse ? {
      width: '0px',
      overflow: 'hidden'
    } : {
      width: '150px',
      overflow: 'visible'
    }
  }

  mounted () {
    const that = this
    const sysMenu = this.$refs.sysMenu
    document.body.addEventListener('click', function () {
      that.sysMenuVisible = false
    })
  }

  toggleSysmenu (e: Event) {
    e.stopPropagation()
    this.sysMenuVisible = !this.sysMenuVisible
  }
}
</script>
<style lang="less" scoped>
.app-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 0 1 auto;
    color: #fff;
    background-image: linear-gradient(#6e6c6d 0, #434345 100%);
    .btn-collapse {
      margin-right: 1.5rem;
      font-size: 1.2rem;
      color: #999;
      background: rgba(0, 0, 0, 0);
      border: 1px solid #999;
      vertical-align: middle;
      border-radius: 3px;
    }
  }
  &__content {
    flex: 1 0 auto;
    display: flex;
    flex-direction: row;
    &__leftside {
      flex: 0 0 auto;
      width: 150px;
      position: relative;
      background-image: linear-gradient(to right, #4d7fb8 0,#4572a5 100%);
      box-shadow: 0 1px 2px rgba(0,0,0,.2);
      transition: all .3s ease;
      .menu-list {
        margin: 0;
        padding-left: 0;
        & >li {
          a {
            display: block;
            padding: 1rem 1.2rem 1rem 1rem;
            color: #fff;
            text-decoration: none;
            white-space: nowrap;
          }
          &:hover {
            background-color: rgba(0, 0, 0, .3);
          }
        }
      }
      .hide-menu {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        a {
          padding: 1rem;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          text-align: center;
          white-space: nowrap;
          &:hover {
            background-color: rgba(0, 0, 0, .3);
          }
        }
      }
    }
    &__rightside {
      flex: 1 1 auto;
      overflow: auto;
    }
  }

  .response-menu {
    position: fixed;
    top: 60px;
    left: 100px;
    padding: 1rem;
    background-color: rgba(0, 0, 0, .4);
    ul {
      padding-left: 0;
      list-style: none;
      li {
        padding: 1rem;
        float: left;
        text-align: center;
        a {
          color: #fff;
          &:hover {
            text-decoration: none;
          }
        }
        &:hover {
          background-color: rgba(0, 0, 0, .8);
        }
      }
    }
  }

  .system-menu {
    position: fixed;
    width: 188px;
    background: #fff;
    right: 10px;
    top: 60px;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
    ul {
      padding-left: 0;
      list-style: none;
      li {
        a {
          display: block;
          padding: .7rem 1.4rem;
          color: #555;
          text-decoration: none;
          &:hover {
            color: #518fff;
            background: rgba(81,143,255,.2);
          }
        }
      }
    }
  }
}
</style>
