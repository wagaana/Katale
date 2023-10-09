export default ( to, from, next ) => {
    if ( localStorage.getItem( 'authData' ) != null && localStorage.getItem( 'authData' ).length > 0 ) {
        // verify with the server
        next()
    } else {
        localStorage.removeItem( 'authData' )
        next( '/login' )
    }
}
