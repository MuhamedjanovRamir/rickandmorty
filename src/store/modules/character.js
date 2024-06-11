import axios from 'axios'

const state = () => ({
  info: {},
  characters: [],
  randomCharacters: [],
  searchError: '',
  singleCharacter: {},
  locationInfo: {},
  originInfo: {},
  episodes: [],
  loader: false
})

const getters = {
}

const mutations = {
  SET_INFO(state, payload){
    state.info = payload
  },

  SET_LOADER: state => state.loader = true,
  CLEAR_LOADER: state => state.loader = false,

  SET_CHARACTER(state, payload) {
    const {
      name, 
      status,
      image,
      gender,
      species,
      created,
      location,
      origin,
      episode
    } = payload

    state.singleCharacter = {name, status, image, gender, species, created}
    state.locationInfo = location
    state.originInfo = origin
    state.episode = episode
  },
  
  SET_CHARACTERS(state, payload){
    state.characters = payload
  },

  SET_RANDOM_CHARACTERS(state, payload){
    state.randomCharacters = payload
  },
  
  SET_ERROR(state, payload) {
    state.searchError = payload
    state.characters = []
    state.info = {}
  },

  CLEAR_ERROR(state) {
    state.searchError = ''
  },

  CLEAR_EPISODES(state) {
    state.episodes = []
  },

  SET_EPISODES(state, payload) {
    Array.isArray(payload) 
      ? state.episodes = payload
      : state.episodes = [payload]  
  }
}

const actions = {
  async loadAllCharacters({ commit }) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get('https://rickandmortyapi.com/api/character')
      
      commit('SET_INFO', data.info)
      commit('SET_CHARACTERS', data.results)
      commit('CLEAR_ERROR')
    } 
    catch(e){
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    }
  },

  async loadMultipleCharacters({ commit }, payload) {
    try {
      commit('SET_LOADER')
      const urlModificator = payload.join(',')
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${ urlModificator }`)
      
      commit('SET_RANDOM_CHARACTERS', data)
      commit('CLEAR_ERROR')
    } 
    catch(e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    }
  },

  async loadFilteredCharacters({ commit }, payload) {
    try {
      commit('SET_LOADER')
      const { param, value } = payload
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?${ param }=${ value }`)
      
      commit('SET_CHARACTERS', data.results)
      commit('SET_INFO', data.info)
      commit('CLEAR_ERROR')
    }
    catch(e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    }
  },

  async loadByName({ commit }, payload) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${ payload }`)

      commit('SET_CHARACTERS', data.results)
      commit('SET_INFO', data.info)
      commit('CLEAR_ERROR')
    }
    catch(e) {
      if (e.response.status === 404) commit('SET_ERROR', payload)
    } finally {
      commit('CLEAR_LOADER')
    }
  },

  async loadSingleCharacter({ commit, dispatch }, payload) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${ payload }`)

      commit('SET_CHARACTER', data)
      await dispatch('loadEpisodes', data.episode)
    }
    catch(e) {
      console.log(e)
    } finally {
      commit('CLEAR_LOADER')
    }
  },

  async loadEpisodes({ commit }, payload) {
    const episodesId = payload.map( episode => {
      const splited = episode.split('/')
      return splited[splited.length - 1]
    }).join(',')

    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${ episodesId }`)

    commit('SET_EPISODES', data)
  }, 

  async loadPage({ commit }, payload) {
    try {
      commit('SET_LOADER')
      const { data } = await axios.get(payload)

      commit('SET_INFO', data.info)
      commit('SET_CHARACTERS', data.results)
    } catch(e) {
      console.log(e);
    } finally {
      commit('CLEAR_LOADER')
    }
  }
}

const character = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default character
