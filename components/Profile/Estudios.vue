<template>
  <section class="seccion cronograma">
    <div
      class="seccion-izquierda seccion-estudios"
      style="top: 0px"
    >
      <div class="titulo-seccion">
        <h3 :text="title">
          {{ title }}
        </h3>
        <Navegacion />
      </div>
    </div>

    <div class="seccion-derecha estudios">
      <div>
        <div
          v-for="(elemento, index) in $tm(i18n_page)"
          :key="index"
          class="cronograma-elemento"
        >
          <div class="cronograma-seccion">
            <div class="cronograma-contenido">
              <div class="texto">
                <img
                  class="cronograma-logo"
                  :src="getSrc(`${$t(getEstudio(index)+'.logo')}`)"
                >
                <h3>
                  {{ $t(`${getEstudio(index)}.title`) }}
                </h3>
                <div class="cronograma-ubicacion">
                  {{ $t(`${getEstudio(index)}.place`) }}
                </div>
                <div class="cronograma-fecha">
                  <div>
                    {{ $t(`${getEstudio(index)}.duration`) }}
                  </div>
                </div>
                <p v-html="$t(`${getEstudio(index)}.description`)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n()

const i18n_page = "profile.education";

const title = computed(() => {
  return t(`profile.navigation.education.title`)
});

function getEstudio(index: any) {
  return `${i18n_page}[${String(index)}]`;
}

const getSrc = (path) => {
  const modules = import.meta.globEager("/assets/img/estudios/*");
  return modules["/assets/img/estudios/"+path].default;
};

</script>


<style lang="scss" scoped>
</style>