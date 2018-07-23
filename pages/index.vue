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
		<Cards :cards="viewCmds"></Cards>
	</section>
</div>
</template>

<script>
import Cards from '~/components/smart/Cards.vue'

export default {
  components: {
    Cards
  },
  asyncData ({env, query}) {
    let cards = []
    if (process.server) {
      const fs = require('fs');
      let data = {}
      try {
        fs.readdirSync(`./${env.markdown}`).map(file => {
          // 忽略隐藏文件
          if (file.startsWith('.')) return;

          let fileArr = file.split('.').slice(0, -1)
					let title = fileArr[0]
          if (data[title] === undefined) {
            data[title] = { title: title, types: [], url: '', description: title }
          }

          let item = data[title];
          let name = title || fileArr.join('.');
          let type = {
            type: 'card',
            url: `/card/${name}`
          }

          if (fileArr.length > 1) {
            type = {
              type: 'post',
              url: `/post/${name}`
            };
          }
          item.types.push(type);
          item.url = type.url;
				});

        Object.keys(data).map(k => {
            data[k].types.map(type => {
              cards.push({...data[k], ...type})
            })
        });
      } catch (err) {
        console.log("[获取文件列表]:", err)
      }
    }

    return { cards, query: query.q || '' }
  },
	data () {
		return {
			title: 'cheatsheets',
      query: ''
		}
	},
	computed: {
		viewCmds () {
			var _cmds = (this.cards || []).slice();
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

