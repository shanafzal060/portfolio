// Styles
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles"; // Import Vuetify styles
import "@mdi/font/css/materialdesignicons.css"; // Import Material Design Icons

const vuetify = createVuetify({
  components,
  directives,
  // Add any other Vuetify configurations here

  theme: {
    defaultTheme: "light",
  },
  icons: {
    defaultSet: 'mdi', // Ensure 'mdi' is set as the default icon set
  },
});

export default vuetify;
