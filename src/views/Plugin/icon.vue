<template>
  <div class="page-icon">
    <div class="p-5">
      <h3 class="pb-2">共包含4496个Icon</h3>
      <div class="row my-5">
        <div v-for="item of icons" class="col-sm-4 py-2" :key="item.name">
          <i :class="getClsName(item.name)"></i>
          {{item.name}}
        </div>
      </div>
      <section>
        <h3 class="mb-3">尺寸 / Size</h3>
        <div class="examples examples-size">
          <div>
            <div>
              <i class="mdi mdi-18px mdi-account"></i>
            </div>
            <div>
              <code>mdi-18px</code>
            </div>
          </div>
          <div>
            <div>
              <i class="mdi mdi-24px mdi-account"></i>
            </div>
            <div>
              <code>mdi-24px</code>
            </div>
          </div>
          <div>
            <div>
              <i class="mdi mdi-36px mdi-account"></i>
            </div>
            <div>
              <code>mdi-36px</code>
            </div>
          </div>
          <div>
            <div>
              <i class="mdi mdi-48px mdi-account"></i>
            </div>
            <div>
              <code>mdi-48px</code>
            </div>
          </div>
        </div>
      </section>
      <br>
      <br>

      <h3 class="mb-3">旋转 / Rotate</h3>
      <div class="examples">
        <div>
          <div>
            <i class="mdi mdi-36px mdi-account"></i>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-rotate-45 mdi-account"></i>
          </div>
          <div>
            <code>mdi-rotate-45</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-rotate-90 mdi-account"></i>
          </div>
          <div>
            <code>mdi-rotate-90</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-rotate-135 mdi-account"></i>
          </div>
          <div>
            <code>mdi-rotate-135</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-rotate-180 mdi-account"></i>
          </div>
          <div>
            <code>mdi-rotate-180</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-rotate-225 mdi-account"></i>
          </div>
          <div>
            <code>mdi-rotate-225</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-rotate-270 mdi-account"></i>
          </div>
          <div>
            <code>mdi-rotate-270</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-rotate-315 mdi-account"></i>
          </div>
          <div>
            <code>mdi-rotate-315</code>
          </div>
        </div>
      </div>
      <br>
      <br>

      <h3 class="mb-3">自动旋转 / Spin</h3>
      <div class="examples">
        <div>
          <div>
            <i class="mdi mdi-36px mdi-spin mdi-loading"></i>
          </div>
          <div>
            <code>mdi-spin</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-spin mdi-star"></i>
          </div>
          <div>
            <code>mdi-spin</code>
          </div>
        </div>
      </div>
      <br>
      <br>
      <h3>颜色 / Color</h3>
      <div class="examples">
        <div>
          <div class="dark">
            <i class="mdi mdi-36px mdi-light mdi-account dark-demo"></i>
          </div>
          <div>
            <code>mdi-light</code>
          </div>
        </div>
        <div>
          <div class="dark">
            <i class="mdi mdi-36px mdi-light mdi-inactive mdi-account dark-demo"></i>
          </div>
          <div>
            <code>mdi-light mdi-inactive</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-dark mdi-account"></i>
          </div>
          <div>
            <code>mdi-dark</code>
          </div>
        </div>
        <div>
          <div>
            <i class="mdi mdi-36px mdi-dark mdi-inactive mdi-account"></i>
          </div>
          <div>
            <code>mdi-dark mdi-inactive</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import icons from './mdi_icons'

@Component
export default class PluginIcon extends Vue {
  @Provide() icons: object[] = icons;

  getClsName (name: string) {
    const cls: any = { mdi: true }
    if (name) {
      cls[`mdi-${name}`] = true
    }
    return cls
  }
}
</script>
<style lang="less" scoped>
.page-icon {
  width: 100%;
  height: 100%;
  .mdi {
    font-size: 1.5rem;
    vertical-align: middle;
  }
  div.examples {
    display: flex;
    flex-wrap: wrap;
  }

  div.examples > div {
    display: flex;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  div.examples > div > div:first-child {
    display: flex;
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.4);
    background: #fff;
    z-index: 1;
    align-items: center;
    justify-content: center;
  }

  div.examples > div > div:first-child + div {
    display: flex;
    margin-left: -0.25rem;
    padding: 0.5rem 0.75rem 0.5rem 1rem;
    background: #222;
    border-radius: 0 0.25rem 0.25rem 0;
  }

  div.examples > div > div:first-child + div > code {
    color: #fff;
    align-self: center;
  }

  div.examples > div > div.dark:first-child {
    background: #444;
  }

  div.examples i {
    display: flex;
  }

  div.examples-size > div > div:first-child {
    min-width: 3rem;
  }
}
</style>
