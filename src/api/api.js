import axios from 'axios'

const resource = axios.create({
})

export default {
  sendDocxFiles: files =>resource.post('/api/v1/docx/',files),
  getform: () =>resource.get('/api/form'),
  getToDo: () => resource.get('/api/v1/toDo/all/'),
  updateToDo: (item) => resource.put(`/api/v1/toDo/${item.id}/`, item),
  deleteToDo: (item) => resource.delete(`/api/v1/toDo/${item.id}/`),
  createToDo: (item) => resource.post(`/api/v1/toDo/create/`,item),
  login: (user) => resource.post(`/api/auth/login/`,user),
}

