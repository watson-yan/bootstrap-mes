<template>
  <div>
    <div class="p-5">
      <button @click="alert" class="btn btn-light mr-2">Alert框</button>
      <button @click="toast" class="btn btn-light mr-2">Toast框</button>
      <button @click="loading" class="btn btn-light mr-2">Loading加载</button>
    </div>

    <div>
      <div class="modal" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
      <br>
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <svg style="width: 1em; height: 1em; vertical-align: middle; fill: currentcolor; overflow: hidden; font-size: 32px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2427" width="32" height="32">
            <path d="M512 958C265.681 958 66 758.319 66 512S265.681 66 512 66s446 199.681 446 446-199.681 446-446 446z m-21.976-285.027l292.547-292.547L740.145 338 447.598 630.547 284.426 467.375 242 509.802 447.768 715.57l42.426-42.427-0.17-0.17z" p-id="2428" fill="#0e932e" data-spm-anchor-id="a313x.7781069.0.i2"></path>
          </svg>
          <strong class="mr-auto">Bootstrap</strong>
          <small class="text-muted">11 mins ago</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class PluginMessage extends Vue {
  alert () {
    $.alert('123')
  }

  toast () {}

  loading () {}
}
</script>
<style lang="less" scoped>
</style>
