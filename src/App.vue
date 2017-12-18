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
      <LapData/>
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
      window.socket = io.connect('http://orangepipc/test');
      window.socket.on('my response', function (msg) {
        console.log('recv' + msg);
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
