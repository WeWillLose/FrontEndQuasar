<template>
  <q-page class="bg_gradient flex full-height ">
    <div class="frame  q-my-lg q-mx-auto text_main">
      <div class="q-pa-md flex flex-center">
        <upload-form/>
      </div>
    </div>
  </q-page>
</template>

<script>
  import UploadForm from "components/UploadForm";

  export default {
    name: 'PageIndex',
    components: {UploadForm},
    data() {
      return {
      }

    },
    computed:{
    },
    methods: {

    }
  }
</script>
<style>

</style>
