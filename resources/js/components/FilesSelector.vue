<template>
  <v-container>
    <v-btn
      @click="dialogOpenFiles = true"
      class="pa-2"
      outlined
      color="primary"
    >
      {{ label }}</v-btn
    >

    <v-dialog v-model="dialogOpenFiles" width="900">
      <v-card class="pa-3">
        <v-row class="pa-2">
          <v-row>
            <v-col class="col-md-11 pr-md-1 sm-6">
              <h1 class="font-weight-light mb-0">Files & Media</h1>
              <span class="overline"
                >Upload Your Files & Media To use later</span
              >
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
                <v-card @click="emitFile(fileUpload)">
                  <template>
                    <v-list-item>
                      <v-row class="pa-2">
                        <v-col cols="12">
                          <v-card
                            :style="{
                              'background-image': `url(${uploads}${fileUpload.path})`,
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
                            <v-col class="col-md-12 pr-md-1 sm-6">
                              <v-list-item-content>
                                <v-list-item-subtitle>
                                  {{ fileUpload.created_at }}
                                </v-list-item-subtitle>
                                <v-list-item-title>
                                  {{ fileUpload.name }}
                                </v-list-item-title>
                              </v-list-item-content>
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
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
import Vue from "vue";
import { uploads } from "../utils/constants";

export default {
  props: ["selectedFiles", "label"],

  data: () => ({
    uploads: uploads,
    activeFile: {},
    dialogOpenFiles: false,
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

    handleMediaChange(event) {
      const files = event.target.files;
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]); // Use files[] to handle multiple files
      }

      this.$store.dispatch("uploadMultiple", formData);
    },

    emitFile(activeFile) {
      this.activeFile = activeFile;
      this.dialogOpenFiles = false;
      this.$emit("selectedFiles", activeFile);
    },
  },
};
</script>
