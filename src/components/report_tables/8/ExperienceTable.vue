<template>
    <div class="q-pa-sm q-gutter-sm">
      <q-table title="Обобщение и распространение опыта" :hide-no-data="true" :data="getRows1" :columns="getColumns1">
        <template v-slot:top-right>
          <div>
            <q-btn dense color="secondary" label="Добавить строку" @click="show_dialog = true" no-caps ></q-btn>
          </div>
          <div class="q-pa-sm q-gutter-sm">
            <q-dialog v-model="show_dialog">
              <q-card class="add-row-dialog">
                <q-card-section>
                  <div class="text-h6">Добавить строку</div>
                </q-card-section>

                <q-card-section class="">
                  <div class="row q-gutter-md q-ma-md">
                    <q-input  type="textarea" clearable v-model="getEditedItem1.name" label="Название мероприятия, издания"></q-input>
                    <q-input  type="text" v-model="getEditedItem1.level" label="Уровень"></q-input>
                    <q-input  type="text" v-model="getEditedItem1.application" label="Тема выступления, публикации"></q-input>
                  </div>


                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" v-close-popup @click="addRow" ></q-btn>
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>

        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              <q-input type="textarea" v-model="props.row.name" dense autofocus></q-input>
            </q-td>
            <q-td key="level" :props="props">
              <q-input type="text" v-model="props.row.level" dense autofocus></q-input>
            </q-td>
            <q-td key="application" :props="props">
              <q-input type="text" v-model="props.row.application" dense autofocus></q-input>
            </q-td>
            <q-td key="score" :props="props">
              <q-input type="number" v-model="props.row.score" dense autofocus></q-input>
            </q-td>

            <q-td key="actions" :props="props" auto-width>
              <!--                <q-btn color="blue" label="Update" @click="editItem(props.row)" size=sm no-caps></q-btn>-->
              <q-btn color="red" label="Delete"  @click="deleteItem(props.row)" size=sm no-caps></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters('report_tables/experience',['getColumns1','getRows1','getDefaultItem1','getEditedIndex1','getEditedItem1'])
  },
  methods: {
    addRow() {
      this.$store.commit('report_tables/experience/addRow1',{'editedIndex':this.getEditedIndex1,'editedItem':this.getEditedItem1})
      this.close()

    },
    deleteItem(item) {
      confirm("Вы уверены что хотите удалить строку") && this.$store.commit('report_tables/experience/deleteItem1',item)
    },
    editItem(item) {
      this.$store.commit('report_tables/experience/editItem1',item)
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {this.$store.commit('report_tables/experience/setDefault1')}, 300)
    }
  },
  data() {
    return {
      show_dialog: false,
    };
  }
}
</script>

<style scoped>

</style>
