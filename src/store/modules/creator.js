import { builder, prepare, get, post} from '@/util'
import config from '@/config'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    objects: {

    },
    factory: {
      entriesBuffer: []
    },
    group: ''
  },
  getters: {
    dStoreList (state) {
      const names = Object.keys(state.objects)
      return names.map(name => {
        const someMember = state.objects[name]
        const values = Object.keys(someMember).map(key => ({
          key,
          descriptor: someMember[key].descriptor
        }))
        return {
          name,
          values
        }
      })
    }
  },
  mutations: {
    SAVE (state, object) {
      Vue.set(state.objects, object.name, object.body)
      console.log(state.objects)
    },
    DELETE_OBJECT (state, name) {
      Vue.delete(state.objects, name)
    },
    PUSH_ENTRIES_BUFFER (state, item) {
      state.factory.entriesBuffer.push(item)
    },
    ACHIEVE_ENTRIES_BUFFER (state, achieve) {
      state.factory.entriesBuffer[achieve.index]['value']['descriptor'] = achieve.descriptor
      state.factory.entriesBuffer[achieve.index]['value']['initiator'] = achieve.initiator
    },
    DELETE_ENTRIES_BUFFER (state, index) {
      state.factory.entriesBuffer.splice(index, 1)
    },
    RESET_ENTRIES_BUFFER (state) {
      state.factory.entriesBuffer = []
    }
  },
  actions: {
    save (context, object) {
      context.commit('SAVE', object)
    },
    deleteObject (context, name) {
      context.commit('DELETE_OBJECT', name)
    },
    pushEntriesBuffer (context, item) {
      context.commit('PUSH_ENTRIES_BUFFER', item)
    },
    achieveEntriesBuffer (context, achieve) {
      context.commit('ACHIEVE_ENTRIES_BUFFER', achieve)
    },
    deleteEntriesBuffer (context, index) {
      context.commit('DELETE_ENTRIES_BUFFER', index)
    },
    resetEntriesBuffer (context) {
      context.commit('RESET_ENTRIES_BUFFER')
    },
    preBuild (context) {
      return prepare(context.state.objects)
    },
    buildObject (context, {
      obj,
      name
    }) {
      if (obj[name]) {
        return builder(obj[name])
      }
    },

    buildAll (context, obj) {
      let _o = {}
      Object.keys(obj).forEach(key => {
        _o[key] = builder(obj[key])
      })
      return _o
    },
    uploadData (context, name) {
      return new Promise((res, rej) => {
        post( config.URL + "/post", {
          username: name,
          type: "dataStore",
          dataStore: {
            group: {
              belong: "test",
              description: "测试用"
            },
            pre: JSON.stringify(context.state.objects)
          }
        }).then(r => res(r))
      })
    },
    getData (context, target) {
      return get( config.URL + "/find?type=dataStore")
    }
  }
}
