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
        <q-item clickable to="#">
          <q-item-section>Отчеты</q-item-section>
        </q-item>
        <q-item clickable to="#">
          <q-item-section>Заглушка</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
  export default {
    name: "DropDowns"
  }
</script>

<style scoped>

</style>
