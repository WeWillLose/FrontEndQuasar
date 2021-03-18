<template>
  <div class="">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h5 text-caption">{{report.name}}</div>
          </div>
          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable @click="download(report)">
                    <q-item-section>Скачать</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-space/>
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator/>
          <q-card-section class="text-subitle2">
            <div>
              дата создания : <b>{{getDate}}</b>
            </div>
            <div>
              статус: <b>{{report.status}}</b>
            </div>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
  import api from "src/api/api"
  import fileDownload from 'js-file-download'
  import notifyApi from "src/api/notifyApi";

  export default {
    props: ['report'],
    name: "Report",
    data(){
      return{
        expanded : false,
      }
    },
    created() {
      console.log(this.report)
    },
    computed:{
      getDate(){
       return  new Date(this.report.createdDate).toLocaleDateString();
      }
    },
    methods:{
      async download(report){
        if(!!report){
          if(!!report.id){
            try{
              const response = await api.downloadReport(report.id);
              // const url = window.URL.createObjectURL(new Blob([response.data]))
              // const link = document.createElement('a')
              // link.href = url
              // link.setAttribute('download', "text.docx")
              // document.body.appendChild(link)
              // link.click()
              fileDownload(response.data,!!report.name?report.name:`report_${this.$uuid.v4()}.docx`);
            }catch (e) {
              if(e?.response?.status == 403){
                notifyApi.showForbiddenNotify()
              }else{
                if(!!e.response?.data?.message){
                  notifyApi.showErrorNotify(e.response.data.message)
                } else{
                 console.error(e)
                }
              }
            }

          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
