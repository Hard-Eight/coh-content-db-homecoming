import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const VincentRoss: ContactData = {
  key: 'vincent-ross',
  name: 'Vincent Ross',
  title: 'Former Legacy Chain Researcher',
  morality: 'villainous',
  location: { zoneKey: SharkheadIsle.key, coords: [-49, -28, 71] },
  levelRange: [20, 29],
  links: [{ title: 'Vincent Ross', href: 'https://homecoming.wiki/wiki/Vincent_Ross' }],
}
