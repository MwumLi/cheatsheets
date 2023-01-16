<template>
  <div>
    <section class="header">
      <header>
        <h1 class="title">{{ title }}</h1>
        <input
          v-model="query"
          class="search-cmd"
          autofocus
          autocomplete="off"
          placeholder="what you want to view ..."
        />
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
    Cards,
  },
  asyncData({ env }) {
    const cards = []
    if (process.server) {
      const fs = require('fs')
      const data = {}
      try {
        fs.readdirSync(`./${env.markdown}`).forEach((file) => {
          // 忽略隐藏文件
          if (file.startsWith('.')) return

          const fileArr = file.split('.').slice(0, -1)
          const title = fileArr[0]
          if (data[title] === undefined) {
            data[title] = { title, types: [], url: '', description: title }
          }

          const item = data[title]
          const name = title || fileArr.join('.')
          let type = {
            type: 'card',
            url: `/card/${name}`,
          }

          if (fileArr.length > 1) {
            type = {
              type: 'post',
              url: `/post/${name}`,
            }
          }
          item.types.push(type)
          item.url = type.url
        })

        Object.keys(data).forEach((k) => {
          data[k].types.forEach((type) => {
            cards.push({ ...data[k], ...type })
          })
        })
      } catch (err) {
        console.error('[获取文件列表]:', err)
      }
    }
    return { cards }
  },
  data() {
    return {
      title: 'cheatsheets',
      query: this.$route.query.q || '',
    }
  },
  computed: {
    viewCmds() {
      let _cmds = (this.cards || []).slice()
      const _queryArr = this.query.trim().split(' ')
      _cmds = _cmds.filter((item) => {
        return _queryArr.some((_query) => item.title.includes(_query))
      })
      return _cmds
    },
  },
}
</script>

<style src="~/assets/index.scss" lang="scss"></style>
<style lang="scss">
.header {
  background: #fff;
  min-width: 320px;
  max-width: 550px;
  margin: 130px auto 40px auto;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

  .title {
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    text-transform: capitalize;
    text-rendering: optimizeLegibility;
    @media (min-width: 480px) and (max-width: 640px) {
      font-size: 70px;
      top: -140px;
    }

    @media (min-width: 320px) and (max-width: 479px) {
      font-size: 60px;
      top: -130px;
    }
  }

  .search-cmd {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    padding: 16px 16px 16px 60px;
    border: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);

    &::placeholder {
      font-style: italic;
      font-weight: 300;
      color: #e6e6e6;
    }
  }
}
</style>
