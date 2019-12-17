<template>
  <div class="p-4">
		<p>官方文档：<a href="http://www.treejs.cn/" target="_blank">http://www.treejs.cn/</a></p>
    <div id="treeDemo" class="ztree"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ztree extends Vue {
  mounted () {
    var setting = {
      check: {
        enable: true
      },
      view: {
        dblClickExpand: false
      },
      data: {
        simpleData: {
          enable: true
        }
      },
      callback: {
        beforeClick: beforeClick,
        onClick: onClick
      }
    }

    var zNodes = [
      { id: 1, pId: 0, name: '北京' },
      { id: 2, pId: 0, name: '天津' },
      { id: 3, pId: 0, name: '上海' },
      { id: 6, pId: 0, name: '重庆' },
      { id: 4, pId: 0, name: '河北省', open: true },
      { id: 41, pId: 4, name: '石家庄' },
      { id: 42, pId: 4, name: '保定' },
      { id: 43, pId: 4, name: '邯郸' },
      { id: 44, pId: 4, name: '承德' },
      { id: 5, pId: 0, name: '广东省', open: true },
      { id: 51, pId: 5, name: '广州' },
      { id: 52, pId: 5, name: '深圳' },
      { id: 53, pId: 5, name: '东莞' },
      { id: 54, pId: 5, name: '佛山' },
      { id: 6, pId: 0, name: '福建省', open: true },
      { id: 61, pId: 6, name: '福州' },
      { id: 62, pId: 6, name: '厦门' },
      { id: 63, pId: 6, name: '泉州' },
      { id: 64, pId: 6, name: '三明' }
    ]

    function beforeClick (treeId: any, treeNode: any) {
      var check = treeNode && !treeNode.isParent
      if (!check) alert('只能选择城市...')
      return check
    }

    function onClick (e: any, treeId: any, treeNode: any) {
      let zTree = $.fn.zTree.getZTreeObj('treeDemo')
      let nodes = zTree.getSelectedNodes()
      let v = ''
      nodes.sort(function compare (a: any, b: any) {
        return a.id - b.id
      })
      for (var i = 0, l = nodes.length; i < l; i++) {
        v += nodes[i].name + ','
      }
      if (v.length > 0) v = v.substring(0, v.length - 1)
      var cityObj = $('#citySel')
      cityObj.attr('value', v)
    }

    function showMenu () {
      var cityObj = $('#citySel')
      var cityOffset = $('#citySel').offset()
      $('#menuContent')
        .css({
          left: cityOffset.left + 'px',
          top: cityOffset.top + cityObj.outerHeight() + 'px'
        })
        .slideDown('fast')

      $('body').bind('mousedown', onBodyDown)
    }
    function hideMenu () {
      $('#menuContent').fadeOut('fast')
      $('body').unbind('mousedown', onBodyDown)
    }
    function onBodyDown (event: any) {
      if (
        !(
          event.target.id === 'menuBtn' ||
          event.target.id === 'menuContent' ||
          $(event.target).parents('#menuContent').length > 0
        )
      ) {
        hideMenu()
      }
    }
    $.fn.zTree.init($('#treeDemo'), setting, zNodes)
  }
}
</script>
<style lang="less" scoped></style>
