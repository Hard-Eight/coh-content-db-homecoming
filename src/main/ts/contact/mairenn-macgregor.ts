import { ContactData } from 'coh-content-db'
import { AtlasPark } from '../zone/atlas-park'

export const MairennMacGregor: ContactData = {
  key: 'mairenn-macgregor',
  name: 'Mairenn MacGregor',
  title: 'Containment Specialist',
  morality: 'heroic',
  location: { zoneKey: AtlasPark.key, coords: [140, 0, 1021] },
  levelRange: [38, 40],
  links: [{ title: 'Mairenn MacGregor', href: 'https://homecoming.wiki/wiki/Mairenn_MacGregor' }],
}
