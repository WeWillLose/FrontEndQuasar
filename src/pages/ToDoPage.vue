<template>
  <q-page class="bg_gradient flex full-height ">
    <div class="frame  q-my-lg q-mx-auto text_main">
      <div class="q-pa-md flex flex-center">
        <to-do-list/>
      </div>
    </div>
  </q-page>
</template>

<script>
    import ToDoList from "components/ToDo/ToDoList";
    export default {
      components: {ToDoList}
    }
</script>

<style scoped>

</style>
