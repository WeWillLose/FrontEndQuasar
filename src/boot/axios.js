import Vue from 'vue'
import UUID from "vue-uuid";

Vue.use(UUID);
import docxApi from "src/api/api"

Vue.prototype.docxApi = docxApi
