<template>
  <section class="seccion cronograma cronograma-trabajo">
    <div class="seccion-izquierda seccion-trabajo">
      <div class="titulo-seccion">
        <h3 :text="title">
          {{ title }}
        </h3>
        <Navegacion />
      </div>
    </div>

    <div class="seccion-derecha trabajo">
      <div>
        <div v-for="element, index in $tm(i18n_page)" :key="index" class="cronograma-elemento">
          <div :class="'cronograma-fecha ' + $t(`${getTrabajoIndex(index)}.title`).toLowerCase()">
            <div />
          </div>
          <div class="cronograma-seccion">
            <div class="cronograma-contenido-background"
              :style="{ backgroundImage: `url(&quot;${getSrcBackground( $t(`${getTrabajoIndex(index)}.background`))}&quot;)`, }" />
            <div class="title" :style="$t(`${getTrabajoIndex(index)}.style`)">
              <h3>{{ $t(`${getTrabajoIndex(index)}.title`) }}</h3>
              <div class="cronograma-descripcion">
                {{ $t(`${getTrabajoIndex(index)}.duration`) }}
              </div>
              <div class="cronograma-ubicacion">
                {{ $t(`${getTrabajoIndex(index)}.place`) }}
              </div>
              <div class="vermas">
                {{ $t(`profile.work.more_title`) }}
              </div>
            </div>
          </div>
          <div class="cronograma-contenido">
            <div class="texto">
              <h3>{{ $t(`profile.work.about_title`) }}</h3>
              <p>
                <a v-if="$t(`${getTrabajoIndex(index)}.logo`) != 'null'" :href="$t(`${getTrabajoIndex(index)}.url`)"
                  target="_blank">
                  <img :src='getSrcTrabajoLogo($t(`${getTrabajoIndex(index)}.logo`))'>
                </a>
                {{ $t(`${getTrabajoIndex(index)}.about`) }}
              </p>
            </div>
            <div class="texto">
              <h3>{{ $t(`profile.work.workdone_title`) }}</h3>
              <p>
                {{ $t(`${getTrabajoIndex(index)}.workdone`) }}
              </p>
            </div>
            <div class="texto">
              <h3>{{ $t(`profile.work.technologies_title`) }}</h3>
              <ul class="lista-habilidades">
                <div v-for="technology, technologies_index in $tm(`${getTrabajoIndex(index)}.technologies`)"
                  :key="technologies_index">
                  <img
                    :src="getSrcHabilidades($t(`${getTrabajoIndex(index)}.technologies[${String(technologies_index)}].logo`))">
                  <span>{{ $t(`${getTrabajoIndex(index)}.technologies[${String(technologies_index)}].title`) }}</span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const modules = import.meta.globEager("/assets/img/trabajo/*")

const getSrcBackground = (path) => {
  const modules = import.meta.globEager("/assets/img/trabajo/*")
  return modules["/assets/img/trabajo/"+path].default;
};

const getSrcTrabajoLogo = (path) => {
  const modules = import.meta.globEager("/assets/img/trabajo/logo/*")
  return modules["/assets/img/trabajo/logo/"+path].default;
};

const getSrcHabilidades= (path) => {
  const modules = import.meta.globEager("/assets/img/habilidades/*")
  return modules["/assets/img/habilidades/"+path].default;
};


const i18n_page = "profile.work.positions"

const title = computed(function () { return t(`profile.navigation.experience.title`) })

function getTrabajoIndex(index: any) {
  return `${i18n_page}[${String(index)}]`
}

</script>


<style>
</style>