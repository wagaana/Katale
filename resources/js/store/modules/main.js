import
{
    loadLocalizations,
    createTranslation,
    deleteTranslation,
    createLocalization,
    loadTranslations,
    loadCompleteTransactions,
    fetchUserNotifications,
    loadUserTransactions,
    getUserCustomerCareChatGroupId,
    submitApplication,
    updateApplicationCallbackURL,
    loadMyApplications,
    resetApiKey,
    loadDashboardSumary,
    fetchDashboardSparklineData,
}
    from '../../utils/constants'

import
{
    encryptKeyWithPublicKey,
    generateRandomKey,
    generateRandomIV,
    encrypt
} from "../../utils/EncryptionHelper";

const mainModule = {
    state: {
        userNotifications: [],
        promoCodes: [],
        nearestServicePoints: [],
        packageCategories: [],
        translations: [],
        localization: [],
        lastSevenCompleteRequests: [],
        completeTransactions: [],
        userTransactions: [],
        cargoCariers: [],
        apiKey: null,
        dashboardSumary: {},
        deliveryRequestDetails: {},
        userDashboardSumary: {},
        userAddresses: [],
        myApplications: [],
        userCustomerCareChatGroupId: null,
        dashboardSparklineData: [],
    },

    getters: {
        getPromoCodes: state => state.promoCodes,
        getNearestServicePoints: state => state.nearestServicePoints,
        getPackageCategories: state => state.packageCategories,
        getTranslations: state => state.translations,
        getDashboardSumary: state => state.dashboardSumary,
        getLastSevenCompleteRequests: state => state.lastSevenCompleteRequests,
        getCompleteTransactions: state => state.completeTransactions,
        getUserTransactions: state => state.userTransactions,
        getDeliveryRequestDetails: state => state.deliveryRequestDetails,
        getLocalization: state => state.localization,
        getUserNotifications: state => state.userNotifications,
        getCargoCariers: state => state.cargoCariers,
        getapiKey: state => state.apiKey,
        getUserDashboardSumary: state => state.userDashboardSumary,
        getUserAddresses: state => state.userAddresses,
        getUserCustomerCareChatGroupId: state => state.userCustomerCareChatGroupId,
        getMyApplications: state => state.myApplications,
        getDashboardSparklineData: state => state.dashboardSparklineData,
    },

    mutations: {
        addNearestServicePoints ( state, payload )
        {
            state.nearestServicePoints = payload;
        },

        addPromoCodes ( state, payload )
        {
            state.promoCodes = payload;
        },

        addPackageCategories ( state, payload )
        {
            state.packageCategories = payload;
        },

        addTranslations ( state, payload )
        {
            state.translations = payload;
        },

        addDashboardSumary ( state, payload )
        {
            state.dashboardSumary = payload;
        },

        addUserDashboardSumary ( state, payload )
        {
            state.userDashboardSumary = payload;
        },

        addLastSevenCompleteRequests ( state, payload )
        {
            state.lastSevenCompleteRequests = payload;
        },

        addCompleteTransactions ( state, payload )
        {
            state.completeTransactions = payload;
        },

        addUserTransactions ( state, payload )
        {
            state.userTransactions = payload;
        },

        addDeliveryRequestDetails ( state, payload )
        {
            state.deliveryRequestDetails = payload;
        },

        addLocalization ( state, payload )
        {
            state.localization = payload;
        },

        setUserNotifications ( state, payload )
        {
            state.userNotifications = payload;
        },

        setCargoCariers ( state, payload )
        {
            state.cargoCariers = payload;
        },

        setApiKey ( state, payload )
        {
            state.apiKey = payload;
        },

        addUserAddresses ( state, payload )
        {
            state.userAddresses = payload;
        },

        addUserCustomerCareChatGroupId ( state, payload )
        {
            state.userCustomerCareChatGroupId = payload;
        },

        setMyApplications ( state, payload )
        {
            state.myApplications = payload;
        },

        addDashboardSparklineData ( state, payload )
        {
            state.dashboardSparklineData = payload;
        },
    },

    actions: {
        fetchUserAddresses ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( "action", "fetchUserAddresses" );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addUserAddresses", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        fetchNearestServicePoints ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( "action", "fetchNearestServicePoints" );
            formData.append( "latitude", payload.latitude );
            formData.append( "longitude", payload.longitude );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addNearestServicePoints", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadPromoCodes ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( "action", "loadPromoCodes" );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addPromoCodes", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadPackageCategories ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( "action", "loadPackageCategories" );



            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addPackageCategories", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        fetchUserDeliveryRequestDetails ( {
            commit,
            dispatch
        }, requestId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( "action", "fetchUserDeliveryRequestDetails" );
            formData.append( "requestId", requestId );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    authData = response.data;
                    console.log( authData )
                    if ( authData.status === 200 )
                    {
                        commit( "addDeliveryRequestDetails", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        updateOrderRequestStatus ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            payload.action = "updateOrderRequestStatus";

            let formData = new FormData();
            for ( [ key, value ] of Object.entries( payload ) )
            {
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
                .then( response =>
                {
                    authData = response.data;
                    console.log( authData )
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        submitApplication ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) )
            {
                formData.append( key, value );
            }
            var config = {
                method: 'post',
                url: submitApplication,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( authData )
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                } );
        },

        updateApplicationCallbackURL ( {
            commit,
            dispatch
        }, formData )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'post',
                url: updateApplicationCallbackURL,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( authData )
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                } ).catch( error =>
                {
                    if ( error.response )
                    {
                        console.log( error.response.data );
                        const message = error.response.data.message;
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: message
                        } );
                        return null
                    }
                } );;
        },

        loadMyApplications ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadMyApplications,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( "setMyApplications", authData );
                    if ( authData.status === 200 )
                    {
                        commit( "setMyApplications", authData.data );
                    }
                } );
        },

        loadCompleteTransactions ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadCompleteTransactions,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( "addCompleteTransactions", authData );
                    if ( authData.status === 200 )
                    {
                        commit( "addCompleteTransactions", authData.transactions );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadUserTransactions ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;
            console.log( "addUserTransactions", userId );
            var config = {
                method: 'get',
                url: loadUserTransactions + '/' + userId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( "addUserTransactions", authData );
                    if ( authData.status === 200 )
                    {
                        commit( "addUserTransactions", authData.transactions );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        getUserCustomerCareChatGroupId ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;
            console.log( "addUserTransactions", userId );
            var config = {
                method: 'get',
                url: getUserCustomerCareChatGroupId + '/' + userId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( "addUserCustomerCareChatGroupId", authData.id );
                    if ( authData.status === 200 )
                    {
                        commit( "addUserCustomerCareChatGroupId", authData.id );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadLastSevenCompleteRequests ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( "action", "loadLastSevenCompleteRequests" );



            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addLastSevenCompleteRequests", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadDashboardSumary ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadDashboardSumary,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addDashboardSumary", authData.data );
                    }
                } );
        },

        fetchDashboardSparklineData ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchDashboardSparklineData,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addDashboardSparklineData", authData.data );
                    }
                } );
        },

        loadUserDashboardSumary ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( "action", "loadUserDashboardSumary" );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addUserDashboardSumary", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        addNewPromoCode ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            payload.action = "addNewPromoCode";

            let formData = new FormData();
            for ( [ key, value ] of Object.entries( payload ) )
            {
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
                .then( response =>
                {
                    authData = response.data;
                    console.log( authData );
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: authData.message
                        } );
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        addPackageCategories ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;


            payload.action = "addPackageCategories";


            let formData = new FormData();
            for ( [ key, value ] of Object.entries( payload ) )
            {
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
                .then( response =>
                {
                    authData = response.data;
                    console.log( authData );
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: authData.message
                        } );
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        createLocalization ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            let key, value;
            for ( [ key, value ] of Object.entries( payload ) )
            {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: createLocalization,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( authData );
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: authData.message
                        } );
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadLocalizations ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadLocalizations,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addLocalization", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        createTranslation ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            let key, value;
            for ( [ key, value ] of Object.entries( payload ) )
            {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: createTranslation,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( authData );
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: authData.message
                        } );
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        deleteTranslation ( {
            commit,
            dispatch
        }, translationId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteTranslation + '/' + translationId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const dAuthData = response.data;
                    console.log( dAuthData );
                    if ( dAuthData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: dAuthData.message
                        } );
                    }
                    if ( dAuthData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: dAuthData.message
                        } );
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadTranslations ( {
            commit,
            dispatch
        }, localizationId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadTranslations + '/' + localizationId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addTranslations", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        fetchUserNotifications ( {
            commit,
            dispatch
        } )
        {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchUserNotifications,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const templateData = response.data;
                    if ( templateData.status === 200 )
                    {
                        commit( "setUserNotifications", templateData.data );
                    } else if ( templateData.status === 400 )
                    {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () =>
                        {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else
                    {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        fetchCargoCariers ( {
            commit,
            dispatch
        } )
        {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( 'action', "fetchCargoCariers" );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const templateData = response.data;
                    if ( templateData.status === 200 )
                    {
                        commit( "setCargoCariers", templateData.data );
                    } else if ( templateData.status === 400 )
                    {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () =>
                        {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else
                    {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        addNewCargoCarier ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            payload.action = "addNewCargoCarier";

            let formData = new FormData();
            for ( [ key, value ] of Object.entries( payload ) )
            {
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
                .then( response =>
                {
                    authData = response.data;
                    console.log( authData );
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: authData.message
                        } );
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        addNewServicePointCargoCarier ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            payload.action = "addNewServicePointCargoCarier";

            let formData = new FormData();
            for ( [ key, value ] of Object.entries( payload ) )
            {
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
                .then( response =>
                {
                    authData = response.data;
                    console.log( authData );
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: authData.message
                        } );
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        resetApiKey ( {
            commit,
            dispatch
        }, payload )
        {

            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            // Generate a random key and iv
            const symmetricKey = generateRandomKey();
            const symmetricInitialVector = generateRandomIV();

            var myData = { email: payload.email, password: payload.password };
            const myDataString = JSON.stringify( myData );

            /*
            // Encrypt a string
            const encrypted = CryptoJS.AES.encrypt( myDataString, symmetricKey, { iv: symmetricInitialVector } ).toString();
            console.log( "encrypted", encrypted );

            // Decrypt the encrypted string
            const decrypted = CryptoJS.AES.decrypt( encrypted, symmetricKey, { iv: symmetricInitialVector } ).toString();

            // Convert the hexadecimal string to a WordArray object
            const wordArray = CryptoJS.enc.Hex.parse( decrypted );

            // Convert the WordArray object to a UTF-8 string
            const utf8String = CryptoJS.enc.Utf8.stringify( wordArray );
            console.log( "decrypted", utf8String )
            */

            const encryptedData = encrypt( myDataString, symmetricKey, symmetricInitialVector );
            const encryptedKey = encryptKeyWithPublicKey( symmetricKey );
            const encryptedIV = encryptKeyWithPublicKey( symmetricInitialVector );

            const formData = new FormData();
            formData.append( "data", encryptedData );
            formData.append( "key", encryptedKey );
            formData.append( "iv", encryptedIV );

            var config = {
                method: 'post',
                url: resetApiKey,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const templateData = response.data;
                    console.log( "setapiKey", response );
                    if ( response.status === 200 )
                    {
                        commit( "setApiKey", templateData[ 'api_token' ] );
                    }
                } );
        },
    }
};

export default mainModule;
