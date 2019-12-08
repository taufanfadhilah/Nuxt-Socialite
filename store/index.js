import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {}
    },
    mutations: {
      saveUser(state, payload) {
        state.user = payload
      }
    }
  });
};

export default createStore;
