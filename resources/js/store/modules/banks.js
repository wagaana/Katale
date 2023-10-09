import
{
    createBank,
    loadActiveBanks,
    loadAllBanks,
    fetchBank,
    fetchBankStatistics,
    createNewBankCurrency,
    loadBankCurencies,
    loadBankCurencyDetails,
    deleteActiveBankCurrency,
    updateBankConfig,
    updateBankLocationConfig,
    updateBankCurrencyConfig,

    addNewBankCurrencyTariff,
    fetchBankCurrencyTariffs,
    deleteBankCurrencyTariffs,
    updateBankCurrencyTariffConfig,
    updateBankCurrencyTariff,
}
    from '../../utils/constants';

const banks = {

    state: {
        activeBanks: [],
        allBanks: [],
        bank: {},
        bankStatistics: {},
        bankCurencies: [],
        activeBank: localStorage.getItem( 'activeBank' ) != null ? localStorage.getItem( 'activeBank' ) : null,
        bankCurencyDetails: {},
        bankCurrencyTariffs: [],
    },

    getters: {
        getActiveBanks: state => state.activeBanks,
        getAllBanks: state => state.allBanks,
        getActiveBank: state => state.activeBank,
        getBankCurencies: state => state.bankCurencies,
        getBank: state => state.bank,
        getBankStatistics: state => state.bankStatistics,
        getBankCurencyDetails: state => state.bankCurencyDetails,
        getBankCurrencyTariffs: state => state.bankCurrencyTariffs,
    },

    mutations: {

        addActiveBanks ( state, payload )
        {
            state.activeBanks = payload
        },

        addAllBanks ( state, payload )
        {
            state.allBanks = payload
        },

        addBank ( state, payload )
        {
            state.bank = payload
        },

        addBankStatistics ( state, payload )
        {
            state.bankStatistics = payload
        },

        setBankCurencies ( state, payload )
        {
            state.bankCurencies = payload
        },

        setActiveBank ( state, payload )
        {
            state.activeBank = payload
            localStorage.setItem( 'activeBank', payload )
        },

        setBankCurencyDetails ( state, payload )
        {
            state.bankCurencyDetails = payload
        },

        setBankCurrencyTariffs ( state, payload )
        {
            state.bankCurrencyTariffs = payload
        },
    },

    actions: {
        addNewBankCurrencyTariff ( {
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
                url: addNewBankCurrencyTariff,
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

        fetchBankCurrencyTariffs ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchBankCurrencyTariffs + code,
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
                        commit( "setBankCurrencyTariffs", authData.data );
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

        deleteBankCurrencyTariffs ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteBankCurrencyTariffs + code,
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

        updateBankCurrencyTariffConfig ( {
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
                url: updateBankCurrencyTariffConfig,
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

        updateBankCurrencyTariff ( {
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
                url: updateBankCurrencyTariff,
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

        loadBankCurencyDetails ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadBankCurencyDetails + code,
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
                        commit( "setBankCurencyDetails", payAuthData );
                    }
                } );
        },

        updateBankCurrencyConfig ( {
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
                url: updateBankCurrencyConfig,
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

        loadBankCurencies ( {
            commit,
            dispatch
        }, bank )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadBankCurencies + '/' + bank,
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
                        commit( "setBankCurencies", payAuthData.data );
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

        loadActiveBanks ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadActiveBanks,
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
                        commit( "addActiveBanks", authData.data );
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

        loadAllBanks ( {
            commit,
            dispatch
        }, userId )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: loadAllBanks,
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
                        commit( "addAllBanks", authData.data );
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

        fetchBank ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchBank + '/' + code,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response =>
                {
                    const authData = response.data;
                    console.log( 'fetchBank', authData );
                    if ( authData.status === 200 )
                    {
                        commit( "addBank", authData.data );
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

        fetchBankStatistics ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchBankStatistics + '/' + code,
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
                        commit( "addBankStatistics", authData.data );
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

        createBank ( {
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
                url: createBank,
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

        createNewBankCurrency ( {
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
                url: createNewBankCurrency,
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

        setActiveBank ( {
            commit,
            dispatch
        }, bank )
        {
            commit( 'setActiveBank', bank );
        },

        deleteActiveBankCurrency ( {
            commit,
            dispatch
        }, code )
        {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'delete',
                url: deleteActiveBankCurrency + '/' + code,
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

        updateBankConfig ( {
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
                url: updateBankConfig,
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

        updateBankLocationConfig ( {
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
                url: updateBankLocationConfig,
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
    }
}

export default banks;
