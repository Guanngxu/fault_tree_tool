<script setup lang="ts">
import { SVG } from '@svgdotjs/svg.js'

var draw = SVG().addTo('body').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' })
</script>

<template>
  <div id="">
    
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
