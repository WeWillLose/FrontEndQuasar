<template>
  <div>
    <q-btn-dropdown auto-close stretch flat label="Инструменты" class="text_main">
      <q-list>
        <q-item clickable to="/todo">
          <q-item-section>Заметки</q-item-section>
        </q-item>
        <q-item clickable to="/form">
          <q-item-section>Создать отчет</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-btn-dropdown auto-close stretch flat label="Пользователь" class="text_main">
      <q-list>
        <q-item clickable to="/myreports">
          <q-item-section>Мои очтеты</q-item-section>
        </q-item>
        <q-item clickable to="#">
          <q-item-section>Заглушка</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <template v-if="isAdmin">
      <q-btn-dropdown auto-close stretch flat label="Администрирование" class="text_main">
        <q-list>
          <q-item clickable to="/admin">
            <q-item-section>Аккаунты</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </template>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "DropDowns",
    computed:{
      ...mapGetters('user',['isAdmin'])
    }
  }
</script>

<style scoped>

</style>
