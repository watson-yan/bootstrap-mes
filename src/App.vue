<template>
  <div id="app">
    <header class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand mb-0 h1" href="/">MES-UI</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" tag="a">首页 <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/guide" class="nav-link">规范</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/components" class="nav-link">组件</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              插件
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
              <router-link class="dropdown-item" to="/plugin/message">弹出框</router-link>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <article>
      <router-view/>
    </article>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class App extends Vue {
  mounted () {
    console.log($)
  }
}
</script>
<style lang="less" scoped>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
  & > header {
    flex: 0 0 auto;
    .nav-item {
      margin: 0 10px;
    }
  }
  & > article {
    flex: 1 1 auto;
    overflow: auto;
  }
}
</style>
