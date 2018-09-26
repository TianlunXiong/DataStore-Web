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
    groupName: '',
    netBuffer: {
      select: '',
      groups: []
    },
    operation: 'local'
  },
  getters: {
    dStoreList (state) {
      let _o
      switch(state.operation) {
        case 'local':
          _o = state.objects
          break
        case 'inject':
          _o = state.netBuffer.groups.find(item => {
            if(item.group){
              return item.group.belong === state.netBuffer.select
            } else {
              return false
            }
          })
          if(_o){
            _o = _o.pre
          }
          break
      }

      if (_o) {
        const names = Object.keys(_o)
        return names.map(name => {
          const someMember = _o[name]
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

    groupList (state) {
      return state.netBuffer.groups.map(item => {
        if(item.group){
          return item.group.belong
        }
      }).filter(item => item !== undefined)
    },
    workSpace (state) {
      switch (state.operation) {
        case 'local':
          return state.objects
        case 'inject':
          const temp = state.netBuffer.select
           
          const _o = state.netBuffer.groups.find(item => {
            if (item.group) {
              return item.group.belong === temp
            } else {
              return false
            }
          })
          if (_o) {
            return _o.pre
          } else {
            return {}
          }
      }
    }
  },
  mutations: {
    SAVE (state, object) {
      Vue.set(state.objects, object.name, object.body)
    },
    SAVE_GROUP_MEMBER (state, object) {
      const temp = state.netBuffer.select
      const _o = state.netBuffer.groups.find(item => {
        if (item.group) {
          return item.group.belong === temp
        } else {
          return false
        }
      })
      .pre
      Vue.set(_o, object.name, object.body)
    },
    DELETE_OBJECT (state, name) {
      switch (state.operation) {
        case 'local':
          Vue.delete(state.objects, name)
          break
        case 'inject':
          const temp = state.netBuffer.select
          const _o = state.netBuffer.groups.find(item => {
            if (item.group) {
              return item.group.belong === temp
            } else {
              return false
            }
          })
          .pre
          Vue.delete(_o, name)
      }
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
    },
    SET_NET_BUFFER_GROUPS (state, arr) {
      state.netBuffer.groups = arr
    },
    SET_OPERATION (state, _s) {
      state.operation = _s
    },
    SET_LOCAL_GROUP (state, name) {
      state.groupName = name
    },
    SET_INJECT_GROUP (state, name) {
      state.netBuffer.select = name
    }
  },
  actions: {
    save (context, object) {
      switch (context.state.operation) {
        case 'local':
          context.commit('SAVE', object)
          break
        case 'inject':
          context.commit('SAVE_GROUP_MEMBER', object)
          break
      }
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
      return prepare(context.getters['workSpace'])
    },
    buildObject (context, {
      obj,
      name
    }) {
      if (obj[name]) {
        return builder(obj[name])
      }
    },
    buildOne (context, name) {
      return context.dispatch('preBuild').then(r => {
        let _o = {}
        _o[name] = builder(r[name])
        return _o
      })
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
              belong: context.state.groupName.trim(),
              description: "测试用..."
            },
            pre: JSON.stringify(context.state.objects)
          }
        }).then(r => res(r))
      })
    },
    updateGroup (context, name) {
      const temp = context.state.netBuffer.select
      const _o = context.state.netBuffer.groups.find(item => {
        if (item.group) {
          return item.group.belong === temp
        } else {
          return false
        }
      })
      return new Promise((res, rej) =>{
        post( config.URL + "/update", {
          username: name,
          type: "dataStore",
          dataStore: {
            id: _o.id,
            pre: JSON.stringify(_o.pre)
          }
        }).then(r => {
          res(r)
        })
      })
    },
    getData (context, target) {
      return get( config.URL + "/find?type=dataStore")
    },
    getGroup (context) {
      context.dispatch('getData').then(r => {
        return r
      }).then(r => {
        context.dispatch('setNetBufferGroups', r.state.dataStore.map(item => {
          try{
            item.pre = JSON.parse(item.pre)
          }catch(e){
            console.log(e)
            item.pre = {}
          }
          return item
        }))
      }).then(()=>{
        // console.log(context.getters['groupList'])
      })
    },
    deleteGroup (context, name) {
      const temp = context.state.netBuffer.select
      const _o = context.state.netBuffer.groups.find(item => {
        if (item.group) {
          return item.group.belong === temp
        } else {
          return false
        }
      })
      if(_o){
        return new Promise((res, rej) =>{
          post( config.URL + "/delete", {
            username: name,
            type: "dataStore",
            dataStore: {
              id: Number(_o.id)
            }
          }).then(r => {
            res(r)
          })
        })
      }
    },
    setNetBufferGroups (context, arr) {
      context.commit('SET_NET_BUFFER_GROUPS', arr)
    },

    setOperation (context, status) {
      context.commit('SET_OPERATION', status)
    },
    toggleOperation (context) {
      context.commit('SET_OPERATION', context.state.operation === 'local' ? 'inject' : 'local')
    },
    setLocalGroup (context, name) {
      context.commit('SET_LOCAL_GROUP', name)
    },
    setInjectGroup (context, name) {
      context.commit('SET_INJECT_GROUP', name)
    }
  }
}
