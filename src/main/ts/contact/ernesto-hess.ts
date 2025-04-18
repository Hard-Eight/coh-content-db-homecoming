import { ContactData } from 'coh-content-db'
import { StrigaIsle } from '../zone/striga-isle'

export const ErnestoHess: ContactData = {
  key: 'ernesto-hess',
  name: 'Ernesto Hess',
  title: 'Task Force Contact',
  morality: 'heroic',
  location: { zoneKey: StrigaIsle.key, coords: [-6555.5, 79, 283] },
  levelRange: [25, 30],
  links: [{ title: 'Ernesto Hess', href: 'https://homecoming.wiki/wiki/Ernesto_Hess' }],
}
