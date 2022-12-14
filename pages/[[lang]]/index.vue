<template>
	<div ref="el" class="profile-wrapper" :class="{'loaded':loaded_privacy}">
		<header>
			<ProfileHeader />
			<LanguageSwitcher />
		</header>
		<suspense @resolve="resolve">
			<template #default>
				<Main />
			</template>
		</suspense>
		<footer>
			<Footer class="bg-videodark" />
		</footer>
	</div>
</template>


<script setup lang="ts">
const router = useRouter()
const route = useRoute();
const loaded_privacy = router.prevRoute.path.includes("/privacy")

const el = ref();

let initialized = false;
const scroll = useScroll(process.client ? window : null);
watch(scroll.y, () => initialized && window.requestAnimationFrame(animationFrame))


const Main = defineAsyncComponent(() => import("../../components/Profile/Main.vue"))
const props = defineProps({
	afterEnter: Function,
});

definePageMeta({
	transition: {
		"lang-blog": "slide-left",
		"lang-privacy": "slide-up"
	}
});

const emit = defineEmits(["update:afterEnter"]);

useSeo({
	title: "Profile",
	description: "With a master’s degree in Web Engineering, over 2 years of experience as System administrator and Backend developer, I am looking to learn and participate in the development of new projects that allow me to grow professionally.",
	image: "",
	type: "WebSite",
	location: route.path,
});
let transitionFinished = false;
let mounted = false;
let resolved = false;
emit("update:afterEnter", function () {
	transitionFinished = true;
});

function resolve() {

	if (transitionFinished || !router.prevRoute.path.includes("/blog")) {
		if (mounted) {
			initialize()
		}

	} else {
		emit("update:afterEnter", function () {
			if (mounted) {
				initialize()
			}
		})
	}
	resolved = true
};

onMounted(() => {
	if ((resolved && !initialized) || loaded_privacy){
		initialize()
	}
	mounted = true;
})

onBeforeUnmount(() => {
	removeEventListeners();
});

let wrapper: HTMLElement;
let cronograma_trabajo: HTMLElement;
let cronograma_estudio: HTMLElement;
let cronograma_estudio_height: Number;
let elementos_trabajo: HTMLElement[];
let cancel_buttons: any;
let elementos_estudios: HTMLElement;
let cronograma_elementos_trabajo: HTMLElement[];
let cronograma_secciones: HTMLElement[];
let cronograma: HTMLElement[];
let secciones: HTMLElement[];
let windowWidth: Number;
let scrollAnterior: Number;
let cronograma_seccion_trabajo: HTMLElement;
let cronograma_seccion_trabajo_element: HTMLElement;
let videoIntro: HTMLVideoElement;
let seccion_titulos: HTMLElement[];
let creador_titulo: HTMLElement;
let creador: HTMLElement;
let arriba: HTMLElement;
let seccion_trabajo_abierta: any;


async function initialize() {
	// setTimeout(() => {
		initializeTitles();
		initializeVariables();
		initializeJS();
		initializeEventListeners();
		initialized = true;
	// }, 200);

}

function initializeVariables() {
	wrapper = document.body.querySelector(".profile-wrapper") as HTMLElement;
	cronograma_trabajo = el.value.querySelector(".trabajo>div");
	cronograma_estudio = el.value.querySelector(".estudios>div");
	cronograma_estudio_height = (cronograma_estudio as any).offsetHeight;
	elementos_trabajo = el.value.querySelectorAll(
		".trabajo .cronograma-elemento"
	);
	cancel_buttons = [];
	elementos_estudios = el.value.querySelectorAll(
		".estudios .cronograma-seccion"
	);
	cronograma_elementos_trabajo = el.value.querySelectorAll(
		".trabajo .cronograma-elemento"
	);
	cronograma_secciones = el.value.querySelectorAll(
		".trabajo .cronograma-seccion"
	);
	cronograma = el.value.querySelectorAll(".cronograma");
	secciones = el.value.querySelectorAll(".seccion");
	windowWidth = window.innerWidth;
	scrollAnterior = window.scrollY;
	cronograma_seccion_trabajo = el.value.querySelector(".seccion-trabajo");
	cronograma_seccion_trabajo_element = el.value.querySelector(".trabajo");
	videoIntro = el.value.querySelector("#videoIntro");
	seccion_titulos = el.value.querySelectorAll(".seccion-izquierda h3");
	creador_titulo = el.value.querySelector(".creador");
	creador = el.value.querySelector(".creador");
	arriba = el.value.querySelector(".arriba>img");
	seccion_trabajo_abierta = 0;
}

function initializeJS() {
	chequearNavegador();
	fijarElementos();
	aparicionElementos();
	animacionTrabajo();
	aparicionTitulos();
}

function initializeEventListeners() {
	if (videoIntro.readyState === 4) {
		wrapper.classList.add("loaded");
	} else {
		videoIntro.addEventListener("playing", function () {
			wrapper.classList.add("loaded");
		});
	}
	setTimeout(function () {
		if (!wrapper.classList.contains("loaded")) {
			wrapper.classList.add("loaded", "failload");
			videoIntro.style.display = "none";
		}
	}, 7000);
	window.onresize = () => {
		if (windowWidth && window.innerWidth != windowWidth) {
			windowWidth = window.innerWidth;
			initializeJS();
		}
	};

	// window.onscroll = () => {
	// 	window.requestAnimationFrame(animationFrame);
	// };
}

function removeEventListeners() {
	if (!videoIntro.paused) videoIntro.pause();

	videoIntro.removeEventListener("playing", function () {
		wrapper.classList.add("loaded");
	});
	window.onresize = () => { };
	if (!videoIntro.paused) videoIntro.pause();
}

function initializeTitles() {
	Array.from(el.value.querySelectorAll(".seccion-izquierda h3")).map(
		(el: any) => {
			el.textContent = "";
		}
	);
}

function chequearNavegador() {
	if (window.innerWidth <= 1024 && navigator.userAgent.indexOf("Firefox") > 0) {
		wrapper.style.gridTemplateRows = "100vh auto 100vh";
	}
}

function translateObject(x: String, y: String, element: HTMLElement) {
	element.style.transform = "translate3d(" + x + ", " + y + ", 0)";
}

function getObjectTranslation(el: HTMLElement) {
	var values = el.style.transform.split(/\w+\(|\);?/);
	if (!values[1] || !values[1].length) {
		return [];
	}
	return values[1].split(/,\s?/g);
}


function animacionAparicionTextosTrabajo(cronograma_contenido: HTMLElement) {
	let time = 0;
	let height = 0;
	cronograma_contenido.querySelectorAll(".texto").forEach(function (element) {
		let elemento_texto = element as HTMLElement;
		time += 300;
		height += elemento_texto.offsetHeight;
		setTimeout(() => elemento_texto.classList.add("open"), time);
	});
	cronograma_contenido.style.minHeight = height + "px";
}

function eliminarAparicionTextosTrabajo(cronograma_contenido: HTMLElement) {
	cronograma_contenido.style.minHeight = "";
	cronograma_contenido
		.querySelectorAll(".texto")
		.forEach(function (elemento_texto) {
			elemento_texto.classList.remove("open");
		});
}

function transitionEnd(element: HTMLElement, callback: Function) {
	element.addEventListener("transitionend", function transition() {
		element.removeEventListener("transitionend", transition, false);
		return callback();
	});
}

function createCancelButton(elemento: HTMLElement) {
	let cancel_button = document.createElement("div");
	cancel_button.className = "cancel";
	elemento.appendChild(cancel_button);
	cancel_buttons.push({ element: cancel_button, section: elemento });
	seccion_trabajo_abierta = elemento;
	fijarElementos();
	return cancel_button;
}

function createNextButton(elemento: any) {
	let next = elemento.querySelector(".siguiente") as HTMLElement;
	if (!next) {
		next = document.createElement("div");
		next.className = "siguiente";
		elemento.children[1].appendChild(next);
		next.onclick = function (event) {
			event.stopPropagation();
			elemento.nextElementSibling.onclick();
		};
	}
	if (elemento.nextElementSibling) next.classList.add("open");
	return next;
}

function deleteCancelButton(cancel_button: HTMLElement) {
	cancel_buttons = cancel_buttons.filter((el: any) => {
		return el.element !== cancel_button;
	});
}

function closeAllExcept(cancel_button: HTMLElement) {
	cancel_buttons.forEach((el: any) => {
		if (el.element !== cancel_button && el.element.onclick)
			el.element.onclick(event);
	});
}

function calculateDistanceToScroll(element: HTMLElement) {
	let height = 0;
	let i = 0;
	cronograma_secciones.forEach((seccion: HTMLElement, index: number) => {
		if (seccion.offsetHeight > height) {
			height = seccion.offsetHeight;
		}
		if (element.children[1] === seccion) {
			i = index;
		}
	});
	let trabajo_coords =
		cronograma_seccion_trabajo_element.getBoundingClientRect();
	window.scrollTo({
		top: window.scrollY + trabajo_coords.top + i * height,
		behavior: "smooth",
	});
}

function animationFrame() {
	if (window.scrollY != scrollAnterior) {
		scrollAnterior = window.scrollY;
		aparicionElementos();
		if (window.innerWidth <= 1024) {
			smartphoneAnimation();
		}
		aparicionTitulos();
		fijarElementos();
		// footerAnimation();
	}
}

function fijarElemento(element: HTMLElement, container: HTMLElement) {
	let containerCoords = container.getBoundingClientRect();
	if (
		containerCoords.top <= 0 &&
		containerCoords.bottom >= window.innerHeight
	) {
		element.classList.add("sticky");
		element.style.top = "";
	} else if (containerCoords.top > 0) {
		element.classList.remove("sticky");
		element.style.top = 0 + "px";
	} else {
		element.classList.remove("sticky");
		element.style.top = containerCoords.height - window.innerHeight + "px";
	}
}

function fijarElementos() {
	Array.from(secciones).forEach((element: HTMLElement, index) => {
		var coords = element.getBoundingClientRect();
		if (index == 0) {
			if (coords.top < 0) {
				if (!videoIntro.paused) videoIntro.pause();
				videoIntro.style.display = "none";
			} else if (coords.top >= 0) {
				translateObject("0", window.scrollY / 3 + "px", videoIntro);
				if (videoIntro.paused) videoIntro.play();
				videoIntro.style.display = "";
			}

		}
		if (window.innerWidth <= 1024) {
			let container = element.children[0] as HTMLElement;
			if (container.classList.contains("sticky"))
				container.classList.remove("sticky");
			container.style.top = "";
			if (seccion_trabajo_abierta)
				cancel_buttons.forEach((cancel: any) => {
					fijarElemento(cancel.element, cancel.section);
				});
		}
	});
}

function aparicionElementos() {
	var ce = cronograma[0];
	var bcr = ce.getBoundingClientRect();
	if (bcr.top < window.innerHeight && bcr.bottom > 0) {
		ce.querySelectorAll(".cronograma-elemento").forEach((element: any) => {
			let elbcr = element.getBoundingClientRect();
			if (elbcr.top + window.outerHeight / 10 < window.innerHeight) {
				translateObject("0", "0", element.children[0]);
				element.children[0].style.opacity = "1";
			}
		});
	} else if (bcr.top > window.innerHeight) {
		ce.querySelectorAll(".cronograma-elemento").forEach((element: any) => {
			if (
				element.children[0].style.transform &&
				element.children[0].style.transform != ""
			) {
				element.children[0].style.transform = "";
				element.children[0].style.opacity = "0";
			}
		});
	}
}

function aparicionTitulos() {
	[...seccion_titulos].forEach((titulo) => {
		if (titulo.getBoundingClientRect().top - window.innerHeight < 0) {
			if (!titulo.classList.contains("ok")) {
				titulo.classList.add("ok");
				writingAnimation(titulo, titulo.getAttribute("text"));
			}
		}
	});
}

function writingAnimation(elemento: HTMLElement, texto: string | null) {
	if (!texto) return;
	elemento.textContent = "";
	let nextLetter = 0;
	let nextText = "";
	let maxTicks = 6;

	let cursorBlink = () => {
		setTimeout(() => {
			elemento.classList.contains("tick")
				? elemento.classList.remove("tick")
				: elemento.classList.add("tick");
			maxTicks--;
			if (
				maxTicks > 0 ||
				(maxTicks <= 0 && elemento.classList.contains("tick"))
			)
				cursorBlink();
		}, 700);
	};
	cursorBlink();
	let textArray = [...texto];
	textArray.forEach((c) => {
		setTimeout(() => {
			nextText = nextText + c;

			elemento.textContent = nextText;
			elemento.classList.add("tick");
		}, nextLetter);
		nextLetter += 120;
	});
}



function smartphoneAnimation() {
	Array.from(cronograma_elementos_trabajo).forEach((element) => {
		let top = element.getBoundingClientRect().top;
		let vermas = element.querySelector(".vermas") as HTMLElement;
		let background = element.querySelector(
			".cronograma-contenido-background"
		) as HTMLElement;
		if (
			element.getBoundingClientRect().top <= window.innerHeight / 2 &&
			top >= -(window.innerHeight / 2 + 100)
		) {
			vermas.classList.add("hover");
			background.classList.add("hover");
		} else {
			vermas.classList.remove("hover");
			background.classList.remove("hover");
		}
	});
}

function animacionTrabajo() {
	Array.from(elementos_trabajo).forEach((elemento: HTMLElement) => {
		let cronograma_fecha = elemento.querySelector(
			".cronograma-fecha"
		) as HTMLElement;
		let cronograma_title = elemento.querySelector(".title") as HTMLElement;
		let cronograma_vermas = elemento.querySelector(".vermas") as any;
		let cronograma_contenido = elemento.querySelector(
			".cronograma-contenido"
		) as HTMLElement;
		let cronograma_contenido_background = elemento.querySelector(
			".cronograma-contenido-background"
		) as HTMLElement;
		let cronograma_fecha_div = elemento.querySelector(
			".cronograma-fecha div"
		) as HTMLElement;
		let margin_fecha_open = "8vh";
		let width_titulo_seccion_trabajo_abierta = "30%";

		if (window.innerWidth > 1024) {
			elemento.onclick = () => { };
			elemento.onclick = function () {
				if (getObjectTranslation(cronograma_fecha)[1] != margin_fecha_open) {
					let cancel_button = createCancelButton(elemento);
					let next_button = createNextButton(elemento);
					closeAllExcept(cancel_button);
					cancel_button.classList.add("show");
					calculateDistanceToScroll(elemento);

					cancel_button.onclick = (event) => {
						event.stopPropagation();
						next_button.classList.remove("open");
						deleteCancelButton(cancel_button);
						transitionEnd(cronograma_contenido, () => {
							cronograma_fecha_div.style.width = "";
							seccion_trabajo_abierta = 0;
							elemento.removeChild(cancel_button);
						});
						cronograma_seccion_trabajo_element.style.width = "";
						cronograma_fecha.style.transform = "";
						cronograma_title.style.transform = "";
						cronograma_vermas.classList.remove("close");
						cronograma_contenido_background.classList.remove("open");

						if (cancel_buttons.length <= 0)
							cronograma_seccion_trabajo.style.width = "";

						eliminarAparicionTextosTrabajo(cronograma_contenido);

						cronograma_contenido.classList.remove("open");

						Array.from(elementos_trabajo).forEach((el) => {
							if (el != elemento) {
								el.style.display = "";
							}
						});
						cancel_button.classList.remove("show");
					};

					cronograma_seccion_trabajo.style.width =
						width_titulo_seccion_trabajo_abierta;
					translateObject("0", margin_fecha_open, cronograma_fecha);
					translateObject("0", margin_fecha_open, cronograma_title);

					cronograma_fecha_div.style.width = "120px";
					cronograma_vermas.classList.add("close");
					cronograma_contenido.classList.add("open");
					cronograma_contenido_background.classList.add("open");
					animacionAparicionTextosTrabajo(cronograma_contenido);
				}
			};
		} else {
			elemento.onclick = () => { };
			elemento.onclick = function () {
				if (!cronograma_title.classList.contains("open")) {
					elemento.scrollIntoView({
						behavior: "smooth",
					});
					document.body.style.overflow = "hidden";
					let cancel_button = createCancelButton(elemento);

					cronograma_contenido.style.display = "flex";

					cronograma_contenido_background.classList.add("open");
					cronograma_title.classList.add("open");
					cronograma_vermas.style.width = "0";
					cancel_button.classList.add("show");

					animacionAparicionTextosTrabajo(cronograma_contenido);

					cancel_button.onclick = (event) => {
						event.stopPropagation();
						deleteCancelButton(cancel_button);
						document.body.style.overflow = "hidden";
						elemento.scrollIntoView({
							behavior: "smooth",
						});
						cronograma_vermas.style = "";

						cronograma_title.classList.remove("open");
						cronograma_contenido_background.classList.remove("open");
						cronograma_vermas.classList.remove("close");
						cancel_button.classList.remove("show");
					};

					cronograma_title.addEventListener(
						"transitionend",
						function transition(event: TransitionEvent) {
							if (
								cronograma_title !== event.target ||
								event.propertyName !== "height"
							)
								return;

							if (cronograma_title.classList.contains("open")) {
								Array.from(elementos_trabajo).forEach((el) => {
									if (el != elemento) {
										el.style.display = "none";
									}
								});
							} else {
								cronograma_title.removeEventListener(
									"transitionend",
									transition,
									false
								);

								Array.from(elementos_trabajo).forEach((el) => {
									if (el != elemento) {
										el.style.display = "";
									}
								});
								eliminarAparicionTextosTrabajo(cronograma_contenido);
								cronograma_contenido.style.display = "";
							}
							document.body.style.overflow = "";
							elemento.scrollIntoView({});
						},
						false
					);
				}
			};
		}
		if (cronograma_contenido_background.classList.contains("open"))
			cancel_buttons.forEach((cancel_button: any) => {
				cancel_button.element.onclick
					? cancel_button.element.onclick(event)
					: null;
			});
	});
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// @import "~/assets/styles/components/profile.scss";
</style>
