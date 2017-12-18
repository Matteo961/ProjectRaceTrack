<template>
  <div>
    <ul id="laplist" class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center"
          v-for="item in lapData">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['player'],
    name: "lap-player-data",
    computed: {
      lapData() {
        return this.$store.getters.playerLapList[this.player];
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
