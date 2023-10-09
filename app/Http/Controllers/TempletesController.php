<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Templete;
use App\Models\TemplateParameter;

class TempletesController extends Controller
{

    public function submitTemplate(Request $request)
    {
        $templateID = round(microtime(true) * 1000);
        $user = auth()->user();
        $userId = $user->id;

        $html = $request->input('html');
        $description = $request->input('description');
        $label = $request->input('label');
        $parameters = json_decode($request->input('parameters'), true);

        $templete = new Templete;
        $templete->templateID = $templateID;
        $templete->userId = $userId;
        $templete->label = $label;
        $templete->description = $description;
        $templete->html = $html;
        $templete->deleted = 'false';
        $templete->save();

        for ($i = 0; $i < sizeof($parameters); $i++) {
            $parameter = $parameters[$i];
            $templateParameter = new TemplateParameter;
            $templateParameter->templateID = $templateID;
            $templateParameter->inputType = $parameter['inputType'];
            $templateParameter->label = $parameter['label'];
            $templateParameter->placeHolder = $parameter['placeHolder'];
            $templateParameter->value = $parameter['value'];
            $templateParameter->save();
        }

        return array(
            'status' => 200,
            'templateID' => $templateID,
            'message' => 'OK',
        );
    }

    public function loadCampaignTemplates(Request $request)
    {
        $deleted = 'false';
        $data['templates'] = array();
        $result = DB::select("SELECT * FROM templetes WHERE deleted=:deleted ORDER BY templateID DESC", ['deleted' => $deleted]);
        if ($result) {
            for ($i = 0; $i < sizeof($result); $i++) {
                $roww = $result[$i];
                $sample_array = array();
                $sample_array = $roww;
                $sample_array->html = html_entity_decode($roww->html);
                $sample_array->parameters = $this->loadTemplateParameters($roww->templateID);
                array_push($data['templates'], $sample_array);
            }
        } else {
            return null;
        }
        $data['status'] = 200;
        $data['message'] = 'OK';
        return $data;
    }

    private function loadTemplateParameters($templateID)
    {
        return DB::select("SELECT* FROM template_parameters WHERE templateID = :templateID ORDER BY id ASC", ['templateID' => $templateID]);
    }

    public function loadTemplateDetails($templateID)
    {
        $roww = DB::table('templetes')
            ->where('deleted', 'false')
            ->where('templateID', $templateID)
            ->first();

        $template = $roww;
        $template->html = html_entity_decode($roww->html);
        $template->parameters = $this->loadTemplateParameters($templateID);
        return array(
            'status' => 200,
            'template' => $template,
            'message' => 'OK',
        );
    }

    public function updateTemplate(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;

        $parameters = json_decode($request->input('parameters'), true);

        DB::table('templetes')
            ->where(['templateID' => $request->input('templateID')])
            ->update([
                'userId' => $userId,
                'label' => $request->input('label'),
                'html' => $request->input('html'),
                'deleted' => 'false'
            ]);

        $result = DB::table('template_parameters')
            ->where(['templateID' => $request->input('templateID')])
            ->delete();

        if ($result) {
            for ($i = 0; $i < sizeof($parameters); $i++) {
                $parameter = $parameters[$i];
                $templateParameter = new TemplateParameter;
                $templateParameter->templateID = $request->input('templateID');
                $templateParameter->inputType = $parameter['inputType'];
                $templateParameter->label = $parameter['label'];
                $templateParameter->placeHolder = $parameter['placeHolder'];
                $templateParameter->value = $parameter['value'];
                $templateParameter->save();
            }
            return array(
                'status' => 200,
                'templateID' => $request->input('templateID'),
                'message' => 'OK',
            );
        } else {
            return array(
                'status' => 500,
                'message' => 'Failed to remove old templates parameters, try again...',
            );
        }
    }
}
