<template>
    <div id="q-app">
      <div class="q-pa-sm q-gutter-sm">
        <q-table title="Позновательная активность обучающихся(Творческая работа)" :data="data" :columns="columns" separator="horizontal" class="elevation-1">
          <template v-slot:bottom>
            <div>
             <q-btn dense color="secondary" label="Добавить строку" @click="show_dialog = true" no-caps ></q-btn>
            </div>
            <div class="q-pa-sm q-gutter-sm">
              <q-dialog v-model="show_dialog">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Добавить строку</div>
                  </q-card-section>

                  <q-card-section>
                    <div class="row q-gutter-md">
                      <q-input  type="text"clearable v-model="editedItem.group" label="Группа" hidden disable></q-input>
                      <q-input  type="text" v-model="editedItem.subject" label="Учебные дисциплины"></q-input>
                      <q-input  type="number" v-model="editedItem.amount" label="Колво студентов"></q-input>
                      <q-input  type="number" v-model="editedItem.mark5" label="Оценок 5"></q-input>
                      <q-input  type="number" v-model="editedItem.mark4" label="Оценок 4"></q-input>
                      <q-input  type="number" v-model="editedItem.mark3" label="Оценок 3"></q-input>
                      <q-input  type="number" v-model="editedItem.mark2" label="Оценок 2"></q-input>
                      <q-input  type="number" v-model="editedItem.progress" label="Успеваемость"></q-input>
                      <q-input type="number" v-model="editedItem.quality" label="Качество зананий"></q-input>
                      <q-input type="textarea" v-model="editedItem.unsuccs" label="Неуспевающие"></q-input>
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
                  <q-input v-model="props.row.interesting" dense autofocus></q-input>
              </q-td>
              <q-td key="proof" :props="props">
                  <q-input type="textarea" v-model="props.row.proof" dense autofocus ></q-input>
              </q-td>
              <q-td key="score" :props="props" auto-width>
                  <q-input type="number" v-model="props.row.score" dense autofocus ></q-input>
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

  export default {
    methods: {
      addRow:function() {
        if (this.editedIndex > -1) {
          Object.assign(this.data[this.editedIndex], this.editedItem);
        } else {
          this.data.push(this.editedItem);
        }
        this.close()
      },
      deleteItem(item) {
        const index = this.data.indexOf(item);
        console.log(this.data)
        confirm("Are you sure you want to delete this item?") &&
        this.data.splice(index, 1);
      },
      editItem(item) {
        this.editedIndex = this.data.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.show_dialog = true;
      },
      close () {
        this.show_dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      }
    },
    data() {
      return {
        show_dialog: false,
        editedIndex: -1,
        editedItem: {
          id:-1,
          interesting: "",
          proof: "",
          score: 0,
        },
        defaultItem: {
          interesting: "",
          proof: "",
          score: 0,
        },
        columns: [
          {
            name: "interesting",
            required: true,
            label: "2.1 Вовлечение студентов в творческую работу",
            align: "left",
            field:"interesting"
          },
          {
            name: "proof",
            align: "center",
            label: "Обоснования",
            field: "proof",
          },
          {
            name: "score",
            align: "center",
            label: "Баллы",
            field: "score",
          },
          {
            name: "actions",
            label: "Actions",
            field: "actions",
            align: "center",
          }
        ],
        data: [
          {
            interesting: "Наличие обучающихся - участников предметных олимпиад, конкурсов, спортивных соревнований, смотров",
            proof: "",
            score: 0,
          },
          {
            interesting:"Наличие обучающихся -  призёров предметных олимпиад, конкурсов, спортивных соревнований, смотров",
            proof: "",
            score: 0,
          },
        ]
      };
    }
  }
</script>
<style>
</style>
