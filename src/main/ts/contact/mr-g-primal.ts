import { ContactData } from 'coh-content-db'
import { StMartial } from '../zone/st-martial'

export const MrGPrimal: ContactData = {
  key: 'mr-g-primal',
  name: 'Mr. G (Primal)',
  title: 'Advisor',
  morality: 'villainous',
  location: { zoneKey: StMartial.key, coords: [-185, -275, 1652] },
  levelRange: [30, 50],
  links: [{ title: 'Mr. G (Primal)', href: 'https://homecoming.wiki/wiki/Mr._G_(Primal_Earth)' }],
}
