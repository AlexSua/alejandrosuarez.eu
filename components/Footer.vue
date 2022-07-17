<template>
  <div class="footer-wrapper">
    <div ref="footerText" class="footer-text" v-bind:class="textClass">
      <div class="footer-title">
        <h3>{{ $t(`profile.footer.title`) }}</h3>
        <div>{{ $t(`profile.footer.subtitle`) }}</div>
      </div>
      <div class="footer-nav">
        <NuxtLink to="/privacy">
          {{ $t(`profile.footer.privacy`) }}
        </NuxtLink>
      </div>
    </div>

    <div class="arrow-wrapper">
      <div ref="arriba" class="arriba">
        <svg @click="goTop" src="@/assets/img/Arrow.svg" :class="{ 'enabled': isBottom }" version="1.0"
          xmlns="http://www.w3.org/2000/svg" width="600.000000pt" height="350.000000pt"
          viewBox="0 0 600.000000 350.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,350.000000) scale(0.100000,-0.100000)" fill="#f2d492" stroke="none"
            v-bind="svgProps">
            <path d="M2873 2729 c-61 -30 -1572 -1550 -1602 -1611 -27 -58 -29 -165 -2
-223 23 -52 74 -103 126 -126 57 -26 162 -25 220 2 34 16 210 187 715 697
l670 675 670 -675 c505 -510 681 -681 715 -697 58 -27 163 -28 220 -2 52 23
103 74 126 126 25 54 25 166 0 221 -26 57 -1545 1584 -1605 1613 -60 30 -194
30 -253 0z" />
          </g>
        </svg>
        <img>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { translateObject } from '~~/utils/utils';

const footerText = ref()
const arriba = ref()
const isBottom = ref(false)
const usescroll = useScroll(process.client ? window : null);

const props = defineProps({
  svgProps: Object,
  textClass: String,
})

function footerAnimation(scroll: number) {
  if (process.client) {
    if (footerText.value) {
      let scrollYBottom = scroll + window.innerHeight;
      let maxHeight = document.body.scrollHeight;
      if (scrollYBottom > maxHeight - window.innerHeight) {
        let x = scrollYBottom - maxHeight;
        translateObject("0", x / 2 + "px", footerText.value);
        footerText.value.style.opacity = (1 - -x / 500).toString();
      }
    }
    if (arriba.value) {
      if (
        window.scrollY + 100 + window.innerHeight >=
        document.body.offsetHeight
      ) {
        isBottom.value = true;
      } else {
        isBottom.value = false;
      }
    }

  }
}
function goTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

watch(usescroll.y, () => footerAnimation(usescroll.y.value))

</script>

<style scoped lang="scss">
.footer-wrapper {
  width: 100%;
  display: flex;
  height: 100%;
  // background: #17424f;
  overflow: hidden;
  position: relative;
}

div.footer-text {
  margin: auto;
  color: #f2d492;
  font-size: 1.2em;
  padding-left: 0.625rem;
  text-align: center;

  h3 {
    display: flex;
    justify-content: center;
    margin: 0;
  }

  .footer-nav {
    margin: 2rem;
  }

  // div {
  //   margin: 1rem;
  // }
}


.arrow-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12.5rem;
  height: 100%;
  margin-bottom: 2.5rem;
}


.arriba {
  // background: #fbf6ec;
  display: flex;
  justify-content: center;
  overflow: hidden;

  >svg {
    width: 6.25rem;
    transform: rotateZ(180deg);
    position: absolute;
    bottom: 0;
    height: 6.25rem;
    border-radius: 6.25rem;

    cursor: pointer;
    transform: translate3d(0, 7rem, 0);
    transition: 1s transform;

    &.enabled {
      transform: translate3d(0, 0, 0);
    }
  }
}

@media (max-width: 1150px) {
  .arrow-wrapper {
    display: none;
  }
}
</style>