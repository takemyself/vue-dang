import fetch from '../common/js/fetch'

/**
 * 服务商列表
 * @param query
 * @returns {*}
 */
export function getServerCate (query) {
  return fetch({
    url: '/index/index/getServerCate',
    method: 'post',
    params: query
  })
}

/**
 * 服务商内容
 * @param query
 * @returns {*}
 */
export function getServerContent (query) {
  return fetch({
    url: '/index/index/getServerContent',
    method: 'post',
    params: query
  })
}
