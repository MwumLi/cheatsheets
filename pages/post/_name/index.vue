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
    <div class="page-wrapper">
      <!-- eslint-disable vue/no-v-html -->
      <div class="markdown-content" v-html="html"></div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'post',
  asyncData({ params, env, marked }) {
    let html = ''
    if (process.server && marked) {
      const fs = require('fs')
      try {
        const markdown = fs.readFileSync(
          `./markdowns/${params.name}.post.md`,
          'utf-8'
        )
        html = marked(markdown)
      } catch (err) {
        console.log('[获取文件内容]:', err)
      }
    }

    return { html, editUrl: `${env.mdBase}/${params.name}.post.md` }
  },
}
</script>

<style src="~/assets/post.scss" lang="scss"></style>
