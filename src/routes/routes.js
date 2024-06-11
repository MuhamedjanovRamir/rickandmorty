import Main from '../pages/Main.vue'
import Characters from '../pages/character/Characters.vue'
import Character from '../pages/character/Character.vue'
import Episodes from '../pages/episode/Episodes.vue'
import Episode from '../pages/episode/Episode.vue'
import Locations from '../pages/location/Locations.vue'
import Location from '../pages/location/Location.vue'

export default [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters
  },
  {
    path: '/character/:id',
    name: 'character',
    component: Character
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: Episodes
  },
  {
    path: '/episode/:id',
    name: 'episode',
    component: Episode
  },
  {
    path: '/locations',
    name: 'locations',
    component: Locations
  },
  {
    path: '/location/:id',
    name: 'location',
    component: Location
  }
]


