import axios from 'axios'

const state = () => ({
  locationsInfo: {},
  allLocations: [],
  singleLocation: {},
  singleLocationCharacters: [],
  loader: false
})

const mutations = {
  SET_ALL_LOCATIONS: (state, payload) => {
    state.allLocations = payload.results
    state.locationsInfo = payload.info
  }, 
  SET_SINGLE_LOCATION: (state, payload) => state.singleLocation = payload,
  SET_SINGLE_LOCATION_CHARACTERS: (state, payload) => state.singleLocationCharacters = payload,
  SET_LOADER: state => state.loader = true,
  CLEAR_LOADER: state => state.loader = false,
}

const actions = {
  async loadAllLocations({ commit }) {
    try { 
      commit('SET_LOADER')
      const { data } = await axios.get('https://rickandmortyapi.com/api/location')

      commit('SET_ALL_LOCATIONS', data)
    } catch(e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    }
  },

  async loadSingleLocation({ commit }, payload) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${ payload }`)
      const charactersString = data.residents.map( character => {
        const splitted = character.split('/')
        return splitted[splitted.length - 1]
      })
      .join(',')

      const characters = await axios.get(`https://rickandmortyapi.com/api/character/${ charactersString }`)
      
      commit('SET_SINGLE_LOCATION', data)
      commit('SET_SINGLE_LOCATION_CHARACTERS', characters.data)
    } catch (e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    }
  },

  async loadPage({ commit }, payload) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get(payload)

      commit('SET_ALL_LOCATIONS', data)
    } catch(e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
