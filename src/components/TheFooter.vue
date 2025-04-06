<template>
    <v-footer class="bg-pink mt-10">
      <v-container>
        <v-row>
          <!-- Quick Links -->
          <v-col cols="12" md="4" lg="4" xl="4" xxl="4">
            <h3 class="text-h6 mb-4">Quick Links</h3>
            <v-list density="compact" bg-color="transparent">
              <v-list-item
                v-for="(link, index) in quickLinks"
                :key="index"
                :to="link.route"
                :prepend-icon="link.icon"
                :title="link.title"
                class="text-white"
              ></v-list-item>
            </v-list>
          </v-col>
  
          <!-- Social Media Links -->
          <v-col cols="12" md="4" lg="4" xl="4" xxl="4">
            <h3 class="text-h6 mb-4">Connect With Me</h3>
            <div class="d-flex">
              <v-btn
                v-for="(social, index) in socialLinks"
                :key="index"
                :icon="social.icon"
                :href="social.url"
                target="_blank"
                variant="text"
                color="white"
                size="large"
                class="mx-1"
              ></v-btn>
            </div>
          </v-col>
  
          <!-- Contact Info -->
          <v-col cols="12" md="4" lg="4" xl="4" xxl="4">
            <h3 class="text-h6 mb-4">Contact</h3>
            <v-list lines="two" density="compact" bg-color="transparent">
              <v-list-item
                prepend-icon="mdi-email"
                title="Email"
                subtitle="eng.zeeshanafzal@gmail.com"
                href="mailto:eng.zeeshanafzal@gmail.com"
                class="text-white"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-phone"
                title="Phone"
                subtitle="+92 (347) 189-3526"
                href="tel:+92347189356"
                class="text-white"
              ></v-list-item>
            </v-list>
          </v-col>
        </v-row>
  
        <!-- Copyright -->
        <v-row>
          <v-col cols="12" class="text-center">
            <p class="text-white">
              &copy; {{ new Date().getFullYear() }} Zeeshan Afzal. All rights reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <v-btn
      icon="mdi-arrow-up"
      color="white"
      class="back-to-top"
      @click="scrollToTop"
    ></v-btn>
    </v-footer>
  </template>
  
  <script setup>
  const quickLinks = [
    { title: "Home", route: {name:'home'}, icon: "mdi-home" },
    { title: "About", route: {name:'about'}, icon: "mdi-account" },
    { title: "Skills", route: {name:'skills'}, icon: "mdi-code-tags" },
    { title: "Projects", route: {name:'projects'}, icon: "mdi-folder" },
    { title: "Contact", route: {name:'contact'}, icon: "mdi-email" },
  ];
  
  const socialLinks = [
    { icon: "mdi-github", url: "https://github.com/shanafzal060" },
    { icon: "mdi-linkedin", url: "https://www.linkedin.com/in/eng-zeeshan-afzal/" },
    { icon: "mdi-facebook", url: "https://facebook.com/zeeshan.afzal.75641" },
    
  ];

  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}; 
  </script>
  
  <style scoped>
  .v-footer {
    width: 100%;
    padding: 2rem 0;
  }

  .back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
}
  </style>