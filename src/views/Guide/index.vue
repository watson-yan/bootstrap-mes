<template>
  <div>
    <h2 class="text-center mt-5">前端开发规范</h2>
    <div class="pl-5">
      <div class="d-inline-block router-item" @click="$router.push('/guide/js')">
        <div class="rounded border mr-2 p-2">Javascript规范</div>
      </div>
      <div class="d-inline-block router-item" @click="$router.push('/guide/css')">
        <div class="rounded border mr-2 p-2">Css规范</div>
      </div>
      <div class="d-inline-block router-item" @click="$router.push('/guide/html')">
        <div class="rounded border mr-2 p-2">Html规范</div>
      </div>
    </div>
    <div class="p-5">
      <h4 class="mb-2">一、规范目的</h4>
      <p>为提高团队协作效率，便于前端后期优化维护，输出高质量的文档。</p>
      <br />
      <h4 class="mb-2">二、基本准则</h4>
      <p>
        符合web标准，结构表现行为分离，兼容性优良。页面性能方面，代码要求简洁明了有序， 尽可能的减小服务器负载，保证最快的解析速度。
        项目的维护和二次开发可能是直接或间接的团队合作，所以创建易维护的代码是一个项目成功与否的关键，易维护的代码意味着具有如下特性：
      </p>
      <ul>
        <li>阅读性好：如良好的注释和命名规范，有文档</li>
        <li>具有一致性：看起来如同一个人编写</li>
        <li>
          代码的松耦合，高度模块化：将页面内的元素视为一个个模块，相互独立，尽量避免耦合过高的代码，从html,css,js三个层面都要考虑模块化
          严格按照规范编写代码
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class GuideRoot extends Vue {}
</script>
<style lang="less" scoped>
.router-item {
	cursor: pointer;
	&>div:hover {
		color: #007bff;
		background: #eee;
	}
}
</style>
