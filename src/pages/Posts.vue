<template>
  <q-page class="q-pa-md">

    <q-list bordered separator>
      <post v-for="(post,key) in posts" :key="key" :post="post" :id="key"></post>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        aria-label="Center Align"
        round
        color="dark"
        size="30px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
      <q-dialog v-model="showAddTask">
      <add-post/>
    </q-dialog>

  </q-page>
</template>

<script>
 import {mapGetters, mapActions} from 'vuex';    
  export default {
    data(){
      return {
        showAddTask: false,
      }
    },
    computed: {
      ...mapGetters('posts',['posts']),
    },
    methods: {
      ...mapActions("posts",[("getPosts")]),
    },
    mounted(){
      this.getPosts()
    },
    components:{
      'post': require('components/Posts/Post.vue').default,
      'add-post': require('components/Posts/Modals/AddPost.vue').default

    }
  }
</script>
