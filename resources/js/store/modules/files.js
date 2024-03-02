import
{
    uploadMultiple,
    loadUserFiles,
    deleteFile
}
    from '../../utils/constants';

const files = {

    state: {
        userFiles: [],
    },

    getters: {
        getUserFiles: state => state.userFiles,
    },

    mutations: {

        addUserFiles ( state, payload )
        {
            state.userFiles = payload
        },
    },

    actions: {
        uploadMultiple ( {
            commit,
            dispatch
        }, formData )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'post',
                url: uploadMultiple,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    const mAuthData = response.data;
                    if ( mAuthData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: mAuthData.message
                        } );
                    } else
                    {
                        commit( 'setError', mAuthData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadUserFiles ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadUserFiles,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const payAuthData = response.data;
                    if ( response.status === 200 )
                    {
                        commit( "addUserFiles", payAuthData.data );
                    }
                } );
        },

        deleteFile ( {
            commit,
            dispatch
        }, fileId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteFile + fileId,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const mAuthData = response.data;
                    if ( response.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: mAuthData.message
                        } );
                    }
                } );
        },
    }
}

export default files;
