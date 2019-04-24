import wepy from 'wepy'

let baseUrl = 'http://47.112.21.93:3000'
// let baseUrl = 'http://localhost:3000'
let timeout = 12 * 1000
let headers = {
  'content-type': 'application/json',
}

const fetch = {
    get: (obj) => {
        return new Promise((reslove, reject) => {
            let timer = setTimeout(() => {
                reject({
                   msg: '请求超时',
                   success: false
                })
            }, timeout)
            wepy.request({
                url: baseUrl + obj.url,
                header: headers,
                data: obj.data || {},
                method: 'GET',
                dataType: obj.dataType || 'json',
                responseType: obj.responseType || 'text',
            }).then(res => {
                clearTimeout(timer)
                reslove(res)
            }).catch(e => {
                reject(e)
            }) 
        })
    },

    post: (obj) => {
        return new Promise((reslove, reject) => {
          let timer = setTimeout(() => {
            reject({
              msg: '请求超时',
              success: false
            })
          }, timeout)
          wepy.request({
            url: obj.url,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            }, 
            data: obj.data || {},
            method: 'POST',
            dataType: obj.dataType || 'json',
            responseType: obj.responseType || 'text',
            }).then(res => {
              clearTimeout(timer)
              reslove(res)
            }).catch(e => {
              reject(e)
            })
        })
    }
}

export default fetch