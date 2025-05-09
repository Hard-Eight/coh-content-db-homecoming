import { BadgeData } from 'coh-content-db'
import { Warburg } from '../../zone/warburg'

export const WeaponInspector: BadgeData = {
  type: 'exploration',
  key: 'weapon-inspector',
  setTitleId: [291],
  name: [
    { alignment: 'hero', value: 'Weapon Inspector' },
    { alignment: 'villain', value: 'Weapon of Mass Destruction' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Warburg is home to many a nefarious ploy. Recluse's VENOM rocket is one of the most blatant.`,
  notes: `Located in the center of the top of the western scaffolding surrounding the missile silo.`,
  links: [
    { title: 'Weapon Inspector Badge', href: 'https://homecoming.wiki/wiki/Weapon_Inspector_Badge' },
    { title: 'Weapon of Mass Destruction Badge', href: 'https://homecoming.wiki/wiki/Weapon_of_Mass_Destruction_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Warburg.key, coords: [-768, 144, 0], icon: 'badge', iconText: '1' } },
  ],
}
