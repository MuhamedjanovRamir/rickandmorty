import { createStore } from 'vuex'

import character from './modules/character'
import episode from './modules/episode'
import location from './modules/location'

const store = createStore({
  modules: {
    character,
    episode,
    location
  }
})

export default store
