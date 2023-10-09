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
use App\Http\Controllers\BlockIOController;
use App\Http\Controllers\AlphaVantageController;
use App\Http\Controllers\AirtelMoneyController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\BusinessApiController;
use App\Http\Controllers\SystemController;
use App\Http\Controllers\PaymentMethodTariffController;

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

    Route::get('/getUserProfile', function (Request $request) {
        return auth()->user();
    });
    Route::get('loadSystemUsers', [UsersController::class, 'loadSystemUsers']);

    // API route for logout user
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('setNewPin', [AuthController::class, 'setNewPin']);
    Route::post('authenticatePin', [AuthController::class, 'authenticatePin']);
    Route::post('/change_password', [ResetPasswordController::class, 'change_password']);

    Route::get('articles', [ArticleController::class, 'index']);
    Route::get('articles/{id}', [ArticleController::class, 'show']);
    Route::post('articles', [ArticleController::class, 'store']);
    Route::put('articles/{id}', [ArticleController::class, 'update']);
    Route::delete('articles/{id}', [ArticleController::class, 'destroy']);

    Route::post('createPaymentMethod', [PaymentMethodsController::class, 'createPaymentMethod']);
    Route::get('loadPaymentMethods', [PaymentMethodsController::class, 'loadPaymentMethods']);
    Route::get('loadAllPaymentMethods', [PaymentMethodsController::class, 'loadAllPaymentMethods']);
    Route::get('loadStebleCurency', [PaymentMethodsController::class, 'loadStebleCurency']);
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

    //blockIO
    Route::get('get_crypto_assets', [BlockIOController::class, 'get_crypto_assets']);
    Route::get('get_balance', [BlockIOController::class, 'get_balance']);
    Route::get('get_address_balance/{addresses}', [BlockIOController::class, 'get_address_balance']);
    Route::get('get_crypto_asset_info/{wallet}', [BlockIOController::class, 'get_crypto_asset_info']);
    Route::get('get_my_crypto_address_info/{wallet}', [BlockIOController::class, 'get_my_crypto_address_info']);
    Route::get('is_valid_address/{address_label}', [BlockIOController::class, 'is_valid_address']);
    Route::get('get_my_addresses', [BlockIOController::class, 'get_my_addresses']);
    Route::get('get_address_by_label/{label}', [BlockIOController::class, 'get_address_by_label']);
    Route::get('create_new_crypto_wallet/{cryptoWalletCode}', [BlockIOController::class, 'create_new_crypto_wallet']);
    Route::put('prepare_user_transaction/{cryptoWalletCode}', [BlockIOController::class, 'prepare_user_transaction']);
    Route::post('summarize_prepared_transaction', [BlockIOController::class, 'summarize_prepared_transaction']);
    Route::post('submit_transaction/{cryptoWalletCode}', [BlockIOController::class, 'submit_transaction']);
    Route::post('addnewCryptoAsset', [BlockIOController::class, 'addnewCryptoAsset']);
    Route::get('get_transactions/{cryptoWalletCode}', [BlockIOController::class, 'get_transactions']);

    //Alpha Vantage
    Route::get('getCryptoExchangeRates/{wallet}', [AlphaVantageController::class, 'getCryptoExchangeRates']);
    Route::get('getCryptoIntradayStockHistoryData/{wallet}', [AlphaVantageController::class, 'getCryptoIntradayStockHistoryData']);
    Route::get('getCryptoDailyStockHistoryData/{wallet}', [AlphaVantageController::class, 'getCryptoDailyStockHistoryData']);
    Route::get('getCryptoWeeklyStockHistoryData/{wallet}', [AlphaVantageController::class, 'getCryptoWeeklyStockHistoryData']);
    Route::get('getCryptoMothlyStockHistoryData/{wallet}', [AlphaVantageController::class, 'getCryptoMothlyStockHistoryData']);

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
});
