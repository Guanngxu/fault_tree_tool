import { G, Text, Rect, Ellipse } from '@svgdotjs/svg.js';
import { Util } from './utils';

export class SVGUtil {

    static createTopEvent = (text: string, lineLen: number = 10) => {
        const group = new G();
        const textNode = this.createTextNode(text, lineLen);
        const { width, height } = textNode.bbox();
        const rectNode = this.createRectNode(width + 10, height + 10);
        group.add(rectNode).add(textNode);
        return group;
    }

    static createBottomEvent = (text: string, lineLen: number = 10) => {
        const group = new G();
        const textNode = this.createTextNode(text, lineLen);
        const { width, height } = textNode.bbox();
        const ellipseNode = this.createEllipseNode(width + 10, height + 10);
        textNode.translate(-width / 2, -height / 2);
        group.add(ellipseNode).add(textNode);
        return group;
    }
    
    static createEllipseNode = (w: number, h: number) => {
        const node = new Ellipse().size(w, h);
        node.attr({ "stroke-width": 3, "opacity": 1, "stroke": "#000", "fill": "#fff", "x": 0, "y": 0 })
        return node;
    }

    static createRectNode = (w: number, h: number) => {
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
    
    static createTextNode = (text: string, lineLen: number) => {
        const textArr = Util.splitStrByLen(text, lineLen);
        const node = new Text().text(function (add) {
            for (let i = 0; i < textArr.length; i++) {
                add.tspan(textArr[i]).newLine().attr({ "y": (i+1) * 18, "dx": 5 })
            }
        });
        return node;
    }
}