import
{
  submitServicePoint,
  fetchAllServicePoints,
  fetchServicePointDetails,
  sendServicePointGalleryImage,
  places_api_key,
}
  from '../../utils/constants'

const servicePoints = {
  state: {
    myServicePints: [],
    activeCompany: {},
    myServicePointDetails: {},
  },

  getters: {
    getMyServicePints: state => state.myServicePints,
    getActiveCompany: state => state.activeCompany,
    myServicePointDetails: state => state.myServicePointDetails,
  },

  mutations: {
    addAllServicePoints ( state, payload )
    {
      state.myServicePints = payload;
    },
    addActiveCompany ( state, payload )
    {
      state.activeCompany = payload;
    },
    addServicePointDetails ( state, payload )
    {
      state.myServicePointDetails = payload;
    },
  },

  actions: {
    submitServicePoint ( {
      commit,
      dispatch
    }, payload )
    {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch( `https://maps.googleapis.com/maps/api/geocode/json?place_id=${ payload.data.place_id }&key=${ places_api_key }`, requestOptions )
        .then( response => response.text() )
        .then( response =>
        {
          const respJson = JSON.parse( response );
          payload.latitude = respJson.results[ 0 ].geometry.location.lat;
          payload.longitude = respJson.results[ 0 ].geometry.location.lng;
          payload.address = respJson.results[ 0 ].formatted_address;
          console.log( respJson );

          console.log( "payload", payload );

          const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

          const formData = new FormData();
          for ( const [ key, value ] of Object.entries( payload ) )
          {
            formData.append( key, value );
          }

          var config = {
            method: 'post',
            url: submitServicePoint,
            headers: {
              'Authorization': 'Bearer ' + currentAuthData.access_token
            },
            data: formData
          };

          axios( config )
            .then( response =>
            {
              const authData = response.data;
              if ( response.status === 200 )
              {
                dispatch( "fireMessageAlert", {
                  type: "success",
                  title: "Success",
                  body: 'Service Point Has Been Submited'
                } );
                console.log( "registerServicePoint", authData );
              }
            } );
        } )
        .catch( error =>
        {
          console.log( 'error', error )
        } );
    },

    fetchAllServicePoints ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchAllServicePoints,
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
            commit( "addAllServicePoints", authData.data );
          }
        } );
    },

    fetchServicePointDetails ( {
      commit,
      dispatch
    }, servicePointId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchServicePointDetails + servicePointId,
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
            commit( "addServicePointDetails", authData.data );
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

    updateServicePointConfig ( {
      commit,
      dispatch
    }, payload )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      let formData = new FormData();
      formData.append( 'action', "updateServicePointConfig" );
      for ( const [ key, value ] of Object.entries( payload ) )
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
          const authData = response.data;
          if ( authData.status === 200 )
          {
            dispatch( "fireMessageAlert", {
              type: "success",
              title: "Success",
              body: authData.message
            } );
            commit( "setUpdatingStatus", false );
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

    sendServicePointGalleryImage ( {
      commit,
      dispatch
    }, formData )
    {
      commit( "setUpdatingStatus", true );
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'post',
        url: sendServicePointGalleryImage,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token,
        },
        data: formData
      };

      axios( config )
        .then( response =>
        {
          console.log( "response: ", response.data );
          const templateData = response.data;
          if ( templateData.status === 200 )
          {
            dispatch( "fireMessageAlert", {
              type: "success",
              title: "Success",
              body: templateData.message
            } );
            commit( "setUpdatingStatus", false );
          }
        } );
    }
  }
};

export default servicePoints;
