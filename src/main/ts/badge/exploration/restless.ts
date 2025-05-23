import { BadgeData } from 'coh-content-db'
import { BloodyBay } from '../../zone/bloody-bay'

export const Restless: BadgeData = {
  type: 'exploration',
  key: 'restless',
  setTitleId: [2414],
  name: 'Restless',
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `Graveyards litter the Bay, but Shivans and Banished Pantheon alike keep mourners from visiting their passed loved ones.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: BloodyBay.key, coords: [-792, 2, 459], icon: 'badge', iconText: '8' } },
  ],
}
