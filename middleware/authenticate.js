// eslint-disable-next-line no-unused-vars
import feathersClient from '../feathers/feathers-client'

// eslint-disable-next-line require-await
export default async function(context) {
  // eslint-disable-next-line no-unused-vars
  const { store, redirect, route } = context
  const { auth } = store.state
  debugger
  if (!auth.payload && process.client) {
    // await store.commit('auth/setAuthenticatePending')
    // await feathersClient
    //   .reAuthenticate()
    //   .then((response) => {
    //     store.dispatch('auth/responseHandler', response)
    //   })
    //   .catch((error) => {
    //     store.commit('auth/setAuthenticateError', error)
    //     store.commit('auth/unsetAuthenticatePending')
    //   })
  }

  if (!auth.publicPages.includes(route.name) && !auth.payload) {
    // return redirect('/login')
  }
}
