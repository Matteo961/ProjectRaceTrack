<template>
  <div id="app">
    <div class="container">
      <div class="row mb-3">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title text-center fontneeded">Lyandro's ultimate racebaan!</h2>
              <div class="offset-md-2 col-md-8">
                <PlayerNameInput :hidden="isStarted"/>
                <ActionButtons/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LapData :hidden="!isStarted"/>
    </div>
  </div>
</template>

<script>
  import io from 'socket.io-client';
  import ActionButtons from './components/ActionButtons'
  import PlayerNameInput from './components/PlayerNameInput'
  import LapData from './components/LapData'

  export default {
    name: 'app',
    created() {
      let potato = this;

      window.socket = io.connect('http://orangepipc/test');
      window.socket.on('my response', function (message) {

        // setPlayerLapLists
        let player = message.player - 1; // Let is local variable in js scope is destroyed once it hits end of code block.
        let lap = message.lap; // Socket io does that for you ;)

        potato.$store.dispatch('setPlayerLapList', {player: player, lap: lap});

      });
    },
    computed: {
      isStarted() {
        return this.$store.getters.isStarted;
      },
    },
    components: {
      ActionButtons,
      PlayerNameInput,
      LapData,
    },
    methods: {}
  }
</script>
