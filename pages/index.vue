<template>
<div>
	<section class="header">
		<header>
			<h1 class="title">{{title}}</h1>
			<input class="search-cmd"
				autofocus
				autocomplete="off"
				placeholder="what you want to view ..."
				v-model="query">
		</header>
	</section>
	<section class="command">
		<cmd :cmds="viewCmds"></cmd>
	</section>
</div>
</template>

<script>
import Cmd from '~/components/Cmd.vue'

export default {
  components: {
    Cmd
  },
  asyncData () {
    let cmds = []
    if (process.server) {
      console.log('server')
      const fs = require('fs');
      try {
        cmds = fs.readdirSync('./markdowns').map(file => {
					file = file.split('.')[0]
					return {
						title: file,
						url: '/cmds/' + file,
						description: file
					}
				});
      } catch (err) {
        console.log("[获取文件列表]:", err)
      }
    }
    return { cmds }
  },
	data () {
		return {
			title: 'cheatsheets',
      query: ''
		}
	},
	computed: {
		viewCmds () {
			var _cmds = (this.cmds || []).slice();
			var _queryArr = this.query.trim().split(' ');
			_cmds = _cmds.filter(item => {
				return _queryArr.some(_query => item.title.indexOf(_query) > -1)
			})
			return _cmds;
		}
	}
}
</script>

<style src="assets/index.scss" lang="scss"></style>

