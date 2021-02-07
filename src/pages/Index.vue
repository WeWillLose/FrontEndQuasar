<template>
  <q-page class="bg_gradient flex full-height ">
    <div class="frame  q-my-lg q-mx-auto text_main">

      <div class="q-pa-md flex flex-center">
        <q-form class="q-gutter-md" @submit="onSubmit">
          <div class="title text-center">Выберети файл</div>
          <q-file
            class="q-mx-auto"
            style="max-width: 300px"
            v-model="filesMaxTotalSize"
            :value="files"
            @input="updateFiles"
            filled
            :label="'Max total size ' + maxMb +'MB'"
            multiple
            :filter="checkFileType"
            @rejected="onRejected"
            :max-total-size="max_total_size"
          />
          <div class="div flex justify-center">
            <q-btn type="submit" label="Отправить" class=""/>
          </div>

        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
  import fileDownload from 'js-file-download'

  export default {
    name: 'PageIndex',
    data() {
      return {
        files:[],
        upload_url: "/api",
        filesMaxTotalSize: null,
        max_total_size: 20971520
      }

    },
    computed:{
      maxMb:function () {
        return this.max_total_size / 1048576
      }
    },
    methods: {
      updateFiles (files) {
        this.files = files
      },
      onRejected(rejectedEntries) {
        this.$q.notify({
            type: 'negative',
            message: `${rejectedEntries.length} file(s) did not pass validation constraints`
          }
        )
      },
      checkFileType  (files) {
        return files.filter(file => file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
      },
      onSubmit (){
        this.handleFilesUpload()
      },
      handleFilesUpload(){
        let formData = new FormData()
        console.log(this.files)
        for( let i = 0; i < this.files.length; i++ ){
          let file = this.files[i];
          formData.append('files[' + i + ']', file);
        }
          this.$axios.post( '/api',
            formData,
            {
              responseType:'blob',
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then(function(response){
            console.log(response.data);
            fileDownload(response.data,"results.zip")

          })
            .catch(function(){
              console.log('FAILURE!!');
            });

      },
    }
  }
</script>
<style>

</style>
