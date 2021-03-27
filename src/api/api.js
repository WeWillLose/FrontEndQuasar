import axios from 'axios'

const resource = axios.create({
})

export default {
  sentData: data =>resource.post('/api/api/report/save',data),
  sendDocxFiles: files =>resource.post('/api/api/v1/docx/',files),
  getChairmans: () => resource.get("api/api/user/chairman/all"),
  setChairman: (userId,chairmanId) => resource.put(`api/api/user/followers/setChairmanFor/${userId}`,{id:chairmanId}),
  getReports: () =>resource.get('/api/api/report/author/current'),
  updateReport: (id,data) =>resource.put(`/api/api/report/${id}`,data),
  setRoles: (id,data) =>resource.put(`/api/api/user/roles/${id}`,data),
  getReportTableData: (id) =>resource.get(`/api/api/report/${id}`),
  getFollowersReports: () =>resource.get('/api/api/report/chairman/followersReports/current'),
  downloadScoreList: (id) =>resource.get(`/api/api/score/${id}`,{responseType:'arraybuffer'}),
  downloadReport: (id) =>resource.get(`/api/api/report/docx/${id}`,{responseType:'arraybuffer'}),
  getToDo: () => resource.get('/api/api/toDo/author/current/'),
  updateToDo: (item) => resource.put(`/api/api/toDo/edit/${item.id}/`, item),
  deleteToDo: (item) => resource.post(`/api/api/toDo/delete/${item.id}/`),
  createToDo: (item) => resource.post(`/api/api/toDo/create/`,item),
  login: (user) => resource.post(`/api/auth/login/`,user),
  deleteUser: (user) => resource.delete(`/api/api/user/${user.id}`),
  getUsers: () => resource.get(`/api/api/user/info/all`),
  registrationUser: (user) => resource.post(`/api/auth/registration`,user),
  editUser: (user) => resource.put(`/api/api/user/info/${user.id}`,user),
  resetPassword: (user) => resource.put(`/api/api/user/password/${user.id}`,user),
}

