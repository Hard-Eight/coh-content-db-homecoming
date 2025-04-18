import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const MontagueCastanella: ContactData = {
  key: 'montague-castanella',
  name: 'Montague Castanella',
  title: 'Member of the Midnight Squad',
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-2746.5, -248, 2289] },
  levelRange: [10, 50],
  links: [{ title: 'Montague Castanella', href: 'https://homecoming.wiki/wiki/Montague_Castanella' }],
}
