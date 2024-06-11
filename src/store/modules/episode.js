import axios from 'axios'

const state = () => ({
  episodesInfo: {},
  allEpisodes: [],
  singleEpisode: {},
  singleEpisodeCharacters: [],
  loader: false
})

const mutations = {
  SET_ALL_EPISODES(state, payload) {
    state.allEpisodes = payload.results
    state.episodesInfo = payload.info
  },

  SET_LOADER: state => state.loader = true,
  CLEAR_LOADER: state => state.loader = false,

  SET_SINGLE_EPISODE(state, payload) {
    state.singleEpisode = payload
  },

  SET_CHARACTERS(state, payload) {
    state.singleEpisodeCharacters = payload
  },

  CLEAR_SINGLE_EPISODE(state) {
    state.singleEpisode = {}
    state.singleEpisodeCharacters = []
  }
}

const actions = {
  async loadAllEpisodes({ commit }) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get('https://rickandmortyapi.com/api/episode')
      
      commit('SET_ALL_EPISODES', data)
    } catch(e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    } 
  },

  async loadSingleEpisode({ commit }, payload) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${ payload }`)

      const charactersString = data.characters.map( character => {
        const splitted = character.split('/')
        return splitted[splitted.length - 1]
      })
      .join(',')

      const characters = await axios.get(`https://rickandmortyapi.com/api/character/${charactersString}`)

      commit('SET_SINGLE_EPISODE', data)
      commit('SET_CHARACTERS', characters.data)
    } catch(e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    } 
  },

  async loadPage({ commit }, payload) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get(payload)

      commit('SET_ALL_EPISODES', data)
    } catch(e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    } 
  }
}

const episode = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default episode