import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const Controversial: BadgeData = {
  type: 'exploration',
  key: 'controversial',
  setTitleId: [1531],
  name: 'Controversial',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `The statue of the heroine, "The Night Hammer" has been the focus of two controversies.
The first was Night Hammer's disgust at how the statue turned out. The second was the "mysterious" disappearance of the architect who designed the statue.`,
  notes: 'Located at the feet of the statue 129 yards east of the Royal Overlook neighborhood, or just in front of the base telepad location.',
  links: [
    { title: 'Controversial Badge', href: 'https://homecoming.wiki/wiki/Controversial_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SteelCanyon.key, coords: [-4605, 3, -2600], icon: 'badge', iconText: '6' } },
  ],
}
