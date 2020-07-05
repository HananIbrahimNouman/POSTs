//import Vue from 'vue'
import axios from 'axios'
const BASE_URL='https://jsonplaceholder.typicode.com'

const state = {
    posts: [],
}

const mutations = {
    getPosts(state,payload){
        state.posts=  payload
    },
    addPost(state,post){
        state.posts.push(post);
    },
    deletePosts(state,id){
        //just a work around since getPosts get them all
        state.posts.splice(id,1);
    },
}

const actions = {
    getPosts({commit}){
        const localPosts = localStorage.getItem('posts');
        if(!localPosts) {
            axios.get(`${BASE_URL}/posts`).then(response => { 
                localStorage.setItem('posts',JSON.stringify(response.data.slice(0,5)))
                commit('getPosts',response.data.slice(0,5))
            })
        }  
        else {commit('getPosts',JSON.parse(localPosts))}     
    },
    addPost({commit},post){
        axios.post(`${BASE_URL}/posts`,post).then(response => {
            const localPosts = JSON.parse(localStorage.getItem('posts'));
            localPosts.push(post)
            localStorage.setItem('posts',JSON.stringify(localPosts))
            commit('addPost',response.data)
        })
    },
    deletePost({commit,dispatch},id){
        axios.delete(`${BASE_URL}/posts/${id}`).then(async response =>{
            //dispatch('getPosts')
           await commit('deletePosts',id);
           localStorage.setItem('posts',JSON.stringify(state.posts))
        })
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