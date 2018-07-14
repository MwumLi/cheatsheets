<template>
<div>
  <div class="page-header">
    <a href="/" class="btn pull-left toggle-search" title="search">
      <i class="fa fa-search"></i>
    </a>
    <a :href="editUrl" class="btn pull-left edit" target="_blank">在 Github 上编辑此页</a>
  </div>
  <div class="page-wrapper" v-html="html">
  </div>
</div>
</template>

<script>
import markdown2html from './markdown2html.js';

export default {
  asyncData ({params, env}) {
    let html = '';
    if (process.server) {
      const fs = require('fs');
      try {
        let markdown = fs.readFileSync(`./markdowns/${params.cmd}.md`, 'utf-8');
        html = markdown2html(markdown);
        console.log('server')
      } catch(err) {
        console.log("[获取文件内容]:", err)
      }
    }

    return { html, editUrl: `${env.mdBase}/${params.cmd}.md`}
  }
}
</script>

<style src="assets/cmds.scss" lang="scss"></style>
