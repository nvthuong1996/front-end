import { getField, updateField } from 'vuex-map-fields'

export const state = () => {
  return {
    fieldA: {
      a: 1,
      b: 2
    },
    fieldB: 2
  }
}

export const getters = {
  getField
}

export const mutations = {
  updateField
}
