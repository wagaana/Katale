import
{
    loadPaymentMethodCurencies,
    loadPaymentMethodCurencyDetails,
    createPaymentMethod,
    loadPaymentMethods,
    loadSendActivePaymentMethods,
    createNewCurrency,
    fetchPaymentMethod,
    fetchPaymentMethodStatistics,
    updatePaymentMethodConfig,
    updatePaymentMethodTariffConfig,
    updatePaymentMethodCurrencyConfig,
    updatePaymentMethodLocationConfig,
    deleteActiveCurrency,
    createCustomerTopupRequest,
    createTopupRequest,
    cashOut,
    getMyBalances,
    loadStebleCurency,
    fetchLoadUserCurrency,
    sendMoney,
    loadAllPaymentMethods,
    getRequestToPayRequest,
    payWithMyWallet,
    payWithPaymentGateway,
    addNewPaymentMethodCurrencyTariff,
    updatePaymentMethodCurrencyTariff,
    fetchPaymentMethodCurrencyTariffs,
    deletePaymentMethodCurrencyTariffs,
    loadCurencyDetails,
    updateCurrencyConfig,
    updateCurrencyLocationConfig,
} from '../../utils/constants';

import
{
    encryptKeyWithPublicKey,
    generateRandomKey,
    generateRandomIV,
    encrypt
} from "../../utils/EncryptionHelper";

const paymentMethods = {

    state: {
        paymentMethods: [],
        allPaymentMethods: [],
        stebleCurency: {},
        sendActivePaymentMethods: [],
        paymentMethod: {},
        paymentMethodStatistics: {},
        paymentMethodCurencies: [],
        myBalances: [],
        activePaymentMethod: localStorage.getItem( 'activePaymentMethod' ) != null ? localStorage.getItem( 'activePaymentMethod' ) : null,
        requestToPayRequest: {},
        requestToPayRequestComplete: null,
        paymentMethodCurencyDetails: {},
        paymentMethodCurrencyTariffs: [],
        curencyDetails: {},
        userCurrency: {},
    },

    getters: {
        getPaymentMethods: state => state.paymentMethods,
        getAllPaymentMethods: state => state.allPaymentMethods,
        getStebleCurency: state => state.stebleCurency,
        getSendActivePaymentMethods: state => state.sendActivePaymentMethods,
        getActivePaymentMethod: state => state.activePaymentMethod,
        getPaymentMethodCurencies: state => state.paymentMethodCurencies,
        getPaymentMethodCurencyDetails: state => state.paymentMethodCurencyDetails,
        getPaymentMethod: state => state.paymentMethod,
        getPaymentMethodStatistics: state => state.paymentMethodStatistics,
        getMyBalances: state => state.myBalances,
        getRequestToPayRequest: state => state.requestToPayRequest,
        getRequestToPayRequestComplete: state => state.requestToPayRequestComplete,
        getPaymentMethodCurrencyTariffs: state => state.paymentMethodCurrencyTariffs,
        getCurencyDetails: state => state.curencyDetails,
        getUserCurrency: state => state.userCurrency,
    },

    mutations: {

        addPaymentMethods ( state, payload )
        {
            state.paymentMethods = payload
        },

        addAllPaymentMethods ( state, payload )
        {
            state.allPaymentMethods = payload
        },

        addStebleCurency ( state, payload )
        {
            state.stebleCurency = payload
        },

        seUserCurrency ( state, payload )
        {
            state.userCurrency = payload
        },

        addSendActivePaymentMethods ( state, payload )
        {
            state.sendActivePaymentMethods = payload
        },

        addPaymentMethod ( state, payload )
        {
            state.paymentMethod = payload
        },

        addPaymentMethodStatistics ( state, payload )
        {
            state.paymentMethodStatistics = payload
        },

        setPaymentMethodCurencies ( state, payload )
        {
            state.paymentMethodCurencies = payload
        },

        setPaymentMethodCurencyDetails ( state, payload )
        {
            state.paymentMethodCurencyDetails = payload
        },

        setCurencyDetails ( state, payload )
        {
            state.curencyDetails = payload
        },

        setActivePaymentMethod ( state, payload )
        {
            state.activePaymentMethod = payload
            localStorage.setItem( 'activePaymentMethod', payload )
        },

        setMyBalances ( state, payload )
        {
            state.myBalances = payload
        },

        setRequestToPayRequest ( state, payload )
        {
            state.requestToPayRequest = payload
        },

        setRequestToPayRequestComplete ( state, payload )
        {
            state.requestToPayRequestComplete = payload
        },

        setPaymentMethodCurrencyTariffs ( state, payload )
        {
            state.paymentMethodCurrencyTariffs = payload
        },
    },

    actions: {
        loadCurencyDetails ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadCurencyDetails + code,
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
                        commit( "setCurencyDetails", payAuthData.data );
                    }
                } );
        },

        updateCurrencyConfig ( {
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
                url: updateCurrencyConfig,
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

        loadPaymentMethodCurencyDetails ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadPaymentMethodCurencyDetails + code,
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
                        commit( "setPaymentMethodCurencyDetails", payAuthData );
                    }
                } );
        },

        loadPaymentMethodCurencies ( {
            commit,
            dispatch
        }, paymentMethod )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadPaymentMethodCurencies + '/' + paymentMethod,
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
                    if ( payAuthData.status === 200 )
                    {
                        commit( "setPaymentMethodCurencies", payAuthData.data );
                    }

                    if ( payAuthData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        console.log( payAuthData )
                        commit( 'setError', payAuthData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadPaymentMethods ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadPaymentMethods,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    let authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addPaymentMethods", authData.data );
                    }

                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadAllPaymentMethods ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadAllPaymentMethods,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    let authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addAllPaymentMethods", authData.data );
                    }

                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        loadStebleCurency ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadStebleCurency,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    let authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addStebleCurency", authData.data );
                    }

                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        fetchLoadUserCurrency ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchLoadUserCurrency + userId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    let authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "seUserCurrency", authData.data );
                    }

                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        sendMoney ( {
            commit,
            dispatch
        }, payload )
        {
            const symmetricKey = generateRandomKey();
            const symmetricInitialVector = generateRandomIV();
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const myDataString = JSON.stringify( payload );

            const encryptedData = encrypt( myDataString, symmetricKey, symmetricInitialVector );
            const encryptedKey = encryptKeyWithPublicKey( symmetricKey );
            const encryptedIV = encryptKeyWithPublicKey( symmetricInitialVector );

            const formData = new FormData();
            formData.append( "data", encryptedData );
            formData.append( "key", encryptedKey );
            formData.append( "iv", encryptedIV );

            var config = {
                method: 'post',
                url: sendMoney,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },

                data: formData
            };

            axios( config )
                .then( response =>
                {
                    let authData = response.data;
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: authData.message
                    } );
                } ).catch( error =>
                {
                    if ( error.response )
                    {
                        const message = error.response.data.message;
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: message
                        } );
                        return null
                    }
                } );
        },

        loadSendActivePaymentMethods ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadSendActivePaymentMethods,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    let authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "addSendActivePaymentMethods", authData.data );
                    }

                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        fetchPaymentMethod ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchPaymentMethod + '/' + code,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( 'fetchPaymentMethod', authData );
                    if ( authData.status === 200 )
                    {
                        commit( "addPaymentMethod", authData.data );
                    }

                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        fetchPaymentMethodStatistics ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchPaymentMethodStatistics + '/' + code,
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
                        commit( "addPaymentMethodStatistics", authData.data );
                    }

                    if ( authData.status === 400 )
                    {
                        dispatch( 'signOut' )
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        createPaymentMethod ( {
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
                url: createPaymentMethod,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: response.data.message
                    } );
                } );
        },

        createCustomerTopupRequest ( {
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
                url: createCustomerTopupRequest,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    console.log( response.data );
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: response.data.message
                    } );
                } );
        },

        createTopupRequest ( {
            commit,
            dispatch
        }, payload )
        {

            const symmetricKey = generateRandomKey();
            const symmetricInitialVector = generateRandomIV();
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const myDataString = JSON.stringify( payload );

            const encryptedData = encrypt( myDataString, symmetricKey, symmetricInitialVector );
            const encryptedKey = encryptKeyWithPublicKey( symmetricKey );
            const encryptedIV = encryptKeyWithPublicKey( symmetricInitialVector );

            const formData = new FormData();
            formData.append( "data", encryptedData );
            formData.append( "key", encryptedKey );
            formData.append( "iv", encryptedIV );

            var config = {
                method: 'post',
                url: createTopupRequest,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: response.data.message
                    } );
                } ).catch( error =>
                {
                    if ( error.response )
                    {
                        const message = error.response.data.message;
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: message
                        } );
                        return null
                    }
                } );
        },

        cashOut ( {
            commit,
            dispatch
        }, payload )
        {
            const symmetricKey = generateRandomKey();
            const symmetricInitialVector = generateRandomIV();
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const myDataString = JSON.stringify( payload );

            const encryptedData = encrypt( myDataString, symmetricKey, symmetricInitialVector );
            const encryptedKey = encryptKeyWithPublicKey( symmetricKey );
            const encryptedIV = encryptKeyWithPublicKey( symmetricInitialVector );

            const formData = new FormData();
            formData.append( "data", encryptedData );
            formData.append( "key", encryptedKey );
            formData.append( "iv", encryptedIV );

            var config = {
                method: 'post',
                url: cashOut,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    dispatch( "fireMessageAlert", {
                        type: "success",
                        title: "Success",
                        body: response.data.message
                    } );
                } ).catch( error =>
                {
                    if ( error.response )
                    {
                        const message = error.response.data.message;
                        dispatch( "fireMessageAlert", {
                            type: "error",
                            title: "Error",
                            body: message
                        } );
                        return null
                    }
                } );
        },

        getMyBalances ( {
            commit,
            dispatch
        } )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getMyBalances,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    // console.log( response.data );
                    if ( response.data.status === 200 )
                    {
                        commit( "setMyBalances", response.data.data );
                    }
                } );
        },

        createNewCurrency ( {
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
                url: createNewCurrency,
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
                    }

                    if ( mAuthData.status === 400 )
                    {
                        dispatch( 'signOut' )
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

        setActivePaymentMethod ( {
            commit,
            dispatch
        }, paymentMethod )
        {
            commit( 'setActivePaymentMethod', paymentMethod );
        },

        deleteActiveCurrency ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteActiveCurrency + '/' + code,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
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

        addNewPaymentMethodCurrencyTariff ( {
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
                url: addNewPaymentMethodCurrencyTariff,
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
                    }

                    if ( mAuthData.status === 400 )
                    {
                        dispatch( 'signOut' )
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

        updatePaymentMethodCurrencyTariff ( {
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
                url: updatePaymentMethodCurrencyTariff,
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
                    }

                    if ( mAuthData.status === 400 )
                    {
                        dispatch( 'signOut' )
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

        deletePaymentMethodCurrencyTariffs ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deletePaymentMethodCurrencyTariffs + code,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    let authData = response.data;
                    if ( authData.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: authData.message
                        } );
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        fetchPaymentMethodCurrencyTariffs ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchPaymentMethodCurrencyTariffs + code,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    let authData = response.data;
                    if ( authData.status === 200 )
                    {
                        commit( "setPaymentMethodCurrencyTariffs", authData.data );
                    } else
                    {
                        //console.log( authData )
                        commit( 'setError', authData.message )
                        setTimeout( () =>
                        {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },

        updatePaymentMethodTariffConfig ( {
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
                url: updatePaymentMethodTariffConfig,
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

        updatePaymentMethodCurrencyConfig ( {
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
                url: updatePaymentMethodCurrencyConfig,
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

        updatePaymentMethodConfig ( {
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
                url: updatePaymentMethodConfig,
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
                    }

                    if ( mAuthData.status === 400 )
                    {
                        dispatch( 'signOut' )
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

        updateCurrencyLocationConfig ( {
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
                url: updateCurrencyLocationConfig,
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
                    }
                } );
        },

        updatePaymentMethodLocationConfig ( {
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
                url: updatePaymentMethodLocationConfig,
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
                    }

                    if ( mAuthData.status === 400 )
                    {
                        dispatch( 'signOut' )
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

        fetchRequestToPayRequest ( {
            commit,
            dispatch
        }, token )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getRequestToPayRequest + token,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    // console.log( response.data );
                    if ( response.data.status === 200 )
                    {
                        commit( "setRequestToPayRequest", response.data.data );
                        commit( "setRequestToPayRequestComplete", response.data.data.status !== "CREATED" ? true : false );
                    }
                } );
        },

        payWithMyWallet ( {
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
                url: payWithMyWallet,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    // console.log( response.data );
                    if ( response.data.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: response.data.data.message
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
                } );
        },

        payWithPaymentGateway ( {
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
                url: payWithPaymentGateway,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response =>
                {
                    // console.log( response.data );
                    if ( response.data.status === 200 )
                    {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: response.data.data.message
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
                } );
        },
    }
}

export default paymentMethods;
