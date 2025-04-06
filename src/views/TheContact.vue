<template>
  <v-container class="mt-6">
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="text-h4 text-sm-h3 mb-6">Get In Touch</h1>
        <p class="text-body-1 mb-8">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <v-card class="pa-6" flat>
          <v-form @submit.prevent="submitForm">
            <v-text-field
              v-model="form.name"
              label="Your Name"
              required
              variant="outlined"
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              required
              variant="outlined"
            ></v-text-field>

            <v-text-field
              v-model="form.subject"
              label="Subject"
              variant="outlined"
            ></v-text-field>

            <v-textarea
              v-model="form.message"
              label="Message"
              required
              variant="outlined"
              rows="4"
            ></v-textarea>

            <v-btn
              type="submit"
              color="primary"
              size="large"
              :loading="loading"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" >
        <v-card  flat class="pa-4">
          <h2 class="text-h5 text-sm-h4 mb-4">Contact Information</h2>

          <v-list lines="two">
            <v-list-item
              prepend-icon="mdi-email"
              href="mailto:eng.zeeshanafzal@gmail.com"
            >
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle
                >eng.zeeshanafzal@gmail.com</v-list-item-subtitle
              >
            </v-list-item>

            <v-list-item prepend-icon="mdi-phone" href="tel:+923471893526">
              <v-list-item-title>Phone</v-list-item-title>
              <v-list-item-subtitle>+92 (347) 1893-526</v-list-item-subtitle>
            </v-list-item>

            <v-list-item prepend-icon="mdi-map-marker">
              <v-list-item-title>Location</v-list-item-title>
              <v-list-item-subtitle>Islamabad, Pakistan</v-list-item-subtitle>
            </v-list-item>

            <v-list-item
              prepend-icon="mdi-linkedin"
              href="https://www.linkedin.com/in/eng-zeeshan-afzal/"
              target="_blank"
            >
              <v-list-item-title>LinkedIn</v-list-item-title>
            </v-list-item>

            <v-list-item
              prepend-icon="mdi-github"
              href="https://github.com/shanafzal060"
              target="_blank"
            >
              <v-list-item-title>GitHub</v-list-item-title>
            </v-list-item>
          </v-list>

          <div class="mt-8">
            <h3 class="text-h5 mb-4">Availability</h3>
            <p class="text-body-1">
              I'm currently available for freelance work and full-time
              positions. Don't hesitate to reach out!
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);

const submitForm = async () => {
  loading.value = true;
  try {
    // Implement your form submission logic here
    // Could be an API call or email service integration
    console.log("Form submitted:", form.value);

    // Reset form after submission
    form.value = { name: "", email: "", subject: "", message: "" };

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was an error sending your message. Please try again.");
  } finally {
    loading.value = false;
  }
};
</script>
