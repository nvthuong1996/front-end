/* eslint-disable prettier/prettier */
import feathersClient from '../feathers/feathers-client'
export default ({app}, inject) => {
  // eslint-disable-next-line no-unused-vars
  // const cookie = req.
  const token = app.$cookies.get('auth._token.local');
  if(token){
    feathersClient.authentication.setAccessToken(token.replace('Bearer ',''))
    feathersClient.reAuthenticate()
  }
}
