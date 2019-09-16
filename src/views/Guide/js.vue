<template>
  <div>
    <h2 class="text-center mt-5">Javascript规范</h2>
    <div class="p-5">
      <h4>一、命名规范</h4>
      <h5>1. 目的</h5>
      <p>提高代码可预测性和可维护性的方法是使用命名约定，这就意味着采用一致的方法来对变量和函数进行命名。</p>

      <h5>2. 变量名</h5>
      <p>变量名包括全局变量，局部变量，类变量，函数参数</p>

      <h5>3. 构造函数（类）命名</h5>
      <p>首字母大写，驼峰式命名。</p>
      <p>JS中没有类，但是可以用new调用构造函数：var man = new Person();</p>

      <h5>4. 普通变量命名</h5>
      <p>首字母小写，驼峰式命名，匈牙利命名</p>
      <p>如：nCheckCount 表示整形的数值</p>

      <h5>5. 匈牙利命名法</h5>
      <p>匈牙利命名法语法：变量名＝类型＋对象描述</p>
      <ul>
        <li>类型指变量的类型</li>
        <li>对象描述指对象名字全称或名字的一部分，要求有明确含义，命名要容易记忆容易理解。</li>
      </ul>
      <p>提示: 虽然JavaScript变量表面上没有类型，但是JavaScript内部还是会为变量赋予相应的类型</p>
      <table>
        <thead>
          <th class="pr-3">JavaScript变量起名类型</th>
          <th class="pr-3">变量命名前缀</th>
          <th class="pr-3">举例</th>
        </thead>
        <tbody>
          <tr>
            <td>Array 数组</td>
            <td>a</td>
            <td>aList，aGroup</td>
          </tr>
          <tr>
            <td>Boolean 逻辑</td>
            <td>b</td>
            <td>bChecked，bHasLogin</td>
          </tr>
          <tr>
            <td>Function 函数</td>
            <td>f</td>
            <td>fGetHtml，fInit</td>
          </tr>
          <tr>
            <td>Integer 数字</td>
            <td>n</td>
            <td>nPage，nTotal</td>
          </tr>
          <tr>
            <td>Object 对象</td>
            <td>o</td>
            <td>oButton，oDate</td>
          </tr>
          <tr>
            <td>Regular Expression 正则</td>
            <td>r</td>
            <td>rDomain，rEmail</td>
          </tr>
          <tr>
            <td>String</td>
            <td>s</td>
            <td>sName，sHtml</td>
          </tr>
        </tbody>
      </table>

      <br><br>
      <h5>6. 其他前缀规范</h5>
      <p>可根据团队及项目需要增加</p>
      <ul>
        <li>
          <p>$：表示Jquery对象</p>
          <p>例如：$Content，$Module，一种比较广泛的Jquery对象变量命名规范。</p>
        </li>
        <li>
          <p>fn：表示函数</p>
          <p>例如：fnGetName，fnSetAge；和上面函数的前缀略有不同，改用fn来代替，个人认为fn能够更好的区分普通变量和函数变量。</p>
        </li>
      </ul>
      <h5>7. 例外情况</h5>
      <p>以根据项目及团队需要，设计出针对项目需要的前缀规范，从而达到团队开发协作便利的目的。</p>
      <p>作用域不大临时变量可以简写，比如：str，num，bol，obj，fun，arr。</p>
      <p>循环变量可以简写，比如：i，j，k等。</p>
      <p>某些作为不允许修改值的变量认为是常量，全部字母都大写。例如：COPYRIGHT，PI。常量可以存在于函数中，也可以存在于全局。必须采用全大写的命名，且单词以_分割，常量通常用于ajax请求url，和一些不会改变的数据。</p>

      <h5>8. 函数命名</h5>
      <p><b>普通函数</b>：首字母小写，驼峰式命名，统一使用动词或者动词+名词形式</p>
      <p>
        例如：fnGetVersion()，fnSubmitForm()，fnInit()；涉及返回逻辑值的函数可以使用is，has，contains等表示逻辑的词语代替动词，例如：fnIsObject()，fnHasClass()，fnContainsElment()。
      </p>
      <p><b>内部函数</b>：使用_fn+动词+名词形式，内部函数必需在函数最后定义。</p>
      <p>
        例如：
      </p>

      <pre class="hl-pre">

        function fnGetNumber(nTotal) {
            if (nTotal &lt; 100) {
                nTotal = 100;
            }
            return _fnAdd(nTotal);

            function _fnAdd(nNumber) {
                nNumber++;
                return nNumber;
            }
        }
        alert(fGetNumber(10)); //alert 101
      </pre>

      <p><b>对象方法与事件响应函数</b>：对象方法命名使用fn+对象类名+动词+名词形式；</p>
      <p>例如： fnAddressGetEmail()，</p>

      <p><b>事件响应函数</b>：fn+触发事件对象名+事件名或者模块名</p>
      <p>例如：fnDivClick()，fnAddressSubmitButtonClick()</p>

      <p><b>函数方法常用的动词：</b></p>

      <pre class="hl-pre">

        get 获取/set 设置,
        add 增加/remove 删除
        create 创建/destory 移除
        start 启动/stop 停止
        open 打开/close 关闭,
        read 读取/write 写入
        load 载入/save 保存,
        create 创建/destroy 销毁
        begin 开始/end 结束,
        backup 备份/restore 恢复
        import 导入/export 导出,
        split 分割/merge 合并
        inject 注入/extract 提取,
        attach 附着/detach 脱离
        bind 绑定/separate 分离,
        view 查看/browse 浏览
        edit 编辑/modify 修改,
        select 选取/mark 标记
        copy 复制/paste 粘贴,
        undo 撤销/redo 重做
        insert 插入/delete 移除,
        add 加入/append 添加
        clean 清理/clear 清除,
        index 索引/sort 排序
        find 查找/search 搜索,
        increase 增加/decrease 减少
        play 播放/pause 暂停,
        launch 启动/run 运行
        compile 编译/execute 执行,
        debug 调试/trace 跟踪
        observe 观察/listen 监听,
        build 构建/publish 发布
        input 输入/output 输出,
        encode 编码/decode 解码
        encrypt 加密/decrypt 解密,
        compress 压缩/decompress 解压缩
        pack 打包/unpack 解包,
        parse 解析/emit 生成
        connect 连接/disconnect 断开,
        send 发送/receive 接收
        download 下载/upload 上传,
        refresh 刷新/synchronize 同步
        update 更新/revert 复原,
        lock 锁定/unlock 解锁
        check out 签出/check in 签入,
        submit 提交/commit 交付
        push 推/pull 拉,
        expand 展开/collapse 折叠
        begin 起始/end 结束,
        start 开始/finish 完成
        enter 进入/exit 退出,
        abort 放弃/quit 离开
        obsolete 废弃/depreciate 废旧,
        collect 收集/aggregate 聚集
      </pre>

      <h5>9. 变量命名例子</h5>
      <p>为什么需要这样强制定义变量前缀？正式因为javascript是弱语言造成的。在定义大量变量的时候，我们需要很明确的知道当前变量是什么属性，如果只通过普通单词，是很难区分的。</p>

      <p>普通代码</p>

      <pre class="hl-pre">

        var checked = false;
        var check = function() {
            return true;
        }
        /**
        some code
        **/

        if(check) {//已经无法很确切知道这里是要用checked还是check()从而导致逻辑错误
            //do some thing
        }
      </pre>

      <p>规范后代码</p>
      <pre class="hl-pre">

        var bChecked = false;
        var fnCheck = function() {
            return true;
        }
        /**
        some code
        **/

        if(bChecked) {
            // do some thing
        }
        if(fnCheck()) {
            // do other thing
        }
      </pre>

      <p>如何标明私有方法或私有属性？</p>

      <pre class="hl-pre">

        var person = {
        getName: function () {
            return this._getFirst() + ' ' + this._getLast();
        },
        _getFirst: function () {
            //...
        },
        _getLast: function (){
            //...
        } };
      </pre>
      <p>
        在这个例子中，getName()以为这这是API的一个公开的方法，而_getFirst()和_getLast()意味着这是一个私有函数。尽管他们都是普通的公开方法，但是使用下划线前缀的表示方法可以提醒使用person对象的用户，告诉他们这些方法在其他地方不能确保一定能够正常工作，不能直接调用。
      </p>
      <p>总结：下面是一些使用下划线约定的变量</p>
      <ul>
        <li>
          使用下划线结尾来表明是私有变量，例如name_和getElements_()。
        </li>
        <li>
          使用一个下划线前缀来表示受保护属性，使用两个下划线前缀来表示私有属性。
        </li>
      </ul>
      <br>
      <br>
      <h4>二、编写注释</h4>
      <p>
        为代码编写注释是非常重要的。通常人们在深入思考一个问题时，会非常清楚这段代码的工作原理。但是当过一周后再次回到该代码时，可能会花上很长时间来回想起那段代码到底是干什么的。
        公共组件维护者和各栏目WD都需要在文件头部加上注释说明：
      </p>
      <pre class="hl-pre">

        /**
        *文件用途说明
        *作者姓名、联系方式（邮箱）
        *制作日期
        **/
      </pre>
      <p>大的模块注释方法：</p>

      <pre class="hl-pre">

      //================
      // 代码用途
      //================
      </pre>
      <p>小的注释：</p>
      <pre class="hl-pre">

      //代码说明
      </pre>

      <p>注释单独一行，不要在代码后的同一行内加注释。例如：</p>

      <pre class="hl-pre">

      //姓名
      var name = “abc”;   V
      var name =”abc”; //姓名 X
      </pre>
      <br>
      <br>
      <h4>三、使用空格</h4>
      <p>
      使用空格有助于改善代码的可读性和一致性。在撰写英文文章时在逗号和区间范围后面使用空格。在javascript采用同样的逻辑，可在列表表达式（等价于逗号）和语句结束（等价于完成一次“思考”）后面添加空格。
      </p>

      <p><b>用处一</b></p>
      <ul>
        <li>在分开for循环的各个部分的分号之后：例如，for (var i = 0; i &lt; 10; i +=1){…}</li>
        <li>在for循环中初始化多个变量（i和最大值等）：for (var i = 0, max = 10; i &lt; max; i += 1){…}</li>
        <li>在限定数组项的逗号后面：var a = [1, 2, 3];</li>
        <li>对象属性的逗号之后和将属性名和属性值分开的冒号之后：var o = {a: 1, b: 2};</li>
        <li>分隔开函数中各个参数的逗号之后：myFunc(a, b, c)</li>
        <li>在函数声明的大括号之前：function myFunc() {}</li>
        <li>在匿名函数表达式之后：var myFunc = function () {};</li>
      </ul>

      <p><b>用处二</b></p>
      <p>空格的另外一个很好的用途是用来分隔所有的操作符和操作，这也就是意味着在 +, -, *, =, &lt;, >, &lt;=, >=, ===, !==, &&, ||, += 等之后使用空格：</p>
      <p>例子：</p>

      <pre class="hl-pre">

      //大量空格，并且使用一致，是的代码可读性更好
      //允许在阅读的时候不用一口气读下去
      var d = 0,
          a = b +1;
      if ( a && b && c) {
          d = a % c;
          a += d;
      }

      //反模式
      //缺少空格或空格使用不一致，使得代码比较混乱
      var d= 0;
          a =b+1;
      if (a&& b&& c) {
      d=a %c;
          a+= d;
      }
      </pre>
      <br>
      <br>
      <h4>四、编写API文档</h4>
      <h5>1. 生成API文档的步骤：</h5>
      <ul>
        <li>编写特殊格式的代码块（即一些注释块）</li>
        <li>运行工具来解析代码和注释（工具如：JSDoc Toolkit和YUIDoc）</li>
        <li>发布工具解析的结果，大多数情况是采用HTML格式发布（如网页版的API文档就是利用工具生成的）</li>
      </ul>
      <br>
      <p>简单举例：</p>
      <pre class="hl-pre">

        /**
        * 翻转一个字符串
        *
        * @param  {String} 输入需要翻转的字符串
        * @return {String} 翻转后的字符串
        **/

        var reverse = function (input) {
            //...
            return output;
        };
      </pre>

      <p>YUIDoc范例：</p>

      <p>完整范例：本程序由一个文件(app.js)组成，该文件仅有一个模块(myapp)。</p>

      <pre class="hl-pre">

      app.js:

      /**
      * 我的javascript应用程序
      *
      * @module myapp
      */

      //使用命名空间来定义一个空对象
      var MYAPP = {};

      //定义一个包含两个方法(sum()和multi())的math_stuff对象
      /**
      * @namespace MYAPP
      * class math_stuff
      */

      MYAPP.math_stuff = {
          /**
          * Sums two numbers
          *
          * @method sum
          * param     {Number}    是第一个数
          * param     {Number}    是第二个数
          * return    {Number}    两个输入的总和
          */
          sum: function (a, b) {
              return a + b;
          },
          /**
          * Multiplies two numbers
          * param     {Number}    是第一个数
          * param     {Number}    是第二个数
          * return    {Number}    两个输入相乘后结果
          */
          multi: function (a, b) {
              return a * b;
          }
      };
      </pre>

      <p>@namespace：这里用于命名包含以上对象的全局引用的名称</p>
      <p>@class：这里有些命名不当，他实际意思是指对象或者构造函数</p>
      <p>@method：定义对象中的方法和方法名</p>
      <p>@param：列举函数所使用的参数。其中将参数类型用大括号括起来，并在其后注释参数名及描述。</p>
      <p>@return：类似于@param，这里用于描述返回值的，并且该方法没有名称。</p>
      <p>@constructor：表明这个“类”实际上是一个构造函数</p>
      <p>@property和@type描述了对象的属性。</p>

      <h5>2. 编写API目的：</h5>
      <p>为API编写注释不仅仅是一中提供参考文档的简便方法，而且还有其他用途——通过再次审查代码，提高代码质量。
      在解决问题时写出的解决方案仅仅是一个初稿。该解决方案可以给出令人期待的输出，但是该方案是否是最佳方案呢？改代码是否可读、易于理解、维护和升级呢？当您再次审视代码时您将更加确定代码哪些部分可以改进——如何使得代码更容易继续更新，移除一些不足之处等。它可以极大地帮助您创建高质量的代码。</p>
      <br>
      <br>
      <h4>四、推荐写法</h4>
      <p><b>1. 除了三目运算，if,else等禁止简写</b></p>
      <br>
      <pre class="hl-pre">

      // 正确的书写
      if (true) {
          alert(name);
      }
      console.log(name);
      // 不推荐的书写
      if (true)
          alert(name);
      console.log(name);
      // 不推荐的书写
      if (true)
      alert(name);
      console.log(name)
      </pre>
      <p><b>2. 在需要以{}闭合的代码段前增加换行，如：for if</b></p>

      <pre class="hl-pre">

      // 没有换行，小的代码段无法区分
      if (wl && wl.length) {
          for (i = 0, l = wl.length; i &lt; l; ++i) {
              p = wl[i];
              type = Y.Lang.type(r[p]);
              if (s.hasOwnProperty(p)) {
                  if (merge && type == 'object') {
                      Y.mix(r[p], s[p]);
                  } else if (ov || !(p in r)) {
                      r[p] = s[p];
                  }
              }
          }
      }
      // 有了换行，逻辑清楚多了
      if (wl && wl.length) {

          for (i = 0, l = wl.length; i &lt; l; ++i) {
              p = wl[i];
              type = Y.Lang.type(r[p]);

              if (s.hasOwnProperty(p)) {
                  // 处理merge逻辑
                  if (merge && type == 'object') {
                      Y.mix(r[p], s[p]);
                  } else if (ov || !(p in r)) {
                      r[p] = s[p];
                  }
              }
          }
      }
      </pre>
      <p>
        换行可以是空行，也可以是注释
      </p>
      <p><b>3. 使用Function进行类的定义，不推荐继承，如需继承采用成熟的类库实现继承</b></p>

      <pre class="hl-pre">

      // 类的实现
      function Person(name) {
          this.name = name;
      }

      Person.prototype.sayName = function() {
          alert(this.name);
      };

      var me = new Person("Nicholas");

      // 将this放到局部变量self
      function Persion(name, sex) {
          var self = this;

          self.name = name;
          self.sex = sex;
      }
      </pre>
      <p>平时咱们写代码，基本都是小程序，真心用不上什么继承，而且继承并不是JS的擅长的语言特性，尽量少用。如果非要使用的话，注意一点：</p>

      <pre class="hl-pre">

      function A(){
          //...
      }
      function B(){
          //...
      }
      B.prototype = new A();
      B.prototype.constructor = B; //原则上，记得把这句话加上
      </pre>

      <p>继承从原则上来讲，别改变他的构造函数，否则这个继承就显得很别扭了~</p>
      <p><b>4. 使用局部变量缓存反复查找的对象(包括但不限于全局变量、dom查询结果、作用域链较深的对象)</b></p>

      <pre class="hl-pre">

      // 缓存对象
      var getComment = function() {
          var dom = $("#common-container"),               // 缓存dom
                      appendTo = $.appendTo,                      // 缓存全局变量
              data = this.json.data;                      // 缓存作用域链较深的对象
      }

      //当需要缓存this时必须使用self变量进行缓存
      // 缓存this
      function Row(name) {
          var self = this;

          self.name = name;
          $(".row").click(function() {
              self.getName();
          });
      }
      </pre>
      <p>self是一个保留字，不过用它也没关系。在这里，看个人爱好吧，可以用_this, that, me等这些词，都行，但是团队开发的时候统一下比较好。</p>
      <br>
      <p><b>5. 使用eval，采取$.parseJSON</b></p>
      <p><b>三个原因：</b></p>
      <ul>
        <li>有注入风险，尤其是ajax返回数据</li>
        <li>不方便debug</li>
        <li>效率低，eval是一个执行效率很低的函数</li>
      </ul>
      <p>建议： 使用new Function来代替eval的使用，最好就别用。</p>
      <br>
      <br>
      <h4>六、不规范写法</h4>
      <p><b>1. 句尾没有分号</b></p>

      <pre class="hl-pre">

        var isHotel = json.type == "hotel" ? true : false
      </pre>
      <p>这个是要引起注意的，比如：</p>
      <pre class="hl-pre">

      a = b        // 赋值
      (function(){
          //....
      })()         // 自执行函数
      </pre>
      <br>
      <p>未加分号，结果被解析成</p>

      <pre class="hl-pre">

      a = b(function(){//...})()  //将b()()返回的结果赋值给a
      </pre>
      <br>
      <p><b>2. 变量命名各种各样</b></p>

      <pre class="hl-pre">

        var is_hotel;
        var isHotel;
        var ishotel;
      </pre>
      <br>
      <p><b>3. if 缩写</b></p>
      <pre class="hl-pre">

      if (isHotel)
        console.log(true)
      else
        console.log(false)
      </pre>
      <br>
      <p><b>4. 使用 eval</b></p>
      <pre class="hl-pre">

      var json = eval(jsonText);
      </pre>
      <br>
      <p><b>5. 变量未定义到处都是</b></p>

      <pre class="hl-pre">

      function() {
        var isHotel = 'true';
        .......

        var html = isHotel ? '&lt;p&gt;hotel&lt;/p&gt;' : "";
      }
      </pre>
      <br>
      <p><b>6. 超长函数</b></p>
      <pre class="hl-pre">
      function() {
        var isHotel = 'true';
        //....... 此处省略500行
        return false;
      }
      </pre>
      <br>
      <br>
      <h4>七、需要注意的地方</h4>
      <p>window.onload只能使用一次，使用多次会被最后的覆盖。</p>
      <p><b>解决方案：</b></p>
      <ul>
        <li>只引用一次window.onload</li>
        <li>使用jQuery的$(docuemnt.ready(function(){}); 可多次使用</li>
        <li>使用函数封装，代码地址</li>
        <li>CSS放在页头引入，javascript放在页尾引入</li>
        <li>在上线之前，要编译压缩代码</li>
        <li>减少重排与重绘</li>
      </ul>

      <br>
      <br>
      <h4>八、扩展阅读：</h4>
      <ul>
        <li>JS技巧函数</li>
        <li>浏览器的重排与重绘</li>
        <li>进阶书籍：《编写高质量代码-web前端开发修炼之道》</li>
      </ul>

    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class GuideJs extends Vue {
}
</script>
<style lang="less" scoped>

</style>
