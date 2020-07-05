<template>
    <q-card>
        <q-card-section class="row">
          <div class="text-h6">Add Post</div>
          <q-space/>
          <q-btn flat round dense icon="close" v-close-popup/>
        </q-card-section>
        <form @submit.prevent="submitForm">
          <q-card-section class="q-pt-none">
            <q-input v-model="postToSubmit.body" outlined label="add your thoughts" :rules="[val=>!!val ||'required field!']" autofocus></q-input>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="SAVE" color="primary" type="submit" v-close-popup />
          </q-card-actions>
        </form>

        
    </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data(){
      return {
        postToSubmit: {
            title: 'newPost',
            body: '',
            userId: 1
        }
      }
    },
    methods:{
      ...mapActions("posts",[("addPost")]),

      submitForm(){
        this.addPost(this.postToSubmit)
      }
    }
}
</script>

<style>
</style>
