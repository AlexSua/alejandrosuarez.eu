<template>
  <section class="seccion contacto">
    <div class="seccion-izquierda">
      <h3 :text="title">
        {{ title }}
      </h3>
      <Navegacion />
    </div>
    <div class="seccion-derecha">
      <div class="seccion-contenido">
        <ul>
          <li>
            <a
              href="mailto:alejandrosuarez.eu@gmail.com"
              target="_blank"
            >
              <img src="@/assets/img/contacto/gmail.png">
            </a>
          </li>
          <!-- <li>
            <a
              href="https://www.linkedin.com/in/alejandro-suárez-430986b4"
              target="_blank"
            >
              <img src="@/assets/img/contacto/linkedin.png">
            </a>
          </li> -->
          <li>
            <a
              href="https://github.com/AlexSua"
              target="_blank"
            >
              <img src="@/assets/img/contacto/github.png">
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/10006284/alexsua"
              target="_blank"
            >
              <img src="@/assets/img/contacto/stackoverflow.png">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const {t} = useI18n()

const title = computed(() => {
 return t(`profile.navigation.contact.title`)
});

</script>