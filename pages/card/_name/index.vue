<template>
  <div>
    <div class="page-header">
      <a href="/" class="btn pull-left toggle-search" title="search">
        <img src="/search.svg" />
      </a>
      <a :href="editUrl" class="btn pull-left edit" target="_blank"
        >在 Github 上编辑此页</a
      >
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div class="page-wrapper" v-html="html"></div>
  </div>
</template>

<script>
export default {
  middleware: 'card',
  asyncData({ params, env, marked }) {
    let html = ''
    if (process.server && marked) {
      const fs = require('fs')
      try {
        const markdown = fs.readFileSync(
          `./${env.markdown}/${params.name}.md`,
          'utf-8'
        )
        html = marked(markdown)
      } catch (err) {
        console.error('[获取文件内容]:', err)
      }
    }

    return { html, editUrl: `${env.mdBase}/${params.name}.md` }
  },
}
</script>

<style src="~/assets/cmds.scss" lang="scss"></style>
