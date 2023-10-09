import
{
    fetchSupportedCurrencies,
    fetchSupportedCurrenciesExchangeRates,
    fetchSupportedCountries,
    addSuportedCountry,
    deleteCountry,
    addSuportedCurrency,
    deleteCurrency,
    getAdminUsers,
    fetchFriends,
    getSystemSettings,
    updateSetting,
    fetchServicePointAdmins
}
    from '../../utils/constants';

const system = {
    state: {
        systemSettings: [],
        myCompanyUsers: [],
        companyUserDetails: {},
        servicePointUsers: [],
        adminServicePoints: [],
        friends: [],
        suportedCountries: [],
        suportedCurrencies: [],
        supportedCurrenciesExchangeRates: []
    },

    getters: {
        getSystemSettings: state => state.systemSettings,
        getMyCompanyUsers: state => state.myCompanyUsers,
        getCompanyUserDetails: state => state.companyUserDetails,
        getAdminServicePoints: state => state.adminServicePoints,
        getServicePointUsers: state => state.servicePointUsers,
        getFriends: state => state.friends,
        getSuportedCountries: state => state.suportedCountries,
        getSuportedCurrencies: state => state.suportedCurrencies,
        getSupportedCurrenciesExchangeRates: state => state.supportedCurrenciesExchangeRates,
    },

    mutations: {
        addSystemSettings ( state, payload )
        {
            state.systemSettings = payload;
        },
        addCompanyUsers ( state, payload )
        {
            state.myCompanyUsers = payload;
        },
        addCompanyUserDetails ( state, payload )
        {
            state.companyUserDetails = payload;
        },
        addAdminServicePoints ( state, payload )
        {
            state.adminServicePoints = payload;
        },
        addServicePointUsers ( state, payload )
        {
            state.servicePointUsers = payload;
        },
        addFriends ( state, payload )
        {
            state.friends = payload;
        },
        addSuportedCountries ( state, payload )
        {
            state.suportedCountries = payload;
        },
        addSuportedCurrencies ( state, payload )
        {
            state.suportedCurrencies = payload;
        },
        addSupportedCurrenciesExchangeRates ( state, payload )
        {
            state.supportedCurrenciesExchangeRates = payload;
        },
    },

    actions: {
        loadSystemSettings ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "loadSystemSettings" );

            var config = {
                method: 'get',
                url: getSystemSettings,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        console.log( "addSystemSettings", authData.data );
                        commit( "addSystemSettings", authData.data );
                    }
                } );
        },

        updateSetting ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) )
            {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: updateSetting,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
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

        getAdminUsers ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getAdminUsers,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const adminUsers = response.data;
                    commit( "addCompanyUsers", adminUsers );
                } );
        },

        fetchMyCompanyUserDetails ( {
            commit,
            dispatch
        }, adminID )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "fetchMyCompanyUserDetails" );
            formData.append( "adminID", adminID );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addCompanyUserDetails", authData.data );
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

        fetchAdminServicePoints ( {
            commit,
            dispatch
        }, adminID )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "fetchAdminServicePoints" );
            formData.append( "adminID", adminID );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addAdminServicePoints", authData.data );
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

        deleteAdminServicePoint ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "deleteAdminServicePoint" );
            formData.append( "userId", payload.userId );
            formData.append( "servicePointId", payload.servicePointId );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
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

        fetchFriends ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchFriends,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addFriends", authData.data );
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

        fetchServicePointAdmins ( {
            commit,
            dispatch
        }, servicePointId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchServicePointAdmins + servicePointId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( "addServicePointUsers", authData.data );
                    if ( authData.status === 200 )
                    {
                        commit( "addServicePointUsers", authData.data );
                    }
                } );
        },

        fetchSupportedCountries ( {
            commit,
            dispatch
        }, servicePointId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "servicePintId", servicePointId );
            formData.append( "action", "fetchSupportedCountries" );

            var config = {
                method: 'get',
                url: fetchSupportedCountries,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    //console.log( authData )
                    if ( authData.status === 200 )
                    {
                        commit( "addSuportedCountries", authData.data );
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

        addSuportedCountry ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) )
            {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: addSuportedCountry,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    //console.log( authData );
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

        deleteCountry ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteCountry + '/' + code,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    //console.log( authData );
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

        fetchSupportedCurrenciesExchangeRates ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();

            var config = {
                method: 'get',
                url: fetchSupportedCurrenciesExchangeRates,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addSupportedCurrenciesExchangeRates", authData.data );
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

        fetchSupportedCurrencies ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();

            var config = {
                method: 'get',
                url: fetchSupportedCurrencies,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( "addSuportedCurrencies", authData )
                    if ( authData.status === 200 )
                    {
                        commit( "addSuportedCurrencies", authData.data );
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

        addSuportedCurrency ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) )
            {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: addSuportedCurrency,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    //console.log( authData );
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

        addNewAdminServicePoint ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "addNewAdminServicePoint" );
            formData.append( "accountId", payload.accountId );
            formData.append( "level", payload.level );
            formData.append( "newServicePoints", JSON.stringify( payload.newServicePoints ) );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    //console.log( authData );
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

        submitNewAdminPermission ( {
            commit,
            dispatch
        }, payload )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "submitNewAdminPermission" );
            formData.append( "accountId", payload.accountId );
            formData.append( "permission", payload.permission );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    //console.log( authData );
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

        deleteCurrency ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteCurrency + '/' + code,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    //console.log( authData );
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
    }
};

export default system;
