<template>
  <q-item v-ripple class="bg-orange-1">
    <q-item-section>
      <q-item-label>{{post.name}}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">{{post.date}}</q-item-label>
          <q-item-label caption class="row justify-end">
            <small>{{post.time}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <q-btn @click="promptToDelete(id)" flat round dense color="red" icon="delete"></q-btn>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["post", "id"],
  methods: {
    ...mapActions("posts",[("deletePost")]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete this post?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deletePost(id);
        });
    }
  }
};
</script>

<style>
</style>
