import {
    fetchNewMessages,
    fetchChatConversation,
    getCustomerServiceChats,
    getCustomerCareChatGroupId,
    sendStringMessage,
    sendFile,
    getUserChatID,
    checkFriendshipStatus,
    fetchCustomerFriends,
    getChats,
    createNewFriend,
    getChatDetails,
}
from '../../utils/constants'

const chat = {

    state: {
        isLoadContacts: false,
        isLoadConversations: false,
        error: '',
        contacts: null,
        chatID: null,
        customerCareChatGroupId: null,
        contactsSearchResult: null,
        conversations: [],
        selectedContacts: [],
        chats: [],
        customerServiceChats: [],
        newMessages: [],
        friendChatConversationMedia: [],
        customerFriends: [],
        chatDetails: {},
        friendData: {}
    },

    getters: {
        isLoadContacts: state => state.isLoadContacts,
        isLoadConversations: state => state.isLoadConversations,
        error: state => state.error,
        contacts: state => state.contacts,
        conversations: state => state.conversations,
        contactsSearchResult: state => state.contactsSearchResult,
        selectedContacts: state => state.selectedContacts,
        getChats: state => state.chats,
        getCustomerServiceChats: state => state.customerServiceChats,
        getNewMessages: state => state.newMessages,
        getChatDetails: state => state.chatDetails,
        getFriendData: state => state.friendData,
        getFriendChatConversationMedia: state => state.friendChatConversationMedia,
        getChatID: state => state.chatID,
        getCustomerCareChatGroupId: state => state.customerCareChatGroupId,
        getCustomerFriends: state => state.customerFriends,
    },

    mutations: {
        getContactsSuccess( state, payload ) {
            state.isLoadContacts = true
            state.contacts = payload.contacts
            state.contactsSearchResult = payload.contacts
        },
        getContactsSearchSuccess( state, payload ) {
            state.contactsSearchResult = payload.contacts
        },
        getContactsError( state, error ) {
            state.isLoadContacts = false
            state.error = error
        },
        setChatConversation( state, payload ) {
            state.isLoadConversations = true
            state.conversations = payload
        },
        setFriendChatConversationMedia( state, payload ) {
            state.isLoadConversations = true
            state.friendChatConversationMedia = payload
        },
        setChatID( state, payload ) {
            state.isLoadConversations = true
            state.chatID = payload
        },
        setCustomerCareChatGroupId( state, payload ) {
            state.isLoadConversations = true
            state.customerCareChatGroupId = payload
        },
        setFriendData( state, payload ) {
            state.friendData = payload
        },
        getConversationsError( state, error ) {
            state.isLoadConversations = false
            state.error = error
        },
        setChats( state, payload ) {
            state.chats = payload
        },
        setCustomerServiceChats( state, payload ) {
            state.customerServiceChats = payload
        },
        setNewMessages( state, payload ) {
            state.newMessages = payload
        },
        setChatDetails( state, payload ) {
            state.chatDetails = payload
        },
        setCustomerFriends( state, payload ) {
            state.customerFriends = payload
        }
    },

    actions: {
        blockUser( {
            commit,
            dispatch
        }, friendId ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( 'action', "blockUser" );
            formData.append( 'friendId', friendId );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    } else if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        unblockUser( {
            commit,
            dispatch
        }, friendId ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( 'action', "unblockUser" );
            formData.append( 'friendId', friendId );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    } else if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        createNewFriend( {
            commit,
            dispatch
        }, friendId ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( 'friendId', friendId );

            var config = {
                method: 'post',
                url: createNewFriend,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    } else if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        checkFriendshipStatus( {
            commit,
            dispatch
        }, friendId ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: checkFriendshipStatus + '/' + friendId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        console.log( "setFriendData", templateData.data );
                        commit( "setFriendData", templateData.data );
                    } else if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        getChatID( {
            commit,
            dispatch
        }, userId ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getUserChatID + '/' + userId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "setChatID", templateData.id );
                    } else if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        getCustomerCareChatGroupId( {
            commit,
            dispatch
        } ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getCustomerCareChatGroupId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "setCustomerCareChatGroupId", templateData.id );
                    } else if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        fetchFriendChatConversationMedia( {
            commit,
            dispatch
        }, chatId ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            let formData = new FormData();
            formData.append( 'action', "fetchFriendChatConversationMedia" );
            formData.append( 'chatId', chatId );

            var config = {
                method: 'post',
                url: apiUrl,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "setFriendChatConversationMedia", templateData.data );
                    } else if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        fetchChatConversation( {
            commit,
            dispatch
        }, payload ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchChatConversation + '/' + payload.chatId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "setChatConversation", templateData.data );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        getChatDetails( {
            commit,
            dispatch
        }, payload ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getChatDetails + '/' + payload.chatId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "setChatDetails", templateData.data );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        getChats( {
            commit,
            dispatch
        } ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getChats,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "setChats", templateData.data );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        fetchCustomerFriends( {
            commit,
            dispatch
        }, friendId ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchCustomerFriends + '/' + friendId,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "setCustomerFriends", templateData.data );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        getCustomerServiceChats( {
            commit,
            dispatch
        } ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: getCustomerServiceChats,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    console.log( "setCustomerServiceChats", templateData );
                    if ( templateData.status === 200 ) {
                        commit( "setCustomerServiceChats", templateData.data );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        fetchNewMessages( {
            commit,
            dispatch
        } ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'get',
                url: fetchNewMessages,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: {}
            };

            axios( config )
                .then( response => {
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        commit( "setNewMessages", templateData.data );
                    } else if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        sendMessage( {
            commit,
            dispatch
        }, formData ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'post',
                url: sendStringMessage,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        },

        sendFile( {
            commit,
            dispatch
        }, formData ) {
            commit( "setUpdatingStatus", true );
            const currentAuthData = localStorage.getItem( 'authData' ) != null ? JSON.parse( localStorage.getItem( 'authData' ) ) : null;

            var config = {
                method: 'post',
                url: sendFile,
                headers: {
                    'Authorization': 'Bearer ' + currentAuthData.access_token,
                },
                data: formData
            };

            axios( config )
                .then( response => {
                    console.log( "response: ", response.data );
                    const templateData = response.data;
                    if ( templateData.status === 200 ) {
                        dispatch( "fireMessageAlert", {
                            type: "success",
                            title: "Success",
                            body: templateData.message
                        } );
                        commit( "setUpdatingStatus", false );
                    }
                    if ( templateData.status === 400 ) {
                        dispatch( 'signOut' );
                        commit( 'setError', templateData.message );
                        setTimeout( () => {
                            commit( 'clearError' );
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    } else {
                        console.log( templateData )
                        commit( 'setError', templateData.message )
                        setTimeout( () => {
                            commit( 'clearError' )
                        }, 3000 );
                        commit( "setUpdatingStatus", false );
                    }
                } );
        }
    }
}

export default chat;
