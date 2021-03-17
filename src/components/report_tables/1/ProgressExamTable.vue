<template>
    <div id="q-app">
      <div class="q-pa-sm q-gutter-sm">
        <q-table title="Успеваемость по предметам, вынессеным на екзаменны" :hide-no-data="true" :data="getRows1" :columns="getColumns1">
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
                      <q-input  type="text"clearable v-model="getEditedItem1.group" label="Группа"></q-input>
                      <q-input  type="text" v-model="getEditedItem1.subject" label="Дисциплина"></q-input>
                      <q-input  type="number" v-model="getEditedItem1.amount" label="Колво студентов"></q-input>
                    </div>
                    <div class="row q-gutter-md  q-ma-md">
                      <q-input  type="number" v-model="getEditedItem1.mark5" label="Оценок 5"></q-input>
                      <q-input  type="number" v-model="getEditedItem1.mark4" label="Оценок 4"></q-input>
                      <q-input  type="number" v-model="getEditedItem1.mark3" label="Оценок 3"></q-input>
                      <q-input  type="number" v-model="getEditedItem1.mark2" label="Оценок 2"></q-input>
                    </div>
                    <div class="row q-gutter-md  q-ma-md" >
                      <q-input  type="number" v-model="getEditedItem1.progress" label="Успеваемость"></q-input>
                      <q-input type="number" v-model="getEditedItem1.quality" label="Качество зананий"></q-input>
                      <q-input type="textarea" v-model="getEditedItem1.unsuccs" label="Неуспевающие"></q-input>
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
              <q-td key="group" :props="props">
                  <q-input v-model="props.row.group" dense autofocus></q-input>
              </q-td>
              <q-td key="subject" :props="props">
                  <q-input type="text" v-model="props.row.subject" dense autofocus ></q-input>
              </q-td>
              <q-td key="amount" :props="props">
                  <q-input type="number" v-model="props.row.amount" dense autofocus ></q-input>
              </q-td>
              <q-td key="mark5" :props="props">
                  <q-input type="number" v-model="props.row.mark5"></q-input>
              </q-td>
              <q-td key="mark4" :props="props">
                <q-input type="number" v-model="props.row.mark4"></q-input>
              </q-td>
              <q-td key="mark3" :props="props">
                <q-input type="number" v-model="props.row.mark3"></q-input>
              </q-td>
              <q-td key="mark2" :props="props">
                <q-input type="number" v-model="props.row.mark2"></q-input>
              </q-td>
              <q-td key="progress" :props="props">
                <q-input type="number" v-model="props.row.progress"></q-input>
              </q-td>
              <q-td key="quality" :props="props">
                <q-input type="number" v-model="props.row.quality"></q-input>
              </q-td>
              <q-td key="unsuccs" :props="props">
                <q-input type="textarea" v-model="props.row.unsuccs"></q-input>
              </q-td>
              <q-td key="actions" :props="props" auto-width>
<!--                <q-btn color="blue" label="Update" @click="editItem(props.row)" size=sm no-caps></q-btn>-->
                <q-btn color="red" label="Delete"  @click="deleteItem(props.row)" size=sm no-caps></q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
  computed:{
    ...mapGetters('report_tables/progress_exam',['getColumns1','getRows1','getDefaultItem1','getEditedIndex1','getEditedItem1'])
  },
    methods: {
      addRow() {
        this.$store.commit('report_tables/progress_exam/addRow1',{'editedIndex':this.getEditedIndex1,'editedItem':this.getEditedItem1})
        this.close()
      },
      deleteItem(item) {
        confirm("Вы уверены что хотите удалить строку") && this.$store.commit('report_tables/progress_exam/deleteItem1',item)
      },
      editItem(item) {
        this.$store.commit('report_tables/progress_exam/editItem1',item)
        this.show_dialog = true;
      },
      close () {
        this.show_dialog = false
        setTimeout(() => {this.$store.commit('report_tables/progress_exam/setDefault1')}, 300)
      }
    },
    data() {
      return {
        show_dialog: false,
      };
    }
  }

</script>
<style>
</style>
