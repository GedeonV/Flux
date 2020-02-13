import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

const vp = new VuexPersist({
    key: 'store',
    // supportCircular: true,
    storage: window.localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vp.plugin],
    state: {
        videoFlux: {},
        onAir: 0,
        peerId: ''
    },
    mutations: {
        getFlux(state, flux) {
            // state.flux = flux
            state.idFlux = flux
        },
        onAir(state, bool) {
            state.onAir = bool
        },
        getPeer(state, id) {
            state.peerId = id

        }
    },
    actions: {},
    modules: {}
})
