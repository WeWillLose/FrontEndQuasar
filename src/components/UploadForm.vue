<template>
  <q-form class="q-gutter-md" @submit="onSubmit">
    <div class="title text-center">Выберети файл</div>
    <q-file
      class="q-mx-auto"
      style="max-width: 500px"
      ref="q_files"
      v-model="files"
      @input="updateFiles"
      filled
      :label="'Max total size ' + maxMb +'MB'"
      multiple
      :filter="checkFileType"
      @rejected="onRejected"
      use-chips
      clearable
      :max-total-size="getMaxSize"
    >
      <template v-slot:prepend>
        <q-icon name="attach_file"/>
      </template>
    </q-file>
    <div class="div flex justify-center">
      <q-btn type="submit" label="Отправить" :disable="isBtnDisabled"/>
    </div>
  </q-form>
</template>

<script>
    import fileDownload from 'js-file-download'
    import {mapGetters} from 'vuex'

    export default {
      name: "UploadForm",
      data() {
        return {
          files:[],
          filesMaxTotalSize: null,
          isBtnDisabled: true,
        }

      },
      watch:{
        files:function(){
          console.log(this.isBtnDisabled)
          this.isBtnDisabled = !(this.files && this.files.length != 0);
        }
      },
      computed:{
        ...mapGetters(['getMaxSize']),
        maxMb:function () {
          return this.getMaxSize / 1048576
        },
      },
      methods: {
        updateFiles (files) {
          this.files = files
        },
        onRejected(rejectedEntries) {
          this.$q.notify({
              type: 'negative',
              message: `${this.getErrorMessage(rejectedEntries.length)}`
            }
          )
        },
        checkFileType  (files) {
          return files.filter(file => file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        },
        onSubmit (){
          this.handleFilesUpload()
        },
        async handleFilesUpload(){
          let formData = new FormData()
          console.log(this.files)
          this.files.forEach(f=>formData.append(f.name, f))
          try{
            let response = await this.docxApi.sendDocxFiles(formData)
            fileDownload(response.data,"results.zip")
            this.updateFiles([])
          }catch(error){
            console.error(error)
            console.error(error.response.status)
          }
        },
        getErrorMessage(length){
          if(length <=0) return "Ошибка"
          if(length==1) return "1 файл не прошел проверку"
          if (length <5)return `${length} файла не прошли проверку`
          return `${length} файлов не прошли проверку`
        }
      }
    }
</script>

<style scoped>

</style>
