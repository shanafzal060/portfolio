<template>
  <v-container fluid>
    <!-- Background -->
    <v-sheet class="about-bg d-flex align-center justify-center">
      <v-container>
        <v-row align="center" justify="center">
          <!-- Profile Image -->
          <v-col cols="12" md="5" lg="5" xl="5" xxl="5" class="d-flex justify-center">
            <v-avatar size="300" color="pink" variant="outlined">
              <v-img
                :src="require('@/assets/profile.jpg')"
                alt="Profile Picture"
              ></v-img>
            </v-avatar>
          </v-col>

          <!-- About Text -->
          <v-col cols="12" md="7" lg="7" xl="7" xxl="7">
            <h2 class="text-h4 font-weight-bold mb-4">About Me</h2>
            <p class="text-body-1">
              I'm a passionate web developer specializing in modern technologies
              like Vue.js, Vuetify, and more. I love crafting elegant user
              experiences and solving real-world problems through code.
            </p>

            <!-- Progress Bars -->
            <div class="mt-4">
              <p class="font-weight-medium">Vue.js</p>
              <v-progress-linear
                color="primary"
                model-value="90"
                height="10"
              ></v-progress-linear>

              <p class="mt-2 font-weight-medium">Vuetify</p>
              <v-progress-linear
                color="secondary"
                model-value="85"
                height="10"
              ></v-progress-linear>

              <p class="mt-2 font-weight-medium">JavaScript</p>
              <v-progress-linear
                color="info"
                model-value="80"
                height="10"
              ></v-progress-linear>
            </div>

            <div class="mt-4">
              <v-btn color="primary " :to="{name:'projects'}">View My Work</v-btn>
              <v-btn
                color="secondary ma-4"
                variant="outlined"
                :to="{name:'contact'}"
                class="ml-3"
                >Contact Me</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<style scoped>
/* Background Styling */
.about-bg {
  padding: 50px 0;
  border-radius: 15px;
}
</style>
