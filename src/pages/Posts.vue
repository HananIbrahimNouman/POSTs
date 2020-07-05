<template>
  <q-page class="q-pa-md">

    <q-list bordered separator>
      <post v-for="(post,key) in posts" :key="key" :post="post" :id="key"></post>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
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
 import {mapGetters} from 'vuex';    
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
    },
    filters: {
    },
    directives: {
    },
    beforeCreate(){
      console.log('befoeCreate')
    },
    created(){
      console.log('created')
    },
    beforeMount(){
      console.log('befoeMount')
    },
    mounted(){
    },
    beforeUpdate(){
      console.log('beforeUpdate')
    },
    updated(){
      console.log('updated')
    },
    beforeDestroy(){
      console.log('beforeUpdate')
    },
    destroyed(){
      console.log('updated')
    },
    components:{
      'post': require('components/Posts/Post.vue').default,
      'add-post': require('components/Posts/Modals/AddPost.vue').default

    }
  }
</script>

<style>
  .border-grey {
    border: 1px solid grey;
  }
  input, button {
    font-size:23px;
  }
  .error {
    color: red;
    background: pink;
  }
</style>
