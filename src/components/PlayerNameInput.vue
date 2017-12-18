<template>
  <div>
    <form>
      <div class="form-group">
        <label class="fontneeded" for="p1">Speler 1 naam</label>
        <input type="text" class="form-control form-control-lg" id="p1" placeholder="Naam van speler 1"
               v-model="player1Name">
      </div>
      <div class="form-group">
        <label class="fontneeded" for="p2">Speler 2 naam</label>
        <input type="text" class="form-control form-control-lg" id="p2" placeholder="Naam van speler 2"
               v-model="player2Name">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "player-name-input",
    computed: {
      player1Name: {
        get() {
          return this.$store.getters.player1Name;
        },
        set(value) {
          this.$store.commit('setPlayer1Name', value);
        }
      },
      player2Name: {
        get() {
          return this.$store.getters.player2Name;
        },
        set(value) {
          this.$store.commit('setPlayer2Name', value);
        }
      }
    }
  }
</script>

<style scoped>

</style>
