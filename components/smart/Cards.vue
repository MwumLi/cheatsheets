<template>
  <div class="cmd-wrap">
    <card
      v-for="(card, index) in cards"
      :key="card.title + '-' + card.type"
      :title="card.title"
      :url="card.url"
      :type="card.type"
      :description="card.description"
      :bg-color="colorsMap[colors[index % colorsLength]]"
    ></card>
  </div>
</template>

<script>
import Card from '~/components/dumb/Card.vue'

export default {
  components: { Card },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const colorsMap = {
      red: '#f44336',
      pink: '#e91e63',
      blank: '#374046',
      purple: '#9c27b0',
      deepPurple: '#673ab7',
      indigo: '#3f51b5',
      blue: '#2196f3',
      lightBlue: '#03a9f4',
      cyan: '#00bcd4',
      teal: '#009688',
      green: '#4caf50',
      lightGreen: '#8bc34a',
      lime: '#cddc39',
      yellow: '#ffeb3b',
      amber: '#ffc107',
      orange: '#ff9800',
      deepOrange: '#ff5722',
      brown: '#795548',
      grey: '#9e9e9e',
      blueGrey: '#607d8b',
    }
    const colors = Object.keys(colorsMap)

    return {
      colors,
      colorsLength: colors.length,
      colorsMap,
    }
  },
}
</script>

<style lang="scss">
.cmd-wrap {
  text-align: center;

  $colors: (
    red: #f44336,
    pink: #e91e63,
    blank: #374046,
    purple: #9c27b0,
    deepPurple: #673ab7,
    indigo: #3f51b5,
    blue: #2196f3,
    lightBlue: #03a9f4,
    cyan: #00bcd4,
    teal: #009688,
    green: #4caf50,
    lightGreen: #8bc34a,
    lime: #cddc39,
    yellow: #ffeb3b,
    amber: #ffc107,
    orange: #ff9800,
    deepOrange: #ff5722,
    brown: #795548,
    grey: #9e9e9e,
    blueGrey: #607d8b,
  );

  @each $key, $value in $colors {
    .#{'' + $key} {
      background-color: $value;
    }
  }
}
</style>
