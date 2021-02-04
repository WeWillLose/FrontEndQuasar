<template>
  <q-page class="bg_gradient flex full-height ">
    <div class="frame  q-my-lg q-mx-auto text_main">
        <div class="title text-center">Выберети файл</div>
      <div>
        <q-uploader
          :url=upload_url
          multiple
          label="Max total size 20MB"
          :max-total-size=max_total_size
          @rejected="onRejected"
        >
        </q-uploader>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return{
        upload_url:"http://localhost:4444/upload",
        filesMaxTotalSize: null,
        max_total_size:20971520
      }

    },
    methods: {

      onRejected (rejectedEntries) {
        this.$q.notify({
          type: 'negative',
          message: `${rejectedEntries.length} file(s) did not pass validation constraints`}
          )},

      counterLabelFn ({ totalSize, filesNumber,maxTotalSize}) {
        return `${filesNumber} files | ${totalSize} of ${maxTotalSize}`
      }
    }

  }
</script>
<style>

</style>
