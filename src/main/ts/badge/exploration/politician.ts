import { BadgeData } from 'coh-content-db'
import { SirensCall } from '../../zone/sirens-call'

export const Politician: BadgeData = {
  type: 'exploration',
  key: 'politician',
  setTitleId: [260],
  name: 'Politician',
  releaseDate: '2020-11-26',
  morality: 'all',
  badgeText: 'Council man John Chard announced from this location that his island would be the front lines of defense against the Rikti invasion.',
  notes: `Located to the right (north) of the doorway of the building immediately east of the hero base.`,
  links: [{ title: 'Politician Badge', href: 'https://homecoming.wiki/wiki/Politician_Badge' }],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SirensCall.key, coords: [664, 0, 960.5], icon: 'badge', iconText: '2' } },
  ],
}
