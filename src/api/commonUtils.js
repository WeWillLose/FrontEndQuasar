export default {
  extractShortFio(user){
    if(user == null){
      return "";
    }
    return `${user.firstName?user.firstName:""} ${user.lastName?" "+user.lastName.slice(0,1)+".":""} ${user.patronymic?" "+user.patronymic.substring(0,1)+".":""}`
  },
}
