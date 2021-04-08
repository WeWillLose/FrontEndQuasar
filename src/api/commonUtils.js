import notifyApi from "src/api/notifyApi";
import fileDownload from 'js-file-download'
import api from "src/api/api";

function getFilenameFromHeaders(headers){
  let filename = "";
  let disposition = headers['Content-Disposition'] || headers['content-disposition'];
  if (disposition && disposition.indexOf('attachment') !== -1) {
    let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    let matches = filenameRegex.exec(disposition);
    if (matches != null && matches[1]) {
      filename = matches[1].replace(/['"]/g, '');
    }
  }
  console.log(filename)
  return filename;
}

export default {

  User: {
    extractShortFioByUser(user) {
      if (user == null) {
        return "";
      }
      return `${user.lastName ? user.lastName + " " : ""}${user.firstName ? user.firstName.slice(0, 1) + ". " : ""}${user.patronymic ? user.patronymic.substring(0, 1) + ". " : ""}`.trim()
    },
  },
  Report: {
    getStatusClassByStatus(status) {
      if (!status) return "status_undefined"
      if (status === "UNCHECKED") return "status_unchecked"
      if (status === "CHECKED") return "status_checked"
      if (status === "COMPLETED") return "status_completed"
      return "status_undefined"
    },
    getIconNameByStatus(status) {
      if (!status) return ""
      if (status === "UNCHECKED") return "visibility_off"
      if (status === "CHECKED") return "visibility"
      if (status === "COMPLETED") return "done"
      return "status_undefined"
    },
    async downloadReportByIdAnd(id) {
      if (!!id) {
        const response = await api.downloadReport(id);
        let name  = getFilenameFromHeaders(response.headers)
        if(!name){
          name = "report_"+this.$uuid.v4() +".docx"
        }
        fileDownload(response.data, name);
      }
    },
    async downloadScoreListById(id) {
      if (!!id) {
        const response = await api.downloadScoreList(id);
        let name  = getFilenameFromHeaders(response.headers)
        if(!name){
          name = "score_list_"+this.$uuid.v4() +".docx"
        }
        fileDownload(response.data, name);
      }
    }
  }
}
