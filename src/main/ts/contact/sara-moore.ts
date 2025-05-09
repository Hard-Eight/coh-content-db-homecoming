import { ContactData } from 'coh-content-db'
import { CascadeArchipelago } from '../zone/cascade-archipelago'

export const SaraMoore: ContactData = {
  key: 'sara-moore',
  name: 'Sara Moore',
  title: 'Resistance Fighter',
  morality: 'heroic',
  location: { zoneKey: CascadeArchipelago.key, coords: [-152, -1784, 2791.5] },
  levelRange: [40, 50],
  links: [{ title: 'Sara Moore', href: 'https://homecoming.wiki/wiki/Sara_Moore' }],
}
