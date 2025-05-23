import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const DestinedForValhalla: BadgeData = {
  type: 'exploration',
  key: 'destined-for-valhalla',
  setTitleId: [117],
  name: 'Destined for Valhalla',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Valkyrie proved herself to Positron by battling the Clockwork King on this spot.
Although she did not succeed in defeating him, he was severely damaged and Clockwork activity came to a halt for several weeks afterwards.`,
  notes: `Located in the Powderkeg neighborhood, approx. 560 yards east and slightly south of the Powderkeg marker on top of a small landing where a tall building is leaning into another.`,
  links: [
    { title: 'Destined for Valhalla Badge', href: 'https://homecoming.wiki/wiki/Destined_for_Valhalla_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Boomtown.key, coords: [-4098, 352, 2473], icon: 'badge', iconText: '4' } },
  ],
}
