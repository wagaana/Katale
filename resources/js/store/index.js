import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import system from './modules/system'
import paymentMethods from './modules/paymentMethods'
import banks from './modules/banks'
import chat from './modules/chat'
import main from './modules/main'
import systenUsers from './modules/systenUsers'
import Templates from './modules/Templates'
import marketingCampaings from './modules/marketingCampaings'
import servicePoints from './modules/servicePoints'

Vue.use( Vuex )

export default new Vuex.Store( {
    state: {
        currentCountry: localStorage.getItem( 'currentCountry' ) != null ?
            localStorage.getItem( 'currentCountry' ) : {},
        activeLanguage: localStorage.getItem( 'activeLanguage' ) != null ? localStorage.getItem( 'activeLanguage' ) : 1,
    },

    mutations: {
        changeLang ( state, payload )
        {
            // app.$i18n.locale = payload
            localStorage.setItem( 'currentLanguage', payload )
        },
        changeCountry ( state, payload )
        {
            state.currentCountry = payload
            localStorage.setItem( 'currentCountry', payload )
        },
        changeActiveLanguage ( state, payload )
        {
            state.activeLanguage = payload
            localStorage.setItem( 'activeLanguage', payload )
        },
    },

    getters: {
        getCurrentCountry: state =>
        {
            return JSON.parse( state.currentCountry );
        },
        getActiveLanguage: state =>
        {
            return state.activeLanguage;
        },
    },

    actions: {
        setActiveLanguage ( {
            commit
        }, payload )
        {
            commit( 'changeActiveLanguage', payload )
        },
        setLang ( {
            commit
        }, payload )
        {
            commit( 'changeLang', payload )
        },
        setCountry ( {
            commit
        }, payload )
        {
            commit( 'changeCountry', payload )
        }
    },

    modules: {
        user,
        system,
        paymentMethods,
        banks,
        chat,
        main,
        systenUsers,
        Templates,
        marketingCampaings,
        servicePoints,
    }
} )