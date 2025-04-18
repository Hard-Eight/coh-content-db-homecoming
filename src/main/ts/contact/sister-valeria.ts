import { ContactData } from 'coh-content-db'
import { Cimerora } from '../zone/cimerora'

export const SisterValeria: ContactData = {
  key: 'sister-valeria',
  name: 'Sister Valeria',
  title: 'Follower of Bellona',
  morality: 'primal',
  location: { zoneKey: Cimerora.key, coords: [937, 203, 5127] },
  levelRange: [50],
  links: [{ title: 'Sister Valeria', href: 'https://homecoming.wiki/wiki/Sister_Valeria' }],
}
