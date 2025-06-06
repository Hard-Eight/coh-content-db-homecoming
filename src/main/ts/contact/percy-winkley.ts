import { ContactData } from 'coh-content-db'
import { Croatoa } from '../zone/croatoa'

export const PercyWinkley: ContactData = {
  key: 'percy-winkley',
  name: 'Percy Winkley',
  title: 'Member of the Midnight Squad',
  morality: 'heroic',
  location: { zoneKey: Croatoa.key, coords: [-921, 32, 2172] },
  levelRange: [30, 50],
  links: [{ title: 'Percy Winkley', href: 'https://homecoming.wiki/wiki/Percy_Winkley' }],
}
