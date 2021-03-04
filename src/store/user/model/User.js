export default class User{

  constructor(data){
    this.username = data.username
    this.password = data.password
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.roles = data.roles
    this.chairman = data.chairman
    this.slaves = data.slaves
  }

}
