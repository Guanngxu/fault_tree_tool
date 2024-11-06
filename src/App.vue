<script setup lang="ts">
import { onMounted } from 'vue';
import { SVG } from '@svgdotjs/svg.js';
import { SVGUtil } from './utils/svgutil';


onMounted(() => {
	const draw = SVG().addTo('#drawing').size('100%', '100%');
	const topEvent = SVGUtil.createTopEvent("的好时机打火机是否会健身房惠结算的合肥寄送东方航空健身房会计师", 10)
	const bottomEvent = SVGUtil.createBottomEvent("的好时机打火机是否会健身房惠结算的合肥寄送东方航空健身房会计师", 5)
	bottomEvent.translate(100, 100)
	draw.add(topEvent).add(bottomEvent);
})


</script>

<template>
	<div id="drawing">

	</div>
</template>

<style scoped>
#drawing {
	background-color: beige;
	height: 100%;
	width: 100%;
	margin: 0;
}
</style>
