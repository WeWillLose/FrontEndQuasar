export default {
  User:{
    extractShortFioByUser(user){
      if(user == null){
        return "";
      }
      return `${user.firstName?user.firstName+" ":""}${user.lastName?user.lastName.slice(0,1)+". ":""}${user.patronymic?user.patronymic.substring(0,1)+". ":""}`.trim()
    },
  },
  Report:{
    getStatusClassByStatus(status){
      if (!status) return "status_undefined"
      if(status === "UNCHECKED") return "status_unchecked"
      if(status === "CHECKED") return "status_checked"
      if(status === "COMPLETED") return "status_completed"
      return "status_undefined"
    },
    getIconNameByStatus(status){
      if (!status) return ""
      if(status === "UNCHECKED") return "visibility_off"
      if(status === "CHECKED") return "visibility"
      if(status === "COMPLETED") return "done"
      return "status_undefined"
    }
  }

}
