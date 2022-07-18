<template>
  <!-- <div class="radial-cover"></div> -->
  <img src='@/assets/img/loading.jpg'>

  <video id="videoIntro" autoplay muted loop>
    <source src="@/assets/img/intro.webm" type="video/webm">
  </video>

  <div class="titulo">
    <h1>Alejandro Suárez</h1>
    <h2>{{ $t("profile.header.title") }}</h2>
    <h3>{{ $t("profile.header.subtitle") }}</h3>
  </div>
  <div class="up left text-vanilla-yellow">
    <NuxtLink to="/videochat"><i class="pi pi-video text-[2.23rem] absolute "></i></NuxtLink>
  </div>

  <Navegacion load-animation />
</template>


<script setup lang="ts">


</script>


<style lang="scss" scoped >
.pi-video{
  font-size: 1.4rem;
      height: 4rem;
    width: 4rem;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: -1.3rem;
    margin-left: -1.8rem;
}


</style>

