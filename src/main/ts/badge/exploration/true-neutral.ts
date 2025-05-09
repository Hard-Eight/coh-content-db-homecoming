import { BadgeData } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const TrueNeutral: BadgeData = {
  type: 'exploration',
  key: 'true-neutral',
  setTitleId: [2423],
  name: 'True Neutral',
  releaseDate: '2019-06-01',
  morality: 'all',
  badgeText: `Vanguard abandoned its Atlas Park outpost in this timeline, not willing to take sides between Freedom Corps and Arachnos. They continue to recruit metahumans of all alignments in their fight against alien threats.`,
  links: [
    { title: 'New PvP Exploration Badge List', href: 'https://forums.homecomingservers.com/topic/11053-new-pvp-exploration-badge-list/' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: ReclusesVictory.key, coords: [-0.3, 16.3, 511.9], icon: 'badge', iconText: '6' } },
  ],
}
