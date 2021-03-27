<template>
  <div id="q-app">
    <q-page class="bg_gradient flex full-height">
      <div class="q-pa-sm q-gutter-sm full-width" >
        <q-table :data="getUsers" :columns="columns" class="q-mx-auto" style="max-width: 80%;min-width: 60%">
          <template v-slot:top-right>
            <q-btn @click="showNewUserDialog(true)">Add User</q-btn>
          <div class="q-pa-sm q-gutter-sm">
            <q-dialog v-model="new_user_dialog">
              <q-card class="add-row-dialog">
                <q-form
                @submit="addRow">
                <q-card-section>
                  <div class="text-h6">Добавить Пользователя</div>
                </q-card-section>
                <q-card-section class="">
                  <div class="row q-gutter-md q-ma-md">
                    <q-input  :rules="[v=>!!v || 'Заполните поле', v=>v.length > 4 || 'Логин должен быть длинее 4 символов']" type="text" label="Логин" v-model="geEditedUser.username"></q-input>
                    <q-input  :rules="[v=>!!v || 'Заполните поле', v=>v.length > 6 || 'Пароль должен быть длинее 6 символов']" v-if="show_password" type="text" label="Пароль" v-model="geEditedUser.password"></q-input>
                    <q-input  type="text" label="Имя" v-model="geEditedUser.firstName"></q-input>
                    <q-input  type="text" label="Фамилия" v-model="geEditedUser.lastName"></q-input>
                    <q-input  type="text" label="Отчество" v-model="geEditedUser.patronymic"></q-input>
                  </div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" type="submit"></q-btn>
                </q-card-actions>
                </q-form>
              </q-card>
            </q-dialog>

            <q-dialog v-model="edit_user_dialog">
              <q-card class="add-row-dialog">
                <q-form
                  @submit="editUser">
                <q-card-section>
                  <div class="text-h6">Изменить пользователя</div>
                </q-card-section>
                <q-card-section class="">
                  <div class="row q-gutter-md q-ma-md">
                    <q-input  v-model="geEditedUser.id" class="hidden" readonly></q-input>
                    <q-input  :rules="[v=>!!v || 'Заполните поле', v=>v.length > 4 || 'Логин должен быть длинее 4 символов']" type="text" label="Логин" v-model="geEditedUser.username"></q-input>
                    <q-input  type="text" label="Имя" v-model="geEditedUser.firstName"></q-input>
                    <q-input  type="text" label="Фамилия" v-model="geEditedUser.lastName"></q-input>
                    <q-input  type="text" label="Отчество" v-model="geEditedUser.patronymic"></q-input>
                  </div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" type="submit" ></q-btn>
                </q-card-actions>
              </q-form>
              </q-card>
            </q-dialog>

            <q-dialog v-model="reset_password_dialog">
              <q-card class="add-row-dialog">
                <q-form
                @submit="resetPassword">
                <q-card-section>
                  <div class="text-h6">Сбросить пароль</div>
                </q-card-section>
                <q-card-section class="">
                  <div class="row q-gutter-md q-ma-md">
                    <q-input  v-model="geEditedUser.id" class="hidden" readonly></q-input>
                    <q-input  :rules="[v=>!!v || 'Заполните поле', v=>v.length > 6 || 'Пароль должен быть длинее 6 символов']" type="text" label="Пароль" v-model="geEditedUser.password"></q-input>
                  </div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="OK" color="primary" type="submit" ></q-btn>
                </q-card-actions>
                </q-form>
              </q-card>
            </q-dialog>

            <q-dialog v-model="set_roles_dialog">
              <q-card class="add-row-dialog">
                <q-form
                  @submit="setRoles">
                  <q-card-section>
                    <div class="text-h6">Назначить роли</div>
                  </q-card-section>
                  <q-card-section class="">
                    <div class="row q-gutter-md q-ma-md">
                      <q-input  v-model="geEditedUser.id" class="hidden" readonly></q-input>
                      <q-select
                        v-model="geEditedUser.roles"
                        multiple
                        :options="options"></q-select>
                    </div>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" type="submit" ></q-btn>
                  </q-card-actions>
                </q-form>
              </q-card>
            </q-dialog>

            <q-dialog v-model="set_chairman_dialog">
              <q-card class="add-row-dialog">
                <q-form
                  @submit="setChairman">
                  <q-card-section>
                    <div class="text-h6">Назначить председателя</div>
                  </q-card-section>
                  <q-card-section class="">
                    <div class="row q-gutter-md q-ma-md">
                      <q-input  v-model="geEditedUser.id" class="hidden" readonly></q-input>
                      <q-select
                        emit-value
                        v-model="geEditedUser.chairman"
                        :options="chairmans">
                      </q-select>
                    </div>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" type="submit" ></q-btn>
                  </q-card-actions>
                </q-form>
              </q-card>
            </q-dialog>

          </div>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="id" :props="props">
                <q-tr  :props="props" dense autofocus>{{props.row.id}}</q-tr>
              </q-td>
              <q-td key="username" :props="props">
                <q-tr  :props="props" dense autofocus>{{props.row.username}}</q-tr>
              </q-td>
              <q-td key="firstName" :props="props">
                <q-tr  :props="props" dense autofocus>{{props.row.firstName}}</q-tr>
              </q-td>
              <q-td key="lastName" :props="props">
                <q-tr  :props="props" dense autofocus>{{props.row.lastName}}</q-tr>
              </q-td>
              <q-td key="patronymic" :props="props">
                <q-tr  :props="props" dense autofocus>{{props.row.patronymic}}</q-tr>
              </q-td>
              <q-td key="roles" :props="props">
                <q-tr  :props="props" dense autofocus>{{getRoles(props.row)}}</q-tr>
              </q-td>
              <q-td key="actions" :props="props" auto-width>
                <q-btn color="blue" label="Изменить данные" @click="showEditUserDialog(props.row)" size=sm no-caps></q-btn>
                <q-btn color="blue" label="Сбросить пароль" @click="showResetPasswordDialog(props.row)" size=sm no-caps></q-btn>
                <q-btn color="blue" label="Назначить роль" @click="showSetRolesDialog(props.row)" size=sm no-caps></q-btn>
                <q-btn color="blue" label="Назначить председателя" @click="showSetChairmanDialog(props.row)" size=sm no-caps></q-btn>
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
  import api from "src/api/api";
  import notifyApi from "src/api/notifyApi";

  export default {
    name: "Admin",
    data() {
      return {
        roles:[],
        options:["ROLE_TEACHER","ROLE_CHAIRMAN"],
        chairmans:[],
        new_user_dialog:false,
        edit_user_dialog:false,
        reset_password_dialog:false,
        show_password:false,
        set_roles_dialog:false,
        set_chairman_dialog : false,
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
            field: "firstName",
          },
          {
            name: "lastName",
            align: "center",
            label: "Фамилия",
            field: "lastName",
          },
          {
            name: "patronymic",
            align: "center",
            label: "Отчество",
            field: "patronymic",
            style: "width:100px"
          },
          {
            name: "roles",
            align: "center",
            label: "Роли",
            field: "roles",
            style: "width:100px"
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
     ...mapGetters('admin_table',['getUsers','geEditedUser',]),
    },
    methods:{
      toChairmansArray(chairmans){
        if(!!!chairmans || !Array.isArray(chairmans)){
          console.error(`IN toChairmansArray chairmans: ${typeof  chairmans} must be array`)
          return [];
        }
        let res = []
        chairmans.forEach(t=>{
          res.push({label: `${t.firstName?t.firstName:""}${t.lastName?" "+t.lastName:""}${t.patronymic?" "+t.patronymic:""}`
            ,value : t.id})
        })
        return res;
      },
      getRoles(user){
        if(!!!user || !!!user.roles){
          return []
        }
        let roles = []
        user.roles.forEach(t=>roles.push(t.name))
        return roles;
      },
      showSetRolesDialog(user){
        this.$store.commit('admin_table/setEditedUser',{
          id:user.id,
          roles: this.getRoles(user),
          firstName:user.firstName,
          lastName:user.lastName,
          patronymic:user.patronymic,
        })
        this.roles = Object.assign([],this.getRoles(user))
        this.set_roles_dialog = true;
      },
      showSetChairmanDialog(user){
        this.$store.commit('admin_table/setEditedUser',{
          id:user.id,
        })
        if(!!!this.chairmans || this.chairmans.length ==0){
          api.getChairmans().then(t=> this.chairmans = this.toChairmansArray(t.data))
        }

        this.set_chairman_dialog = true;
      },


      deleteUser(user){
        this.$store.dispatch('admin_table/deleteUser',user).catch(e=>
        {
          this.$q.notify({type:"negative",message:e})
        })
      },
      showNewUserDialog(show_password){
        this.$store.commit("admin_table/setDefaultEditedUser")
        this.show_password = show_password;
        this.new_user_dialog = true;
      },
      showResetPasswordDialog(user){
        this.reset_password_dialog = true;
        this.$store.commit('admin_table/setEditedUser',{
          id:user.id,
          password:user.password,
        })
      },
      showEditUserDialog(user){
        this.$store.commit('admin_table/setEditedUser',{
          id:user.id,
          username:user.username,
          firstName:user.firstName,
          lastName:user.lastName,
          patronymic:user.patronymic,
        })
        this.edit_user_dialog = true;
      },
      addRow(){
        this.new_user_dialog = false;
        this.$store.dispatch('admin_table/registrationUser',this.geEditedUser).catch(t=>{
          notifyApi.showErrorNotify(t)
        })
        this.show_password = false;
      },
      editUser(){
        this.edit_user_dialog = false;
        this.$store.dispatch('admin_table/editUser',this.geEditedUser).catch(t=>notifyApi.showErrorNotify(t))
      },
      resetPassword(){
        this.reset_password_dialog = false;
        this.$store.dispatch('admin_table/resetPassword',this.geEditedUser).catch(t=>notifyApi.showErrorNotify(t))
      },
      setRoles(){
        this.set_roles_dialog = false;
        this.$store.dispatch('admin_table/setRoles',{id:this.geEditedUser.id,roles:this.geEditedUser.roles}).catch(t=>notifyApi.showErrorNotify(t))
      },
      setChairman(){
        console.log(this.geEditedUser.chairman)
        this.set_chairman_dialog = false;
        this.$store.dispatch('admin_table/setChairman',{userId:this.geEditedUser.id,chairmanId:this.geEditedUser.chairman}).catch(t=>notifyApi.showErrorNotify(t))
      },
    },
    beforeCreate(){
      this.$store.dispatch("admin_table/getUsers").catch(e=>
      {
        this.$q.notify({type:"negative",message:e.message})
      })
    },

  }
</script>

<style scoped>

</style>
