<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="col-12">
        <q-btn @click="showDialog">Add Item</q-btn>
      </div>
      <to-do v-for="item in getToDoList" :key="item.id" :item="item"/>
    </div>
    <card-dialog ref="card_dialog"/>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import ToDo from "components/ToDo";
  import CardDialog from "components/2/CardDialog";

  export default {
    components: {CardDialog, ToDo},
    data() {
      return {
        show_dialog: false,
      }
    },
    computed: {
      ...mapGetters('to_do', ['getToDoList'])
    },
    methods: {
      showDialog() {
        this.$refs.card_dialog.edit()
      }
    }
  }
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 250px
</style>
