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
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use( VueGoogleMaps, {
  load: {
    key: 'AIzaSyDHh_dyZ6V2jgWxtREVQ5KqUt1V1oaBrqg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
} )

Vue.use( VuetifyGoogleAutocomplete, {
  /*
    not used as loaded with component
    apiKey: key,
  */
  vueGoogleMapsCompatibility: true,
} );

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
