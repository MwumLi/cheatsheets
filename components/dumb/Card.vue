<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <a :href="url" :title="description"></a>
    <span>{{ type }}</span>
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    type: {
      type: String,
      default: 'card',
    },
    description: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '#374046',
    },
  },
}
</script>

<style lang="scss">
$cardWidth: 200px;
$cardHeight: 150px;

.card {
  display: inline-block;
  width: $cardWidth;
  height: $cardHeight;
  margin: 5px;
  color: #f2f2f2;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  box-sizing: border-box;
  padding-top: 70px;
  position: relative;
  transition: all 200ms ease;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23), 0 3px 10px rgba(0, 0, 0, 0.16);
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    right: 2px;
    bottom: 1px;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
