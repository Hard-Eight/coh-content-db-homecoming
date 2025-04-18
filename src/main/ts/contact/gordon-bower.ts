import { ContactData } from 'coh-content-db'
import { Croatoa } from '../zone/croatoa'

export const GordonBower: ContactData = {
  key: 'gordon-bower',
  name: 'Gordon Bower',
  title: 'Salamanca Mayor',
  morality: 'heroic',
  location: { zoneKey: Croatoa.key, coords: [-767, 29, 1983] },
  levelRange: [25, 29],
  links: [{ title: 'Gordon Bower', href: 'https://homecoming.wiki/wiki/Gordon_Bower' }],
}
