import {getUserProfile} from '../utils/constants';

export default ( to, from, next ) => {
    const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;
    if ( currentAuthData != null ) {
        // verify with api
        var config = {
            method: 'get',
            url: getUserProfile,
            headers: {
                'Authorization': 'Bearer ' + currentAuthData.access_token,
            },
            data: {}
        };

        axios( config )
            .then( response => {
                const authData = response.data;
                if (authData.level==2) {
                    next();
                } else {
                    next( '/home' );
                }
            } ).catch( err => {
                next( '/' );
            } );
    } else {
        next( '/login' );
    }
};
