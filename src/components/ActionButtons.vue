<template>
  <div>
    <button class="btn btn-block btn-success btn-lg"
            :disabled="enableStartButton"
            @click="start">
      Start
    </button>
    <button class="btn btn-block btn-danger btn-lg"
            :disabled="enableStopButton"
            @click="stop">
      Stop
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ActionButtons',
    computed: {
      canStart() {
        return this.$store.getters.canStart;
      },
      started() {
        return this.$store.getters.isStarted;
      },
      enableStartButton() {
        return this.started || !this.canStart;
      },
      enableStopButton() {
        return !this.started;
      }
    },
    methods: {
      start() {
        if (this.started || !this.canStart) {
          return;
        }

        this.$store.dispatch('setStarted', true);

        console.log('start');
      },
      stop() {
        if (!this.started) {
          return;
        }

        this.$store.dispatch('setStarted', false);

        console.log('stop');
      }
    }
  }
</script>
