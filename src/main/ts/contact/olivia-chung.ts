import { ContactData } from 'coh-content-db'
import { SteelCanyon } from '../zone/steel-canyon'

export const OliviaChung: ContactData = {
  key: 'olivia-chung',
  name: 'Olivia Chung',
  title: 'Publisher',
  morality: 'heroic',
  location: { zoneKey: SteelCanyon.key, coords: [-2902, -68, -2384] },
  levelRange: [15, 19],
  links: [{ title: 'Olivia Chung', href: 'https://homecoming.wiki/wiki/Olivia_Chung' }],
}
