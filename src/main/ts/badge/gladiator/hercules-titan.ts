import { BadgeData } from 'coh-content-db'
import { GrandLanista } from './grand-lanista'

export const HerculesTitan: BadgeData = {
  type: 'gladiator',
  key: 'hercules-titan',
  setTitleId: [471],
  name: 'Hercules Titan',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have unlocked a mighty Titan for your gladiator team.',
  links: [
    { title: 'Hercules Titan Badge', href: 'https://homecoming.wiki/wiki/Hercules_Titan_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: GrandLanista.key, type: 'badge', badgeKey: GrandLanista.key },
  ],
}
