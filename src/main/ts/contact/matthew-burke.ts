import { ContactData } from 'coh-content-db'
import { MercyIsland } from '../zone/mercy-island'

export const MatthewBurke: ContactData = {
  key: 'matthew-burke',
  name: 'Matthew Burke',
  title: 'Mercenary',
  morality: 'villainous',
  location: { zoneKey: MercyIsland.key, coords: [-1352, 239, 587] },
  levelRange: [1, 10],
  links: [{ title: 'Matthew Burke', href: 'https://homecoming.wiki/wiki/Matthew_Burke' }],
}
