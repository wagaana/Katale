import {
    submitCampaignTarget,
    loadCampaignTargets,
    loadCampaignTargetDetails,
    deleteCampaignTarget,
    submitCampaignOffer,
    uploadCampaignOfferFile,
    loadSystemCampaignOffers,
    loadSystemCampaignOfferDetails,
    updateCampaignOffer,
    deleteOffer,
    submitCampaign,
    loadMarketingCampaings,
    loadCampaignDetails,
    deleteCampaign,
    runCampaign,
    updateCampaign,
}
from '../../utils/constants'

const marketingCampaings = {
    state: {
        marketingCampaings: [],
        campaignTargets: [],
        campaignOffers: [],
        isUpdating: false,
        campaignManagerCampaigns: [],
        campaignTargetDetails: {},
        systemCampaignOfferDetails: {},
        campaignDetails: {},
        uploadedCampaignOfferFile: {},
    },

    getters: {
        getMarketingCampaings: state => {
            return state.marketingCampaings;
        },
        getUpdatingStatus: state => {
            return state.isUpdating;
        },
        getCampaignManagerCampaigns: state => state.campaignManagerCampaigns,
        getCampaignTargets: state => state.campaignTargets,
        getCampaignTargetDetails: state => state.campaignTargetDetails,
        getCampaignOffers: state => state.campaignOffers,
        getSystemCampaignOfferDetails: state => state.systemCampaignOfferDetails,
        getCampaignDetails: state => state.campaignDetails,
        getUploadedCampaignOfferFile: state => state.uploadedCampaignOfferFile,
    },

    mutations: {
        addMarketingCampaings( state, payload ) {
            localStorage.setItem( 'marketingCampaings', payload );
            state.marketingCampaings = payload;
        },
        setUpdatingStatus( state, payload ) {
            state.isUpdating = payload;
        },
        saveCampaignManagerCampaigns: ( state, payload ) => {
            state.campaignManagerCampaigns = payload;
        },
        addCampaignTargets( state, payload ) {
            state.campaignTargets = payload;
        },
        addCampaignTargetDetails( state, payload ) {
            state.campaignTargetDetails = payload;
        },
        addCampaignOffers( state, payload ) {
            state.campaignOffers = payload;
        },
        addSystemCampaignOfferDetails( state, payload ) {
            state.systemCampaignOfferDetails = payload;
        },
        addCampaignDetails( state, payload ) {
            state.campaignDetails = payload;
        },
        addUploadedCampaignOfferFile( state, payload ) {
            state.uploadedCampaignOfferFile = payload;
        },
    },

    actions: {
        loadMarketingCampaings( {
            commit,
            dispatch
        } ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadMarketingCampaings,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        console.log( templateData );
                        commit( "addMarketingCampaings", templateData.campaigns );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        deleteCampaign( {
            commit,
            dispatch
        }, campaignID ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteCampaign + '/' + campaignID,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        console.log( templateData );
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: 'Campaign successfully deleted!'
                        } );
                        dispatch( "loadMarketingCampaings" );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        deleteCampaignTarget( {
            commit,
            dispatch
        }, targetID ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;
            var config = {
                method: 'delete',
                url: deleteCampaignTarget + '/' + targetID,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        console.log( templateData );
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: 'Campaign Target successfully deleted!'
                        } );
                        dispatch( "loadCampaignTargets" );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        deleteOffer( {
            commit,
            dispatch
        }, offerId ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteOffer + '/' + offerId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        console.log( templateData );
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: 'Campaign Offer successfully deleted!'
                        } );
                        dispatch( "loadSystemCampaignOffers" );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        runCampaign( {
            commit,
            dispatch
        }, campaignID ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: runCampaign + '/' + campaignID,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        console.log( templateData );
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: 'Your request to run this campaign successfully sent!'
                        } );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error: ",
                            body: templateData.message
                        } );
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        uploadCampaignOfferFile( {
            commit,
            dispatch
        }, formData ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'post',
                url: uploadCampaignOfferFile,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( response )
                    const authData = response.data;
                    if ( authData.status === 200 ) {
                        commit( "addUploadedCampaignOfferFile", authData );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( authData.status === 400 ) {
                        dispatch( 'signOut' )
                    } else {
                        console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } ).catch( err => {
                    console.log( err )
                    return null
                } )
        },

        submitCampaign( {
            commit,
            dispatch
        }, payload ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) ) {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: submitCampaign,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        updateCampaign( {
            commit,
            dispatch
        }, payload ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) ) {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: updateCampaign,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        loadCampaignDetails( {
            commit,
            dispatch
        }, campaignID ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadCampaignDetails + '/' + campaignID,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {

                        console.log( templateData.payload );
                        commit( "addCampaignDetails", templateData.payload );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        submitCampaignTarget( {
            commit,
            dispatch
        }, payload ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) ) {
                if ( key === "target" ) {
                    formData.append( key, JSON.stringify( value ) );
                } else {
                    formData.append( key, value );
                }
            }

            var config = {
                method: 'post',
                url: submitCampaignTarget,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        loadCampaignTargets( {
            commit,
            dispatch
        } ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadCampaignTargets,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        console.log( templateData );
                        commit( "addCampaignTargets", templateData.targets );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        loadCampaignTargetDetails( {
            commit,
            dispatch
        }, targetID ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadCampaignTargetDetails + '/' + targetID,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {

                        console.log( templateData.payload );
                        commit( "addCampaignTargetDetails", templateData.payload );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        submitCampaignOffer( {
            commit,
            dispatch
        }, payload ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) ) {
                if ( key === "parameters" ) {
                    formData.append( key, JSON.stringify( value ) );
                } else {
                    formData.append( key, value );
                }
            }

            var config = {
                method: 'post',
                url: submitCampaignOffer,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        updateCampaignOffer( {
            commit,
            dispatch
        }, payload ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) ) {
                if ( key === "parameters" ) {
                    formData.append( key, JSON.stringify( value ) );
                } else {
                    formData.append( key, value );
                }
            }

            var config = {
                method: 'post',
                url: updateCampaignOffer,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        loadSystemCampaignOffers( {
            commit,
            dispatch
        }, ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadSystemCampaignOffers,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "addCampaignOffers", templateData.offers );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        loadSystemCampaignOfferDetails( {
            commit,
            dispatch
        }, offerId ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadSystemCampaignOfferDetails + '/' + offerId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "addSystemCampaignOfferDetails", templateData.payload );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },
    }
}

export default marketingCampaings;
