<template>
  <!-- the upper top toolbar or nav bar -->
  <v-app-bar
    app
    density="compact"
    elevation="14"
    sticky
    color="pink"
    rounded="xl"
    class="my-3"
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none">
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>

    <!-- clickable button to the lift  -->
    <v-btn :to="{ name: 'home' }" variant="text" rounded class="ml-1">
      <v-app-bar-title >Zeeshan Afzal</v-app-bar-title>
    </v-btn>

    <!-- for filling the available space -->
    <v-spacer></v-spacer>

    <div class="d-none d-md-flex mr-1">
      <v-btn @click="toggleTheme" rounded="xl">
        <v-icon>{{
          theme.global.current.value.dark
            ? "mdi-white-balance-sunny"
            : "mdi-weather-night"
        }}</v-icon>
      </v-btn>

      <v-btn :to="{ name: 'home' }" rounded="xl">
        <v-icon class="mr-2" size="md">mdi-home</v-icon>
        HOME
      </v-btn>

      <v-btn :to="{ name: 'about' }" rounded="xl"> About</v-btn>
      <v-btn :to="{ name: 'skills' }" rounded="xl"> skills</v-btn>
      <v-btn :to="{ name: 'projects' }" rounded="xl"> projects</v-btn>
      <v-btn :to="{ name: 'contact' }" rounded="xl"> contact</v-btn>
    </div>
  </v-app-bar>

  <!-- Navigation Drawer for Mobile -->
  <v-navigation-drawer
    :elevation="4"
    v-model="drawer"
    temporary
    density="compact"
    color="pink"
    rounded="xl"
    class="mt-3"
  >
    <v-list>
      <v-list-item @click="drawer = false" :to="{ name: 'home' }" rounded
        >Home</v-list-item
      >
      <v-divider></v-divider>
      <v-list-item @click="drawer = false" :to="{ name: 'about' }"
        >About</v-list-item
      >
      <v-divider></v-divider>
      <v-list-item @click="drawer = false" :to="{ name: 'skills' }"
        >Skills</v-list-item
      >
      <v-divider></v-divider>
      <v-list-item @click="drawer = false" :to="{ name: 'projects' }"
        >Projects</v-list-item
      >
      <v-divider></v-divider>
      <v-list-item @click="drawer = false" :to="{ name: 'contact' }"
        >Contact</v-list-item
      >
      <v-divider></v-divider>
      <v-list-item @click="(drawer = false), toggleTheme()">
        <v-icon size="sm" class="pb-1">{{
          theme.global.current.value.dark
            ? "mdi-white-balance-sunny"
            : "mdi-weather-night"
        }}</v-icon>
        {{
          theme.global.current.value.dark ? "Light theme" : "Dark theme"
        }}</v-list-item
      >
      <v-divider></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useTheme } from "vuetify/lib/framework.mjs";
import { ref } from "vue";

const drawer = ref(false);

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>


