import { ContactData } from 'coh-content-db'
import { RiktiWarZone } from '../zone/rikti-war-zone'

export const TinMageMarkII: ContactData = {
  key: 'tin-mage-mark-ii',
  name: 'Tin Mage Mark II',
  title: 'Vanguard Tactician',
  morality: 'heroic',
  location: { zoneKey: RiktiWarZone.key, coords: [-270.4, 39, -2317.5] },
  levelRange: [50],
  links: [{ title: 'Tin Mage Mark II', href: 'https://homecoming.wiki/wiki/Tin_Mage_Mark_II' }],
}
