<?php

namespace App\Http\Controllers;

use App\Models\Translation;
use App\Models\Localization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocalizationController extends Controller
{

    public static function createTranslation(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $value = $request->input('value');
        $translationkey = $request->input('translationkey');
        $localizationId = $request->input('localizationId');

        $translation = new Translation;
        $translation->userId = $userId;
        $translation->translationkey = $translationkey;
        $translation->value = $value;
        $translation->localizationId = $localizationId;
        $translation->save();

        if (!$translation) {
            return array(
                'status' => 500,
                'message' => 'Faied to add Translation.'
            );
        } else {
            return array(
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public static function deleteTranslation($translationId)
    {
        $result = DB::table('translations')
            ->where(['id' => $translationId])
            ->delete();

        if ($result) {
            return array(
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public static function createLocalization(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $label = $request->input('label');
        $language = $request->input('language');

        $localization = new Localization;
        $localization->userId = $userId;
        $localization->label = $label;
        $localization->language = $language;
        $localization->save();

        if (!$localization) {
            return array(
                'status' => 500,
                'message' => 'Faied to add Localization.'
            );
        } else {
            return array(
                'status' => 200,
                'message' => 'OK'
            );
        }
    }

    public static function loadTranslations($localizationId)
    {
        $data = DB::select("SELECT translations.id, translations.userId, localizationId, translationkey, value, translations.deleted, translations.created_at AS creationTime, translations.deleteTime, translations.deleterId, label, language FROM translations, localizations WHERE translations.localizationId=localizations.id AND translations.localizationId='$localizationId'");

        return array(
            'status' => 200,
            'data' => $data,
            'message' => 'OK'
        );
    }

    public static function loadLocalizations()
    {
        return array(
            'status' => 200,
            'data' => Localization::all(),
            'message' => 'OK'
        );
    }
}
