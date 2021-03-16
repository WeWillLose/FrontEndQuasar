import Vue from 'vue'
export default{
  showErrorNotify(message) {
    if(Object.prototype.toString.call(message) === '[object Object]'){
      if(!!message["message"]){
        Vue.prototype.$q.notify({type:"negative",message:message.message})
        return;
      }
    }
    Vue.prototype.$q.notify({type:"negative",message:message})

  },
  showPositiveNotify(message) {
    Vue.prototype.$q.notify({type:"positive",message:message})
  }
}

