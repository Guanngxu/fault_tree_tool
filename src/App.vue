<script setup lang="ts">
import { onMounted } from 'vue';
import { G, SVG, Text, Rect } from '@svgdotjs/svg.js';
import { Util } from './utils/utils';


const createTopEvent = (text: string, lineLen: number = 10) => {
	const group = new G();
	const textNode = createTextNode(text, lineLen);
	const { width, height } = textNode.bbox();
	const rectNode = createRectNode(width + 10, height + 10);
	group.add(rectNode).add(textNode);
	return group;
}

const createRectNode = (w: number, h: number) => {
	const node = new Rect().size(w, h);
	node.attr({ "stroke-width": 3, "opacity": 1, "stroke": "#000", "fill": "#fff", "x": 0, "y": 0 })
	return node;
}

// const createTextNode = (text: string) => {
// 	const group = new G();
// 	const textArr = Util.splitStrByLen(text, 5);
// 	for(let i = 0; i < textArr.length; i++) {
// 		const cur = new Text().text(textArr[i]);
// 		cur.attr({"y": i*18})
// 		group.add(cur);
// 	}
// 	return group;
// }

const createTextNode = (text: string, lineLen: number) => {
	const textArr = Util.splitStrByLen(text, lineLen);
	const node = new Text().text(function (add) {
		for (let i = 0; i < textArr.length; i++) {
			add.tspan(textArr[i]).newLine().attr({ "y": (i+1) * 18, "dx": 5 })
		}
	});

	return node;
}

onMounted(() => {
	const draw = SVG().addTo('#drawing').size('100%', '100%');
	// const textnode = createTextNode("的好时机打火机是否会健身房惠结算的合肥寄送东方航空健身房会计师");
	// console.info(textnode.bbox())
	// const node = createRectNode(textnode.bbox().width+10, textnode.bbox().height+10);
	// draw.add(node);
	const topEvent = createTopEvent("的好时机打火机是否会健身房惠结算的合肥寄送东方航空健身房会计师", 10)
	draw.add(topEvent);
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
