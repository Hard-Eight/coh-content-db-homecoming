import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const PenelopeYinPraetorian: ContactData = {
  key: 'penelope-yin-praetorian',
  name: 'Penelope Yin (Praetorian)',
  title: 'Hospital Patient',
  morality: 'resistance',
  location: { zoneKey: Neutropolis.key },
  levelRange: [14, 20],
  links: [{ title: 'Penelope Yin (Praetorian)', href: 'https://homecoming.wiki/wiki/Penelope_Yin_(Praetorian)' }],
}
