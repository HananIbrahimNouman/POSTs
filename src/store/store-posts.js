import Vue from 'vue'
import {uid} from 'quasar'
const state = {
    posts:{
        1:{name:'x',time:'5pm',date:'2019'},2:{name:'y',time:'10pm',date:'2010'}
    }
}

const mutations = {
    addPost(state,{id, post}){
        Vue.set(state.posts, id,post)    
    },
    deletePost(state,id){
        Vue.delete(state.posts, id)
    }
}

const actions = {
    addPost({commit},post){
        const newId = uid();
        const payload = {
            id:newId,
            post
        }
        commit('addPost',payload)    
    },
    deletePost({commit},id){
        commit('deletePost',id)    
    }
}

const getters = {
    posts: (state)=>{
        return state.posts;
    }
}

export default {
    namespaced :true,
    state,
    mutations,
    actions,
    getters
}