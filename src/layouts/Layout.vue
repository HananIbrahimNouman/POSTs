<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
      

        <q-toolbar-title class="absolute-center">
          Whatever pops on your mind!        
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer >
      <q-tabs>
        <q-route-tab
           v-for="(nav, index) in navs"
            :key='index'
            :to="nav.to"
            :icon="nav.icon"
            :label="nav.label"
            exact
        />
      </q-tabs>
      </q-footer>

    <q-drawer
      :breakpoint="768"
      show-if-above
      :width="230"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <q-item
          v-for="(nav, index) in navs"
          :key='index'
          :to="nav.to"
          exact
          clickable
        >
        <q-item-section
          avatar
        >
          <q-icon :name="nav.icon"/>
        </q-item-section>
        <q-item-section
          header
          class="text-grey-8"
        >
          <q-item-label
          >
           {{nav.label}}
          </q-item-label>
        </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      navs:[
        {label:'About',icon:'description',to:'/about'},{label:'Posts',icon:'list',to:'/'}
      ]
    }
  }
}
</script>
<style>
  @media screen and (min-width: 768px){
    .q-footer {
      display: none
    }
  }
</style>
