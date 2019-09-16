<template>
  <div>
    <h2 class="text-center mt-5">Html规范</h2>
    <div class="p-5">
      <h4>语法</h4>
      <div>
        <ul>
          <li>标签不要大写，即便是 doctype 标签。</li>
          <li>用两个空格来代替制表符（tab） -- 这是唯一能保证在所有环境下获得一致展现的方法。</li>
          <li>嵌套元素应当缩进一次（即两个空格）。</li>
          <li>对于属性的定义，永远全部使用双引号，绝不要使用单引号。</li>
          <li>不要在自闭合（self-closing）元素的尾部添加斜线 — HTML5 规范 中明确说明斜线是可忽略的。</li>
          <li>不要省略可选的结束标签（closing tag）（例如，&lt;/li&gt; 或 &lt;/body&gt;）。</li>
        </ul>
        <br>
        <pre class="hl-pre" v-html="$htmlCode(htmlTemp1)">
        </pre>
      </div>
      <br>
      <br>

      <h4>HTML5 doctype</h4>
      <p>为每个 HTML 页面的第一行添加 standards mode（标准模式） 声明，这样能够确保在每个浏览器中拥有一致的展现。</p>
      <br>
      <pre class="hl-pre" v-html="$htmlCode(htmlTemp2)">
      </pre>
      <br>
      <br>
      <h4>语言属性</h4>
      <p>根据 HTML5 规范：</p>
      <p class="bg-light">强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。
      </p>
      <br>
      <pre class="hl-pre" v-html="$htmlCode(htmlTemp3)">
      </pre>
      <br>
      <br>
      <h4>IE 兼容模式</h4>
      <p>IE 支持通过特定的 &lt;meta&gt; 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的绘制模式。</p>
      <br>
      <pre class="hl-pre" v-html="$htmlCode(htmlTemp4)">
      </pre>
      <br>
      <br>
      <h4>字符编码</h4>
      <p>通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。</p>
      <br>
      <pre class="hl-pre" v-html="$htmlCode(htmlTemp5)">
      </pre>
      <br>
      <br>
      <h4>引入 CSS 和 JavaScript 文件</h4>
      <p>根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 text/css 和 text/javascript 分别是它们的默认值。</p>
      <br>
      <pre class="hl-pre" v-html="$htmlCode(htmlTemp6)">
      </pre>

      <br>
      <br>
      <h4>实用为王</h4>
      <p>尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。</p>
      <br>
      <br>
      <h4>属性顺序</h4>
      <p>HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。</p>
      <ul>
        <li>class</li>
        <li>id, name</li>
        <li>data-*</li>
        <li>src, for, type, href, value</li>
        <li>title, alt</li>
        <li>role, aria-*</li>
      </ul>
      <p>class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。</p>
      <br>
      <pre class="hl-pre" v-html="$htmlCode(htmlTemp7)">
      </pre>
      <br>
      <br>
      <h4>布尔（boolean）型属性</h4>
      <p>布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。</p>
      <br>
      <pre class="hl-pre" v-html="$htmlCode(htmlTemp8)">
      </pre>
      <br>
      <br>
      <h4>减少标签的数量</h4>
      <p>编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。请看下面的案例：</p>
      <br>
      <pre class="hl-pre" v-html="$htmlCode(htmlTemp9)">
      </pre>
      <br>
      <br>
      <h4>JavaScript 生成的标签</h4>
      <p>通过 JavaScript 生成的标签让内容变得不易查找、编辑，并且降低性能。能避免时尽量避免。</p>
      <br>
      <br>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class GuideHtml extends Vue {
  @Provide() htmlTemp1:string = `
  <!doctype html>
  <html>
    <head>
      <title>Page title</title>
    </head>
    <body>
      <img src="images/company-logo.png" alt="Company">
      <h1 class="hello-world">Hello, world!</h1>
    </body>
  </html>`

  @Provide() htmlTemp2:string = `
  <!doctype html>
  <html>
    <head>
    </head>
  </html>
  `
  @Provide() htmlTemp3:string = `
  <html lang="en">
    <!-- ... -->
  </html>
  `

  @Provide() htmlTemp4:string = `
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  `

  @Provide() htmlTemp5:string = `
  <head>
    <meta charset="UTF-8">
  </head>
  `

  @Provide() htmlTemp6:string = `
  <!-- External CSS -->
  <link rel="stylesheet" href="code-guide.css">

  <!-- In-document CSS -->
  <style>
    /* ... */
  </style>

  <!-- JavaScript -->
  <script src="code-guide.js"&gt;&lt;/script>
  `

  @Provide() htmlTemp7:string = `
  <a class="..." id="..." data-toggle="modal" href="#">
    Example link
  </a>

  <input class="form-control" type="text">

  <img src="..." alt="...">
  `

  @Provide() htmlTemp8:string = `
  <input type="text" disabled>

  <input type="checkbox" value="1" checked>

  <select>
    <option value="1" selected>1</option>
  </select>
  `

  @Provide() htmlTemp9:string = `
  <!-- Not so great -->
  <span class="avatar">
    <img src="...">
  </span>

  <!-- Better -->
  <img class="avatar" src="...">
  `
}
</script>
<style lang="less" scoped>

</style>
