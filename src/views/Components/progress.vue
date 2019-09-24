<template>
  <div class="p-4">
    <h3 class="title">进度条 #Progress</h3>
    <br>
    <h5 class="mb-3">进度条百分比</h5>
    <div class="progress-container mb-3">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(progressTemp1)">
      </code>
    </pre>
    <br>
    <br>
    <h5 class="mb-3">进度条背景色</h5>
    <div class="progress-container mb-3">
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(progressTemp1)">
      </code>
    </pre>

    <div class="progress">
      <div class="progress-bar text-center" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">清理</div>
      <div class="progress-bar bg-danger text-center" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">加温</div>
      <div class="progress-bar bg-info text-center" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">冷却</div>
    </div>
    <br>
    <br>
    <h5>斑马纹</h5>
    <div class="progress-container">
      <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <br>
    <br>
    <h5>动画</h5>
    <div class="progress-container">
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class ComponentProgress extends Vue {
  @Provide() progressTemp1:string = `
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`

  @Provide() progressTemp2:string = `  
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`
}
</script>
<style lang="less" scoped>
.progress-container {
  .progress {
    margin: .8rem 0;
  }
}
</style>
