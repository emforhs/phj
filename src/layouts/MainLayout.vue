<template>
  <q-layout view="hHh lpR fFf">

  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="leftDrawerOpen = !leftDrawerOpen"
      />

      <q-toolbar-title align="center">
        PHJ
      </q-toolbar-title>

      <div></div>
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    content-class="bg-grey-1"
  >
    <q-list>
      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">

    </q-footer>

  </q-layout>
</template>
<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    caption: '과제',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Dashboard',
    caption: 'apexchart & gridster(CRUD)',
    icon: 'chat',
    link: '/Dashboard'
  },
];

export default {
  name: 'MyLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
