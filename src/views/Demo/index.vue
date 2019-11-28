<template>
  <div class="page p-4">
    <div class="row">
      <div v-for="n in 10" :key="n" class="col-sm-3 p-3">
        <div class="card shadow">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-light">Go somewhere</a>
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
</style>
