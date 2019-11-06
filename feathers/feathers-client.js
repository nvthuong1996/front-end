// src/feathers-client.js
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import authClient from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import feathersVuex from 'feathers-vuex' // or '@/libs/feathers-vuex' if you're copying feathers-vuex as mentioned earlier.
// eslint-disable-next-line no-unused-vars
import { CookieStorage } from 'cookie-storage'
// eslint-disable-next-line no-unused-vars
import MemoryStorage from 'memorystorage'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
const rest = require('@feathersjs/rest-client')

// Setup the Feathers client
const host = `${process.env.API_ENDPOINT}` // or set a string here, directly

console.log('chay lai')

const storage = new MemoryStorage()
const socket = io(host, { transports: ['websocket'] })
const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(
    authClient({
      // storage: new CookieStorage()
      storage
      // storage: window.localStorage
      // storageKey: 'auth._token.local'
    })
  )
export default feathersClient

// Setup feathers-vuex
const {
  makeServicePlugin,
  makeAuthPlugin,
  BaseModel,
  models,
  clients,
  FeathersVuex
} = feathersVuex(feathersClient, {
  serverAlias: 'api', // or whatever that makes sense for your project
  idField: '_id', // `id` and `_id` are both supported, so this is only necessary if you're using something else.,
  debug: true
})

export {
  makeAuthPlugin,
  makeServicePlugin,
  BaseModel,
  models,
  clients,
  FeathersVuex,
  socket
}
