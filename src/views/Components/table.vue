<template>
  <div class="p-4">
    <h3 class="title">表格 #Table</h3>
    <br>
    <h5 class="mb-3">普通表格</h5>
    <p class="text-muted">该组件只适用于简单的表格展示，若需要更精确的数据展示（包含分页、筛选、排序及编辑等）请选择datatable组件。</p>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(tableTemp1)">
      </code>
    </pre>
    <br>
    <br>
    <h5 class="mb-3">深色表格</h5>
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(tableTemp2)">
      </code>
    </pre>
    <br>
    <br>
    <h5 class="mb-3">表头风格</h5>
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(tableTemp3)">
      </code>
    </pre>
    <br>
    <br>
    <h5 class="mb-3">条纹表格</h5>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(tableTemp4)">
      </code>
    </pre>
    <br>
    <br>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <br>
    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(tableTemp5)">
      </code>
    </pre>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  @Provide() tableTemp1 = `
    <table class="table">
      ...
    </table>
  `

  @Provide() tableTemp2 = `
    <table class="table table-dark">
      ...
    </table>
  `

  @Provide() tableTemp3 = `
    <table class="table"> 
      <thead class="thead-dark">
        ...
      </thead>
      ...
    </table>

    <table class="table"> 
      <thead class="thead-light">
        ...
      </thead>
      ...
    </table>
  `

  @Provide() tableTemp4 = `
    <table class="table table-striped">
      ...
    </table>
  `

  @Provide() tableTemp5 = `
    <table class="table table-dark table-striped">
      ...
    </table>
  `
}
</script>
<style lang="less" scoped>

</style>
