import axios from 'axios'

const resource = axios.create({
})

export default {
  //Auth
  login: (user) => resource.post(`/api/api/auth/login/`,user),
  registrationUser: (user) => resource.post(`/api/api/auth/registration`,user),

  //User
  deleteUser: (user) => resource.delete(`/api/api/user/${user.id}`),
  getUsers: () => resource.get(`/api/api/user/info/all`),
  editUser: (user) => resource.put(`/api/api/user/info/${user.id}`,user),
  resetPassword: (user) => resource.put(`/api/api/user/password/${user.id}`,user),
  setRoles: (id,data) =>resource.put(`/api/api/user/roles/${id}`,data),
  getChairmans: () => resource.get("api/api/user/chairman/all"),
  setChairman: (userId,chairmanId) => resource.put(`api/api/user/followers/setChairmanFor/${userId}`,{id:chairmanId}),

  //Report
  getReportTableData: (id) =>resource.get(`/api/api/report/${id}`),
  sentData: data =>resource.post('/api/api/report/save',data),
  getReports: () =>resource.get('/api/api/report/author/current'),
  updateReport: (id,data) =>resource.put(`/api/api/report/${id}`,data),
  downloadReport: (id) =>resource.get(`/api/api/report/docx/${id}`,{responseType:'arraybuffer'}),
  getFollowersReports: () =>resource.get('/api/api/report/chairman/followersReports/current'),

  //ToDO
  getToDo: () => resource.get('/api/api/toDo/author/current/'),
  updateToDo: (item) => resource.put(`/api/api/toDo/${item.id}/`, item),
  deleteToDo: (item) => resource.delete(`/api/api/toDo/${item.id}/`),
  createToDo: (item) => resource.post(`/api/api/toDo/`,item),

  //ScoreList
  downloadScoreList: (id) =>resource.get(`/api/api/score/${id}`,{responseType:'arraybuffer'}),







}

