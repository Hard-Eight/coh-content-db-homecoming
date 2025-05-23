import { ContactData } from 'coh-content-db'
import { TalosIsland } from '../zone/talos-island'

export const AndrewFiore: ContactData = {
  key: 'andrew-fiore',
  name: 'Andrew Fiore',
  title: 'Electronics Purveyor',
  morality: 'heroic',
  location: { zoneKey: TalosIsland.key, coords: [460, 160, 7390] },
  levelRange: [20, 24],
  links: [{ title: 'Andrew Fiore', href: 'https://homecoming.wiki/wiki/Andrew_Fiore' }],
}
