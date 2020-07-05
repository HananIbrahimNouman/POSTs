<template>
  <q-item v-ripple class="bg-orange-1">
    <q-item-section>
      <q-item-label>{{post.body}}</q-item-label>
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
