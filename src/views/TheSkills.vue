<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 text-sm-h3 mb-6">My Skills</h1>
        <p class="text-body-1 mb-8">
          Here are the technologies and tools I'm proficient with
        </p>
      </v-col>
    </v-row>

    <!-- Categorized Skills -->
    <v-row v-for="(category, index) in skillCategories" :key="index">
      <v-col cols="12">
        <h2 class="text-h5 text-sm-h4 mb-4">{{ category.name }}</h2>
        <v-chip-group>
          <v-row justify="center" no-gutters>
            <v-col
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              cols="12"
              sm="2"
              md="2"
              lg="2"
              xl="2"
              xxl="2"
            >
              <v-chip class="m-2" color="primary" label size="large" >
                <v-icon start>{{ skill.icon }}</v-icon>
                {{ skill.name }}
              </v-chip>
            </v-col>
          </v-row>
        </v-chip-group>
      </v-col>
    </v-row>

    <!-- Skill Proficiency Bars -->
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 text-sm-h4 mb-4">Proficiency Levels</h2>
        <v-card flat>
          <v-card-text>
            <v-list lines="two">
              <v-list-item
                v-for="(skill, index) in proficiencySkills"
                :key="index"
              >
                <template v-slot:prepend>
                  <v-avatar color="primary" size="40">
                    <v-icon>{{ skill.icon }}</v-icon>
                  </v-avatar>
                </template>

                <v-list-item-title>{{ skill.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  <v-progress-linear
                    :model-value="skill.level"
                    color="primary"
                    height="10"
                    striped
                  ></v-progress-linear>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const skillCategories = ref([
  {
    name: "Frontend",
    skills: [
      { name: "Vue.js", icon: "mdi-vuejs" },
      { name: "Vuetify", icon: "mdi-vuetify" },
      { name: "JavaScript", icon: "mdi-language-javascript" },
      { name: "HTML5", icon: "mdi-language-html5" },
      { name: "CSS3", icon: "mdi-language-css3" },
    ],
  },
  // Add more categories like Backend, Tools, etc.
]);

const proficiencySkills = ref([
  { name: "Vue.js", icon: "mdi-vuejs", level: 90 },
  { name: "Vuetify", icon: "mdi-vuetify", level: 85 },
  { name: "JavaScript", icon: "mdi-language-javascript", level: 85 },
  { name: "HTML5", icon: "mdi-language-html5", level: 90 },
  { name: "CSS3", icon: "mdi-language-css3", level: 90 },
  // Add more skills with proficiency levels
]);
</script>
