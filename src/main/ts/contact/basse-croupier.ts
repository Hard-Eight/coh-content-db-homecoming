import { ContactData } from 'coh-content-db'
import { StMartial } from '../zone/st-martial'

export const BasseCroupier: ContactData = {
  key: 'basse-croupier',
  name: 'Basse Croupier',
  title: 'Casino Pit Boss',
  morality: 'villainous',
  location: { zoneKey: StMartial.key, coords: [-2065.5, -160, 2130.5] },
  levelRange: [35, 39],
  links: [{ title: 'Basse Croupier', href: 'https://homecoming.wiki/wiki/Basse_Croupier' }],
}
