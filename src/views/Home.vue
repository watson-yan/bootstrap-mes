<template>
  <div class="home text-white text-center p-1">
    <h3 class="home-title">MES-UI</h3>
    <p>一套适用于MES类产品的UI规范和组件库</p>
    <div class="text-center my-2">
      <button @click="go" class="btn btn-light btn-lg">开始使用</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  go () {
    this.$router.push('/components')
  }
}
</script>
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  background-color: #4584cc;
  background-image: url(../assets/imgs/bs-docs-masthead-pattern.png);
  .home-title {
    margin-top: 200px;
    font-size: 3rem;
    font-weight: 400;
  }
}
</style>
