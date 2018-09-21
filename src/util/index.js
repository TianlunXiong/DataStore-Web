import faker from 'faker'

export function builder (obj) {
  if (obj) {
    let output = {}
    Object.keys(obj).forEach(key => {
      output[key] = obj[key]['initiator']()
    })
    return output
  }
}

export function prepare(objs) {
  let _objs = JSON.parse(JSON.stringify(objs))
  Object.keys(_objs).forEach(name => {
    Object.keys(_objs[name]).forEach(key => {
      const _arr = _objs[name][key]['descriptor'].split('|')
      const _first = _arr[0]
      const _second = _arr[1]
      if (_first === 'Object' || /^Array\(\d+\)$/.test(_first) ) {
        if (/^Array\(\d+\)$/.test(_first)){
          const n = _first.match(/^Array\((\d+)\)$/)[1]
          _objs[name][key]['initiator'] = () => new Array(parseInt(n)).fill(0).map((item, i) => {
            if (_objs[_second]) {
              return builder(_objs[_second])
            } else {
              //  不指定数组成员时 返回当前位置索引
              return i
            }
          })
        }
        if (_first === 'Object'){
          _objs[name][key]['initiator'] = () => builder(_objs[_second])
        }
      } else {
        let iOrc
        switch (_first) {
          case 'String':
            iOrc = _second.match(/^Custom\((.*)\)$/)
            if(iOrc){
              //自定义
              _objs[name][key]['initiator'] = () => String(iOrc[1])
            } else {
              //内置
              const _f = _second.split('\.')
              _objs[name][key]['initiator'] = faker[_f[0]][_f[1]]
            }
            break
          case 'Number':
            iOrc = _second.match(/^Custom\((.*)\)$/)
            if(iOrc){
              //自定义
              _objs[name][key]['initiator'] = () => Number(iOrc[1])
            } else {
              //内置
              const _f = _second.split('\.')
              _objs[name][key]['initiator'] = faker[_f[0]][_f[1]]
            }
            break
          case 'Boolean':
            iOrc = _second.match(/^Custom\((.*)\)$/)
            if (iOrc) {
              //自定义
              if (iOrc[1] === 'false' || iOrc[1] === '0') {
                _objs[name][key]['initiator'] = () => false
              } else {
                _objs[name][key]['initiator'] = () => true
              }
              
            } else {
              //内置
              const _f = _second.split('\.')
              _objs[name][key]['initiator'] = faker[_f[0]][_f[1]]
            }
            break
        }
      }
    })
  })
  return _objs
}


export function get(url) {
  return fetch(url, {
    credentials: "include",
    mode: "cors"
  }).then(r => r.json())
}

export function post (url, data) {
  return fetch(url, {
      body: JSON.stringify(data),
      headers: {
          "content-type": "application/json"
      },
      credentials: "include",
      method: "POST",
      mode: "cors",
      redirect: "follow",
      referrer: "no-referrer"
  }).then(r => r.json());
}
