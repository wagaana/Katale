require( './bootstrap' );
require( '../sass/app.scss' )
import Vue from 'vue'

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'
import Notifications from 'vue-notification'
import VueApexCharts from 'vue-apexcharts'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

Vue.component( 'vue-phone-number-input', VuePhoneNumberInput );
Vue.use( VueApexCharts )

Vue.component( 'apexchart', VueApexCharts )

Vue.use( VuetifyGoogleAutocomplete, {
  vueGoogleMapsCompatibility: true,
} );

Vue.use( Vuetify );
Vue.use( Notifications );

window.Vue = require( 'vue' );

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();

let theme;
if ( localStorage.getItem( "theme" ) == "light" )
{
  theme = false;
} else
{
  theme = true;
}

const app = new Vue( {
  el: '#app',
  store,
  router,
  vuetify: new Vuetify( {
    theme: {
      dark: theme,
      themes: {
        dark: {
          primary: "#007bff",
          secondary: "#333",
          accent: "#37474F",
          success: "#4caf50",
          background: "#000000"
        },
        light: {
          primary: '#007bff',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#f44336',
          success: "#4caf50",
          background: "#FFFFFF"
        },
      },
    },
  } ),
} ).$mount( '#app' );
