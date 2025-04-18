import { ContactData } from 'coh-content-db'
import { FoundersFalls } from '../zone/founders-falls'

export const CadaoKestrel: ContactData = {
  key: 'cadao-kestrel',
  name: 'Cadao Kestrel',
  title: 'Voodoo Master',
  morality: 'heroic',
  location: { zoneKey: FoundersFalls.key, coords: [1594, -16, 925] },
  levelRange: [35, 39],
  links: [{ title: 'Cadao Kestrel', href: 'https://homecoming.wiki/wiki/Cadao_Kestrel' }],
}
