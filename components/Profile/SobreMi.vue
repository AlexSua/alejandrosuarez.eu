<template>
  <section class="seccion info">
    <div class="seccion-izquierda">
      <img src="@/assets/img/profile.jpg">
      <h3 :text="title">
        {{ title }}
      </h3>
      <Navegacion />
    </div>
    <div class="seccion-derecha">
      <div
        class="seccion-contenido"
        v-html="$t(`profile.aboutme`)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n()

const title = computed(function () { return t(`profile.navigation.aboutme.title`) })

</script>

<style>
</style>