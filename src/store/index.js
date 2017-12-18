import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    started: false,
    player1Name: '',
    player2Name: '',
  },
  mutations: {
    setStarted(state, value) {
      state.started = value;
    },
    setPlayer1Name(state, name) {
      state.player1Name = name;
    },
    setPlayer2Name(state, name) {
      state.player2Name = name;
    }
  },
  actions: {
    setStarted({commit}, value) {
      commit('setStarted', value);

      if (value) {
        window.socket.emit('startcounter', {data: "start"});
      } else {
        socket.emit('stopcounter', {data: "stop"});
      }
    },
    setPlayer1Name({commit}, name) {
      commit('setPlayer1Name', name);
    },
    setPlayer2Name({commit}, name) {
      commit('setPlayer2Name', name);
    }
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
    }
  }
});
