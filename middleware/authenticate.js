// eslint-disable-next-line no-unused-vars
import feathersClient from '../feathers/feathers-client'

// eslint-disable-next-line require-await
export default async function(context) {
  // eslint-disable-next-line no-unused-vars
  const { store, redirect, route } = context
  debugger
  if (process.client) {
    feathersClient.setAccessToken('abc')
  }
}
