import { IconTelegram, IconGithub, IconFile, IconPulse, IconPerson, IconGender } from '../components/icons'

export const HEADER_NAVIGATION_LINKS = [
  { path: '/', text: 'Main' },
  { path: '/characters', text: 'Characters' },
  { path: '/episodes', text: 'Episodes' },
  { path: '/locations', text: 'Locations' },
]

export const FOOTER_LINKS = [
  { url: 'https://t.me/ddt_2b', icon: IconTelegram },
  { url: 'https://github.com/MuhamedjanovRamir', icon: IconGithub },
  { url: 'https://drive.google.com/file/d/18GrplDthXBVIkZRZQEjbUpxooa1lWnr3/view?usp=drive_link', icon: IconFile },
]

export const ACCORDIONS = [
  { id: 1, title: 'status', icon: IconPulse, options: ['alive', 'dead', 'unknown'] },
  { id: 2, title: 'species', icon: IconPerson, options: ['human', 'alien', 'humanoid', 'robot', 'disease', 'unknown'] },
  { id: 3, title: 'gender', icon: IconGender, options: ['female', 'male', 'genderless', 'unknown'] }
]