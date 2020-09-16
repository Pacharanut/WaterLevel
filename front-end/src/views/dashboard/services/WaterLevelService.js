import Api from './Api'

export default {
  show () {
    return Api().get('api/water_level')
  },
  getSensor () {
    return Api().get('api/sensor')
  },
  postDevice (credentials) {
    return Api().post('api/device', credentials)
  },
  getDevice () {
    return Api().get('api/device')
  },
  getRuralroad () {
    return Api().get('api/sensor/last')
  },
}
