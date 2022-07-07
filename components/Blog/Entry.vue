<template>
  <article>
    <NuxtLink :to="blog._path" class="h-full flex flex-col">
      <header>
        <img loading="lazy" :src="getSrc(blog.image)">
      </header>
      <section class="flex-1">
        <div class="title">
          <h2>{{ blog.title }}</h2>
        </div>
        <div class="body">
          <p>{{ blog.description }}</p>
        </div>
      </section>
      <footer>
        <div class="date">
          {{ new Date(blog.date).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }) }}
        </div>
        <div class="read-time">
          {{ blog.readtime }}
        </div>
      </footer>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { ParsedContent } from '@nuxt/content/dist/runtime/types';
const {locale} = useI18n();


defineProps<{
  blog: ParsedContent
}>()


const getSrc = (path) => {
  const modules = import.meta.globEager("/assets/img/blog/*");
  return modules[path].default;
};
</script>

<style>
</style>
