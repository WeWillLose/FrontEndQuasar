<template>
  <div>
    <q-card class="my-card" flat bordered>
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h5 q-mt-sm q-mb-xs ">{{item.title}}</div>
            <div class="text-caption text-grey">{{item.description}}</div>
          </div>
          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable @click="showEdit">
                    <q-item-section>Edit</q-item-section>
                  </q-item>
                  <q-item clickable @click="showDelete">
                    <q-item-section>delete</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-actions v-if="item.text.trim()">
        <q-space/>
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="item.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="item.expanded = !item.expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="item.expanded">
          <q-separator/>
          <q-card-section class="text-subitle2">
            {{item.text}}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>

    <card-dialog :item="item" ref="card_dialog"/>

  </div>
</template>

<script>
  import CardDialog from "components/2/CardDialog";

  export default {
    components: {CardDialog},
    props: ['item'],
    data() {
      return {
        show_dialog: false
      }
    },
    methods:{
      showEdit(){
        this.$refs.card_dialog.edit()
      },
      showDelete(){
        confirm("Are you sure you want to delete this item?") &&
        this.$store.commit('to_do/deleteItem',this.item)
      }
    }
  }
</script>

<style scoped>

</style>
