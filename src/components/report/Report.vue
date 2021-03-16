<template>
  <div class="">
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h5 text-caption">{{report.name}}</div>
          </div>
          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Edit</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>delete</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-space/>
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator/>
          <q-card-section class="text-subitle2">
            <div>
              дата создания : <b>{{getDate}}</b>
            </div>
            <div>
              статус: <b>{{report.status}}</b>
            </div>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
  export default {
    props: ['report'],
    name: "Report",
    data(){
      return{
        expanded : false,
      }
    },
    created() {
      console.log(this.report)
    },
    computed:{
      getDate(){
       return  new Date(this.report.createdDate).toLocaleDateString();
      }
    }
  }
</script>

<style scoped>

</style>
