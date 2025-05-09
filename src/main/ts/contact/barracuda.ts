import { ContactData } from 'coh-content-db'
import { Grandville } from '../zone/grandville'

export const Barracuda: ContactData = {
  key: 'barracuda',
  name: 'Barracuda',
  title: 'Strike Force Contact',
  morality: 'villainous',
  location: { zoneKey: Grandville.key, coords: [2559, -392, 1934.5] },
  levelRange: [45, 50],
  links: [{ title: 'Barracuda', href: 'https://homecoming.wiki/wiki/Barracuda' }],
}
