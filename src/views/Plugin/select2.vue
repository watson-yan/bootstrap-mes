<template>
  <div class="p-4">
    <p>官方文档：<a href="https://select2.org/" target="_blank">https://select2.org/</a></p>
    <h5 class="mb-3">普通用法 - 单选</h5>
    <div>
      <select id="singleSelect" class="js-source-states form-control" style="width: 300px;">
        <option value="山西">山西</option>
        <option value="辽宁">辽宁</option>
        <option value="吉林">吉林</option>
        <option value="黑龙江">黑龙江</option>
        <option value="江苏">江苏</option>
        <option value="浙江">浙江</option>
        <option value="安徽">安徽</option>
        <option value="福建">福建</option>
        <option value="江西">江西</option>
        <option value="山东">山东</option>
        <option value="河南">河南</option>
        <option value="湖北">湖北</option>
        <option value="湖南">湖南</option>
        <option value="广东">广东</option>
        <option value="海南">海南</option>
        <option value="四川">四川</option>
        <option value="贵州">贵州</option>
        <option value="云南">云南</option>
        <option value="陕西">陕西</option>
        <option value="甘肃">甘肃</option>
        <option value="青海">青海</option>
        <option value="台湾">台湾</option>
      </select>
      <br>
      <pre class="hl-pre">
        <code class="html" v-html="$htmlCode(temp1)">
        </code>
      </pre>
    </div>
    <br>
    <h5 class="mb-3">普通用法 - 多选</h5>
    <div>
      <select id="multiSelect" class="js-source-states form-control" style="width: 300px;" name="states[]" multiple="multiple">
        <option value="山西">山西</option>
        <option value="辽宁">辽宁</option>
        <option value="吉林">吉林</option>
        <option value="黑龙江">黑龙江</option>
        <option value="江苏">江苏</option>
        <option value="浙江">浙江</option>
        <option value="安徽">安徽</option>
        <option value="福建">福建</option>
        <option value="江西">江西</option>
        <option value="山东">山东</option>
        <option value="河南">河南</option>
        <option value="湖北">湖北</option>
        <option value="湖南">湖南</option>
        <option value="广东">广东</option>
        <option value="海南">海南</option>
        <option value="四川">四川</option>
        <option value="贵州">贵州</option>
        <option value="云南">云南</option>
        <option value="陕西">陕西</option>
        <option value="甘肃">甘肃</option>
        <option value="青海">青海</option>
        <option value="台湾">台湾</option>
      </select>
      <br>
      <pre class="hl-pre">
        <code class="html" v-html="$htmlCode(temp2)">
        </code>
      </pre>
    </div>
    <br>
    <h5 class="mb-3">进阶用法 - 远程加载数据</h5>
    <div>
      <select id="remoteSelect" class="js-source-states form-control" name="states[]" multiple="multiple">
      </select>
      <br>
      <pre class="hl-pre">
        <code class="html" v-html="$htmlCode(temp2)">
        </code>
      </pre>
    </div>
    <br>
  </div>
</template>
<script lang="ts">
import { Vue, Provide, Component } from 'vue-property-decorator'

@Component
export default class Select2 extends Vue {
  @Provide() temp1: string = `
    <!--html代码(option已经存在，搜索也为本地搜索)-->
    <select class="js-source-states form-control">
      <!--optgroup标签为分组标签-->
      <optgroup label="Alaskan/Hawaiian Time Zone">
        <option value="AK">Alaska</option>
        ...
        <option value="HI">Hawaii</option>
      </optgroup>
    </select>

    // js代码
    $('select').select2({
      placeholder: 'Select an option',
      theme: 'bootstrap4'
    });`;

  @Provide() temp2: string = `
    <!--html代码(相比与单选的多了multiple属性)-->
    <select class="js-source-states form-control" multiple="multiple">
      <!--optgroup标签为分组标签-->
      <optgroup label="Alaskan/Hawaiian Time Zone">
        <option value="AK">Alaska</option>
        ...
        <option value="HI">Hawaii</option>
      </optgroup>
    </select>`;

  mounted () {
    $(document).ready(() => {
      $('#singleSelect').select2({
        placeholder: 'Select an option',
        theme: 'bootstrap4'
      })
      $('#multiSelect').select2({
        placeholder: 'Select an option',
        theme: 'bootstrap4',
        allowClear: true
      })
      $('#remoteSelect').select2({
        placeholder: 'Select an option',
        theme: 'bootstrap4',
        tags: true,
        delay: 250,
        multiple: false,
        allowClear: true,
        ajax: {
          url: 'https://api.github.com/search/repositories',
          dataType: 'json',
          data: function (params: any) {
            console.log(params)
            var query = {
              search: params.term,
              type: 'public'
            }
            // Query parameters will be ?search=[term]&type=public
            return query
          },
          processResults: function (data: any) {
            var formatData = {
              results: '',
              pagination: { more: false }
            }
            formatData.results = data.items.map((item: any) => {
              return {
                id: item.id,
                text: item.full_name
              }
            })
            return formatData
          }
        }
      })
    })
  }

  matchCustom (params: any, data: any) {
    console.log(params)
    console.log(data)
  }
}
</script>
<style lang="less">
html {
  overflow: hidden;
}
</style>
