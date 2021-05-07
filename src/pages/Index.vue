<template>
  <q-page class="flex">
    <q-table
      :data="data"
      row-key="id"
      style="width: 100%"
    />
  </q-page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PageIndex',
  data () {
    return {
      data: [],
    }
  },
  async mounted () {
    let re = await this.getAlbums();
    this.data = re;
  },
  methods: {
    ...mapActions('albums',['getAlbums']),
  }
}
</script>
