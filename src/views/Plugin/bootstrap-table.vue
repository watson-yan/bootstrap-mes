<template>
  <div class="p-4">
    <p>官方文档：<a href="https://bootstrap-table.com/" target="_blank">https://bootstrap-table.com/</a></p>
    <h5 class="mb-3">普通用法</h5>
    <p>本地模式，数据一次性加载到本地，在本地进行分页</p>
    <table class="table table-bordered" ref="table1">
      <thead class="thead-light">
        <tr>
          <th>Item ID</th>
          <th>Item Name</th>
          <th>Item Price</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    <br>
    <h5 class="mb-3">服务端用法</h5>
    <p>需要后端返回数据字段配合使用</p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import icons from './mdi_icons'

@Component
export default class PluginBootstrapTable extends Vue {
  @Provide() list: any[] = [];

  mounted () {
    this.list = icons
    $(this.$refs.table1).bootstrapTable({
      data: this.list,
      // url: '',
      height: 700,
      pagination: true,
      total: icons.length,
      // sidePagination: 'server',
      columns: [
        {
          field: 'state',
          checkbox: true,
          valign: 'middle'
        },
        { field: 'name', title: 'name' },
        { field: 'hex', title: 'hex' },
        { field: 'version', title: 'version' },
        { field: 'style', title: 'style', formatter: () => { return 'Material Design' } },
        { field: 'style', title: 'country', formatter: () => { return 'America' } },
        { field: 'style', title: 'country', formatter: () => { return 'America' } },
        { field: 'style', title: 'country', formatter: () => { return 'America' } },
        { field: 'style', title: 'country', formatter: () => { return 'America' } },
        { field: 'style', title: 'company', formatter: () => { return 'Google' } },
        { field: 'style', title: 'company', formatter: () => { return 'Google' } },
        { field: 'style', title: 'company', formatter: () => { return 'Google' } },
        { field: 'style', title: 'company', formatter: () => { return 'Google' } },
        { field: 'style', title: 'country', formatter: () => { return 'America' } },
        { field: 'style', title: 'company', formatter: () => { return 'Google' } },
        { field: 'style', title: 'country', formatter: () => { return 'America' } },
        { field: 'style', title: 'company', formatter: () => { return 'Google' } },
        { field: 'style', title: 'company', formatter: () => { return 'Google' } }
      ],
      fixedColumns: true,
      fixedNumber: 4,
      search: true
    })
  }
}
</script>
<style lang="less" scoped>

</style>
