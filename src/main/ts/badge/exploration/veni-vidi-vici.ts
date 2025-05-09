import { BadgeData } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'

export const VeniVidiVici: BadgeData = {
  type: 'exploration',
  key: 'veni-vidi-vici',
  setTitleId: [1793],
  name: 'Veni, Vidi, Vici',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This imposing structure was built to house the main administrative offices of the Venice Industrial Development Initiative (V.I.D.I.).
When the Rikti invaded they quickly swarmed through the building and assumed complete control.
They used the information contained to further their goals of capturing the region while also using its tactical vantage point to coordinate strikes throughout Paragon City.`,
  notes: `Located 310 yards West of the Tangle Town marker, next to the aircraft warning light on the roof of the building.`,
  links: [
    { title: 'Veni, Vidi, Vici Badge', href: 'https://homecoming.wiki/wiki/Veni,_Vidi,_Vici_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CreysFolly.key, coords: [5439, 609, 3145], icon: 'badge', iconText: '5' } },
  ],
}
