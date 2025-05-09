import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const PenelopeYinFreedomPhalanx: ContactData = {
  key: 'penelope-yin-freedom-phalanx',
  name: 'Penelope Yin (Freedom Phalanx)',
  title: 'Task Force Contact',
  morality: 'heroic',
  location: { zoneKey: IndependencePort.key, coords: [-1636, 0, -5856] },
  levelRange: [20, 25],
  links: [{ title: 'Penelope Yin (Freedom Phalanx)', href: 'https://homecoming.wiki/wiki/Penelope_Yin_(Freedom_Phalanx)' }],
}
