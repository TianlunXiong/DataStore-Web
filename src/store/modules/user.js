import {get, post} from '@/util'
import config from '@/config'

export default {
  namespaced: true,
  state: {
    UA: window.navigator.userAgent,
    name: '',
    isLogin: false
  },
  getters: {
    userAgent (state) {
      return state.UA.match(/\((.+);/)[1]
    }
  },
  actions:{
    checkLogin (context) {
      post(`${config.URL}/login`,{
        "e-mail" : "testuser@spot.com",
        "password" : "123123123"
      }).then(r => {
        if(r.state.success) {
          context.commit('SWITCH_LOGIN', true)
          context.commit('USERNAME', r.state.user.name)
        } else {
          context.commit('SWITCH_LOGIN', false)
        }
      }).catch(e => {
        context.commit('SWITCH_LOGIN', false)
      })
    }
  },

  mutations: {
    SWITCH_LOGIN (state, isLogin) {
      state.isLogin = isLogin
    },
    USERNAME (state, name) {
      state.name = name
    }
  }
}