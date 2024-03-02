import
{
    loginUrl,
    forgotPasswordUrl,
    resetPasswordUrl,
    logout,
    register
} from '../../utils/constants';

import
{
    encryptKeyWithPublicKey,
    generateRandomKey,
    generateRandomIV,
    encrypt
} from "../../utils/EncryptionHelper";

export default {
    state: {
        currentUser: localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null,
        loginError: null,
        processing: false,
        forgotMailSuccess: null,
        resetPasswordSuccess: null,
        messageAlert: null,
    },
    getters: {
        currentUser: state => state.currentUser,
        processing: state => state.processing,
        loginError: state => state.loginError,
        forgotMailSuccess: state => state.forgotMailSuccess,
        resetPasswordSuccess: state => state.resetPasswordSuccess,
        messageAlert: state => state.messageAlert,
    },
    mutations: {
        setUser ( state, payload )
        {
            state.currentUser = payload
            state.processing = false
            state.loginError = null
        },
        setLogout ( state )
        {
            state.currentUser = null
            state.processing = false
            state.loginError = null
        },
        setProcessing ( state, payload )
        {
            state.processing = payload
            state.loginError = null
        },
        setError ( state, payload )
        {
            state.loginError = payload
            state.currentUser = null
            state.processing = false
        },
        setForgotMailSuccess ( state )
        {
            state.loginError = null
            state.currentUser = null
            state.processing = false
            state.forgotMailSuccess = true
        },
        setResetPasswordSuccess ( state )
        {
            state.loginError = null
            state.currentUser = null
            state.processing = false
            state.resetPasswordSuccess = true
        },
        clearError ( state )
        {
            state.loginError = null
        },
        setAlert ( state, payload )
        {
            state.messageAlert = payload
            state.processing = false
        },
        clearAlert ( state )
        {
            state.messageAlert = null
        },
    },
    actions: {
        fireMessageAlert ( {
            commit
        }, message )
        {
            commit( 'setAlert', message )
            setTimeout( () =>
            {
                commit( 'clearAlert' )
            }, 3000 );
        },

        login ( {
            commit,
            dispatch
        }, payload )
        {
            commit( 'clearError' )
            commit( 'setProcessing', true )

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
                url: loginUrl,
                headers: {
                    'Accept': 'application/json',
                },
                data: formData
            };

            axios( config )
                .then( function ( response )
                {

                    const authData = response.data;

                    localStorage.setItem( 'authData', JSON.stringify( authData ) )
                    commit( 'setUser', authData )
                } )
                .catch( function ( error )
                {
                    if ( error.response )
                    {
                        const message = error.response.data.message;
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: message,
                            body: "Wrong email or password was provided"
                        } );
                        return null
                    }
                } );
        },

        register ( {
            commit,
            dispatch
        }, payload )
        {
            commit( 'clearError' )
            commit( 'setProcessing', true )

            const symmetricKey = generateRandomKey();
            const symmetricInitialVector = generateRandomIV();

            var myData = {
                name: payload.name,
                email: payload.email,
                password: payload.password,
                pin: payload.pin,
                country: payload.country
            };
            const myDataString = JSON.stringify( myData );

            const encryptedData = encrypt( myDataString, symmetricKey, symmetricInitialVector );
            const encryptedKey = encryptKeyWithPublicKey( symmetricKey );
            const encryptedIV = encryptKeyWithPublicKey( symmetricInitialVector );

            const formData = new FormData();
            formData.append( "data", encryptedData );
            formData.append( "key", encryptedKey );
            formData.append( "iv", encryptedIV );

            var config = {
                method: 'post',
                url: register,
                headers: {
                    'Accept': 'application/json',
                },
                data: formData
            };

            axios( config )
                .then( function ( response )
                {
                    if ( response.status === 200 )
                    {
                        const authData = response.data;
                        try
                        {
                            if ( authData.access_token !== undefined )
                            {
                                localStorage.setItem( 'authData', JSON.stringify( authData ) )
                                commit( 'setUser', authData )
                                dispatch( "fireMessageAlert", {
                                    type: "succes",
                                    title: "Token",
                                    body: "Welcome " + authData.data.name

                                } );
                            }
                        } catch ( e )
                        {
                            console.log( e );
                        }
                        try
                        {
                            if ( authData.password[ 0 ] !== undefined )
                            {
                                dispatch( "fireMessageAlert", {
                                    type: "error",
                                    title: "Error",
                                    body: authData.password[ 0 ]
                                } );
                            }
                        } catch ( e )
                        {
                            console.log( e );
                        }
                        try
                        {
                            if ( authData.email[ 0 ] !== undefined )
                            {
                                dispatch( "fireMessageAlert", {
                                    type: "error",
                                    title: "Error",
                                    body: authData.email[ 0 ]
                                } );
                            }
                        } catch ( e )
                        {
                            console.log( e );
                        }
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
                            body: error.response.status == 403 ? "The email has already been taken." : "Something went wrong, try again later!."
                        } );
                        return null
                    }
                } );
        },

        forgotPassword ( {
            commit,
            dispatch
        }, payload )
        {
            commit( 'clearError' )
            commit( 'setProcessing', true )

            const symmetricKey = generateRandomKey();
            const symmetricInitialVector = generateRandomIV();

            const formData = new FormData();
            formData.append( "email", payload.email );

            var config = {
                method: 'post',
                url: forgotPasswordUrl,
                headers: {
                    'Accept': 'application/json',
                },
                data: formData
            };

            axios( config )
                .then( function ( response )
                {

                    const authData = response.data;
                    console.log( "response", authData );
                    commit( 'setForgotMailSuccess', authData );

                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: authData.message
                    } );
                } )
                .catch( function ( error )
                {
                    console.log( error );
                } );
        },

        resetPassword ( {
            commit
        }, payload ) { },
        /*
           return await auth.(resetPasswordCode, newPassword)
            .then(user => user)
            .catch(error => error);
        */
        handleResetPassword ( {
            commit,
            dispatch
        }, payload )
        {
            commit( 'clearError' )
            commit( 'setProcessing', true )

            // Usage
            const keySize = 256; // Key size in bits
            const symmetricKey = generateRandomKey( keySize );
            const symmetricInitialVector = generateRandomIV();

            const formData = new FormData();
            formData.append( "password", payload.password );
            formData.append( "token", payload.token );

            var config = {
                method: 'post',
                url: resetPasswordUrl,
                headers: {
                    'Accept': 'application/json',
                },
                data: formData
            };

            axios( config )
                .then( function ( response )
                {

                    const authData = response.data;
                    console.log( "response", authData );
                    commit( 'setForgotMailSuccess', authData );

                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: authData.message
                    } );
                } )
                .catch( function ( error )
                {
                    console.log( error );
                } );
        },

        handleVerifyEmail ( {
            commit,
            dispatch
        }, payload ) { },

        handleRecoverEmail ( {
            commit,
            dispatch
        }, payload ) { },

        signOut ( {
            commit,
            dispatch
        } )
        {
            localStorage.removeItem( 'authData' )
            /*
            commit( 'clearError' )
            commit( 'setProcessing', true )

            // Usage
            const keySize = 256; // Key size in bits
            const symmetricKey = generateRandomKey( keySize );
            const symmetricInitialVector = generateRandomIV();

            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: logout,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( function ( response )
                {
                    const authData = response.data;
                    if ( response.status === 200 )
                    {
                        // localStorage.removeItem( 'authData' )
                        commit( 'setProcessing', false )

                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    }
                } )
                .catch( function ( error )
                {
                    console.log( error );
                } );
                */
        }
    }
}
