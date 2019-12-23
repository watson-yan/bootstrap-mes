<template>
<div class="p-4">
	<p>官方文档：<a href="https://github.com/kabachello/jQuery.NumPad" target="_blank">https://github.com/kabachello/jQuery.NumPad</a></p>
	<br>
	<h5 class="mb-3">普通用法 - 打开数字键盘</h5>
	<div class="py-3">
		<div class="row">
			<div class="col-sm-3">
				<input ref="input" type="text" class="form-control">
			</div>
		</div>
	</div>
</div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class Numpad extends Vue {
  mounted () {
    $(this.$refs.input).numpad()
  }
}
</script>
