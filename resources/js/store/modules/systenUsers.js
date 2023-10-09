import
{
    loadSystemUsers,
    getUserProfile,
    getSelectedUserProfile,
    searchUsers,
    saveUserAvator,
    uploadUserCoverPhoto,
    submitSystemAdmin,
    updateUserProfileValue
}
    from '../../utils/constants'

const systenUsers = {
    state: {
        profiles: [],
        userSearch: [],
        salesProfiles: [],
        deliveryProfiles: [],
        loadingUI: true,
        loadingUser: true,
        userCredentials: {},
        userLikes: 5,
        authenticated: localStorage.getItem( 'authData' ) != null ? true : false,
        selectedUser: {},
        myUserProfile: {},
    },

    getters: {
        getUserProfiles: state => state.profiles,
        getUserSearch: state => state.userSearch,
        getSalesProfiles: state => state.salesProfiles,
        getDeliveryProfiles: state => state.deliveryProfiles,
        userSelected: state => state.selectedUser,
        isAuthenticated: state => state.authenticated,
        loadingUI: state => state.loadingUI,
        loadingUser: state => state.loadingUser,
        userCredentials: state => state.userCredentials,
        userLikes: state => state.userLikes,
        myUserProfile: state => state.myUserProfile,
    },

    mutations: {
        addUserSearch ( state, userSearch )
        {
            state.userSearch = userSearch;
        },
        addUserProfiles ( state, profiles )
        {
            state.profiles = profiles;
        },
        addSalesProfiles ( state, salesProfiles )
        {
            state.salesProfiles = salesProfiles;
        },
        addDeliveryProfiles ( state, deliveryProfiles )
        {
            state.deliveryProfiles = deliveryProfiles;
        },

        addSelectedUser ( state, selectedUser )
        {
            state.selectedUser = selectedUser;
        },

        setLoadingUI ( state, loadingUI )
        {
            state.loadingUI = loadingUI;
        },

        addMyUserProfile ( state, loadingUI )
        {
            state.myUserProfile = loadingUI;
        },
    },

    actions: {
        searchUsers ( {
            commit
        }, queryText )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: searchUsers + '/' + queryText,
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
                        commit( "addUserSearch", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadSystemUsers ( {
            commit
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();

            var config = {
                method: 'get',
                url: loadSystemUsers,
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
                    commit( "addUserProfiles", authData );
                } );
        },

        loadCampaignTargetUsers ( {
            commit
        }, targetID )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            formData.append( "action", "loadCampaignTargetUsers" );
            formData.append( "targetID", targetID );

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
                    const authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addUserProfiles", authData.data );
                    }
                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        submitSystemAdmin ( {
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
                url: submitSystemAdmin,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: authData.message
                    } );
                } ).catch( function ( error )
                {
                    if ( error.response )
                    {
                        console.log( error.response.data );
                        const message = error.response.data.message;
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "error",
                            body: message
                        } );
                    }
                } );
        },

        getMyProfile ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getUserProfile,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    console.log( "addMyUserProfile", response );
                    const authData = response.data;
                    commit( "addMyUserProfile", authData );
                } ).catch( error =>
                {
                    if ( error.response )
                    {
                        console.log( error.response.data );
                        if ( error.response.status === 401 )
                        {
                            localStorage.removeItem( 'authData' )
                        }
                        return null
                    }
                } );
        },

        saveUserAvator ( {
            commit,
            dispatch
        }, formData )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'post',
                url: saveUserAvator,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config ).then( response =>
            {
                console.log( response )
                const authData = response.data;
                if ( authData.status === 200 )
                {
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: 'User picture successfully updated'
                    } );
                }
                if ( authData.status === 400 )
                {
                    dispatch( 'signOut' )
                } else
                {
                    console.log( authData )
                    commit( 'setError', authData.message )
                    setTimeout( () =>
                    {
                        commit( 'clearError' )
                    }, 3000 );
                }
            } ).catch( err =>
            {
                console.log( err )
                return null
            } )
        },

        uploadUserCoverPhoto ( {
            commit,
            dispatch
        }, formData )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'post',
                url: uploadUserCoverPhoto,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config ).then( response =>
            {
                console.log( response )
                const authData = response.data;
                if ( authData.status === 200 )
                {
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: 'User picture successfully updated'
                    } );
                }
                if ( authData.status === 400 )
                {
                    dispatch( 'signOut' )
                } else
                {
                    console.log( authData )
                    commit( 'setError', authData.message )
                    setTimeout( () =>
                    {
                        commit( 'clearError' )
                    }, 3000 );
                }
            } ).catch( err =>
            {
                console.log( err )
                return null
            } )
        },

        getSelectedUserProfile ( {
            commit
        }, userID )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getSelectedUserProfile + '/' + userID,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    if ( response.status === 200 )
                    {
                        console.log( "selectedUser", authData );
                        commit( "addSelectedUser", authData );
                        commit( "setLoadingUI", false );
                    }
                } );
        },

        updateUserLevel ( {
            commit,
            dispatch
        }, payload )
        {
            firebase.database().ref( "/profiles/" + payload.id ).update( {
                level: parseFloat( payload.level )
            } ).then( ( data ) =>
            {
                dispatch( "fireMessageAlert", {
                    type: "success",
                    title: "Success",
                    body: 'User Level has been updated!'
                } );
            } );
        },

        updateUserProfileValue ( {
            commit,
            dispatch
        }, formData )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            axios.post( updateUserProfileValue, formData, {
                params: {},
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
            } ).then( response =>
            {
                console.log( response )
                const authData = response.data;
                if ( authData.status === 200 )
                {
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: 'User profile successfully updated'
                    } );
                }
                if ( authData.status === 400 )
                {
                    dispatch( 'signOut' )
                } else
                {
                    console.log( authData )
                    commit( 'setError', authData.message )
                    setTimeout( () =>
                    {
                        commit( 'clearError' )
                    }, 3000 );
                }
            } ).catch( err =>
            {
                console.log( err )
                return null
            } )
        },
    }
}

export default systenUsers;
