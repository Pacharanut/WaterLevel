import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.0-9/s960x960/117386994_4227914697281918_7135468051869735361_o.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_eui2=AeFFa0_NWCnlZe3K9d-Iy2pXsMyMymHTONGwzIzKYdM40YzXkc8pwMQ02nrvK0S2miLhL1sR1vpSe5VnhiCBWmpj&_nc_ohc=j0AYi546ldYAX9WM_mG&_nc_ht=scontent.fbkk6-1.fna&_nc_tp=7&oh=6ddb4c9968b31cde94a601a941673ee4&oe=5F6138B2',
    drawer: null,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },
  actions: {

  },
})
