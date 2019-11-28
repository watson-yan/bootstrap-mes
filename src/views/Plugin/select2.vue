<template>
  <div class="p-4">
    <p>官方文档：<a href="https://select2.org/" target="_blank">https://select2.org/</a></p>
    <h5 class="mb-3">普通用法 - 单选</h5>
    <div>
      <select id="singleSelect" class="js-source-states form-control">
        <optgroup label="Alaskan/Hawaiian Time Zone">
          <option value="AK">Alaska</option>
          <option value="HI">Hawaii</option>
        </optgroup>
        <optgroup label="Pacific Time Zone">
          <option value="CA">California</option>
          <option value="NV">Nevada</option>
          <option value="OR">Oregon</option>
          <option value="WA">Washington</option>
        </optgroup>
        <optgroup label="Mountain Time Zone">
          <option value="AZ">Arizona</option>
          <option value="CO">Colorado</option>
          <option value="ID">Idaho</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NM">New Mexico</option>
          <option value="ND">North Dakota</option>
          <option value="UT">Utah</option>
          <option value="WY">Wyoming</option>
        </optgroup>
        <optgroup label="Central Time Zone">
          <option value="AL">Alabama</option>
          <option value="AR">Arkansas</option>
          <option value="IL">Illinois</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="OK">Oklahoma</option>
          <option value="SD">South Dakota</option>
          <option value="TX">Texas</option>
          <option value="TN">Tennessee</option>
          <option value="WI">Wisconsin</option>
        </optgroup>
        <optgroup label="Eastern Time Zone">
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="IN">Indiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="OH">Ohio</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WV">West Virginia</option>
        </optgroup>
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
      <select id="multiSelect" class="js-source-states form-control" name="states[]" multiple="multiple">
        <optgroup label="Alaskan/Hawaiian Time Zone">
          <option value="AK">Alaska</option>
          <option value="HI">Hawaii</option>
        </optgroup>
        <optgroup label="Pacific Time Zone">
          <option value="CA">California</option>
          <option value="NV">Nevada</option>
          <option value="OR">Oregon</option>
          <option value="WA">Washington</option>
        </optgroup>
        <optgroup label="Mountain Time Zone">
          <option value="AZ">Arizona</option>
          <option value="CO">Colorado</option>
          <option value="ID">Idaho</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NM">New Mexico</option>
          <option value="ND">North Dakota</option>
          <option value="UT">Utah</option>
          <option value="WY">Wyoming</option>
        </optgroup>
        <optgroup label="Central Time Zone">
          <option value="AL">Alabama</option>
          <option value="AR">Arkansas</option>
          <option value="IL">Illinois</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="OK">Oklahoma</option>
          <option value="SD">South Dakota</option>
          <option value="TX">Texas</option>
          <option value="TN">Tennessee</option>
          <option value="WI">Wisconsin</option>
        </optgroup>
        <optgroup label="Eastern Time Zone">
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="IN">Indiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="OH">Ohio</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WV">West Virginia</option>
        </optgroup>
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
