<template>

    <div class="q-pa-sm q-gutter-sm">
      <q-table title="Познавательная активность обучающихся" :hide-no-data="true" :data="getRows1" :columns="getColumns1">
        <template v-slot:top-right>
          <div>
          </div>
          <div class="q-pa-sm q-gutter-sm">
            <q-dialog v-model="show_dialog">
              <q-card class="add-row-dialog">
                <q-card-section>
                  <div class="text-h6">Добавить строку</div>
                </q-card-section>

                <q-card-section class="">
                  <div class="row q-gutter-md q-ma-md">
                    <q-input  type="text" clearable v-model="getEditedItem1.interesting" label="2.1 Вовлечение студентов в творческую работу"></q-input>
                    <q-input  type="text" v-model="getEditedItem1.proof" label="Обоснования"></q-input>
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
            <q-td key="interesting" :props="props">
              <q-input type="text" v-model="props.row.interesting" dense autofocus></q-input>
            </q-td>
            <q-td key="proof" :props="props">
              <q-input type="text" v-model="props.row.proof" dense autofocus ></q-input>
            </q-td>
            <q-td key="score" :props="props">
              <q-input type="number" v-model="props.row.score"
                       :rules="[rules.withoutSpaces(),rules.numberBetweenNotStrictScore(1,1.5)]" dense autofocus></q-input>
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
import rules from 'src/api/rules';
export default {
  computed:{
    ...mapGetters('report_tables/creation',['getColumns1','getRows1','getDefaultItem1','getEditedIndex1','getEditedItem1']),
    rules:()=>rules
  },
  methods: {
    addRow() {
      this.$store.commit('report_tables/creation/addRow1',{'editedIndex':this.getEditedIndex1,'editedItem':this.getEditedItem1})
      this.close()
    },
    deleteItem(item) {
      confirm("Вы уверены что хотите удалить строку") && this.$store.commit('report_tables/creation/deleteItem1',item)
    },
    editItem(item) {
      this.$store.commit('report_tables/creation/editItem1',item)
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {this.$store.commit('report_tables/creation/setDefault1')}, 300)
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
