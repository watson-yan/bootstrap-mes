<template>
  <div>
    <div class="p-5">
      <button @click="alert" class="btn btn-light mr-2">Alert框</button>
      <button @click="confirm" class="btn btn-light mr-2">Confirm框</button>
      <button @click="toast" class="btn btn-light mr-2">Toast框</button>
      <button @click="loading" class="btn btn-light mr-2">Loading加载</button>
    </div>

    <pre class="hl-pre">
      <code class="html" v-html="$htmlCode(messageTemp1)">
      </code>
    </pre>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class PluginMessage extends Vue {
  @Provide() messageTemp1: string = `
    // alert框
    $.alert('这是提示信息');  // 普通alert
    $.alert({
      message: '这是提示信息',
      submitButtonText: '确定',  // 修改按钮文本
      onSubmit: function() { // Do Something}   // 点击确定后可以回调
    })

    // confirm框
    $.confirm({
      message: '确定要这么做吗'?
      onSubmit: function() { // Do Something}   // 点击确定后可以回调
      onCancel: function() { // Do Something}   // 点击取消后可以回调
    })

    // toast框
    $.toast('一般的信息');
    $.toast({ type: 'danger', message: '温度过高' })   // 目前只提供3种模式的toast: primary(默认)/success(成功)/danger(危险)
    $.toast({ type: 'success, message: '提交成功', duration: 2000 })    // duration为弹框消失事件（默认2000毫秒），单位毫秒
    
    // loading
    $.loading.show()  // 显示loading框
    $.loading.hide()  // 关闭loading框
  `

  alert () {
    $.alert('请选择需要的工艺')
  }
  confirm () {
    $.confirm({
      message: '确定下发该指令',
      onSubmit: function () {
        $.toast({
          message: '指令已经下发',
          type: 'success'
        })
      }
    })
  }
  toast () {
    $.toast('10秒后将复位1号设备')
    setTimeout(function () {
      $.toast({
        message: '二号设备已经复位',
        type: 'success'
      })
      setTimeout(function () {
        $.toast({
          message: '温度过高，请停止加温',
          type: 'danger'
        })
      }, 1000)
    }, 1000)
  }

  loading () {
    $.loading.show()
    setTimeout(() => {
      $.loading.hide()
    }, 3000)
  }
}
</script>
<style lang="less" scoped>
</style>
