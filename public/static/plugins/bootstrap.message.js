/** Alert、Confirm */
// 1. modal框模板, 改变背景色
// 2. 区分alert 和 confirm
// 3. 给每个弹出框赋值/关闭
// 4. 点确定或者取消时的回调
// 5. alert是一种特殊的confirm

/** Toast */
// 1. opacity来控制显隐
// 2. 多个toast怎么重叠显示
// 3. 方法需要考虑加 定时关闭的参数

// 不需要另外加CSS，一个JS文件，完全依托于bootstrap和jquery

(function ($) {
  console.log($)
  $.extend({
    alert: function (options) {
      layer.alert(options)
    }
  })
})(jQuery)

console.log(22)
