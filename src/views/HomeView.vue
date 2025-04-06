<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col
        col="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        xxl="6"
        class="d-flex flex-column justify-center align-center"
        style="height: 85vh"
      >
        <h1 id="name" class="text-h4 text-sm-h2 my-3" ></h1>
        <!-- <div class="text-subtitle-1">
          Frontend Developer | Vue.js Enthusiast
        </div> -->
        <h6 class="text-h6 font-italic my-3">
          Building modern, scalable web experiences with Vue & Vuetify.
        </h6>

        <div id="typed-output" class="text-h6 text-md-h5 mt-2"></div>

        <v-btn
          color="primary"
          variant="outlined"
          :to="{ name: 'projects' }"
          class="my-4"
          >View My Work</v-btn
        >
        <v-btn color="primary" variant="outlined" :to="{ name: 'about' }"
          >About Me</v-btn
        >
      </v-col>

      <v-col
        col="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        xxl="6"
        class="d-flex flex-column justify-center align-center"
        style="height: 85vh"
      >
        <v-avatar size="400" color="pink" variant="outlined" >
          <v-img
            lazy-src="@/assets/profile.jpg"
            :src="require('@/assets/profile.jpg')"
            alt="Profile Picture"
            
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Typed from "typed.js";
import { onMounted } from "vue";

onMounted(() => {
  const nameOption = {
    strings: ["Hi, I'm Zeeshan Afzal"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: false,
    showCursor: true,
    cursorChar: "Frontend Developer | Vue.js Enthusiast",
  };
  new Typed("#name", nameOption);

  const options = {
    strings: [
      "I build modern web experiences.",
      "I love Vue.js & Vuetify.",
      "Let’s create something amazing!",
    ],
    startDelay: 3000, // Time before typing starts
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
    showCursor: false,
    cursorChar: "|",
  };

  new Typed("#typed-output", options);
});
</script>

<style scoped></style>
