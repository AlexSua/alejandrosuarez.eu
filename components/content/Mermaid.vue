<template>
	<div class="overflow-auto relative my-4 ">
		<div ref="mermaid" class="mermaid flex justify-center" v-bind:style="{ minWidth: minwidth }">

		</div>
	</div>
</template>

<script setup lang="ts">
const mermaid = ref()
const slots = useSlots()
const dark = useDarkMode()
const minwidth = ref("35rem")
const props = defineProps<{
	name: string
}>()

const getSlotChildrenText = children => children.map(node => {
	if (!node.children || typeof node.children === 'string') return node.children || ''
	else if (Array.isArray(node.children)) return getSlotChildrenText(node.children)
	else if (node.children.default) return getSlotChildrenText(node.children.default())
}).join('')


function initializeMermaid() {
	let theme = dark.value ? "dark" : "neutral"
	const getChildrenTextContent = function (children) {
		return children.map(function (node) {
			return node.children
				? getChildrenTextContent(node.children)
				: node.text
		}).join('')
	}

	import("mermaid/dist/mermaid.min.js").then(m => {
		m.initialize({
			startOnLoad: true,
			theme: theme
		});
		m.render(
			props.name,
			getSlotChildrenText(slots.default()) || '',
			(svg) => {
				let width = Number(svg.match(/max-width:.*?([0-9|\.]+)px/)[1])
				svg = svg.replace(/max-width:.*?([0-9|\.]+)px;/, "").replace(/height=".*?"/, "")
				if (width < 16 * 52) {
					minwidth.value = width.toString() + "px"
				}
				mermaid.value.innerHTML = svg;
			},
			mermaid.value
		);
	});
}

function initializeMermaidIntersectionObserved() {
	useIntersectionObserver(mermaid, (entries, observer) => {
		if (entries[0].isIntersecting) {
			initializeMermaid()
			observer.disconnect()
		}
	})
}
watch(dark, () => initializeMermaid())
onMounted(() => {
	if (process.client) {
		initializeMermaidIntersectionObserved()
	}
}
);

</script>
<style  lang="scss">
.dark {
	.mermaid>svg {

		line,
		.actor,
		.labelBox {
			stroke: $vanilla-yellow  !important;
		}

		text.actor>tspan {
			stroke: lightgrey !important;
		}
	}
}
</style>