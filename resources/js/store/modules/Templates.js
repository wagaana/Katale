import {
    submitTemplate,
    loadCampaignTemplates,
    loadTemplateDetails,
    updateTemplate,
}
from '../../utils/constants'

const Templates = {
    state: {
        systemTemplates: [],
        campaignTemplates: [],
        systemTemplateDetails: {},
        templateDetails: {}
    },

    getters: {
        getCampaignTemplates: state => {
            return state.campaignTemplates;
        },
        getSystemTemplates: state => {
            return state.systemTemplates;
        },
        getTemplateDetails: state => {
            return state.templateDetails;
        },
        getSystemTemplateDetails: state => {
            return state.systemTemplateDetails;
        },
    },

    mutations: {
        addCampaignTemplates( state, payload ) {
            state.campaignTemplates = payload;
        },
        addSystemTemplates( state, payload ) {
            state.systemTemplates = payload;
        },
        addSystemTemplateDetails( state, payload ) {
            state.systemTemplateDetails = payload;
        },
        addTemplateDetails( state, payload ) {
            state.templateDetails = payload;
        },
    },

    actions: {
        loadCampaignTemplates( {
            commit,
            dispatch
        } ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadCampaignTemplates,
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
                        commit( "addCampaignTemplates", templateData.templates );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' )
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadSystemTemplates( {
            commit,
            dispatch
        } ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadCampaignTemplates,
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
                        commit( "addSystemTemplates", templateData.templates );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' )
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadTemplateDetails( {
            commit,
            dispatch
        }, templateID ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadTemplateDetails + '/' + templateID,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    console.log( "loadTemplateDetails: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "addTemplateDetails", templateData.template );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' )
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },


        loadSystemTemplateDetails( {
            commit,
            dispatch
        }, templateID ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "loadSystemTemplateDetails" );
            formData.append( "templateID", templateID );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( "loadSystemTemplateDetails: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "addSystemTemplateDetails", templateData.template );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' )
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        submitTemplate( {
            commit,
            dispatch
        }, payload ) {
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
                url: submitTemplate,
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
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        updateTemplate( {
            commit,
            dispatch
        }, payload ) {
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
                url: updateTemplate,
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
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        updateSystemTemplate( {
            commit,
            dispatch
        }, payload ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            payload.action = "updateSystemTemplate";

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) ) {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: apiUrl,
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
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        deleteTemplate( {
            commit,
            dispatch
        }, templateID ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "deleteTemplate" );
            formData.append( "templateID", templateID );

            var config = {
                method: 'post',
                url: apiUrl,
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
                        dispatch( 'loadSystemTemplates' )
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' )
                    } else {
                        console.log( templateData )
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error:",
                            body: templateData.message
                        } );
                        dispatch( 'loadSystemTemplates' )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },
    }
}

export default Templates;
