<template>
  <div id="q-app">
    <q-page class="bg_gradient flex full-height">
      <div class="q-pa-sm q-gutter-sm full-width" >
        <q-table :data="getUsers" :columns="columns" class="q-mx-auto" style="max-width: 80%;min-width: 60%">
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="username" :props="props">
                <q-input type="text" v-model="props.row.username" dense autofocus></q-input>
              </q-td>
              <q-td key="firstName" :props="props">
                <q-input type="text" v-model="props.row.firstName" dense autofocus></q-input>
              </q-td>
              <q-td key="lastName" :props="props">
                <q-input type="text" v-model="props.row.lastName" dense autofocus></q-input>
              </q-td>
              <q-td key="actions" :props="props" auto-width>
                <q-btn color="blue" label="Изменить данные" @click="editItem(props.row)" size=sm no-caps></q-btn>
                <q-btn color="blue" label="Сбросить пароль" @click="editItem(props.row)" size=sm no-caps></q-btn>
                <q-btn color="red" label="Удалить" @click="deleteUser(props.row)" size=sm no-caps></q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </q-page>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Admin",
    data() {
      return {
        columns: [
          {
            name: "username",
            required: true,
            label: "Логин",
            align: "left",
            field: "comment"
          },
          {
            name: "firstName",
            align: "center",
            label: "Имя",
            field: "score",
          },
          {
            name: "lastName",
            align: "center",
            label: "Фамилия",
            field: "lastName",
          },
          {
            name: "actions",
            align: "center",
            label: "Действия",
            field: "actions",
            style: "width:100px"
          },
        ]
      }
    },
    computed:{
     ...mapGetters('admin_table',['getUsers'])
    },
    methods:{
      deleteUser(user){
        this.$store.dispatch('admin_table/deleteUser',user).catch(e=>
        {
          this.$q.notify({type:"negative",message:e})
        })
      }
    },
    beforeCreate(){
      this.$store.dispatch("admin_table/getUsers").catch(e=>
      {
        this.$q.notify({type:"negative",message:e})
      })
    }
  }
</script>

<style scoped>

</style>
