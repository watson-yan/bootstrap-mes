<template>
  <div class="p-4">
    <p>官方文档：<a href="https://www.layui.com/laydate/" target="_blank">https://www.layui.com/laydate/</a></p>
    <br>
    <h5 class="mb-3">普通用法 - 日期选择</h5>
    <div>
      <input ref="date1" type="text" class="form-control" style="width: 200px;" placeholder="请选择日期">
    </div>
    <br>
    <h5 class="mb-3">普通用法 - 范围选择</h5>
    <div>
      <p class="mb-2 d-inline-block mr-3">
        <input ref="date2" type="text" class="form-control" style="width: 200px;" placeholder="请选择日期范围">
      </p>
      <p class="mb-2 d-inline-block mr-3">
        <input ref="date3" type="text" class="form-control" style="width: 200px;" placeholder="请选择年范围">
      </p>
      <p class="mb-2 d-inline-block mr-3">
        <input ref="date4" type="text" class="form-control" style="width: 200px;" placeholder="请选择年月范围">
      </p>
      <p class="mb-2 d-inline-block mr-3">
        <input ref="date5" type="text" class="form-control" style="width: 200px;" placeholder="请选择时间范围">
      </p>
      <p class="mb-2 d-inline-block mr-3">
        <input ref="date6" type="text" class="form-control" style="width: 200px;" placeholder="请选择日期时间范围">
      </p>
    </div>
    <br>
    <h5 class="mb-3">高级用法 - 自定义日期</h5>
    <div>
      <input ref="date7" type="text" class="form-control" style="width: 200px;" placeholder="自定义日期">
    </div>
    <br>
    <h5 class="mb-3">高级用法 - 控制可选的日期与时间</h5>
    <div>
      <input ref="date8" type="text" class="form-control" style="width: 200px;" placeholder="自定义日期">
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class LayDate extends Vue {
  mounted () {
    // 常规用法
    laydate.render({
      elem: this.$refs.date1
    })
    laydate.render({
      elem: this.$refs.date2,
      range: true
    })
    laydate.render({
      elem: this.$refs.date3,
      type: 'year',
      range: true
    })
    laydate.render({
      elem: this.$refs.date4,
      type: 'month',
      range: true
    })
    laydate.render({
      elem: this.$refs.date5,
      type: 'time',
      range: true
    })
    laydate.render({
      elem: this.$refs.date6,
      type: 'datetime',
      range: true
    })

    // 自定义重要日
    laydate.render({
      elem: this.$refs.date7,
      mark: {
        '0-1-1': '元旦',
        '0-10-14': '生日',
        '0-12-31': '跨年', // 每年的日期
        '0-0-10': '工资', // 每月某天
        '0-0-15': '月中',
        '2017-8-15': '', // 如果为空字符，则默认显示数字+徽章
        '2099-10-14': '呵呵'
      },
      done: function (value: any, date: any) {
        if (date.year === 2017 && date.month === 8 && date.date === 15) { // 点击2017年8月15日，弹出提示语
          alert('这一天是：中国人民抗日战争胜利72周年')
        }
      }
    })

    const date8 = laydate.render({
      elem: this.$refs.date8,
      min: '2019-10-14',
      max: '2020-1-14',
      ready: function () {
        date8.hint('日期可选值设定在 <br> 2016-10-14 到 2080-10-14')
      }
    })
  }
}
</script>
