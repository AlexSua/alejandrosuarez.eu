<template>
  <section @click="$router.push(`${blog._path}`)">
    <div class="image">
      <img
        loading="lazy"
        src="@/assets/img/loading.jpg"
      >
    </div>
    <div class="summary">
      <div class="header">
        <div class="title">
          <h2>{{ blog.title }}</h2>
        </div>
      </div>
      <div class="body">
        <p>{{ blog.description }}</p>
      </div>
      <div class="footer">
        <div class="date">
          {{ blog.date }}
        </div>
        <div class="read-time">
          {{ blog.readtime }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';


defineProps<{
  blog: ParsedContent
}>()


</script>

<style>
</style>
