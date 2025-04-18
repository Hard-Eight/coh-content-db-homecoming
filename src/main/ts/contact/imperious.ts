import { ContactData } from 'coh-content-db'
import { Cimerora } from '../zone/cimerora'

export const Imperious: ContactData = {
  key: 'imperious',
  name: 'Imperious',
  title: 'Deposed ruler of Cimerora',
  morality: 'primal',
  location: { zoneKey: Cimerora.key, coords: [-1140, 102, 4592.5] },
  levelRange: [35, 50],
  links: [{ title: 'Imperious', href: 'https://homecoming.wiki/wiki/Imperious' }],
}
