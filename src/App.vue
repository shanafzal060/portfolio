<template>
  <v-app>
    <TheToolbar />
    <v-main>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup>
import { defineComponent } from "vue";
import TheToolbar from "./components/TheToolbar.vue";
import TheFooter from "./components/TheFooter.vue";

defineComponent(TheToolbar, TheFooter);
</script>

<style>
.v-application {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.v-main {
  flex: 1 0 auto;
}
.v-footer {
  flex-shrink: 0;
}
/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
