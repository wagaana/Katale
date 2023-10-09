import {
    get_crypto_assets,
    addnewCryptoAsset,
    get_my_crypto_address_info,
    getCryptoIntradayStockHistoryData
}
from '../../utils/constants'

const banks = {
    state: {
        cryptoAssets: [],
        cryptoAddressInfo: {},
        cryptoIntradayStockHistoryData: {},
    },

    getters: {
        getCryptoAssets: state => state.cryptoAssets,
        getMyCryptoAddressInfo: state => state.cryptoAddressInfo,
        getCryptoIntradayStockHistoryData: state => state.cryptoIntradayStockHistoryData,
    },

    mutations: {

        setCryptoAssets( state, payload ) {
            state.cryptoAssets = payload
        },

        setMyCryptoAddressInfo( state, payload ) {
            state.cryptoAddressInfo = payload
        },

        setCryptoIntradayStockHistoryData( state, payload ) {
            state.cryptoIntradayStockHistoryData = payload
        },
    },

    actions: {
        fetchCryptoAssets( {
            commit,
            dispatch
        }, bank ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: get_crypto_assets,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const payAuthData = response.data;
                    console.log( "setCryptoAssets", payAuthData.data );
                    if ( payAuthData.status === 200 ) {
                        commit( "setCryptoAssets", payAuthData.data );
                    }
                } );
        },

        fetchCryptoIntradayStockHistoryData( {
            commit,
            dispatch
        }, currencyCode ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getCryptoIntradayStockHistoryData + currencyCode,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const payAuthData = response.data;
                    if ( payAuthData.status === 200 ) {
                        const metaData=payAuthData['metaData'];
                        const timeSeriesCryptoData=payAuthData['timeSeriesCryptoData'];

                        const candlestickData = [];

                        timeSeriesCryptoData.forEach(function (value) {
                            const candlestick = {
                                x: new Date(value.mTime),
                                y: [value.open, value.high, value.low, value.close],
                            }
                            candlestickData.push(candlestick);
                        });


                        const payload = [
                            {
                            data: candlestickData,
                            },
                        ];

                        const chartOptions = {
                          chart: {
                            type: "candlestick",
                            height: 350,
                          },
                          title: {
                            text: metaData.marketCode+"/"+metaData.digitalCurrencyCode+" Intraday",
                            align: "left",
                          },
                          xaxis: {
                            type: "datetime",
                          },
                          yaxis: {
                            tooltip: {
                              enabled: true,
                            },
                          },
                        };
                        
                        commit( "setCryptoIntradayStockHistoryData", {options: chartOptions, series: payload} );
                    }
                } );
        },

        get_my_crypto_address_info( {
            commit,
            dispatch
        }, asset ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: get_my_crypto_address_info + asset,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const payAuthData = response.data;
                    console.log( "setMyCryptoAddressInfo", payAuthData.data );
                    if ( payAuthData.status === 200 ) {
                        commit( "setMyCryptoAddressInfo", payAuthData.data );
                    }
                } );
        },

        addnewCryptoAsset( {
            commit,
            dispatch
        }, payload ) {
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            const formData = new FormData();
            for ( const [ key, value ] of Object.entries( payload ) ) {
                formData.append( key, value );
            }

            var config = {
                method: 'post',
                url: addnewCryptoAsset,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    const mAuthData = response.data;
                    if ( mAuthData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: mAuthData.message
                        } );
                    }

                    if ( mAuthData.status === 400 ) {
                        dispatch( 'signOut' )
                    } else {
                        commit( 'setError', mAuthData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                    }
                } );
        },
    }
}

export default banks;
