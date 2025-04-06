<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 text-sm-h3 mb-6">My Projects</h1>
        <p class="text-body-1 mb-8">Here are some of my recent works</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          class="mx-auto"
          height="100%"
          hover
          @click="openProject(project)"
        >
          <v-img
            :src="project.image"
            height="200px"
            cover
          ></v-img>

          <v-card-title>{{ project.title }}</v-card-title>

          <v-card-text>
            <div class="text-subtitle-1 mb-2">
              {{ project.shortDescription }}
            </div>
            <v-chip
              v-for="(tech, techIndex) in project.technologies"
              :key="techIndex"
              class="me-2 mb-2"
              size="small"
            >
              {{ tech }}
            </v-chip>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              :href="project.demoUrl"
              target="_blank"
              @click.stop
            >
              Live Demo
            </v-btn>
            <v-btn
              color="primary"
              variant="text"
              :href="project.codeUrl"
              target="_blank"
              @click.stop
            >
              View Code
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Project Dialog -->
    <v-dialog v-model="dialog" max-width="800">
      <v-card v-if="selectedProject">
        <v-card-title>{{ selectedProject.title }}</v-card-title>
        <v-card-text>
          <v-img
            :src="selectedProject.image"
            height="300px"
            contain
            class="mb-4"
          ></v-img>
          <div class="text-body-1 mb-4">{{ selectedProject.fullDescription }}</div>
          <div class="text-subtitle-1 mb-2">Technologies Used:</div>
          <v-chip
            v-for="(tech, techIndex) in selectedProject.technologies"
            :key="techIndex"
            class="me-2 mb-2"
            color="primary"
          >
            {{ tech }}
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
const projects = ref([
  {
    title: "Portfolio Website",
    shortDescription: "A personal portfolio built with Vue.js and Vuetify",
    fullDescription: "This project is my personal portfolio website showcasing my skills and projects. Built with Vue 3 Composition API and Vuetify 3 for a modern, responsive design.",
    technologies: ["Vue.js", "Vuetify", "JavaScript"],
    image: require('@/assets/logo.jpg'),
    demoUrl: "https://zeeshanafzal.netlify.app/",
    codeUrl: "https://github.com/shanafzal060/portfolio"
  },
  {
    title: "Gallery App",
    shortDescription: "A Gallery App built with Vue.js and Vuetify",
    fullDescription: "This project is Gallery App website showcasing my skills and projects. Built with Vue 3 Composition API and Vuetify 3 for a modern, responsive design.",
    technologies: ["Vue.js", "Vuetify", "JavaScript"],
    image: require('@/assets/galleryapp.jpg'),
    demoUrl: "#",
    codeUrl: "https://github.com/shanafzal060/galleryapp"
  },
  {
    title: "Calender App",
    shortDescription: "Calender App built with Vue.js, bootstrap, javascript",
    fullDescription: "This project is Calender App website showcasing my skills and projects. Built with Vue 3 Composition API and bootstrap 5 for a modern, responsive design.",
    technologies: ["Vue.js", "Bootstrap", "JavaScript"],
    image: require('@/assets/calenderapp.jpg'),
    demoUrl: "#",
    codeUrl: "https://github.com/shanafzal060/Calender"
  },
  {
    title: "Todo App",
    shortDescription: "Todo App built with Vue.js, bootstrap, javascript",
    fullDescription: "This project is Todo App website showcasing my skills and projects. Built with Vue 3 Composition API and bootstrap 5 for a modern, responsive design.",
    technologies: ["Vue.js", "Bootstrap", "JavaScript"],
    image: require('@/assets/todoapp.jpg'),
    demoUrl: "#",
    codeUrl: "https://github.com/shanafzal060/TODO-APP"
  },
  // Add more projects
]);

const dialog = ref(false);
const selectedProject = ref(null);

const openProject = (project) => {
  selectedProject.value = project;
  dialog.value = true;
};
</script>