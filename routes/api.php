<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;

use App\Http\Controllers\PaymentMethodsController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\TempletesController;
use App\Http\Controllers\CampaignsController;
use App\Http\Controllers\ContactBackupsController;
use App\Http\Controllers\FriendsController;
use App\Http\Controllers\LocalizationController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\BalancesController;
use App\Http\Controllers\MtnMomoController;
use App\Http\Controllers\BanksController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\AirtelMoneyController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\BusinessApiController;
use App\Http\Controllers\SystemController;
use App\Http\Controllers\PaymentMethodTariffController;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\MarketplceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('mtn', [TransactionController::class, 'MtnMomoWebHook']);
Route::post('mtnDisbursement', [TransactionController::class, 'MtnDisbursementMomoWebHook']);
Route::post('paypal', [TransactionController::class, 'PayPalWebHook']);
Route::post('braintree', [TransactionController::class, 'braintree']);
Route::post('airtel_collection', [TransactionController::class, 'AirtelCollectionsWebHook']);
Route::post('airtel_collection_dev', [TransactionController::class, 'AirtelCollectionsWebHook']);

//business api
Route::post('resetApiKey', [LoginController::class, 'resetApiKey']);
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', [LoginController::class, 'logout']);
    Route::post('requestToPay', [BusinessApiController::class, 'requestToPay']);
    Route::get('requestToPay/{request_token}', [BusinessApiController::class, 'requestToPayStatus']);
});

//auth api
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('forgot_password', [ForgotPasswordController::class, 'submitForgetPasswordForm']);
Route::post('reset_password', [ForgotPasswordController::class, 'resetPassword']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    /*
    Route::get('/getUserProfile', function (Request $request) {
        return auth()->user();
    });*/
    Route::get('getUserProfile', [UsersController::class, 'getUserProfile']);
    Route::get('loadSystemUsers', [UsersController::class, 'loadSystemUsers']);

    // API route for logout user
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('setNewPin', [AuthController::class, 'setNewPin']);
    Route::post('authenticatePin', [AuthController::class, 'authenticatePin']);
    Route::post('/change_password', [ResetPasswordController::class, 'change_password']);

    Route::post('createPaymentMethod', [PaymentMethodsController::class, 'createPaymentMethod']);
    Route::get('loadPaymentMethods', [PaymentMethodsController::class, 'loadPaymentMethods']);
    Route::get('loadAllPaymentMethods', [PaymentMethodsController::class, 'loadAllPaymentMethods']);
    Route::get('loadStebleCurency', [PaymentMethodsController::class, 'loadStebleCurency']);
    Route::get('loadSystemCurency', [PaymentMethodsController::class, 'loadSystemCurency']);
    Route::get('loadSendActivePaymentMethods', [PaymentMethodsController::class, 'loadSendActivePaymentMethods']);
    Route::post('addSuportedCountry', [PaymentMethodsController::class, 'addSuportedCountry']);
    Route::get('fetchSupportedCountries', [PaymentMethodsController::class, 'fetchSupportedCountries']);
    Route::delete('deleteCountry/{code}', [PaymentMethodsController::class, 'deleteCountry']);
    Route::post('addSuportedCurrency', [PaymentMethodsController::class, 'addSuportedCurrency']);
    Route::get('fetchSupportedCurrencies', [PaymentMethodsController::class, 'fetchSupportedCurrencies']);
    Route::get('fetchLoadUserCurrency/{userId}', [PaymentMethodsController::class, 'fetchLoadUserCurrency']);
    Route::get('fetchSupportedCurrenciesExchangeRates', [PaymentMethodsController::class, 'fetchSupportedCurrenciesExchangeRates']);
    Route::delete('deleteCurrency/{code}', [PaymentMethodsController::class, 'deleteCurrency']);
    Route::get('loadCurencyDetails/{code}', [PaymentMethodsController::class, 'loadCurencyDetails']);
    Route::delete('deleteActiveCurrency/{code}', [PaymentMethodsController::class, 'deleteActiveCurrency']);
    Route::post('createNewCurrency', [PaymentMethodsController::class, 'createNewCurrency']);
    Route::get('loadPaymentMethodCurencies/{paymentMethod}', [PaymentMethodsController::class, 'loadPaymentMethodCurencies']);
    Route::get('loadPaymentMethodCurencyDetails/{code}', [PaymentMethodsController::class, 'loadPaymentMethodCurencyDetails']);
    Route::get('fetchPaymentMethod/{code}', [PaymentMethodsController::class, 'fetchPaymentMethod']);
    Route::get('fetchPaymentMethodStatistics/{code}', [PaymentMethodsController::class, 'fetchPaymentMethodStatistics']);
    Route::post('updatePaymentMethodConfig', [PaymentMethodsController::class, 'updatePaymentMethodConfig']);
    Route::post('updatePaymentMethodLocationConfig', [PaymentMethodsController::class, 'updatePaymentMethodLocationConfig']);
    Route::post('updateCurrencyLocationConfig', [PaymentMethodsController::class, 'updateCurrencyLocationConfig']);
    Route::post('updateCurrencyConfig', [PaymentMethodsController::class, 'updateCurrencyConfig']);

    Route::get('getRequestToPayRequest/{request_token}', [BusinessApiController::class, 'getRequestToPayRequest']);
    Route::post('payWithMyWallet', [BusinessApiController::class, 'payWithMyWallet']);
    Route::post('payWithPaymentGateway', [BusinessApiController::class, 'payWithPaymentGateway']);

    //transactions
    Route::post('createTopupRequest', [TransactionController::class, 'createTopupRequest']);
    Route::post('createCustomerTopupRequest', [TransactionController::class, 'createCustomerTopupRequest']);
    Route::get('loadTransactionReauestDetails/{externalId}', [TransactionController::class, 'loadTransactionReauestDetails']);
    Route::get('loadMyTransactions', [TransactionController::class, 'loadMyTransactions']);
    Route::get('loadUserTransactions/{userId}', [TransactionController::class, 'loadUserTransactions']);
    Route::get('loadCompleteTransactions', [TransactionController::class, 'loadCompleteTransactions']);
    Route::get('getMyBalances', [BalancesController::class, 'getMyBalances']);
    Route::get('getUserAccountBalance/{userId}', [BalancesController::class, 'getUserAccountBalance']);
    Route::post('sendMoney', [TransactionController::class, 'sendMoney']);
    Route::post('cashOut', [TransactionController::class, 'cashOut']);
    Route::post('topupMarketingBalance', [TransactionController::class, 'topupMarketingBalance']);

    //notifications
    Route::get('fetchUserNotifications', [NotificationsController::class, 'fetchUserNotifications']);
    Route::get('fetchUnNewNotifications', [NotificationsController::class, 'fetchUnNewNotifications']);

    //campaigns
    Route::post('submitTemplate', [TempletesController::class, 'submitTemplate']);
    Route::get('loadCampaignTemplates', [TempletesController::class, 'loadCampaignTemplates']);
    Route::get('loadTemplateDetails/{templateID}', [TempletesController::class, 'loadTemplateDetails']);
    Route::post('updateTemplate', [TempletesController::class, 'updateTemplate']);
    Route::post('submitCampaignTarget', [CampaignsController::class, 'submitCampaignTarget']);
    Route::get('loadCampaignTargets', [CampaignsController::class, 'loadCampaignTargets']);
    Route::get('loadCampaignTargetDetails/{targetID}', [CampaignsController::class, 'loadCampaignTargetDetails']);
    Route::delete('deleteCampaignTarget/{targetID}', [CampaignsController::class, 'deleteCampaignTarget']);
    Route::post('submitCampaignOffer', [CampaignsController::class, 'submitCampaignOffer']);
    Route::post('uploadCampaignOfferFile', [CampaignsController::class, 'uploadCampaignOfferFile']);
    Route::get('loadSystemCampaignOffers', [CampaignsController::class, 'loadSystemCampaignOffers']);
    Route::get('loadSystemCampaignOfferDetails/{offerId}', [CampaignsController::class, 'loadSystemCampaignOfferDetails']);
    Route::post('updateCampaignOffer', [CampaignsController::class, 'updateCampaignOffer']);
    Route::delete('deleteOffer/{offerId}', [CampaignsController::class, 'deleteOffer']);
    Route::post('submitCampaign', [CampaignsController::class, 'submitCampaign']);
    Route::get('loadMarketingCampaings', [CampaignsController::class, 'loadMarketingCampaings']);
    Route::get('loadCampaignDetails/{campaignID}', [CampaignsController::class, 'loadCampaignDetails']);
    Route::delete('deleteCampaign/{campaignID}', [CampaignsController::class, 'deleteCampaign']);
    Route::get('runCampaign/{campaignID}', [CampaignsController::class, 'runCampaign']);
    Route::post('updateCampaign', [CampaignsController::class, 'updateCampaign']);

    Route::post('synchronizeContact', [ContactBackupsController::class, 'synchronizeContact']);
    Route::get('getContactsUsers', [ContactBackupsController::class, 'getContactsUsers']);
    Route::get('searchUsers/{queryText}', [UsersController::class, 'searchUsers']);
    Route::post('updateUserProfileValue', [UsersController::class, 'updateUserProfileValue']);
    Route::get('getSelectedUserProfile/{userId}', [UsersController::class, 'getSelectedUserProfile']);
    Route::get('getUserProfileByUserName/{user_name}', [UsersController::class, 'getUserProfileByUserName']);
    Route::post('saveUserAvator', [UsersController::class, 'saveUserAvator']);
    Route::post('uploadUserCoverPhoto', [UsersController::class, 'uploadUserCoverPhoto']);
    Route::post('updateUserAddress', [UsersController::class, 'updateUserAddress']);
    Route::post('updateUserLocation', [UsersController::class, 'updateUserLocation']);
    Route::get('getAdminUsers', [UsersController::class, 'getAdminUsers']);

    //social
    Route::post('createNewFriend', [FriendsController::class, 'createNewFriend']);
    Route::get('checkFriendshipStatus/{friendId}', [FriendsController::class, 'checkFriendshipStatus']);
    Route::get('getUserChatID/{friendId}', [FriendsController::class, 'getUserChatID']);
    Route::get('fetchFriends', [FriendsController::class, 'fetchFriends']);
    Route::get('fetchCustomerFriends/{friendId}', [FriendsController::class, 'fetchCustomerFriends']);
    Route::get('getChatDetails/{chatId}', [FriendsController::class, 'getChatDetails']);
    Route::post('sendStringMessage', [FriendsController::class, 'sendStringMessage']);
    Route::post('sendContact', [FriendsController::class, 'sendContact']);
    Route::post('sendLocation', [FriendsController::class, 'sendLocation']);
    Route::post('sendFile', [FriendsController::class, 'sendFile']);
    Route::post('sendProduct', [FriendsController::class, 'sendProduct']);
    Route::get('fetchChatConversation/{chatId}', [FriendsController::class, 'fetchChatConversation']);
    Route::get('getChats', [FriendsController::class, 'getChats']);
    Route::put('blockUser/{friendId}', [FriendsController::class, 'blockUser']);
    Route::put('unblockUser/{friendId}', [FriendsController::class, 'unblockUser']);
    Route::get('fetchNewMessage', [FriendsController::class, 'fetchNewMessage']);
    Route::post('createNewChatGroup', [FriendsController::class, 'createNewChatGroup']);
    Route::get('getCustomerCareChatGroupId', [FriendsController::class, 'getCustomerCareChatGroupId']);
    Route::get('getUserCustomerCareChatGroupId/{userId}', [FriendsController::class, 'getUserCustomerCareChatGroupId']);
    Route::get('getCustomerServiceChats', [FriendsController::class, 'getCustomerServiceChats']);
    Route::get('getNewChatsMessages', [FriendsController::class, 'getNewChatsMessages']);
    Route::get('fetchNewMessages', [FriendsController::class, 'fetchNewMessages']);
    Route::get('fetchMessageContacts/{chatId}', [FriendsController::class, 'fetchMessageContacts']);
    Route::get('fetchFriendChatConversationMedia/{chatId}', [FriendsController::class, 'fetchFriendChatConversationMedia']);

    //Localizations
    Route::post('createTranslation', [LocalizationController::class, 'createTranslation']);
    Route::delete('deleteTranslation/{translationId}', [LocalizationController::class, 'deleteTranslation']);
    Route::post('createLocalization', [LocalizationController::class, 'createLocalization']);
    Route::get('loadTranslations/{localizationId}', [LocalizationController::class, 'loadTranslations']);
    Route::get('loadLocalizations', [LocalizationController::class, 'loadLocalizations']);

    //banks
    Route::post('createBank', [BanksController::class, 'createBank']);
    Route::get('loadActiveBanks', [BanksController::class, 'loadActiveBanks']);
    Route::get('loadAllBanks', [BanksController::class, 'loadAllBanks']);
    Route::get('fetchBank/{code}', [BanksController::class, 'fetchBank']);
    Route::get('fetchBankStatistics/{code}', [BanksController::class, 'fetchBankStatistics']);
    Route::post('createNewBankCurrency', [BanksController::class, 'createNewBankCurrency']);
    Route::get('loadBankCurencies/{bank}', [BanksController::class, 'loadBankCurencies']);
    Route::get('loadBankCurencyDetails/{code}', [BanksController::class, 'loadBankCurencyDetails']);
    Route::delete('deleteActiveBankCurrency/{code}', [BanksController::class, 'deleteActiveBankCurrency']);
    Route::post('updateBankConfig', [BanksController::class, 'updateBankConfig']);
    Route::post('updateBankLocationConfig', [BanksController::class, 'updateBankLocationConfig']);
    Route::post('updateBankCurrencyConfig', [BanksController::class, 'updateBankCurrencyConfig']);

    Route::post('addNewBankCurrencyTariff', [BanksController::class, 'addNewBankCurrencyTariff']);
    Route::get('fetchBankCurrencyTariffs/{code}', [BanksController::class, 'fetchBankCurrencyTariffs']);
    Route::delete('deleteBankCurrencyTariffs/{code}', [BanksController::class, 'deleteBankCurrencyTariffs']);
    Route::post('updateBankCurrencyTariffConfig', [BanksController::class, 'updateBankCurrencyTariffConfig']);
    Route::post('updateBankCurrencyTariff', [BanksController::class, 'updateBankCurrencyTariff']);
    Route::get('fetchBankCurrencyTariffPlan', [BanksController::class, 'fetchBankCurrencyTariffPlan']);

    //applications
    Route::post('submitApplication', [ApplicationController::class, 'submitApplication']);
    Route::post('updateApplicationCallbackURL', [ApplicationController::class, 'updateApplicationCallbackURL']);

    Route::get('loadMyApplications', [ApplicationController::class, 'loadMyApplications']);
    Route::get('loadMyApplications/{applicationId}', [ApplicationController::class, 'loadMyApplicationDetails']);
    Route::delete('deleteApplication/{applicationId}', [ApplicationController::class, 'DeleteApplication']);

    //System
    Route::post('submitServicePoint', [SystemController::class, 'submitServicePoint']);
    Route::post('updateSetting', [SystemController::class, 'updateSetting']);
    Route::post('sendServicePointGalleryImage', [SystemController::class, 'sendServicePointGalleryImage']);
    Route::post('submitSystemAdmin', [SystemController::class, 'submitSystemAdmin']);
    Route::delete('deleteSystemAdmin/{userId}', [SystemController::class, 'deleteSystemAdmin']);

    Route::get('fetchAllServicePoints', [SystemController::class, 'fetchAllServicePoints']);
    Route::get('getSystemSettings', [SystemController::class, 'getSystemSettings']);
    Route::get('fetchServicePointDetails/{servicePointId}', [SystemController::class, 'fetchServicePointDetails']);
    Route::get('fetchServicePointAdmins/{servicePointId}', [SystemController::class, 'fetchServicePointAdmins']);
    Route::post('fetchNearestServicePoints', [SystemController::class, 'fetchNearestServicePoints']);
    Route::post('fetchRequestNearestServicePoint', [SystemController::class, 'fetchRequestNearestServicePoint']);
    Route::get('getServicePointGallery/{servicePointId}', [SystemController::class, 'getServicePointGallery']);
    Route::get('loadDashboardSumary', [SystemController::class, 'loadDashboardSumary']);
    Route::get('fetchDashboardSparklineData', [SystemController::class, 'fetchDashboardSparklineData']);

    //tarifs
    Route::post('addNewPaymentMethodCurrencyTariff', [PaymentMethodTariffController::class, 'addNewPaymentMethodCurrencyTariff']);
    Route::post('updatePaymentMethodCurrencyTariff', [PaymentMethodTariffController::class, 'updatePaymentMethodCurrencyTariff']);
    Route::get('fetchPaymentMethodCurrencyTariffs/{code}', [PaymentMethodTariffController::class, 'fetchPaymentMethodCurrencyTariffs']);
    Route::delete('deletePaymentMethodCurrencyTariffs/{tariffId}', [PaymentMethodTariffController::class, 'deletePaymentMethodCurrencyTariffs']);
    Route::post('updatePaymentMethodTariffConfig', [PaymentMethodTariffController::class, 'updatePaymentMethodTariffConfig']);
    Route::post('updatePaymentMethodCurrencyConfig', [PaymentMethodTariffController::class, 'updatePaymentMethodCurrencyConfig']);
    Route::get('fetchPaymentMethodCurrencyTariffPlan', [PaymentMethodTariffController::class, 'fetchPaymentMethodCurrencyTariffPlan']);

    //files
    Route::post('uploadSingle', [FileUploadController::class, 'uploadSingle']);
    Route::post('uploadMultiple', [FileUploadController::class, 'uploadMultiple']);
    Route::get('loadUserFiles', [FileUploadController::class, 'loadUserFiles']);
    Route::delete('deleteFile/{fileId}', [FileUploadController::class, 'deleteFile']);

    //shopping

    /*client requests*/
    Route::get('loadShopingFeaturedCategories', [MarketplceController::class, 'loadShopingFeaturedCategories']);
    Route::get('loadShopingMainCategories', [MarketplceController::class, 'loadShopingMainCategories']);
    Route::get('loadFeaturedProducts', [MarketplceController::class, 'loadFeaturedProducts']);
    Route::get('loadRecommendedProducts', [MarketplceController::class, 'loadRecommendedProducts']);
    Route::get('loadProductDetailsBySlug/{slug}', [MarketplceController::class, 'loadProductDetailsBySlug']);
    Route::get('loadViewedProducts', [MarketplceController::class, 'loadViewedProducts']);
    Route::post('addToWishlist', [MarketplceController::class, 'addToWishlist']);
    Route::get('loadWishlist', [MarketplceController::class, 'loadWishlist']);
    Route::post('addToCart', [MarketplceController::class, 'addToCart']);
    Route::get('loadCartlist', [MarketplceController::class, 'loadCartlist']);
    Route::post('incrementCartProductQty', [MarketplceController::class, 'incrementCartProductQty']);
    Route::post('decrementCartProductQty', [MarketplceController::class, 'decrementCartProductQty']);
    Route::get('loadCartPriceData', [MarketplceController::class, 'loadCartPriceData']);
    Route::post('storeUserAddress', [MarketplceController::class, 'storeUserAddress']);
    Route::get('fetchUserAddress', [MarketplceController::class, 'fetchUserAddress']);
    Route::delete('deleteShippingAddresses/{addressId}', [MarketplceController::class, 'deleteShippingAddresses']);
    Route::post('updateInvoiceShippingAddress', [MarketplceController::class, 'updateInvoiceShippingAddress']);
    Route::post('createOrder', [MarketplceController::class, 'createOrder']);
    Route::get('fetchOrderHistory', [MarketplceController::class, 'fetchOrderHistory']);
    Route::get('fetchPendingOrders', [MarketplceController::class, 'fetchPendingOrders']);
    Route::get('fetchSellerOrderHistory', [MarketplceController::class, 'fetchSellerOrderHistory']);
    Route::get('fetchSellerPendingOrders', [MarketplceController::class, 'fetchSellerPendingOrders']);
    Route::get('fetchUserOrderItems/{invoice_id}', [MarketplceController::class, 'fetchUserOrderItems']);
    Route::get('fetchSellerOrderItems/{invoice_id}', [MarketplceController::class, 'fetchSellerOrderItems']);
    Route::post('createSellerAccount', [MarketplceController::class, 'createSellerAccount']);
    Route::get('loadMySellerAccount', [MarketplceController::class, 'loadMySellerAccount']);
    Route::get('loadSellerAccountInfo/{seller_id}', [MarketplceController::class, 'loadSellerAccountInfo']);
    Route::post('loadSellerProducts', [MarketplceController::class, 'loadSellerProducts']);
    Route::post('updateShopIcon', [MarketplceController::class, 'updateShopIcon']);
    Route::post('updateShopValue', [MarketplceController::class, 'updateShopValue']);
    Route::post('updateShopIdentificationValue', [MarketplceController::class, 'updateShopIdentificationValue']);
    Route::get('loadMyProductsCatalogue', [MarketplceController::class, 'loadMyProductsCatalogue']);
    Route::post('submitProductUpdates', [MarketplceController::class, 'submitProductUpdates']);
    Route::get('loadPackageTypes', [MarketplceController::class, 'loadPackageTypes']);
    Route::post('submitDeliveryCompany', [MarketplceController::class, 'submitDeliveryCompany']);
    Route::get('loadMyDeliveryCompany', [MarketplceController::class, 'loadMyDeliveryCompany']);
    Route::get('loadDeliveryCompanyDetails/{delivery_company_id}', [MarketplceController::class, 'loadDeliveryCompanyDetails']);
    Route::get('fetchCompanyDeliveryRoutes/{delivery_company_id}', [MarketplceController::class, 'fetchCompanyDeliveryRoutes']);
    Route::post('updateDeliveryCompanyIcon', [MarketplceController::class, 'updateDeliveryCompanyIcon']);
    Route::post('updateDeliveryCompanyValue', [MarketplceController::class, 'updateDeliveryCompanyValue']);
    Route::post('updateDeliveryCompanyIdentificationValue', [MarketplceController::class, 'updateDeliveryCompanyIdentificationValue']);
    Route::post('fetchDeliveryQuotations', [MarketplceController::class, 'fetchDeliveryQuotations']);
    Route::post('submitCompanyDeliveryPoint', [MarketplceController::class, 'submitCompanyDeliveryPoint']);
    Route::get('fetchUserCompanyDeliveryPoints', [MarketplceController::class, 'fetchUserCompanyDeliveryPoints']);
    Route::delete('deleteCompanyDeliveryPoint/{pointId}', [MarketplceController::class, 'deleteCompanyDeliveryPoint']);
    Route::post('updateProductPackagingConfig', [MarketplceController::class, 'updateProductPackagingConfig']);
    Route::get('loadDefaultDeliveryAddress', [MarketplceController::class, 'loadDefaultDeliveryAddress']);
    Route::get('updateUserDefaultDeliveryAddress/{addressId}', [MarketplceController::class, 'updateUserDefaultDeliveryAddress']);
    Route::post('switchSellerProductFeaturedStatus', [MarketplceController::class, 'switchSellerProductFeaturedStatus']);

    Route::post('submitCompanyDeliveryRoute', [MarketplceController::class, 'submitCompanyDeliveryRoute']);
    Route::get('fetchUserCompanyDeliveryRoutes', [MarketplceController::class, 'fetchUserCompanyDeliveryRoutes']);
    Route::delete('deleteCompanyDeliveryRoute/{destinationId}', [MarketplceController::class, 'deleteCompanyDeliveryRoute']);
    Route::get('loadProductDeliveryQuotationBySlug/{slug}', [MarketplceController::class, 'loadProductDeliveryQuotationBySlug']);

    Route::get('getUserPlaceDetails/{place_id}', [UsersController::class, 'getUserPlaceDetails']);
    Route::get('getUserPlaces', [UsersController::class, 'getUserPlaces']);

    /* server requests */
    Route::post('submitShopingCategory', [MarketplceController::class, 'submitShopingCategory']);
    Route::get('loadShopingCategories', [MarketplceController::class, 'loadShopingCategories']);
    Route::delete('deleteShopingCategory/{categoryId}', [MarketplceController::class, 'deleteShopingCategory']);

    Route::post('submitShopingBrand', [MarketplceController::class, 'submitShopingBrand']);
    Route::get('loadShopingBrands', [MarketplceController::class, 'loadShopingBrands']);
    Route::delete('deleteShopingBrand/{brandId}', [MarketplceController::class, 'deleteShopingBrand']);

    Route::post('submitShopingAttributeSet', [MarketplceController::class, 'submitShopingAttributeSet']);
    Route::get('loadShopingAttributeSets', [MarketplceController::class, 'loadShopingAttributeSets']);
    Route::delete('deleteShopingAttributeSet/{attributeId}', [MarketplceController::class, 'deleteShopingAttributeSet']);

    Route::post('submitSpecification', [MarketplceController::class, 'submitSpecification']);
    Route::get('loadSpecifications', [MarketplceController::class, 'loadSpecifications']);
    Route::get('loadProductCategorySpecifications/{productId}', [MarketplceController::class, 'loadProductCategorySpecifications']);
    Route::delete('deleteSpecification/{specificationId}', [MarketplceController::class, 'deleteSpecification']);

    Route::post('submitProduct', [MarketplceController::class, 'submitProduct']);
    Route::get('loadProducts', [MarketplceController::class, 'loadProducts']);
    Route::get('loadProductDetails/{productId}', [MarketplceController::class, 'loadProductDetails']);
    Route::delete('deleteProduct/{productId}', [MarketplceController::class, 'deleteProduct']);
    Route::post('submitProductPhoto', [MarketplceController::class, 'submitProductPhoto']);
    Route::post('deleteProductPhoto', [MarketplceController::class, 'deleteProductPhoto']);
    Route::post('submitShopingProductAttributeOption', [MarketplceController::class, 'submitShopingProductAttributeOption']);
    Route::get('loadProductAttributes/{productId}', [MarketplceController::class, 'loadProductAttributes']);
    Route::delete('deleteProductAttribute/{attributeId}', [MarketplceController::class, 'deleteProductAttribute']);
    Route::post('submitShopingProductSpecification', [MarketplceController::class, 'submitShopingProductSpecification']);
    Route::get('loadShopingProductSpecifications/{productId}', [MarketplceController::class, 'loadShopingProductSpecifications']);
    Route::delete('deleteShopingProductSpecification/{specificationId}', [MarketplceController::class, 'deleteShopingProductSpecification']);

    Route::post('submitShoppingProductDiscussion', [MarketplceController::class, 'submitShoppingProductDiscussion']);
    Route::post('submitShoppingProductDiscussionReply', [MarketplceController::class, 'submitShoppingProductDiscussionReply']);
    Route::get('getShoppingProductDiscussions/{productId}', [MarketplceController::class, 'getShoppingProductDiscussions']);
    Route::get('getShoppingLastProductDiscussion/{productId}', [MarketplceController::class, 'getShoppingLastProductDiscussion']);
    Route::get('fetchShoppingProductDiscussionDetails/{discussionId}', [MarketplceController::class, 'fetchShoppingProductDiscussionDetails']);
    Route::get('getShoppingProductDiscussionReplies/{discussionId}', [MarketplceController::class, 'getShoppingProductDiscussionReplies']);
    Route::get('fetchShoppingProductDiscussionReplyDetails/{replyId}', [MarketplceController::class, 'fetchShoppingProductDiscussionReplyDetails']);
    Route::post('switchProduuctFeaturedStatus', [MarketplceController::class, 'switchProduuctFeaturedStatus']);
    Route::get('getShoppingCategory/{categoryId}', [MarketplceController::class, 'getShoppingCategory']);
    Route::get('getShopingSubCategories/{categoryId}', [MarketplceController::class, 'getShopingSubCategories']);
    Route::get('loadCategoryProducts/{categoryId}', [MarketplceController::class, 'loadCategoryProducts']);
    Route::post('switchCategoryFeaturedStatus', [MarketplceController::class, 'switchCategoryFeaturedStatus']);

    Route::post('submitCollectionPoint', [MarketplceController::class, 'submitCollectionPoint']);
    Route::post('sendCollectionPointGalleryImage', [MarketplceController::class, 'sendCollectionPointGalleryImage']);
    Route::get('fetchAllCollectionPoints', [MarketplceController::class, 'fetchAllCollectionPoints']);
    Route::get('fetchCollectionPointDetails/{collectionPointId}', [MarketplceController::class, 'fetchCollectionPointDetails']);
    Route::get('fetchCollectionPointAdmins/{collectionPointId}', [MarketplceController::class, 'fetchCollectionPointAdmins']);
    Route::post('fetchNearestCollectionPoints', [MarketplceController::class, 'fetchNearestCollectionPoints']);
    Route::post('fetchNearestCollectionPoint', [MarketplceController::class, 'fetchNearestCollectionPoint']);
    Route::get('getShoppingCollectionPointGallery/{collectionPointId}', [MarketplceController::class, 'getShoppingCollectionPointGallery']);
    Route::post('submitSliderImage', [MarketplceController::class, 'submitSliderImage']);
    Route::get('fetchSliderImages', [MarketplceController::class, 'fetchSliderImages']);
    Route::delete('deleteSliderImage/{fileId}', [MarketplceController::class, 'deleteSliderImage']);
    Route::post('submitCamaignsBanner', [MarketplceController::class, 'submitCamaignsBanner']);
    Route::get('fetchCamaignsBanner', [MarketplceController::class, 'fetchCamaignsBanner']);
    Route::post('submitState', [MarketplceController::class, 'submitState']);
    Route::get('fetchStates', [MarketplceController::class, 'fetchStates']);
    Route::get('getCountryStates/{countryId}', [MarketplceController::class, 'getCountryStates']);
    Route::delete('deleteState/{stateId}', [MarketplceController::class, 'deleteState']);
    Route::post('submitCity', [MarketplceController::class, 'submitCity']);
    Route::get('fetchCities', [MarketplceController::class, 'fetchCities']);
    Route::get('getStatecities/{stateId}', [MarketplceController::class, 'getStatecities']);
    Route::delete('deleteCity/{cityId}', [MarketplceController::class, 'deleteCity']);

    Route::post('submitPackageType', [MarketplceController::class, 'submitPackageType']);
    Route::delete('deletePackageType/{packageTypeId}', [MarketplceController::class, 'deletePackageType']);

    Route::post('submitSellerVoucher', [MarketplceController::class, 'submitSellerVoucher']);
    Route::get('loadSellerVouchers', [MarketplceController::class, 'loadSellerVouchers']);
    Route::get('loadGiftVouchers', [MarketplceController::class, 'loadGiftVouchers']);
    Route::post('updateSellerVoucherPublishedStatus', [MarketplceController::class, 'updateSellerVoucherPublishedStatus']);
    Route::delete('deleteSellerVoucher/{voucher_id}', [MarketplceController::class, 'deleteSellerVoucher']);
    Route::post('updateSellerVoucher', [MarketplceController::class, 'updateSellerVoucher']);
    Route::post('submitSellerAdvert', [MarketplceController::class, 'submitSellerAdvert']);
    Route::get('loadSellerAdvert', [MarketplceController::class, 'loadSellerAdvert']);

    Route::post('updateSellerOrderDeliveryStatus', [MarketplceController::class, 'updateSellerOrderDeliveryStatus']);
    Route::get('loadDeliveryRequestsToMe', [MarketplceController::class, 'loadDeliveryRequestsToMe']);
    Route::get('loadDeliveryRequestPackages/{invoice_id}', [MarketplceController::class, 'loadDeliveryRequestPackages']);
    Route::get('loadDeliveryRequestsFromMe', [MarketplceController::class, 'loadDeliveryRequestsFromMe']);
    Route::get('loadDeliveryCompanyRequests', [MarketplceController::class, 'loadDeliveryCompanyRequests']);
    Route::get('loadDeliveryCompanyPendingRequests', [MarketplceController::class, 'loadDeliveryCompanyPendingRequests']);
    Route::get('loadDeliveryCompanyCancelledRequests', [MarketplceController::class, 'loadDeliveryCompanyCancelledRequests']);
    Route::get('rejectDeliveryCompanyShipment/{invoice_id}', [MarketplceController::class, 'rejectDeliveryCompanyShipment']);
    Route::get('acceptDeliveryCompanyShipment/{invoice_id}', [MarketplceController::class, 'acceptDeliveryCompanyShipment']);
    Route::get('finishDeliveryCompanyShipment/{invoice_id}', [MarketplceController::class, 'finishDeliveryCompanyShipment']);
    Route::get('loadDeliveryCompanyRequestDetails/{invoice_id}', [MarketplceController::class, 'loadDeliveryCompanyRequestDetails']);
});
