import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const ElizaThorpe: ContactData = {
  key: 'eliza-thorpe',
  name: 'Eliza Thorpe',
  title: 'Missing Persons Investigator',
  morality: 'heroic',
  location: { zoneKey: TalosIsland.key, coords: [-3090, 110, 9065] },
  levelRange: [25, 29],
  links: [{ title: 'Eliza Thorpe', href: 'https://homecoming.wiki/wiki/Eliza_Thorpe' }],
}
