<template>
  <section class="seccion habilidades">
    <div class="seccion-izquierda">
      <h3 :text="title">
        {{ title }}
      </h3>
      <Navegacion />
    </div>
    <div class="seccion-derecha">
      <div class="seccion-contenido seccion-contenido-habilidades">
        <template v-for="seccion, main_index in $tm(`profile.abilities`)" :key="main_index">
          <h3>{{ $t(`profile.abilities.${String(main_index)}.title`) }}</h3>
          <ul class="lista-habilidades">
            <div v-for="element, index in $tm(`profile.abilities.${String(main_index)}.items`)" :key="index">
              <img
                :src="getSrc('/assets/img/habilidades/' + $t(`profile.abilities.${String(main_index)}.items[${String(index)}].logo`))">
              <span>{{ $t(`profile.abilities.${String(main_index)}.items[${String(index)}].title`) }}</span>
            </div>
          </ul>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


import { useI18n } from "vue-i18n";

const { t } = useI18n();

const title = computed(() => {return t("profile.navigation.abilities.title")});


const getSrc = (path) => {
  const modules = import.meta.globEager("/assets/img/habilidades/*");
  return modules[path].default;
};


</script>

<style lang="scss" scoped>
</style>