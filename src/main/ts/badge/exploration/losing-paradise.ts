import { BadgeData } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'

export const LosingParadise: BadgeData = {
  type: 'exploration',
  key: 'losing-paradise',
  setTitleId: [1559],
  name: 'Losing Paradise',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The Devouring Earth's spread into Founders' Falls was stopped here, though it was far too late to save the city of Woodvale.
Heroes fought the Devouring Earth menace for days before it was pushed back into Woodvale - for the most part.
The monsters still wander through Founders' Falls, while its people live in the knowledge that should the Devouring Earth grow out of control once again, they will be the first to be consumed.`,
  notes: `Located in the Hutchinson Park neighborhood, 82 feet east of the Eden gate.`,
  links: [
    { title: 'Losing Paradise Badge', href: 'https://homecoming.wiki/wiki/Losing_Paradise_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FoundersFalls.key, coords: [5109, 64, 4610], icon: 'badge', iconText: '4' } },
  ],
}
