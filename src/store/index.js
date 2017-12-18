import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    started: false,
    // TODO Remove hard coded names for debugging purposes.
    player1Name: 'Player 1',
    player2Name: 'Player 2',
    playerLapList: [
      [], []
    ],
  },
  mutations: { // Synced
    setStarted(state, value) {
      state.started = value;
    },
    setPlayer1Name(state, name) {
      state.player1Name = name;
    },
    setPlayer2Name(state, name) {
      state.player2Name = name;
    },
    setPlayerLapList(state, params) {
      // TODO Add limit
      // TODO Remove oldest element.
      state.playerLapList[params.player].push(params.lap);
    },
    resetPlayerLapList(state) {
      for (let i = 0; i < state.playerLapList.length; i++) {
        // reset the players lap list. -> This is based on the amount of arrays.
        state.playerLapList[i].length = 0;
      }
    }
  },
  actions: { // Async
    setStarted({commit}, value) {
      if (value) {
        window.socket.emit('startcounter', {data: "start"});
      } else {
        window.socket.emit('stopcounter', {data: "stop"});
        commit('resetPlayerLapList');
      }

      commit('setStarted', value);
    },
    setPlayer1Name({commit}, name) {
      commit('setPlayer1Name', name);
    },
    setPlayer2Name({commit}, name) {
      commit('setPlayer2Name', name);
    },
    setPlayerLapList({commit}, params) {
      commit('setPlayerLapList', params);
    },
  },
  getters: {
    isStarted(state) {
      return state.started;
    },
    player1Name(state) {
      return state.player1Name;
    },
    player2Name(state) {
      return state.player2Name;
    },
    canStart(state) {
      return state.player1Name.length > 0 && state.player2Name.length > 0;
    },
    playerLapList(state) {
      return state.playerLapList;
    },
  }
});
