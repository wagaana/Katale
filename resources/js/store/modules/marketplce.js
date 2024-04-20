import
{
  places_api_key,
  submitShopingCategory,
  loadShopingCategories,
  loadShopingMainAndParentCategories,
  deleteShopingCategory,
  submitShopingBrand,
  loadShopingBrands,
  deleteShopingBrand,
  submitShopingAttributeSet,
  loadShopingAttributeSets,
  deleteShopingAttributeSet,
  submitSpecification,
  loadSpecifications,
  deleteSpecification,
  submitProduct,
  loadProducts,
  loadProductDetails,
  deleteProduct,
  submitProductPhoto,
  deleteProductPhoto,
  submitShopingProductAttributeOption,
  loadProductAttributes,
  deleteProductAttribute,
  submitShopingProductSpecification,
  loadShopingProductSpecifications,
  submitShoppingProductDiscussion,
  getShoppingProductDiscussions,
  submitShoppingProductDiscussionReply,
  switchProduuctFeaturedStatus,
  getShoppingCategory,
  getShopingSubCategories,
  loadCategoryProducts,
  switchCategoryFeaturedStatus,
  submitCollectionPoint,
  sendCollectionPointGalleryImage,
  fetchAllCollectionPoints,
  fetchCollectionPointDetails,
  fetchCollectionPointAdmins,
  fetchNearestCollectionPoints,
  fetchNearestCollectionPoint,
  getShoppingCollectionPointGallery,
  submitSliderImage,
  fetchSliderImages,
  deleteSliderImage,
  submitCamaignsBanner,
  fetchCamaignsBanner,
  submitState,
  fetchStates,
  deleteState,
  submitCity,
  fetchCities,
  deleteCity,
  submitPackageType,
  deletePackageType,
  loadPackageTypes,
}
  from '../../utils/constants';

const marketplce = {

  state: {
    shopingCategories: [],
    shopingMainAndParentCategories: [],
    shopingBrands: [],
    shopingAttributeSets: [],
    specifications: [],
    products: [],
    productDetails: {},
    productAttributes: [],
    shopingProductSpecifications: [],
    shoppingProductDiscussions: [],
    shoppingCategory: {},
    shopingSubCategories: [],
    myCollectionPointDetails: {},
    myCollectionPoints: [],
    collectionPointAdmins: [],
    sliderImages: [],
    camaignsBanner: {},
    states: [],
    cities: [],
    packageTypes: [],
  },

  getters: {
    getShopingCategories: state => state.shopingCategories,
    getShopingMainAndParentCategories: state => state.shopingMainAndParentCategories,
    getShopingBrands: state => state.shopingBrands,
    getShopingAttributeSets: state => state.shopingAttributeSets,
    getSpecifications: state => state.specifications,
    getProducts: state => state.products,
    getProductDetails: state => state.productDetails,
    getProductAttributes: state => state.productAttributes,
    getShopingProductSpecifications: state => state.shopingProductSpecifications,
    getShoppingProductDiscussions: state => state.shoppingProductDiscussions,
    getShoppingCategory: state => state.shoppingCategory,
    getShopingSubCategories: state => state.shopingSubCategories,
    getCollectionPointDetails: state => state.myCollectionPointDetails,
    getCollectionPoints: state => state.myCollectionPoints,
    getCollectionPointAdmins: state => state.collectionPointAdmins,
    getSliderImages: state => state.sliderImages,
    getCamaignsBanner: state => state.camaignsBanner,
    getStates: state => state.states,
    getCities: state => state.cities,
    getPackageTypes: state => state.packageTypes,
  },

  mutations: {
    addShopingCategories ( state, payload )
    {
      state.shopingCategories = payload
    },

    addShopingMainAndParentCategories ( state, payload )
    {
      state.shopingMainAndParentCategories = payload
    },

    addShopingBrands ( state, payload )
    {
      state.shopingBrands = payload
    },

    addShopingAttributeSets ( state, payload )
    {
      state.shopingAttributeSets = payload
    },

    addSpecifications ( state, payload )
    {
      state.specifications = payload
    },

    addProducts ( state, payload )
    {
      state.products = payload
    },

    addProductDetails ( state, payload )
    {
      state.productDetails = payload
    },

    addProductAttributes ( state, payload )
    {
      state.productAttributes = payload
    },

    addShopingProductSpecifications ( state, payload )
    {
      state.shopingProductSpecifications = payload
    },

    addShoppingProductDiscussions ( state, payload )
    {
      state.shoppingProductDiscussions = payload
    },

    setShoppingCategory ( state, payload )
    {
      state.shoppingCategory = payload
    },

    setShopingSubCategories ( state, payload )
    {
      state.shopingSubCategories = payload
    },
    addCollectionPointDetails ( state, payload )
    {
      state.myCollectionPointDetails = payload;
    },
    addAllCollectionPoints ( state, payload )
    {
      state.myCollectionPoints = payload;
    },

    addCollectionPointAdmins ( state, payload )
    {
      state.collectionPointAdmins = payload;
    },

    addSliderImages ( state, payload )
    {
      state.sliderImages = payload;
    },

    addCamaignsBanner ( state, payload )
    {
      state.camaignsBanner = payload;
    },

    addStates ( state, payload )
    {
      state.states = payload;
    },

    addCities ( state, payload )
    {
      state.cities = payload;
    },

    addPackageTypes ( state, payload )
    {
      state.packageTypes = payload;
    },
  },

  actions: {
    submitShopingCategory ( {
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
        url: submitShopingCategory,
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

    loadShopingCategories ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadShopingCategories,
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
            commit( "addShopingCategories", payAuthData.data );
          }
        } );
    },

    loadShopingMainAndParentCategories ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadShopingMainAndParentCategories,
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
            commit( "addShopingMainAndParentCategories", payAuthData.data );
          }
        } );
    },

    deleteShopingCategory ( {
      commit,
      dispatch
    }, categoryId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteShopingCategory + categoryId,
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

    submitShopingBrand ( {
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
        url: submitShopingBrand,
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

    loadShopingBrands ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadShopingBrands,
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
            commit( "addShopingBrands", payAuthData.data );
          }
        } );
    },

    deleteShopingBrand ( {
      commit,
      dispatch
    }, brandId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteShopingBrand + brandId,
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

    submitShopingAttributeSet ( {
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
        url: submitShopingAttributeSet,
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

    loadShopingAttributeSets ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadShopingAttributeSets,
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
            commit( "addShopingAttributeSets", payAuthData.data );
          }
        } );
    },

    deleteShopingAttributeSet ( {
      commit,
      dispatch
    }, attributeId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteShopingAttributeSet + attributeId,
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

    submitSpecification ( {
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
        url: submitSpecification,
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

    loadSpecifications ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadSpecifications,
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
            commit( "addSpecifications", payAuthData.data );
          }
        } );
    },

    deleteSpecification ( {
      commit,
      dispatch
    }, specificationId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteSpecification + specificationId,
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

    submitProduct ( {
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
        url: submitProduct,
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

    loadProducts ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadProducts,
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
            commit( "addProducts", payAuthData.data );
          }
        } );
    },

    loadProductDetails ( {
      commit,
      dispatch
    }, productId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadProductDetails + productId,
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
            commit( "addProductDetails", payAuthData.data );
          }
        } );
    },

    deleteProduct ( {
      commit,
      dispatch
    }, productId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteProduct + productId,
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

    submitProductPhoto ( {
      commit,
      dispatch
    }, formData )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'post',
        url: submitProductPhoto,
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

    deleteProductPhoto ( {
      commit,
      dispatch
    }, formData )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'post',
        url: deleteProductPhoto,
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

    submitShopingProductAttributeOption ( {
      commit,
      dispatch
    }, formData )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'post',
        url: submitShopingProductAttributeOption,
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

    loadProductAttributes ( {
      commit,
      dispatch
    }, productId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadProductAttributes + productId,
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
            commit( "addProductAttributes", payAuthData.data );
          }
        } );
    },

    deleteProductAttribute ( {
      commit,
      dispatch
    }, attributeId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteProductAttribute + attributeId,
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

    submitShopingProductSpecification ( {
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
        url: submitShopingProductSpecification,
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

    loadShopingProductSpecifications ( {
      commit,
      dispatch
    }, productId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadShopingProductSpecifications + productId,
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
            commit( "addShopingProductSpecifications", payAuthData.data );
          }
        } );
    },

    submitShoppingProductDiscussion ( {
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
        url: submitShoppingProductDiscussion,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
      };

      axios( config )
        .then( response =>
        {
          const mAuthData = response.data;
          const status = response.status;
          if ( status === 200 )
          {
            dispatch( "fireMessageAlert", {
              type: "success",
              title: "Success",
              body: 'New Category has been added'
            } );
          }

          if ( status === 400 )
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

    fetchShoppingProductDiscussions ( {
      commit,
      dispatch
    }, productId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: getShoppingProductDiscussions + productId,
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
            commit( "addShoppingProductDiscussions", payAuthData.data );
          }
        } );
    },

    submitShoppingProductDiscussionReply ( {
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
        url: submitShoppingProductDiscussionReply,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
      };

      axios( config )
        .then( response =>
        {
          const mAuthData = response.data;
          console.log( "submitShoppingProductDiscussionReply", mAuthData )
          const status = response.status;
          if ( status === 200 )
          {
            dispatch( "fireMessageAlert", {
              type: "success",
              title: "Success",
              body: 'New Category has been added'
            } );
          }

          if ( status === 400 )
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

    switchProduuctFeaturedStatus ( {
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
        url: switchProduuctFeaturedStatus,
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
      };

      axios( config )
        .then( response =>
        {
          const mAuthData = response.data;
          const status = response.status;
          if ( status === 200 )
          {
            dispatch( "fireMessageAlert", {
              type: "success",
              title: "Success",
              body: 'Produuct Featured Status Changed'
            } );
          }
        } );
    },

    fetchShoppingCategory ( {
      commit,
      dispatch
    }, categoryId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: getShoppingCategory + categoryId,
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
            commit( "setShoppingCategory", payAuthData.data );
          }
        } );
    },

    fetchShopingSubCategories ( {
      commit,
      dispatch
    }, categoryId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: getShopingSubCategories + categoryId,
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
            commit( "setShopingSubCategories", payAuthData.data );
          }
        } );
    },

    loadCategoryProducts ( {
      commit,
      dispatch
    }, categoryId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadCategoryProducts + categoryId,
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
            commit( "addProducts", payAuthData.data );
          }
        } );
    },

    switchCategoryFeaturedStatus ( {
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
        url: switchCategoryFeaturedStatus,
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
      };

      axios( config )
        .then( response =>
        {
          const mAuthData = response.data;
          const status = response.status;
          if ( status === 200 )
          {
            dispatch( "fireMessageAlert", {
              type: "success",
              title: "Success",
              body: 'Category Featured Status Changed'
            } );
          }
        } );
    },

    submitCollectionPoint ( {
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
            url: submitCollectionPoint,
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
              }
            } );
        } )
        .catch( error =>
        {
          console.log( 'error', error )
        } );
    },

    fetchAllCollectionPoints ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchAllCollectionPoints,
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
            commit( "addAllCollectionPoints", authData.data );
          }
        } );
    },

    fetchCollectionPointDetails ( {
      commit,
      dispatch
    }, collectionPointId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchCollectionPointDetails + collectionPointId,
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
            commit( "addCollectionPointDetails", authData.data );
          }
        } );
    },

    sendCollectionPointGalleryImage ( {
      commit,
      dispatch
    }, formData )
    {
      commit( "setUpdatingStatus", true );
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'post',
        url: sendCollectionPointGalleryImage,
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
    },

    fetchCollectionPointAdmins ( {
      commit,
      dispatch
    }, collectionPointId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchCollectionPointAdmins + collectionPointId,
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
            commit( "addCollectionPointAdmins", authData.data );
          }
        } );
    },

    submitSliderImage ( {
      commit,
      dispatch
    }, formData )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'post',
        url: submitSliderImage,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
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
              body: 'Image Has Been Submited'
            } );
          }
        } );
    },

    fetchSliderImages ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchSliderImages,
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
            commit( "addSliderImages", payAuthData.data );
          }
        } );
    },

    deleteSliderImage ( {
      commit,
      dispatch
    }, fileId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteSliderImage + fileId,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: {}
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

    submitCamaignsBanner ( {
      commit,
      dispatch
    }, formData )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'post',
        url: submitCamaignsBanner,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
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
              body: 'Camaigns Banner Has Been Submited'
            } );
          }
        } );
    },

    fetchCamaignsBanner ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchCamaignsBanner,
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
            commit( "addCamaignsBanner", payAuthData.data );
          }
        } );
    },

    submitState ( {
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
        url: submitState,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
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
              body: 'Camaigns Banner Has Been Submited'
            } );
          }
        } );
    },

    fetchStates ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchStates,
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
            commit( "addStates", payAuthData.data );
          }
        } );
    },

    deleteState ( {
      commit,
      dispatch
    }, stateId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteState + stateId,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: {}
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

    submitCity ( {
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
        url: submitCity,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
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
              body: 'Camaigns Banner Has Been Submited'
            } );
          }
        } );
    },

    fetchCities ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: fetchCities,
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
            commit( "addCities", payAuthData.data );
          }
        } );
    },

    deleteCity ( {
      commit,
      dispatch
    }, cityId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deleteCity + cityId,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: {}
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

    submitPackageType ( {
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
        url: submitPackageType,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: formData
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
              body: 'Camaigns Banner Has Been Submited'
            } );
          } else
          {
            commit( 'setError', mAuthData.message )
            setTimeout( () =>
            {
              commit( 'clearError' )
            }, 3000 );
          }
        } )
        .catch( error =>
        {
          console.log( 'error', error )
        } );
    },

    loadPackageTypes ( {
      commit,
      dispatch
    } )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'get',
        url: loadPackageTypes,
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
            commit( "addPackageTypes", payAuthData.data );
          }
        } )
        .catch( error =>
        {
          console.log( 'error', error )
        } );
    },

    deletePackageType ( {
      commit,
      dispatch
    }, packageTypeId )
    {
      const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

      var config = {
        method: 'delete',
        url: deletePackageType + packageTypeId,
        headers: {
          'Authorization': 'Bearer ' + currentAuthData.access_token
        },
        data: {}
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
        } )
        .catch( error =>
        {
          console.log( 'error', error )
        } );
    },
  },
}

export default marketplce;
