<template>
  <nav class="idioma up right">
    <ul>
      <li
        v-for="(locale_switch, i) in locales"
        :key="`locale-${i}`"
        :class="selected(locale_switch)"
      >
        <span @click="changeLocale(locale_switch)">
          {{ locale_switch.toUpperCase() }}
                    <NuxtLink class="hidden" :to="$route.params.lang?'/'+locale_switch+$route.path.replace('/'+$route.params.lang,''):'/'+locale_switch+$route.path">{{ locale_switch.toUpperCase() }}</NuxtLink>

        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const locales = ["es", "en"];

const selected = function (locale_switch: string) {
  return { selected: locale_switch === locale.value };
};

function changeLocale(new_locale: string) {
  locale.value = new_locale;
  let cancel_button = document.querySelector(".cancel.show") as HTMLElement;
  if (cancel_button != null) cancel_button.click();
}
</script>
