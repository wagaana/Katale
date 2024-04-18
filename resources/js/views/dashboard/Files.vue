<template>
  <v-container grid-list-xl class="">
    <v-row>
      <v-row>
        <v-col class="col-md-11 pr-md-1 sm-6">
          <h1 class="font-weight-light mb-0">Files & Media</h1>
          <span class="overline">Upload Your Files & Media To use later</span>
        </v-col>

        <v-col class="col-md-1 pr-md-1">
          <input
            type="file"
            id="mediaInput"
            hidden
            multiple
            accept=".jpg, .jpeg, .png, .gif, .mp4, .mpg, .mpeg, .webp, .webm, .ogg, .avi, .mov, .flv, .swf, .mkv, .wmv, .wma, .aac, .wav, .mp3, .zip, .rar, .7z, .doc, .txt, .docx, .pdf, .csv, .xml, .ods, .xlr, .xls, .xlsx"
            @change="handleMediaChange"
          />
          <v-btn width="100%" class="primary" @click="editProfileImage"
            >Upload</v-btn
          >
        </v-col>
      </v-row>

      <v-spacer></v-spacer>

      <v-col cols="12" class="py-0">
        <v-layout row wrap>
          <v-flex
            v-for="fileUpload in getUserFiles"
            :key="fileUpload.id"
            xs12
            sm6
            md4
            xl2
          >
            <v-card>
              <template>
                <v-list-item>
                  <v-row class="pa-2">
                    <v-col cols="12">
                      <v-card
                        :style="{
                          'background-image': `url(${fileUpload.url})`,
                          'background-repeat': 'no-repeat',
                          height: '200px',
                          width: '100%',
                          'background-size': 'cover',
                        }"
                      >
                      </v-card>
                    </v-col>

                    <v-col cols="12">
                      <v-row class="d-flex align-center">
                        <v-col class="col-md-10 pr-md-1 sm-6">
                          <v-list-item-content>
                            <v-list-item-subtitle>
                              {{ fileUpload.created_at }}
                            </v-list-item-subtitle>
                            <v-list-item-title>
                              {{ fileUpload.name }}
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-col>

                        <v-col class="col-md-2 pr-md-1 sm-6">
                          <v-btn
                            icon
                            @click="handleDeleteButtonClick(fileUpload)"
                          >
                            <v-icon color="primary">mdi-delete</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-list-item>
              </template>
            </v-card>
          </v-flex>
        </v-layout>
      </v-col>

      <v-dialog v-model="deleteFileDalogTemplate" width="420">
        <v-card>
          <v-card-title class="headline" primary-title>
            <h2>Delete File</h2>
          </v-card-title>
          <v-divider></v-divider>

          <v-card class="pa-5">
            <v-card-title>
              <v-card
                :style="{
                  'background-image': `url(${uploads}${activeFile.path})`,
                  'background-repeat': 'no-repeat',
                  height: '200px',
                  width: '100%',
                  'background-size': 'cover',
                }"
              >
              </v-card>
            </v-card-title>

            <v-card-text>
              <p>{{ activeFile.name }}</p>

              <span class="success--text subtitle-1">
                Created: {{ activeFile.created_at }}
              </span>
            </v-card-text>
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="pa-5">
            <v-btn
              class="ml-auto"
              @click="deleteFileDalogTemplate = false"
              outlined
              color="primary"
              >Close</v-btn
            >
            <v-btn outlined color="red" @click="deleteFile(activeFile)"
              >Delete</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../../utils/constants";

export default {
  data: () => ({
    uploads: uploads,
    activeFile: {},
    deleteFileDalogTemplate: false,
  }),

  beforeCreate() {
    this.$store.dispatch("loadUserFiles");
  },

  computed: {
    ...mapState(["userFiles"]),
    ...mapGetters(["messageAlert", "getUserFiles"]),
  },

  watch: {
    messageAlert(val) {
      if (val != null) {
        Vue.notify({
          group: "foo",
          title: val.title,
          text: val.body,
          type: val.type,
        });
        this.$store.dispatch("loadUserFiles");
      }
    },

    getSystemSettings(val) {
      if (val != null) {
        for (var i = 0; i < val.length; i++) {
          const value = val[i];
          this.settings[value.setting_name] = value.setting_value;
        }
      }
    },
  },

  mounted() {},

  methods: {
    editProfileImage() {
      const mediaInput = document.getElementById("mediaInput");
      mediaInput.click();
    },

    handleDeleteButtonClick(fileUpload) {
      this.activeFile = fileUpload;
      this.deleteFileDalogTemplate = true;
    },

    handleMediaChange(event) {
      const files = event.target.files;
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]); // Use files[] to handle multiple files
      }

      this.$store.dispatch("uploadMultiple", formData);
    },

    deleteFile(activeFile) {
      this.$store.dispatch("deleteFile", activeFile.id);
      this.deleteFileDalogTemplate = false;
    },
  },
};
</script>
