export function loadScript (url, id, callback) {
  // 如果URL不存在或者该ID已经加载过了
  if (!url || document.getElementById(id)) {
    if (typeof (callback) === 'function') {
      // eslint-disable-next-line
      callback(true)
    }
    return
  }
  const script = document.createElement('script')
  script.type = 'text/javascript'
  if (id) script.id = id
  if (typeof (callback) === 'function') {
    // 默认10S超时就立即执行回调函数
    let timer = setTimeout(function () {
      // eslint-disable-next-line
      callback(false)
      timer = null
    }, 10000)
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null
          if (timer) {
            // eslint-disable-next-line
            callback(true)
          }
        }
      }
    } else {
      script.onload = function () {
        if (timer) {
          clearTimeout(timer)
          // eslint-disable-next-line
          callback(true)
        }
      }
    }
  }
  script.src = url
  document.body.appendChild(script)
  // document.body.prepend(script)
}

export function getDates (times, y, m, d) {
  let now = new Date(times)
  y = now.getFullYear()
  m = now.getMonth() + 1
  d = now.getDate()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + now.toTimeString().substr(0, 8)
}
