import AuthRequired from "../utils/AuthRequired";
import AdminAuthRequired from "../utils/AdminAuthRequired";

export default [ {
    path: "/",
    component: () => import( "../views/LandingPage.vue" ),
}, {
    path: "/admin",
    component: () => import( "../views/Application.vue" ),
    redirect: "/admin/home",
    beforeEnter: AdminAuthRequired,

    children: [ {
        path: "/admin/home",
        component: () => import( "../views/dashboard/Admin.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/customers',
        component: () => import( "../views/dashboard/Customers.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/customers/:userId',
        component: () => import( "../views/dashboard/CustomerProfile.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: "/admin/paymentMethods",
        component: () => import( "../views/dashboard/PaymentMethods.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: "/admin/paymentMethods/:code",
        component: () => import( "../views/dashboard/PaymentMethod.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: "/admin/paymentMethods/:code/:currencyCode",
        component: () => import( "../views/dashboard/PaymentMethodCurrency.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: "/admin/suportedBanks",
        component: () => import( "../views/dashboard/SuportedBanks.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: "/admin/suportedBanks/:code",
        component: () => import( "../views/dashboard/Bank.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: "/admin/suportedBanks/:code/:currencyCode",
        component: () => import( "../views/dashboard/BankCurrency.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: "/admin/paymentMethod",
        component: () => import( "../views/dashboard/PaymentMethod.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: "/admin/cryptoAssets",
        component: () => import( "../views/dashboard/CryptoAssets.vue" ),
        beforeEnter: AdminAuthRequired,
    },
    {
        path: '/admin/marketingCampaigns/createTemplate',
        component: () => import( "../views/dashboard/campaigns/CreateTemplate.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/marketingCampaigns/createCampaignTarget',
        component: () => import( "../views/dashboard/campaigns/CreateCampaignTarget.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/marketingCampaigns/createCampaignOffer',
        component: () => import( "../views/dashboard/campaigns/CreateCampaignOffer.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/marketingCampaigns/viewCampaignOffer',
        component: () => import( "../views/dashboard/campaigns/ViewCampaignOffer.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/marketingCampaigns/createCampaign',
        component: () => import( "../views/dashboard/campaigns/CreateCampaign.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/promoCodes',
        component: () => import( "../views/dashboard/campaigns/PromoCodes.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/ccInbox',
        component: () => import( "../views/dashboard/customerCare/Inbox.vue" ),
        redirect: "/admin/ccInbox/ccChatPlaceHolder",
        beforeEnter: AdminAuthRequired,

        children: [ {
            path: '/admin/ccInbox/ccChatPlaceHolder',
            component: () => import( "../views/dashboard/customerCare/ChatPlaceHolder.vue" ),
            beforeEnter: AdminAuthRequired,
        }, {
            path: '/admin/ccInbox/ccChat',
            component: () => import( "../views/dashboard/customerCare/Chat.vue" ),
            beforeEnter: AdminAuthRequired,
        }, ]
    }, {
        path: '/admin/requests',
        component: () => import( "../views/dashboard/transactions/Requests.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/requests/:id',
        component: () => import( "../views/dashboard/transactions/RequestsDetails.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/translations',
        component: () => import( "../views/dashboard/Translations.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/marketingCampaigns',
        component: () => import( "../views/dashboard/campaigns/MarketingCampaigns.vue" ),
        beforeEnter: AdminAuthRequired,
        redirect: "/admin/marketingCampaigns/campaigns",

        children: [ {
            path: '/admin/marketingCampaigns/campaignTemplates',
            component: () => import( "../views/dashboard/campaigns/CampaignTemplates.vue" ),
            beforeEnter: AdminAuthRequired,
        }, {
            path: '/admin/marketingCampaigns/campaignTargets',
            component: () => import( "../views/dashboard/campaigns/CampaignTargets.vue" ),
            beforeEnter: AdminAuthRequired,
        }, {
            path: '/admin/marketingCampaigns/campaigns',
            component: () => import( "../views/dashboard/campaigns/Campaigns.vue" ),
            beforeEnter: AdminAuthRequired,
        }, {
            path: '/admin/marketingCampaigns/campaignOffers',
            component: () => import( "../views/dashboard/campaigns/CampaignOffers.vue" ),
            beforeEnter: AdminAuthRequired,
        }, ]
    }, {
        path: "/admin/settings",
        component: () => import( "../views/dashboard/Settings.vue" ),
        beforeEnter: AdminAuthRequired,
        redirect: "/admin/settings/generalSettings",

        children: [ {
            path: "/admin/settings/sysUsers",
            component: () => import( "../views/dashboard/settings/SysUsers.vue" ),
            beforeEnter: AdminAuthRequired,
        }, {
            path: "/admin/settings/createServicePoint",
            component: () => import( "../views/dashboard/settings/CreateServicePoint.vue" ),
            beforeEnter: AdminAuthRequired,
        },
        {
            path: "/admin/settings/generalSettings",
            component: () => import( "../views/dashboard/settings/GeneralSettings.vue" ),
            beforeEnter: AdminAuthRequired,
        },
        {
            path: "/admin/settings/myServicePoints",
            component: () => import( "../views/dashboard/settings/MyServicePoints.vue" ),
            beforeEnter: AdminAuthRequired,
        },
        {
            path: "/admin/settings/suportedCountries",
            component: () => import( "../views/dashboard/settings/SuportedCountries.vue" ),
            beforeEnter: AdminAuthRequired,
        },
        {
            path: "/admin/settings/suportedCurrencies",
            component: () => import( "../views/dashboard/settings/SuportedCurrencies.vue" ),
            beforeEnter: AdminAuthRequired,
        },
        ],
    }, {
        path: "/admin/settings/suportedCurrencies/:code",
        component: () => import( "../views/dashboard/settings/Currency.vue" ),
        beforeEnter: AdminAuthRequired,
    }, {
        path: '/admin/settings/myServicePoints/:id',
        component: () => import( "../views/dashboard/settings/ServicePoint.vue" ),
        beforeEnter: AdminAuthRequired,
    },
    ]
}, {
    path: "/profileSettings",
    component: () => import( "../views/customer/ProfileSettings.vue" ),
    beforeEnter: AuthRequired,
    meta: {
        title: 'My Profile'
    }
}, {
    path: "/userPublicProfile",
    component: () => import( "../views/customer/UserPublicProfile.vue" ),
    beforeEnter: AuthRequired,
    meta: {
        title: 'User Profile'
    }
}, {
    path: '/inbox',
    component: () => import( "../views/customer/messaging/Inbox.vue" ),
    redirect: "/messages",
    beforeEnter: AuthRequired,

    children: [ {
        path: '/messages',
        component: () => import( "../views/customer/messaging/ChatPlaceHolder.vue" ),
        beforeEnter: AuthRequired,
        meta: {
            title: 'Messages'
        }
    }, {
        path: '/chat',
        component: () => import( "../views/customer/messaging/Chat.vue" ),
        beforeEnter: AuthRequired,
        meta: {
            title: 'Chat'
        }
    }, ]
}, {
    path: '/client',
    component: () => import( "../views/customer/Client.vue" ),
    redirect: "/home",

    children: [ {
        path: '/home',
        component: () => import( "../views/customer/Home.vue" ),
        beforeEnter: AuthRequired,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/api_reference',
        component: () => import( "../views/customer/documentation/ApiReference.vue" ),
        redirect: "/api_reference/requestToPay",
        meta: {
            title: 'API reference'
        },

        children: [ {
            path: '/api_reference/requestToPay',
            component: () => import( "../views/customer/documentation/RequestToPay.vue" ),
        }, {
            path: '/api_reference/request_status',
            component: () => import( "../views/customer/documentation/RequestStatus.vue" ),
        }, ]
    },
    {
        path: '/userRequestDetails',
        component: () => import( "../views/customer/UserRequestDetails.vue" ),
        beforeEnter: AuthRequired,
        meta: {
            title: 'Request'
        },
    }, ]
}, {
    path: "/privacy_policy",
    component: () => import( "../views/PrivacyPolicy.vue" ),
    meta: {
        title: 'Privacy Policy'
    },
}, {
    path: "/payments/:token",
    component: () => import( "../views/ApiPayment.vue" ),
    meta: {
        title: 'Approve Payment'
    },
}, {
    path: "/login",
    component: () => import( "../views/user/Login.vue" ),
    meta: {
        title: 'Login'
    },
}, {
    path: "/register",
    component: () => import( "../views/user/Register.vue" ),
    meta: {
        title: 'Register'
    },
}, {
    path: '/passwordSettings',
    component: () => import( "../views/user/PasswordSettings.vue" ),
    beforeEnter: AuthRequired,
    meta: {
        title: 'Password Settings'
    },
}, {
    path: "/forgotPassword",
    component: () => import( "../views/user/ForgotPassword.vue" ),
    meta: {
        title: 'Forgot Password'
    },
}, {
    path: "/authHandler",
    component: () => import( "../views/user/AuthHandler.vue" ),
    meta: {
        title: 'Auth'
    },
}, {
    path: "*",
    component: () => import( "../views/Error.vue" ),
    meta: {
        title: 'Error'
    },
}, ]
