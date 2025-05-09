import { ContactData } from 'coh-content-db'
import { DarkAstoria } from '../zone/dark-astoria'

export const MuVorkan: ContactData = {
  key: 'muvorkan',
  name: `Mu'Vorkan`,
  title: 'Mu Mystic',
  morality: 'primal',
  location: { zoneKey: DarkAstoria.key, coords: [3172, 51, 3392] },
  levelRange: [50],
  links: [{ title: `Mu'Vorkan`, href: 'https://homecoming.wiki/wiki/Mu%27Vorkan' }],
}
