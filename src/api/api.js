import axios from 'axios'

const resource = axios.create({
})

export default {
  sendDocxFiles: files =>resource.post('/api',files
    ,{ responseType:'blob',
      headers: {
        'Content-Type': 'multipart/form-data'}
  })
}
