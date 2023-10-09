<template>
  <v-row>
    <v-col cols="12" lg="12">
      <v-card>
        <v-container class="pa-5">
          <v-row>
            <v-col cols="12" lg="12">
              <h2 class="font-weight-bold mb-0">Request To Pay</h2>
              <span class="font-weight-bold mb-0 py-2">
                This API request allows you to create a payment URL that can be
                used by your customer/user to pay for your goods/services
                through Nsiimbi. The API endpoint is
                <a class="text-primary"
                  >https://pay.nsiimbi.com/api/requestToPay</a
                >. <br /><br />Note: Only POST requests are accepted by this API
              </span>

              <v-divider></v-divider>

              <h3 class="font-weight-light mb-0">Request Headers</h3>

              <!--Request Headers-->
              <div
                class="mt-2"
                v-for="requestHeader in requestHeaders"
                :key="requestHeader.id"
              >
                <v-divider></v-divider>
                <v-row class="mt-2">
                  <v-col cols="12" lg="3">{{ requestHeader.label }} </v-col>
                  <v-col cols="12" lg="2">{{ requestHeader.dataType }} </v-col>
                  <v-col cols="12" lg="7">
                    <div v-html="requestHeader.description"></div>
                  </v-col>
                </v-row>
              </div>

              <v-divider></v-divider>

              <h3 class="font-weight-light mb-0">Request Body</h3>

              <v-row>
                <v-col cols="12">
                  <pre>
                    <div v-html="requestBody"></div>
                  </pre>
                </v-col>
              </v-row>

              <v-divider></v-divider>
            </v-col>
          </v-row>

          <h3 class="font-weight-light mb-0">Code samples</h3>
          <v-card class="mt-5">
            <v-tabs v-model="selectedLanguage" background-color="primary" dark>
              <v-tab v-for="language in programmingLanguages" :key="language.id"
                ><v-icon>{{ language.icon }}</v-icon>
                <!-- {{ language.text }} -->
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="selectedLanguage">
              <!--Bank deposit-->
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="pa-5">
                    <!--Code here-->
                    <v-row>
                      <v-col cols="12">
                        <pre>
                          <div v-html="javaScriptSample"></div>
                        </pre>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <!--Visa/master card-->
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="pa-5">
                    <!--code here-->
                    <v-row>
                      <v-col cols="12">
                        <pre>
                          <div v-html="phpSample"></div>
                        </pre>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <!--Mobile Money-->
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="pa-5">
                    <!--code here-->
                    <v-row>
                      <v-col cols="12">
                        <pre>
                          <div v-html="javaSample"></div>
                        </pre>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <!--Mobile Money-->
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="pa-5">
                    <!--code here-->
                    <v-row>
                      <v-col cols="12">
                        <pre>
                          <div v-html="pythonSample"></div>
                        </pre>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>

          <h3 class="font-weight-light mb-0">Expected Responses</h3>
          <v-card class="mt-5">
            <v-tabs v-model="selectedResponse" background-color="primary" dark>
              <v-tab v-for="apiResponse in apiResponses" :key="apiResponse.id">
                {{ apiResponse.text }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="selectedResponse">
              <!--Bank deposit-->
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="pa-5">
                    <!--Code here-->
                    <v-row>
                      <v-col cols="12">
                        <pre>
                          <div v-html="successfulResponse"></div>
                        </pre>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <!--Visa/master card-->
              <v-tab-item>
                <v-card flat>
                  <v-card-text class="pa-5">
                    <!--code here-->
                    <v-row>
                      <v-col cols="12">
                        <pre>
                          <div v-html="failedResponse"></div>
                        </pre>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
  
  <script>
export default {
  template: "#documentation",
  data: () => ({
    selectedLanguage: {},
    selectedResponse: {},
    requestHeaders: [
      {
        id: 1,
        label: "Accept",
        dataType: "String",
        description: "(REQUIRED*) must be 'application/json'.",
      },
      {
        id: 2,
        label: "Authorization",
        dataType: "String",
        description:
          "(REQUIRED*) must be Bearer, here you will pass your API key you generated from your profile.",
      },
      {
        id: 4,
        label: "App-Private-Key",
        dataType: "String",
        description:
          "(REQUIRED*) Here an application key is passed, the key is labled private key under application details",
      },
    ],

    requestBody: `{
    "ammount": 1000, //request ammount
    "externalKey": "4p1CqwY9j4xcbr8", //external key for your reference
    "message": "PAyment for movie tecket" //transaction message
}`,

    phpSample: `
      <?php

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://pay.nsiimbi.com/api/requestToPay',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS =>'{
            "ammount": 1000,
            "externalKey": 765778,
            "message": "PAyment for food"
        }',
        CURLOPT_HTTPHEADER => array(
            'Accept: application/json',
            'App-Private-Key: tOWcKkLEvtB***************************4p1CqwY9j4xcbr8',
            'Authorization: Bearer WOUNRLlaLf****************************hjPdyQ2A',
            'Content-Type: application/json'
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;
`,

    javaSample: `
      OkHttpClient client = new OkHttpClient().newBuilder()
        .build();
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, "{\r\n    \"ammount\": 1000,\r\n    \"externalKey\": 765778,\r\n    \"message\": \"PAyment for food\"\r\n}");
        Request request = new Request.Builder()
        .url("https://pay.nsiimbi.com/api/requestToPay")
        .method("POST", body)
        .addHeader("Accept", "application/json")
        .addHeader("App-Private-Key", "tOWcKkLEvtB***************************4p1CqwY9j4xcbr8")
        .addHeader("Authorization", "Bearer WOUNRLlaLf****************************hjPdyQ2A")
        .addHeader("Content-Type", "application/json")
        .build();
        Response response = client.newCall(request).execute();
  `,

    pythonSample: `
      import requests
        import json

        url = "https://pay.nsiimbi.com/api/requestToPay"

        payload = json.dumps({
        "ammount": 1000,
        "externalKey": 765778,
        "message": "PAyment for food"
        })
        headers = {
        'Accept': 'application/json',
        'App-Private-Key': 'tOWcKkLEvtB***************************4p1CqwY9j4xcbr8',
        'Authorization': 'Bearer WOUNRLlaLf****************************hjPdyQ2A',
        'Content-Type': 'application/json'
        }

        response = requests.request("POST", url, headers=headers, data=payload)

        print(response.text)
`,

    javaScriptSample: `
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("App-Private-Key", "tOWcKkLEvtB***************************4p1CqwY9j4xcbr8");
        myHeaders.append("Authorization", "Bearer WOUNRLlaLf****************************hjPdyQ2A");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "ammount": 1000,
        "externalKey": 765778,
        "message": "PAyment for food"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://pay.nsiimbi.com/api/requestToPay", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));`,

    programmingLanguages: [
      {
        text: "JavaScript",
        value: "nodejs",
        icon: "mdi mdi-language-javascript",
      },
      {
        text: "PHP",
        value: "php",
        icon: "mdi-language-php",
      },
      {
        text: "Java",
        value: "java",
        icon: "mdi-language-java",
      },
      {
        text: "Python",
        value: "python",
        icon: "mdi-language-python",
      },
    ],

    apiResponses: [
      {
        text: "Successful response",
        value: "success",
      },
      {
        text: "Failed response",
        value: "fail",
      },
    ],

    successfulResponse: `
      {
          "request_token": "a3a5*************************fce196de",
          "payment_url": "https://pay.nsiimbi.com/payments/a3a5*************************fce196de"
      }`,

    failedResponse: `
      {
        "message": "",
        "statis": "500",
      }`,
  }),
};
</script>
  