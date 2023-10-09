export const uploads = '/'

export const mLogo = "assets/img/logo.png";
export const mMain = "assets/img/gps-tracking-logistics.jpg";
export const mSub_main = "assets/img/app-track.png";
export const mSocial_cover = "assets/img/neural-net.jpg";
export const folder_logo = "assets/img/folder.png";
export const mastercard = "assets/img/mastercard.png";

export const PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\n" +
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtbeGBsGPJj3JKcR90Uci" +
    "IEcJNZU+10oIJd7IrnrURb8bwlu7B76nxAgmyxxoeargfWfU3vU4pIY56F1VzbuV" +
    "LAD73JiCkEwojL71DCOnAadRmtF1awyxBZ89nXfIS9d5tPBF1m98eZ91lutq+MW5" +
    "43xlUkaniooRA2iCQRix1Fd8P4Fo5QMY5VPEiQ09EzTX38f9kzzwg0S5acW6RVYg" +
    "G+9n0UGm7bOJZuUfMriwyxIzR7RWCCcbRVGSheO3zJDk52kcIB0TRnqjq0p8Ky8q" +
    "wnBBErXUvoPw/bQolEvRubVge9PwRyV2DlHpNuOZxU559XFKoQTxQXlhnlxXu2Ww" +
    "hQIDAQAB" +
    "\n-----END PUBLIC KEY-----";

export const places_api_key = 'AIzaSyDHh_dyZ6V2jgWxtREVQ5KqUt1V1oaBrqg'

export const escapeHtml = ( text ) =>
{
    var map = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'"
    };
    return text.replace( /&amp;|&lt;|&gt;|&quot;|&#039;/g, function ( m )
    {
        return map[ m ];
    } );
};

export const loginUrl = '/api/login'
export const register = '/api/register'
export const logout = '/api/logout'
export const forgotPasswordUrl = '/api/forgot_password'
export const resetPasswordUrl = '/api/reset_password'

export const loadPaymentMethodCurencies = '/api/loadPaymentMethodCurencies'
export const loadPaymentMethodCurencyDetails = '/api/loadPaymentMethodCurencyDetails/'
export const fetchSupportedCurrencies = '/api/fetchSupportedCurrencies'
export const fetchSupportedCurrenciesExchangeRates = '/api/fetchSupportedCurrenciesExchangeRates'
export const loadPaymentMethods = '/api/loadPaymentMethods'
export const loadCurencyDetails = '/api/loadCurencyDetails/'
export const loadSendActivePaymentMethods = '/api/loadSendActivePaymentMethods'
export const createPaymentMethod = '/api/createPaymentMethod'
export const fetchSupportedCountries = '/api/fetchSupportedCountries'
export const addSuportedCountry = '/api/addSuportedCountry'
export const deleteCountry = '/api/deleteCountry'
export const addSuportedCurrency = '/api/addSuportedCurrency'
export const deleteCurrency = '/api/deleteCurrency'
export const updateCurrencyConfig = '/api/updateCurrencyConfig'
export const createNewCurrency = '/api/createNewCurrency'
export const fetchPaymentMethod = '/api/fetchPaymentMethod'
export const fetchPaymentMethodStatistics = '/api/fetchPaymentMethodStatistics'
export const updatePaymentMethodConfig = '/api/updatePaymentMethodConfig'
export const addNewPaymentMethodCurrencyTariff = '/api/addNewPaymentMethodCurrencyTariff'
export const fetchPaymentMethodCurrencyTariffs = '/api/fetchPaymentMethodCurrencyTariffs/'
export const deletePaymentMethodCurrencyTariffs = '/api/deletePaymentMethodCurrencyTariffs/'
export const updatePaymentMethodTariffConfig = '/api/updatePaymentMethodTariffConfig'
export const updatePaymentMethodCurrencyConfig = '/api/updatePaymentMethodCurrencyConfig'
export const updatePaymentMethodLocationConfig = '/api/updatePaymentMethodLocationConfig'
export const updateCurrencyLocationConfig = '/api/updateCurrencyLocationConfig'
export const updatePaymentMethodCurrencyTariff = '/api/updatePaymentMethodCurrencyTariff'
export const updateBankCurrencyConfig = '/api/updateBankCurrencyConfig'
export const deleteActiveCurrency = '/api/deleteActiveCurrency'

export const addNewBankCurrencyTariff = '/api/addNewBankCurrencyTariff'
export const fetchBankCurrencyTariffs = '/api/fetchBankCurrencyTariffs/'
export const deleteBankCurrencyTariffs = '/api/deleteBankCurrencyTariffs/'
export const updateBankCurrencyTariffConfig = '/api/updateBankCurrencyTariffConfig'
export const updateBankCurrencyTariff = '/api/updateBankCurrencyTariff'

export const loadSystemUsers = '/api/loadSystemUsers'
export const getUserProfile = '/api/getUserProfile'
export const submitTemplate = '/api/submitTemplate'
export const loadCampaignTemplates = '/api/loadCampaignTemplates'
export const loadTemplateDetails = '/api/loadTemplateDetails'
export const updateTemplate = '/api/updateTemplate'
export const submitCampaignTarget = '/api/submitCampaignTarget'
export const loadCampaignTargets = '/api/loadCampaignTargets'
export const loadCampaignTargetDetails = '/api/loadCampaignTargetDetails'
export const deleteCampaignTarget = '/api/deleteCampaignTarget'
export const submitCampaignOffer = '/api/submitCampaignOffer'
export const uploadCampaignOfferFile = '/api/uploadCampaignOfferFile'
export const loadSystemCampaignOffers = '/api/loadSystemCampaignOffers'
export const loadSystemCampaignOfferDetails = '/api/loadSystemCampaignOfferDetails'
export const updateCampaignOffer = '/api/updateCampaignOffer'
export const deleteOffer = '/api/deleteOffer'
export const submitCampaign = '/api/submitCampaign'
export const loadMarketingCampaings = '/api/loadMarketingCampaings'
export const loadCampaignDetails = '/api/loadCampaignDetails'
export const deleteCampaign = '/api/deleteCampaign'
export const runCampaign = '/api/runCampaign'
export const updateCampaign = '/api/updateCampaign'
export const getSelectedUserProfile = '/api/getSelectedUserProfile'
export const fetchNewMessages = '/api/fetchNewMessages'
export const fetchChatConversation = '/api/fetchChatConversation'
export const getCustomerServiceChats = '/api/getCustomerServiceChats'
export const getCustomerCareChatGroupId = '/api/getCustomerCareChatGroupId'
export const sendStringMessage = '/api/sendStringMessage'
export const sendFile = '/api/sendFile'
export const loadLocalizations = '/api/loadLocalizations'
export const createTranslation = '/api/createTranslation'
export const deleteTranslation = '/api/deleteTranslation'
export const createLocalization = '/api/createLocalization'
export const loadTranslations = '/api/loadTranslations'
export const loadCompleteTransactions = '/api/loadCompleteTransactions'
export const loadUserTransactions = '/api/loadUserTransactions'
export const fetchUserNotifications = '/api/fetchUserNotifications'
export const getUserChatID = '/api/getUserChatID'
export const checkFriendshipStatus = '/api/checkFriendshipStatus'
export const fetchCustomerFriends = '/api/fetchCustomerFriends'
export const getUserCustomerCareChatGroupId = '/api/getUserCustomerCareChatGroupId'
export const createCustomerTopupRequest = '/api/createCustomerTopupRequest'
export const getAdminUsers = '/api/getAdminUsers'
export const searchUsers = '/api/searchUsers'
export const createTopupRequest = '/api/createTopupRequest'
export const cashOut = '/api/cashOut'
export const fetchFriends = '/api/fetchFriends'
export const getChats = '/api/getChats'
export const createNewFriend = '/api/createNewFriend'
export const getChatDetails = '/api/getChatDetails'
export const getMyBalances = '/api/getMyBalances'
export const loadStebleCurency = '/api/loadStebleCurency'
export const fetchLoadUserCurrency = '/api/fetchLoadUserCurrency/';
export const sendMoney = '/api/sendMoney'
export const loadAllPaymentMethods = '/api/loadAllPaymentMethods'
export const createBank = '/api/createBank'
export const loadActiveBanks = '/api/loadActiveBanks'
export const loadAllBanks = '/api/loadAllBanks'
export const fetchBank = '/api/fetchBank'
export const fetchBankStatistics = '/api/fetchBankStatistics'
export const createNewBankCurrency = '/api/createNewBankCurrency'
export const loadBankCurencies = '/api/loadBankCurencies'
export const loadBankCurencyDetails = '/api/loadBankCurencyDetails/'
export const deleteActiveBankCurrency = '/api/deleteActiveBankCurrency'
export const updateBankConfig = '/api/updateBankConfig'
export const updateBankLocationConfig = '/api/updateBankLocationConfig'
export const get_crypto_assets = '/api/get_crypto_assets'
export const addnewCryptoAsset = '/api/addnewCryptoAsset'
export const saveUserAvator = '/api/saveUserAvator'
export const uploadUserCoverPhoto = '/api/uploadUserCoverPhoto'
export const updateUserProfileValue = '/api/updateUserProfileValue'
export const submitApplication = '/api/submitApplication'
export const loadMyApplications = '/api/loadMyApplications'
export const resetApiKey = '/api/resetApiKey'
export const get_my_crypto_address_info = '/api/get_my_crypto_address_info/'
export const getCryptoIntradayStockHistoryData = '/api/getCryptoIntradayStockHistoryData/'
export const getRequestToPayRequest = '/api/getRequestToPayRequest/'
export const payWithMyWallet = '/api/payWithMyWallet'
export const payWithPaymentGateway = '/api/payWithPaymentGateway'
export const updateApplicationCallbackURL = '/api/updateApplicationCallbackURL'

export const getSystemSettings = '/api/getSystemSettings';
export const updateSetting = '/api/updateSetting';
export const submitSystemAdmin = '/api/submitSystemAdmin';
export const deleteSystemAdmin = '/api/deleteSystemAdmin/';
export const fetchServicePointAdmins = '/api/fetchServicePointAdmins/';
export const submitServicePoint = '/api/submitServicePoint';
export const fetchAllServicePoints = '/api/fetchAllServicePoints';
export const fetchServicePointDetails = '/api/fetchServicePointDetails/';
export const sendServicePointGalleryImage = '/api/sendServicePointGalleryImage';
export const loadDashboardSumary = '/api/loadDashboardSumary';
export const fetchDashboardSparklineData = '/api/fetchDashboardSparklineData';


export const mainMenuItems = [ {
    title: "Home",
    href: "/admin/home",
    icon: "mdi-home-outline"
},
{
    title: "Campaigns",
    href: "/admin/marketingCampaigns",
    icon: "mdi-chat-outline"
},
{
    title: "Live Chat",
    href: "/admin/ccInbox",
    icon: "mdi-email"
},
{
    title: "Requests",
    href: "/admin/requests",
    icon: "mdi-palette-swatch"
},
{
    title: "Translations",
    href: "/admin/translations",
    icon: "mdi-translate",
},
{
    title: "Promo Codes",
    href: "/admin/promoCodes",
    icon: "mdi-tag",
},
{
    title: "Payment Methods",
    href: "/admin/paymentMethods",
    icon: "mdi-currency-usd",
},
{
    title: "Crypto Assets",
    href: "/admin/cryptoAssets",
    icon: "mdi-currency-btc",
},
{
    title: "Suported Banks",
    href: "/admin/suportedBanks",
    icon: "mdi-database-settings-outline",
},
{
    title: "Customers",
    href: "/admin/customers",
    icon: "mdi-account-search-outline"
},
{
    title: "Settings",
    href: "/admin/settings",
    icon: "mdi-cog"
},
];

export const cryptoAssetsData = [ {
    code: "BLOCK_BITCOIN",
    title: "Bitcoin",
    currencyCode: "BTC"
},
{
    code: "BLOCK_LITECOIN",
    title: "Litecoin",
    currencyCode: "LTC"
},
{
    code: "BLOCK_DOGECOIN",
    title: "Dogecoin",
    currencyCode: "DOGE"
}
];

export const languages_options = [ {
    id: "aa",
    label: "Afar",
},
{
    id: "af",
    label: "Afrikaans",
},
{
    id: "ab",
    label: "Abkhaz",
},
{
    id: "ak",
    label: "Akan",
},
{
    id: "sq",
    label: "Albanian",
},
{
    id: "am",
    label: "Amharic",
},
{
    id: "ar",
    label: "Arabic",
},
{
    id: "an",
    label: "Aragonese",
},
{
    id: "hy",
    label: "Armenian",
},
{
    id: "as",
    label: "Assamese",
},
{
    id: "av",
    label: "Avaric",
},
{
    id: "ae",
    label: "Avestan",
},
{
    id: "ay",
    label: "Aymara",
},
{
    id: "az",
    label: "Azerbaijani",
},
{
    id: "bm",
    label: "Bambara",
},
{
    id: "ba",
    label: "Bashkir",
},
{
    id: "eu",
    label: "Basque",
},
{
    id: "be",
    label: "Belarusian",
},
{
    id: "bn",
    label: "Bengali",
},
{
    id: "bh",
    label: "Bihari",
},
{
    id: "bi",
    label: "Bislama",
},
{
    id: "bs",
    label: "Bosnian",
},
{
    id: "br",
    label: "Breton",
},
{
    id: "bg",
    label: "Bulgarian",
},
{
    id: "my",
    label: "Burmese",
},
{
    id: "ca",
    label: "Catalan; Valencian",
},
{
    id: "ch",
    label: "Chamorro",
},
{
    id: "ce",
    label: "Chechen",
},
{
    id: "ny",
    label: "Chichewa; Chewa; Nyanja",
},
{
    id: "zh",
    label: "Chinese",
},
{
    id: "cv",
    label: "Chuvash",
},
{
    id: "kw",
    label: "Cornish",
},
{
    id: "co",
    label: "Corsican",
},
{
    id: "cr",
    label: "Cree",
},
{
    id: "hr",
    label: "Croatian",
},
{
    id: "cs",
    label: "Czech",
},
{
    id: "da",
    label: "Danish",
},
{
    id: "dv",
    label: "Divehi; Dhivehi; Maldivian;",
},
{
    id: "nl",
    label: "Dutch",
},
{
    id: "en",
    label: "English",
},
{
    id: "eo",
    label: "Esperanto",
},
{
    id: "et",
    label: "Estonian",
},
{
    id: "ee",
    label: "Ewe",
},
{
    id: "fo",
    label: "Faroese",
},
{
    id: "fj",
    label: "Fijian",
},
{
    id: "fi",
    label: "Finnish",
},
{
    id: "fr",
    label: "French",
},
{
    id: "ff",
    label: "Fula; Fulah; Pulaar; Pular",
},
{
    id: "gl",
    label: "Galician",
},
{
    id: "ka",
    label: "Georgian",
},
{
    id: "de",
    label: "German",
},
{
    id: "el",
    label: "Greek, Modern",
},
{
    id: "gn",
    label: "Guaraní",
},
{
    id: "gu",
    label: "Gujarati",
},
{
    id: "ht",
    label: "Haitian; Haitian Creole",
},
{
    id: "ha",
    label: "Hausa",
},
{
    id: "he",
    label: "Hebrew (modern)",
},
{
    id: "hz",
    label: "Herero",
},
{
    id: "hi",
    label: "Hindi",
},
{
    id: "ho",
    label: "Hiri Motu",
},
{
    id: "hu",
    label: "Hungarian",
},
{
    id: "ia",
    label: "Interlingua",
},
{
    id: "id",
    label: "Indonesian",
},
{
    id: "ie",
    label: "Interlingue",
},
{
    id: "ga",
    label: "Irish",
},
{
    id: "ig",
    label: "Igbo",
},
{
    id: "ik",
    label: "Inupiaq",
},
{
    id: "io",
    label: "Ido",
},
{
    id: "is",
    label: "Icelandic",
},
{
    id: "it",
    label: "Italian",
},
{
    id: "iu",
    label: "Inuktitut",
},
{
    id: "ja",
    label: "Japanese",
},
{
    id: "jv",
    label: "Javanese",
},
{
    id: "kl",
    label: "Kalaallisut, Greenlandic",
},
{
    id: "kn",
    label: "Kannada",
},
{
    id: "kr",
    label: "Kanuri",
},
{
    id: "ks",
    label: "Kashmiri",
},
{
    id: "kk",
    label: "Kazakh",
},
{
    id: "km",
    label: "Khmer",
},
{
    id: "ki",
    label: "Kikuyu, Gikuyu",
},
{
    id: "rw",
    label: "Kinyarwanda",
},
{
    id: "ky",
    label: "Kirghiz, Kyrgyz",
},
{
    id: "kv",
    label: "Komi",
},
{
    id: "kg",
    label: "Kongo",
},
{
    id: "ko",
    label: "Korean",
},
{
    id: "ku",
    label: "Kurdish",
},
{
    id: "kj",
    label: "Kwanyama, Kuanyama",
},
{
    id: "la",
    label: "Latin",
},
{
    id: "lb",
    label: "Luxembourgish, Letzeburgesch",
},
{
    id: "lg",
    label: "Luganda",
},
{
    id: "li",
    label: "Limburgish, Limburgan, Limburger",
},
{
    id: "ln",
    label: "Lingala",
},
{
    id: "lo",
    label: "Lao",
},
{
    id: "lt",
    label: "Lithuanian",
},
{
    id: "lu",
    label: "Luba-Katanga",
},
{
    id: "lv",
    label: "Latvian",
},
{
    id: "gv",
    label: "Manx",
},
{
    id: "mk",
    label: "Macedonian",
},
{
    id: "mg",
    label: "Malagasy",
},
{
    id: "ms",
    label: "Malay",
},
{
    id: "ml",
    label: "Malayalam",
},
{
    id: "mt",
    label: "Maltese",
},
{
    id: "mi",
    label: "Māori",
},
{
    id: "mr",
    label: "Marathi (Marāṭhī)",
},
{
    id: "mh",
    label: "Marshallese",
},
{
    id: "mn",
    label: "Mongolian",
},
{
    id: "na",
    label: "Nauru",
},
{
    id: "nv",
    label: "Navajo, Navaho",
},
{
    id: "nb",
    label: "Norwegian Bokmål",
},
{
    id: "nd",
    label: "North Ndebele",
},
{
    id: "ne",
    label: "Nepali",
},
{
    id: "ng",
    label: "Ndonga",
},
{
    id: "nn",
    label: "Norwegian Nynorsk",
},
{
    id: "no",
    label: "Norwegian",
},
{
    id: "ii",
    label: "Nuosu",
},
{
    id: "nr",
    label: "South Ndebele",
},
{
    id: "oc",
    label: "Occitan",
},
{
    id: "oj",
    label: "Ojibwe, Ojibwa",
},
{
    id: "om",
    label: "Oromo",
},
{
    id: "or",
    label: "Oriya",
},
{
    id: "os",
    label: "Ossetian, Ossetic",
},
{
    id: "pa",
    label: "Panjabi, Punjabi",
},
{
    id: "pi",
    label: "Pāli",
},
{
    id: "fa",
    label: "Persian",
},
{
    id: "pl",
    label: "Polish",
},
{
    id: "ps",
    label: "Pashto, Pushto",
},
{
    id: "pt",
    label: "Portuguese",
},
{
    id: "qu",
    label: "Quechua",
},
{
    id: "rm",
    label: "Romansh",
},
{
    id: "rn",
    label: "Kirundi",
},
{
    id: "ro",
    label: "Romanian, Moldavian, Moldovan",
},
{
    id: "ru",
    label: "Russian",
},
{
    id: "sa",
    label: "Sanskrit (Saṁskṛta)",
},
{
    id: "sc",
    label: "Sardinian",
},
{
    id: "sd",
    label: "Sindhi",
},
{
    id: "se",
    label: "Northern Sami",
},
{
    id: "sm",
    label: "Samoan",
},
{
    id: "sg",
    label: "Sango",
},
{
    id: "sr",
    label: "Serbian",
},
{
    id: "gd",
    label: "Scottish Gaelic; Gaelic",
},
{
    id: "sn",
    label: "Shona",
},
{
    id: "si",
    label: "Sinhala, Sinhalese",
},
{
    id: "sk",
    label: "Slovak",
},
{
    id: "sl",
    label: "Slovene",
},
{
    id: "so",
    label: "Somali",
},
{
    id: "st",
    label: "Southern Sotho",
},
{
    id: "es",
    label: "Spanish; Castilian",
},
{
    id: "su",
    label: "Sundanese",
},
{
    id: "sw",
    label: "Swahili",
},
{
    id: "ss",
    label: "Swati",
},
{
    id: "sv",
    label: "Swedish",
},
{
    id: "ta",
    label: "Tamil",
},
{
    id: "te",
    label: "Telugu",
},
{
    id: "tg",
    label: "Tajik",
},
{
    id: "th",
    label: "Thai",
},
{
    id: "ti",
    label: "Tigrinya",
},
{
    id: "bo",
    label: "Tibetan Standard, Tibetan, Central",
},
{
    id: "tk",
    label: "Turkmen",
},
{
    id: "tl",
    label: "Tagalog",
},
{
    id: "tn",
    label: "Tswana",
},
{
    id: "to",
    label: "Tonga (Tonga Islands)",
},
{
    id: "tr",
    label: "Turkish",
},
{
    id: "ts",
    label: "Tsonga",
},
{
    id: "tt",
    label: "Tatar",
},
{
    id: "tw",
    label: "Twi",
},
{
    id: "ty",
    label: "Tahitian",
},
{
    id: "ug",
    label: "Uighur, Uyghur",
},
{
    id: "uk",
    label: "Ukrainian",
},
{
    id: "ur",
    label: "Urdu",
},
{
    id: "uz",
    label: "Uzbek",
},
{
    id: "ve",
    label: "Venda",
},
{
    id: "vi",
    label: "Vietnamese",
},
{
    id: "vo",
    label: "Volapük",
},
{
    id: "wa",
    label: "Walloon",
},
{
    id: "cy",
    label: "Welsh",
},
{
    id: "wo",
    label: "Wolof",
},
{
    id: "fy",
    label: "Western Frisian",
},
{
    id: "xh",
    label: "Xhosa",
},
{
    id: "yi",
    label: "Yiddish",
},
{
    id: "yo",
    label: "Yoruba",
},
{
    id: "za",
    label: "Zhuang, Chuang",
}
]

export const countries = [ {
    name: "Afghanistan",
    flag: "🇦🇫",
    code: "AF",
    dial_code: "+93"
},
{
    name: "Åland Islands",
    flag: "🇦🇽",
    code: "AX",
    dial_code: "+358"
},
{
    name: "Albania",
    flag: "🇦🇱",
    code: "AL",
    dial_code: "+355"
},
{
    name: "Algeria",
    flag: "🇩🇿",
    code: "DZ",
    dial_code: "+213"
},
{
    name: "American Samoa",
    flag: "🇦🇸",
    code: "AS",
    dial_code: "+1684"
},
{
    name: "Andorra",
    flag: "🇦🇩",
    code: "AD",
    dial_code: "+376"
},
{
    name: "Angola",
    flag: "🇦🇴",
    code: "AO",
    dial_code: "+244"
},
{
    name: "Anguilla",
    flag: "🇦🇮",
    code: "AI",
    dial_code: "+1264"
},
{
    name: "Antarctica",
    flag: "🇦🇶",
    code: "AQ",
    dial_code: "+672"
},
{
    name: "Antigua and Barbuda",
    flag: "🇦🇬",
    code: "AG",
    dial_code: "+1268"
},
{
    name: "Argentina",
    flag: "🇦🇷",
    code: "AR",
    dial_code: "+54"
},
{
    name: "Armenia",
    flag: "🇦🇲",
    code: "AM",
    dial_code: "+374"
},
{
    name: "Aruba",
    flag: "🇦🇼",
    code: "AW",
    dial_code: "+297"
},
{
    name: "Australia",
    flag: "🇦🇺",
    code: "AU",
    dial_code: "+61"
},
{
    name: "Austria",
    flag: "🇦🇹",
    code: "AT",
    dial_code: "+43"
},
{
    name: "Azerbaijan",
    flag: "🇦🇿",
    code: "AZ",
    dial_code: "+994"
},
{
    name: "Bahamas",
    flag: "🇧🇸",
    code: "BS",
    dial_code: "+1242"
},
{
    name: "Bahrain",
    flag: "🇧🇭",
    code: "BH",
    dial_code: "+973"
},
{
    name: "Bangladesh",
    flag: "🇧🇩",
    code: "BD",
    dial_code: "+880"
},
{
    name: "Barbados",
    flag: "🇧🇧",
    code: "BB",
    dial_code: "+1246"
},
{
    name: "Belarus",
    flag: "🇧🇾",
    code: "BY",
    dial_code: "+375"
},
{
    name: "Belgium",
    flag: "🇧🇪",
    code: "BE",
    dial_code: "+32"
},
{
    name: "Belize",
    flag: "🇧🇿",
    code: "BZ",
    dial_code: "+501"
},
{
    name: "Benin",
    flag: "🇧🇯",
    code: "BJ",
    dial_code: "+229"
},
{
    name: "Bermuda",
    flag: "🇧🇲",
    code: "BM",
    dial_code: "+1441"
},
{
    name: "Bhutan",
    flag: "🇧🇹",
    code: "BT",
    dial_code: "+975"
},
{
    name: "Bolivia, Plurinational State of bolivia",
    flag: "🇧🇴",
    code: "BO",
    dial_code: "+591"
},
{
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    code: "BA",
    dial_code: "+387"
},
{
    name: "Botswana",
    flag: "🇧🇼",
    code: "BW",
    dial_code: "+267"
},
{
    name: "Bouvet Island",
    flag: "🇧🇻",
    code: "BV",
    dial_code: "+47"
},
{
    name: "Brazil",
    flag: "🇧🇷",
    code: "BR",
    dial_code: "+55"
},
{
    name: "British Indian Ocean Territory",
    flag: "🇮🇴",
    code: "IO",
    dial_code: "+246"
},
{
    name: "Brunei Darussalam",
    flag: "🇧🇳",
    code: "BN",
    dial_code: "+673"
},
{
    name: "Bulgaria",
    flag: "🇧🇬",
    code: "BG",
    dial_code: "+359"
},
{
    name: "Burkina Faso",
    flag: "🇧🇫",
    code: "BF",
    dial_code: "+226"
},
{
    name: "Burundi",
    flag: "🇧🇮",
    code: "BI",
    dial_code: "+257"
},
{
    name: "Cambodia",
    flag: "🇰🇭",
    code: "KH",
    dial_code: "+855"
},
{
    name: "Cameroon",
    flag: "🇨🇲",
    code: "CM",
    dial_code: "+237"
},
{
    name: "Canada",
    flag: "🇨🇦",
    code: "CA",
    dial_code: "+1"
},
{
    name: "Cape Verde",
    flag: "🇨🇻",
    code: "CV",
    dial_code: "+238"
},
{
    name: "Cayman Islands",
    flag: "🇰🇾",
    code: "KY",
    dial_code: "+345"
},
{
    name: "Central African Republic",
    flag: "🇨🇫",
    code: "CF",
    dial_code: "+236"
},
{
    name: "Chad",
    flag: "🇹🇩",
    code: "TD",
    dial_code: "+235"
},
{
    name: "Chile",
    flag: "🇨🇱",
    code: "CL",
    dial_code: "+56"
},
{
    name: "China",
    flag: "🇨🇳",
    code: "CN",
    dial_code: "+86"
},
{
    name: "Christmas Island",
    flag: "🇨🇽",
    code: "CX",
    dial_code: "+61"
},
{
    name: "Cocos (Keeling) Islands",
    flag: "🇨🇨",
    code: "CC",
    dial_code: "+61"
},
{
    name: "Colombia",
    flag: "🇨🇴",
    code: "CO",
    dial_code: "+57"
},
{
    name: "Comoros",
    flag: "🇰🇲",
    code: "KM",
    dial_code: "+269"
},
{
    name: "Congo",
    flag: "🇨🇬",
    code: "CG",
    dial_code: "+242"
},
{
    name: "Congo, The Democratic Republic of the Congo",
    flag: "🇨🇩",
    code: "CD",
    dial_code: "+243"
},
{
    name: "Cook Islands",
    flag: "🇨🇰",
    code: "CK",
    dial_code: "+682"
},
{
    name: "Costa Rica",
    flag: "🇨🇷",
    code: "CR",
    dial_code: "+506"
},
{
    name: "Cote d'Ivoire",
    flag: "🇨🇮",
    code: "CI",
    dial_code: "+225"
},
{
    name: "Croatia",
    flag: "🇭🇷",
    code: "HR",
    dial_code: "+385"
},
{
    name: "Cuba",
    flag: "🇨🇺",
    code: "CU",
    dial_code: "+53"
},
{
    name: "Cyprus",
    flag: "🇨🇾",
    code: "CY",
    dial_code: "+357"
},
{
    name: "Czech Republic",
    flag: "🇨🇿",
    code: "CZ",
    dial_code: "+420"
},
{
    name: "Denmark",
    flag: "🇩🇰",
    code: "DK",
    dial_code: "+45"
},
{
    name: "Djibouti",
    flag: "🇩🇯",
    code: "DJ",
    dial_code: "+253"
},
{
    name: "Dominica",
    flag: "🇩🇲",
    code: "DM",
    dial_code: "+1767"
},
{
    name: "Dominican Republic",
    flag: "🇩🇴",
    code: "DO",
    dial_code: "+1849"
},
{
    name: "Ecuador",
    flag: "🇪🇨",
    code: "EC",
    dial_code: "+593"
},
{
    name: "Egypt",
    flag: "🇪🇬",
    code: "EG",
    dial_code: "+20"
},
{
    name: "El Salvador",
    flag: "🇸🇻",
    code: "SV",
    dial_code: "+503"
},
{
    name: "Equatorial Guinea",
    flag: "🇬🇶",
    code: "GQ",
    dial_code: "+240"
},
{
    name: "Eritrea",
    flag: "🇪🇷",
    code: "ER",
    dial_code: "+291"
},
{
    name: "Estonia",
    flag: "🇪🇪",
    code: "EE",
    dial_code: "+372"
},
{
    name: "Ethiopia",
    flag: "🇪🇹",
    code: "ET",
    dial_code: "+251"
},
{
    name: "Falkland Islands (Malvinas)",
    flag: "🇫🇰",
    code: "FK",
    dial_code: "+500"
},
{
    name: "Faroe Islands",
    flag: "🇫🇴",
    code: "FO",
    dial_code: "+298"
},
{
    name: "Fiji",
    flag: "🇫🇯",
    code: "FJ",
    dial_code: "+679"
},
{
    name: "Finland",
    flag: "🇫🇮",
    code: "FI",
    dial_code: "+358"
},
{
    name: "France",
    flag: "🇫🇷",
    code: "FR",
    dial_code: "+33"
},
{
    name: "French Guiana",
    flag: "🇬🇫",
    code: "GF",
    dial_code: "+594"
},
{
    name: "French Polynesia",
    flag: "🇵🇫",
    code: "PF",
    dial_code: "+689"
},
{
    name: "French Southern Territories",
    flag: "🇹🇫",
    code: "TF",
    dial_code: "+262"
},
{
    name: "Gabon",
    flag: "🇬🇦",
    code: "GA",
    dial_code: "+241"
},
{
    name: "Gambia",
    flag: "🇬🇲",
    code: "GM",
    dial_code: "+220"
},
{
    name: "Georgia",
    flag: "🇬🇪",
    code: "GE",
    dial_code: "+995"
},
{
    name: "Germany",
    flag: "🇩🇪",
    code: "DE",
    dial_code: "+49"
},
{
    name: "Ghana",
    flag: "🇬🇭",
    code: "GH",
    dial_code: "+233"
},
{
    name: "Gibraltar",
    flag: "🇬🇮",
    code: "GI",
    dial_code: "+350"
},
{
    name: "Greece",
    flag: "🇬🇷",
    code: "GR",
    dial_code: "+30"
},
{
    name: "Greenland",
    flag: "🇬🇱",
    code: "GL",
    dial_code: "+299"
},
{
    name: "Grenada",
    flag: "🇬🇩",
    code: "GD",
    dial_code: "+1473"
},
{
    name: "Guadeloupe",
    flag: "🇬🇵",
    code: "GP",
    dial_code: "+590"
},
{
    name: "Guam",
    flag: "🇬🇺",
    code: "GU",
    dial_code: "+1671"
},
{
    name: "Guatemala",
    flag: "🇬🇹",
    code: "GT",
    dial_code: "+502"
},
{
    name: "Guernsey",
    flag: "🇬🇬",
    code: "GG",
    dial_code: "+44"
},
{
    name: "Guinea",
    flag: "🇬🇳",
    code: "GN",
    dial_code: "+224"
},
{
    name: "Guinea-Bissau",
    flag: "🇬🇼",
    code: "GW",
    dial_code: "+245"
},
{
    name: "Guyana",
    flag: "🇬🇾",
    code: "GY",
    dial_code: "+592"
},
{
    name: "Haiti",
    flag: "🇭🇹",
    code: "HT",
    dial_code: "+509"
},
{
    name: "Heard Island and Mcdonald Islands",
    flag: "🇭🇲",
    code: "HM",
    dial_code: "+672"
},
{
    name: "Holy See (Vatican City State)",
    flag: "🇻🇦",
    code: "VA",
    dial_code: "+379"
},
{
    name: "Honduras",
    flag: "🇭🇳",
    code: "HN",
    dial_code: "+504"
},
{
    name: "Hong Kong",
    flag: "🇭🇰",
    code: "HK",
    dial_code: "+852"
},
{
    name: "Hungary",
    flag: "🇭🇺",
    code: "HU",
    dial_code: "+36"
},
{
    name: "Iceland",
    flag: "🇮🇸",
    code: "IS",
    dial_code: "+354"
},
{
    name: "India",
    flag: "🇮🇳",
    code: "IN",
    dial_code: "+91"
},
{
    name: "Indonesia",
    flag: "🇮🇩",
    code: "ID",
    dial_code: "+62"
},
{
    name: "Iran, Islamic Republic of Persian Gulf",
    flag: "🇮🇷",
    code: "IR",
    dial_code: "+98"
},
{
    name: "Iraq",
    flag: "🇮🇶",
    code: "IQ",
    dial_code: "+964"
},
{
    name: "Ireland",
    flag: "🇮🇪",
    code: "IE",
    dial_code: "+353"
},
{
    name: "Isle of Man",
    flag: "🇮🇲",
    code: "IM",
    dial_code: "+44"
},
{
    name: "Israel",
    flag: "🇮🇱",
    code: "IL",
    dial_code: "+972"
},
{
    name: "Italy",
    flag: "🇮🇹",
    code: "IT",
    dial_code: "+39"
},
{
    name: "Jamaica",
    flag: "🇯🇲",
    code: "JM",
    dial_code: "+1876"
},
{
    name: "Japan",
    flag: "🇯🇵",
    code: "JP",
    dial_code: "+81"
},
{
    name: "Jersey",
    flag: "🇯🇪",
    code: "JE",
    dial_code: "+44"
},
{
    name: "Jordan",
    flag: "🇯🇴",
    code: "JO",
    dial_code: "+962"
},
{
    name: "Kazakhstan",
    flag: "🇰🇿",
    code: "KZ",
    dial_code: "+7"
},
{
    name: "Kenya",
    flag: "🇰🇪",
    code: "KE",
    dial_code: "+254"
},
{
    name: "Kiribati",
    flag: "🇰🇮",
    code: "KI",
    dial_code: "+686"
},
{
    name: "Korea, Democratic People's Republic of Korea",
    flag: "🇰🇵",
    code: "KP",
    dial_code: "+850"
},
{
    name: "Korea, Republic of South Korea",
    flag: "🇰🇷",
    code: "KR",
    dial_code: "+82"
},
{
    name: "Kosovo",
    flag: "🇽🇰",
    code: "XK",
    dial_code: "+383"
},
{
    name: "Kuwait",
    flag: "🇰🇼",
    code: "KW",
    dial_code: "+965"
},
{
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    code: "KG",
    dial_code: "+996"
},
{
    name: "Laos",
    flag: "🇱🇦",
    code: "LA",
    dial_code: "+856"
},
{
    name: "Latvia",
    flag: "🇱🇻",
    code: "LV",
    dial_code: "+371"
},
{
    name: "Lebanon",
    flag: "🇱🇧",
    code: "LB",
    dial_code: "+961"
},
{
    name: "Lesotho",
    flag: "🇱🇸",
    code: "LS",
    dial_code: "+266"
},
{
    name: "Liberia",
    flag: "🇱🇷",
    code: "LR",
    dial_code: "+231"
},
{
    name: "Libyan Arab Jamahiriya",
    flag: "🇱🇾",
    code: "LY",
    dial_code: "+218"
},
{
    name: "Liechtenstein",
    flag: "🇱🇮",
    code: "LI",
    dial_code: "+423"
},
{
    name: "Lithuania",
    flag: "🇱🇹",
    code: "LT",
    dial_code: "+370"
},
{
    name: "Luxembourg",
    flag: "🇱🇺",
    code: "LU",
    dial_code: "+352"
},
{
    name: "Macao",
    flag: "🇲🇴",
    code: "MO",
    dial_code: "+853"
},
{
    name: "Macedonia",
    flag: "🇲🇰",
    code: "MK",
    dial_code: "+389"
},
{
    name: "Madagascar",
    flag: "🇲🇬",
    code: "MG",
    dial_code: "+261"
},
{
    name: "Malawi",
    flag: "🇲🇼",
    code: "MW",
    dial_code: "+265"
},
{
    name: "Malaysia",
    flag: "🇲🇾",
    code: "MY",
    dial_code: "+60"
},
{
    name: "Maldives",
    flag: "🇲🇻",
    code: "MV",
    dial_code: "+960"
},
{
    name: "Mali",
    flag: "🇲🇱",
    code: "ML",
    dial_code: "+223"
},
{
    name: "Malta",
    flag: "🇲🇹",
    code: "MT",
    dial_code: "+356"
},
{
    name: "Marshall Islands",
    flag: "🇲🇭",
    code: "MH",
    dial_code: "+692"
},
{
    name: "Martinique",
    flag: "🇲🇶",
    code: "MQ",
    dial_code: "+596"
},
{
    name: "Mauritania",
    flag: "🇲🇷",
    code: "MR",
    dial_code: "+222"
},
{
    name: "Mauritius",
    flag: "🇲🇺",
    code: "MU",
    dial_code: "+230"
},
{
    name: "Mayotte",
    flag: "🇾🇹",
    code: "YT",
    dial_code: "+262"
},
{
    name: "Mexico",
    flag: "🇲🇽",
    code: "MX",
    dial_code: "+52"
},
{
    name: "Micronesia, Federated States of Micronesia",
    flag: "🇫🇲",
    code: "FM",
    dial_code: "+691"
},
{
    name: "Moldova",
    flag: "🇲🇩",
    code: "MD",
    dial_code: "+373"
},
{
    name: "Monaco",
    flag: "🇲🇨",
    code: "MC",
    dial_code: "+377"
},
{
    name: "Mongolia",
    flag: "🇲🇳",
    code: "MN",
    dial_code: "+976"
},
{
    name: "Montenegro",
    flag: "🇲🇪",
    code: "ME",
    dial_code: "+382"
},
{
    name: "Montserrat",
    flag: "🇲🇸",
    code: "MS",
    dial_code: "+1664"
},
{
    name: "Morocco",
    flag: "🇲🇦",
    code: "MA",
    dial_code: "+212"
},
{
    name: "Mozambique",
    flag: "🇲🇿",
    code: "MZ",
    dial_code: "+258"
},
{
    name: "Myanmar",
    flag: "🇲🇲",
    code: "MM",
    dial_code: "+95"
},
{
    name: "Namibia",
    flag: "🇳🇦",
    code: "NA",
    dial_code: "+264"
},
{
    name: "Nauru",
    flag: "🇳🇷",
    code: "NR",
    dial_code: "+674"
},
{
    name: "Nepal",
    flag: "🇳🇵",
    code: "NP",
    dial_code: "+977"
},
{
    name: "Netherlands",
    flag: "🇳🇱",
    code: "NL",
    dial_code: "+31"
},
{
    name: "Netherlands Antilles",
    flag: "",
    code: "AN",
    dial_code: "+599"
},
{
    name: "New Caledonia",
    flag: "🇳🇨",
    code: "NC",
    dial_code: "+687"
},
{
    name: "New Zealand",
    flag: "🇳🇿",
    code: "NZ",
    dial_code: "+64"
},
{
    name: "Nicaragua",
    flag: "🇳🇮",
    code: "NI",
    dial_code: "+505"
},
{
    name: "Niger",
    flag: "🇳🇪",
    code: "NE",
    dial_code: "+227"
},
{
    name: "Nigeria",
    flag: "🇳🇬",
    code: "NG",
    dial_code: "+234"
},
{
    name: "Niue",
    flag: "🇳🇺",
    code: "NU",
    dial_code: "+683"
},
{
    name: "Norfolk Island",
    flag: "🇳🇫",
    code: "NF",
    dial_code: "+672"
},
{
    name: "Northern Mariana Islands",
    flag: "🇲🇵",
    code: "MP",
    dial_code: "+1670"
},
{
    name: "Norway",
    flag: "🇳🇴",
    code: "NO",
    dial_code: "+47"
},
{
    name: "Oman",
    flag: "🇴🇲",
    code: "OM",
    dial_code: "+968"
},
{
    name: "Pakistan",
    flag: "🇵🇰",
    code: "PK",
    dial_code: "+92"
},
{
    name: "Palau",
    flag: "🇵🇼",
    code: "PW",
    dial_code: "+680"
},
{
    name: "Palestinian Territory, Occupied",
    flag: "🇵🇸",
    code: "PS",
    dial_code: "+970"
},
{
    name: "Panama",
    flag: "🇵🇦",
    code: "PA",
    dial_code: "+507"
},
{
    name: "Papua New Guinea",
    flag: "🇵🇬",
    code: "PG",
    dial_code: "+675"
},
{
    name: "Paraguay",
    flag: "🇵🇾",
    code: "PY",
    dial_code: "+595"
},
{
    name: "Peru",
    flag: "🇵🇪",
    code: "PE",
    dial_code: "+51"
},
{
    name: "Philippines",
    flag: "🇵🇭",
    code: "PH",
    dial_code: "+63"
},
{
    name: "Pitcairn",
    flag: "🇵🇳",
    code: "PN",
    dial_code: "+64"
},
{
    name: "Poland",
    flag: "🇵🇱",
    code: "PL",
    dial_code: "+48"
},
{
    name: "Portugal",
    flag: "🇵🇹",
    code: "PT",
    dial_code: "+351"
},
{
    name: "Puerto Rico",
    flag: "🇵🇷",
    code: "PR",
    dial_code: "+1939"
},
{
    name: "Qatar",
    flag: "🇶🇦",
    code: "QA",
    dial_code: "+974"
},
{
    name: "Romania",
    flag: "🇷🇴",
    code: "RO",
    dial_code: "+40"
},
{
    name: "Russia",
    flag: "🇷🇺",
    code: "RU",
    dial_code: "+7"
},
{
    name: "Rwanda",
    flag: "🇷🇼",
    code: "RW",
    dial_code: "+250"
},
{
    name: "Reunion",
    flag: "🇷🇪",
    code: "RE",
    dial_code: "+262"
},
{
    name: "Saint Barthelemy",
    flag: "🇧🇱",
    code: "BL",
    dial_code: "+590"
},
{
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    flag: "🇸🇭",
    code: "SH",
    dial_code: "+290"
},
{
    name: "Saint Kitts and Nevis",
    flag: "🇰🇳",
    code: "KN",
    dial_code: "+1869"
},
{
    name: "Saint Lucia",
    flag: "🇱🇨",
    code: "LC",
    dial_code: "+1758"
},
{
    name: "Saint Martin",
    flag: "🇲🇫",
    code: "MF",
    dial_code: "+590"
},
{
    name: "Saint Pierre and Miquelon",
    flag: "🇵🇲",
    code: "PM",
    dial_code: "+508"
},
{
    name: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
    code: "VC",
    dial_code: "+1784"
},
{
    name: "Samoa",
    flag: "🇼🇸",
    code: "WS",
    dial_code: "+685"
},
{
    name: "San Marino",
    flag: "🇸🇲",
    code: "SM",
    dial_code: "+378"
},
{
    name: "Sao Tome and Principe",
    flag: "🇸🇹",
    code: "ST",
    dial_code: "+239"
},
{
    name: "Saudi Arabia",
    flag: "🇸🇦",
    code: "SA",
    dial_code: "+966"
},
{
    name: "Senegal",
    flag: "🇸🇳",
    code: "SN",
    dial_code: "+221"
},
{
    name: "Serbia",
    flag: "🇷🇸",
    code: "RS",
    dial_code: "+381"
},
{
    name: "Seychelles",
    flag: "🇸🇨",
    code: "SC",
    dial_code: "+248"
},
{
    name: "Sierra Leone",
    flag: "🇸🇱",
    code: "SL",
    dial_code: "+232"
},
{
    name: "Singapore",
    flag: "🇸🇬",
    code: "SG",
    dial_code: "+65"
},
{
    name: "Slovakia",
    flag: "🇸🇰",
    code: "SK",
    dial_code: "+421"
},
{
    name: "Slovenia",
    flag: "🇸🇮",
    code: "SI",
    dial_code: "+386"
},
{
    name: "Solomon Islands",
    flag: "🇸🇧",
    code: "SB",
    dial_code: "+677"
},
{
    name: "Somalia",
    flag: "🇸🇴",
    code: "SO",
    dial_code: "+252"
},
{
    name: "South Africa",
    flag: "🇿🇦",
    code: "ZA",
    dial_code: "+27"
},
{
    name: "South Sudan",
    flag: "🇸🇸",
    code: "SS",
    dial_code: "+211"
},
{
    name: "South Georgia and the South Sandwich Islands",
    flag: "🇬🇸",
    code: "GS",
    dial_code: "+500"
},
{
    name: "Spain",
    flag: "🇪🇸",
    code: "ES",
    dial_code: "+34"
},
{
    name: "Sri Lanka",
    flag: "🇱🇰",
    code: "LK",
    dial_code: "+94"
},
{
    name: "Sudan",
    flag: "🇸🇩",
    code: "SD",
    dial_code: "+249"
},
{
    name: "Suriname",
    flag: "🇸🇷",
    code: "SR",
    dial_code: "+597"
},
{
    name: "Svalbard and Jan Mayen",
    flag: "🇸🇯",
    code: "SJ",
    dial_code: "+47"
},
{
    name: "Swaziland",
    flag: "🇸🇿",
    code: "SZ",
    dial_code: "+268"
},
{
    name: "Sweden",
    flag: "🇸🇪",
    code: "SE",
    dial_code: "+46"
},
{
    name: "Switzerland",
    flag: "🇨🇭",
    code: "CH",
    dial_code: "+41"
},
{
    name: "Syrian Arab Republic",
    flag: "🇸🇾",
    code: "SY",
    dial_code: "+963"
},
{
    name: "Taiwan",
    flag: "🇹🇼",
    code: "TW",
    dial_code: "+886"
},
{
    name: "Tajikistan",
    flag: "🇹🇯",
    code: "TJ",
    dial_code: "+992"
},
{
    name: "Tanzania, United Republic of Tanzania",
    flag: "🇹🇿",
    code: "TZ",
    dial_code: "+255"
},
{
    name: "Thailand",
    flag: "🇹🇭",
    code: "TH",
    dial_code: "+66"
},
{
    name: "Timor-Leste",
    flag: "🇹🇱",
    code: "TL",
    dial_code: "+670"
},
{
    name: "Togo",
    flag: "🇹🇬",
    code: "TG",
    dial_code: "+228"
},
{
    name: "Tokelau",
    flag: "🇹🇰",
    code: "TK",
    dial_code: "+690"
},
{
    name: "Tonga",
    flag: "🇹🇴",
    code: "TO",
    dial_code: "+676"
},
{
    name: "Trinidad and Tobago",
    flag: "🇹🇹",
    code: "TT",
    dial_code: "+1868"
},
{
    name: "Tunisia",
    flag: "🇹🇳",
    code: "TN",
    dial_code: "+216"
},
{
    name: "Turkey",
    flag: "🇹🇷",
    code: "TR",
    dial_code: "+90"
},
{
    name: "Turkmenistan",
    flag: "🇹🇲",
    code: "TM",
    dial_code: "+993"
},
{
    name: "Turks and Caicos Islands",
    flag: "🇹🇨",
    code: "TC",
    dial_code: "+1649"
},
{
    name: "Tuvalu",
    flag: "🇹🇻",
    code: "TV",
    dial_code: "+688"
},
{
    name: "Uganda",
    flag: "🇺🇬",
    code: "UG",
    dial_code: "+256"
},
{
    name: "Ukraine",
    flag: "🇺🇦",
    code: "UA",
    dial_code: "+380"
},
{
    name: "United Arab Emirates",
    flag: "🇦🇪",
    code: "AE",
    dial_code: "+971"
},
{
    name: "United Kingdom",
    flag: "🇬🇧",
    code: "GB",
    dial_code: "+44"
},
{
    name: "United States",
    flag: "🇺🇸",
    code: "US",
    dial_code: "+1"
},
{
    name: "Uruguay",
    flag: "🇺🇾",
    code: "UY",
    dial_code: "+598"
},
{
    name: "Uzbekistan",
    flag: "🇺🇿",
    code: "UZ",
    dial_code: "+998"
},
{
    name: "Vanuatu",
    flag: "🇻🇺",
    code: "VU",
    dial_code: "+678"
},
{
    name: "Venezuela, Bolivarian Republic of Venezuela",
    flag: "🇻🇪",
    code: "VE",
    dial_code: "+58"
},
{
    name: "Vietnam",
    flag: "🇻🇳",
    code: "VN",
    dial_code: "+84"
},
{
    name: "Virgin Islands, British",
    flag: "🇻🇬",
    code: "VG",
    dial_code: "+1284"
},
{
    name: "Virgin Islands, U.S.",
    flag: "🇻🇮",
    code: "VI",
    dial_code: "+1340"
},
{
    name: "Wallis and Futuna",
    flag: "🇼🇫",
    code: "WF",
    dial_code: "+681"
},
{
    name: "Yemen",
    flag: "🇾🇪",
    code: "YE",
    dial_code: "+967"
},
{
    name: "Zambia",
    flag: "🇿🇲",
    code: "ZM",
    dial_code: "+260"
},
{
    name: "Zimbabwe",
    flag: "🇿🇼",
    code: "ZW",
    dial_code: "+263"
}
];

export const currencies = [
    {
        AlphabeticCode: "AUD",
        Currency: "Australian Dollar",
        Entity: "Australia",
        MinorUnit: "2",
        NumericCode: 36.0,
        flag: "🇦🇺",
        flagUrl: "https://flagcdn.com/w320/au.png",
        code: "AU",
        dial_code: "+61"
    },
    {
        AlphabeticCode: "BIF",
        Currency: "Burundi Franc",
        Entity: "Burundi",
        MinorUnit: "0",
        NumericCode: 108.0,
        flag: "🇧🇮",
        flagUrl: "https://flagcdn.com/w320/bi.png",
        code: "BI",
        dial_code: "+257"
    },
    {
        AlphabeticCode: "CNY",
        Currency: "Yuan Renminbi",
        Entity: "China",
        MinorUnit: "2",
        NumericCode: 156.0,
        flag: "🇨🇳",
        flagUrl: "https://flagcdn.com/w320/cn.png",
        code: "CN",
        dial_code: "+86"
    },
    {
        AlphabeticCode: "CDF",
        Currency: "Congolese Franc",
        Entity: "Congo, The Democratic Republic of the Congo",
        MinorUnit: "2",
        NumericCode: 976.0,
        flag: "🇨🇩",
        flagUrl: "https://flagcdn.com/w320/cd.png",
        code: "CD",
        dial_code: "+243"
    },
    {
        AlphabeticCode: "EGP",
        Currency: "Egyptian Pound",
        Entity: "Egypt",
        MinorUnit: "2",
        NumericCode: 818.0,
        flag: "🇪🇬",
        flagUrl: "https://flagcdn.com/w320/eg.png",
        code: "EG",
        dial_code: "+20"
    },
    {
        AlphabeticCode: "ETB",
        Currency: "Ethiopian Birr",
        Entity: "Ethiopia",
        MinorUnit: "2",
        NumericCode: 230.0,
        flag: "🇪🇹",
        flagUrl: "https://flagcdn.com/w320/et.png",
        code: "ET",
        dial_code: "+251"
    },
    {
        AlphabeticCode: "ERN",
        Currency: "Nakfa",
        Entity: "Eritrea",
        MinorUnit: "2",
        NumericCode: 232.0,
        flag: "🇪🇷",
        flagUrl: "https://flagcdn.com/w320/er.png",
        code: "ER",
        dial_code: "+291"
    },
    {
        AlphabeticCode: "INR",
        Currency: "Indian Rupee",
        Entity: "India",
        MinorUnit: "2",
        NumericCode: 356.0,
        flag: "🇮🇳",
        flagUrl: "https://flagcdn.com/w320/in.png",
        code: "IN",
        dial_code: "+91"
    },
    {
        AlphabeticCode: "IRR",
        Currency: "Iranian Rial",
        Entity: "Iran, Islamic Republic of Persian Gulf",
        MinorUnit: "2",
        NumericCode: 364.0,
        flag: "🇮🇷",
        flagUrl: "https://flagcdn.com/w320/ir.png",
        code: "IR",
        dial_code: "+98"
    },
    {
        AlphabeticCode: "KES",
        Currency: "Kenyan Shilling",
        Entity: "Kenya",
        MinorUnit: "2",
        NumericCode: 404.0,
        flag: "🇰🇪",
        flagUrl: "https://flagcdn.com/w320/ke.png",
        code: "KE",
        dial_code: "+254"
    },
    {
        AlphabeticCode: "NGN",
        Currency: "Naira",
        Entity: "Nigeria",
        MinorUnit: "2",
        NumericCode: 566.0,
        flag: "🇳🇬",
        flagUrl: "https://flagcdn.com/w320/ng.png",
        code: "NG",
        dial_code: "+234"
    },
    {
        AlphabeticCode: "RUB",
        Currency: "Russian Ruble",
        Entity: "Russia",
        MinorUnit: "2",
        NumericCode: 643.0,
        flag: "🇷🇺",
        flagUrl: "https://flagcdn.com/w320/ru.png",
        code: "RU",
        dial_code: "+7"
    },
    {
        AlphabeticCode: "RWF",
        Currency: "Rwanda Franc",
        Entity: "Rwanda",
        MinorUnit: "0",
        NumericCode: 646.0,
        flag: "🇷🇼",
        flagUrl: "https://flagcdn.com/w320/rw.png",
        code: "RW",
        dial_code: "+250"
    },
    {
        AlphabeticCode: "SAR",
        Currency: "Saudi Riyal",
        Entity: "Saudi Arabia",
        MinorUnit: "2",
        NumericCode: 682.0,
        flag: "🇸🇦",
        flagUrl: "https://flagcdn.com/w320/sa.png",
        code: "SA",
        dial_code: "+966"
    },
    {
        AlphabeticCode: "SOS",
        Currency: "Somali Shilling",
        Entity: "Somalia",
        MinorUnit: "2",
        NumericCode: 706.0,
        flag: "🇸🇴",
        flagUrl: "https://flagcdn.com/w320/so.png",
        code: "SO",
        dial_code: "+252"
    },
    {
        AlphabeticCode: "ZAR",
        Currency: "Rand",
        Entity: "South Africa",
        MinorUnit: "2",
        NumericCode: 710.0,
        flag: "🇿🇦",
        code: "ZA",
        flagUrl: "https://flagcdn.com/w320/za.png",
        dial_code: "+27"
    },
    {
        AlphabeticCode: "TZS",
        Currency: "Tanzanian Shilling",
        Entity: "Tanzania, United Republic of Tanzania",
        MinorUnit: "2",
        NumericCode: 834.0,
        flag: "🇹🇿",
        flagUrl: "https://flagcdn.com/w320/tz.png",
        code: "TZ",
        dial_code: "+255",
    },
    {
        AlphabeticCode: "UGX",
        Currency: "Uganda Shilling",
        Entity: "Uganda",
        MinorUnit: "0",
        NumericCode: 800.0,
        flag: "🇺🇬",
        flagUrl: "https://flagcdn.com/w320/ug.png",
        code: "UG",
        dial_code: "+256"
    },
    {
        AlphabeticCode: "AED",
        Currency: "UAE Dirham",
        Entity: "United Arab Emirates",
        MinorUnit: "2",
        NumericCode: 784.0,
        flag: "🇦🇪",
        flagUrl: "https://flagcdn.com/w320/ae.png",
        code: "AE",
        dial_code: "+971"
    },
    {
        AlphabeticCode: "GBP",
        Currency: "Pound Sterling",
        Entity: "United Kingdom",
        MinorUnit: "2",
        NumericCode: 826.0,
        flag: "🇬🇧",
        flagUrl: "https://flagcdn.com/w320/gb.png",
        code: "GB",
        dial_code: "+44"
    },
    {
        AlphabeticCode: "USD",
        Currency: "US Dollar",
        Entity: "United States",
        MinorUnit: "2",
        NumericCode: 840.0,
        flag: "🇺🇸",
        flagUrl: "https://flagcdn.com/w320/us.png",
        code: "US",
        dial_code: "+1"
    },
    {
        AlphabeticCode: "SDG",
        Currency: "Sudanese Pound",
        Entity: "South Sudan",
        MinorUnit: "2",
        NumericCode: 938.0,
        flag: "🇸🇸",
        flagUrl: "https://flagcdn.com/w320/ss.png",
        code: "SS",
        dial_code: "+211"
    }
];
