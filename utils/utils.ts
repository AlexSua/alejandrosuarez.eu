export function translateObject(x: String, y: String, element: HTMLElement) {
	if (element)
		element.style.transform = "translate3d(" + x + ", " + y + ", 0)";
}