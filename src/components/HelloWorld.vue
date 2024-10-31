<template>
  <div id="drawing" class="hello">
    
  </div>
</template>

<script>
import { G, SVG, Text } from '@svgdotjs/svg.js'

export default {

  methods: {
    add_text(text) {
      return new Text().text(text)
    }
  },

  mounted() {
    let draw = SVG().addTo('#drawing')
    let group = new G()
    
    group.add(this.add_text("hhh"))

    draw.add(group);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
