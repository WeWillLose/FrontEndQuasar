<template>
  <q-dialog v-model="show_dialog" persistent>
    <q-card  class="to_do-dialog">
      <q-card-section>
        <div class="text-h6">Изменнить заметку</div>
      </q-card-section>

      <q-card-section >
        <div class="dialog">
          <q-input   type="text" v-model="getEditedItem.title" label="Заголовок" maxlength="30"></q-input>
          <q-input  type="textarea" v-model="getEditedItem.description" label="Описание" maxlength="50"></q-input>
          <q-input  type="textarea"  v-model="getEditedItem.text" label="Текст"></q-input>
          <q-input  type="text"  v-model="getEditedItem.id" class="hidden" disable ></q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup @click="addItem" ></q-btn>
        <q-btn flat label="Cancel" color="primary" v-close-popup @click="cancel" ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
      props:['item'],
      data(){
        return{
          show_dialog: false,
        }
      },
      computed:{
        ...mapGetters('to_do',['getToDoList','getDefault','getEditedIndex','getEditedItem'])
      },
      methods:{
        edit(){
          if(this.item){
            this.$store.commit('to_do/setEditedItem', this.item)
          }else{
            this.$store.commit('to_do/setEditedItem',this.getDefault)
          }
          this.show_dialog = true
        },
        addItem(){
          this.$store.dispatch('to_do/addItemAction',this.getEditedItem)
        },
        cancel(){
          this.show_dialog = false
        }
      }
    }
</script>

<style scoped>

</style>
