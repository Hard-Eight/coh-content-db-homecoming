import { BadgeData, mapLink } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'
import { SteelCanyon } from '../../map/steel-canyon'

export const Undefeated: BadgeData = {
  type: 'EXPLORATION',
  key: 'undefeated',
  setTitle: { id: 86 },
  name: [{ value: 'Undefeated' }],
  alignment: ['H'],
  mapKey: AtlasPark.key,
  loc: [545, 59, -2307],
  badgeText: [{
    value: 'Here is where one of the brave souls to take up the mantle of Scirocco stood against, and fell to, the Rikti invaders.',
  }],
  notes: `Located in the Promenade neighborhood of ${mapLink(AtlasPark)}.

          It sits on a lower ledge on the east side of a building, 70 yards SE of the ${mapLink(SteelCanyon)} gate.`,
  links: [
    { title: 'Undefeated Badge', href: 'https://homecoming.wiki/wiki/Undefeated_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
