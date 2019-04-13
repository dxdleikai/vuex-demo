import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        myNameSpace: {
            namespaced: true,
            state: {
                count: 0,
                name: 'lk'
            },
            getters: {
                counts: state => state.count,
                myName: state => state.name
            },
            actions: {
                editNameAction({commit, state}, arg) {
                    commit('editName', arg);
                }
            },
            mutations: {
                increment: state => state.count++,
                decrement: state => state.count--,
                editName(state, arg) {
                    state.name = arg;
                }
            },
        }
    },
    state: {
        count: 0
    },
    getters: {
        counts: state => state.count
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    },
    strict: process.env.NODE_ENV !== 'production'
    
});

export default store;