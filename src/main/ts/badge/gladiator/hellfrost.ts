import { BadgeData } from 'coh-content-db'
import { Coldblooded } from '../defeat/coldblooded'

export const Hellfrost: BadgeData = {
  type: 'gladiator',
  key: 'hellfrost',
  setTitleId: [462],
  name: 'Hellfrost',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'This demon is amused to serve you.',
  links: [
    { title: 'Hellfrost Badge', href: 'https://homecoming.wiki/wiki/Hellfrost_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Coldblooded.key, type: 'badge', badgeKey: Coldblooded.key },
  ],
}
